if (typeof webkitSpeechRecognition === 'function') {
	var recognition = new webkitSpeechRecognition();
	//recognition.continuous = true;
	//recognition.interimResults = true;
	
	var startButton = document.getElementById("start-button");
	var stopButton = document.getElementById("stop-button");

	startButton.addEventListener("click", function() {
		recognition.start();
		startButton.setAttribute("disabled", true);
		stopButton.removeAttribute("disabled");
	});

	stopButton.addEventListener("click", function() {
		recognition.stop();
		stopButton.setAttribute("disabled", true);
		startButton.removeAttribute("disabled");

		recognition.onresult = function(event) {
			var transcript = event.results[0][0].transcript;
			console.log(transcript);
			// aqui podrias usar el transcript para algo mas
			document.getElementById('H3_Resultado').innerHTML = transcript;
			// var text = "Hola, esto es una prueba de texto a voz";
			var speech = new SpeechSynthesisUtterance(transcript);
			speech.lang = 'es-ES';
			speech.rate = 1;
			speech.pitch = 1;
			speechSynthesis.speak(speech);

			// Send the text to GPT-3
			fetch('https://api.openai.com/v1/engines/davinci/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' // <--- aqui tu api key de OpenAI
				},
				body: JSON.stringify({
					model: "text-davinci-002",
					prompt: transcript,
					//prompt: "Define de forma muy corta que es GPT-3.",
					max_tokens:2048,
					temperature:0.5,
					stop:["\n"]
				})
			})
			.then(response => response.json())
			.then(json => {
				console.log(json);
				document.getElementById('H3_Resultado').innerHTML = json.error.message;
			})
				// En la respuesta obtendrás un JSON con el resultado del modelo, en este caso el 
				// campo choices contiene un array con las diferentes opciones devueltas, este campo 
				// text contiene la respuesta seleccionada del modelo.

			.catch(error => {
				console.error(error);
				document.getElementById('H3_Resultado').innerHTML = json.error.message;
			})
		}
	})
}
else {
	// throw an error or provide a fallback solution
	alert("Este programa sólo funciona en Chrome.");
}