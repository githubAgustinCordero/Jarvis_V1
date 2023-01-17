# Jarvis_V1

##Just A Rather Very Intelligent System (J.A.R.V.I.S.)

Proyecto para emular a la IA Jarvis de Iron Man


Obtiene audio mediante el microfono, lo transcribe a texto, lo envía a Chat GPT, obtiene el resultado, lo convierte a audio, y lo reproduce por los altavoces.

Requerimientos: Navegador, API KEY OpenAI

#Descripcion

Este código verifica si el navegador soporta la función webkitSpeechRecognition, que es una función de reconocimiento de voz en tiempo real. Si el navegador la soporta, se crea un nuevo objeto de reconocimiento de voz y se asignan eventos de clic a dos botones: "start-button" y "stop-button".

Cuando se hace clic en "start-button", se inicia el reconocimiento de voz y se deshabilita el botón "start-button" y se habilita el botón "stop-button". Cuando se hace clic en "stop-button", se detiene el reconocimiento de voz y se deshabilita el botón "stop-button" y se habilita el botón "start-button".

Cuando el reconocimiento de voz se detiene, se obtiene el resultado del reconocimiento de voz en una variable llamada "transcript". Este resultado se muestra en una etiqueta H3 con id 'H3_Resultado'.

Además, se utiliza la función SpeechSynthesisUtterance para convertir el transcript en una salida de voz, se utiliza el lenguaje español y se reproduce.

Por último, se utiliza la API de OpenAI para enviar el transcript a GPT-3 y se recoge la respuesta y se muestra en una etiqueta H3 con id 'H3_Resultado'. Si se produce algún error se muestra en el mismo lugar.





