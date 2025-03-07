const messageField = document.getElementById('messageField');
const micButton = document.getElementById('micButton');
let recognition;
let isRecording = false;

// Check if browser supports speech recognition
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = 'fr-FR'; // Set language to French (France)

    // Set 5-second timeout
    recognition.onstart = () => {
        setTimeout(() => {
            recognition.stop();
        }, 5000);
    };

    recognition.onresult = (event) => {
        event.results = undefined;
        const transcript = event.results[0][0].transcript;
        messageField.textContent = transcript;
        parseFrenchTime(transcript).then((t) => {
            //console.log(t);
            setClock(t.hour, t.minute);
        });
        isRecording = false;
        micButton.classList.remove('recording'); // Changed from micImage to micButton
    };

    recognition.onend = () => {
        isRecording = false;
        micButton.classList.remove('recording'); // Changed from micImage to micButton
    };

    recognition.onerror = (event) => {
        messageField.textContent = 'Une erreur s\'est produite : ' + event.error;
        isRecording = false;
        micButton.classList.remove('recording'); // Changed from micImage to micButton
    };
} else {
    messageField.textContent = 'Désolé, votre navigateur ne supporte pas la reconnaissance vocale.';
    micButton.disabled = true;
}

micButton.addEventListener('click', () => {
    if (!recognition) return;

    if (!isRecording) {
        isRecording = true;
        micButton.classList.add('recording'); // Changed from micImage to micButton
        recognition.start();
    } else {
        isRecording = false;
        micButton.classList.add('recording'); // Changed from micImage to micButton
        recognition.stop();
    }
});
