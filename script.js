// Función para validar si el texto solo contiene letras minúsculas sin caracteres especiales
function isValidText(text) {
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    return regex.test(text);
}

// Función para encriptar texto
function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar texto
function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

document.getElementById('encryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    if (inputText === "") {
        alert("El campo de texto no puede estar vacío");
        event.preventDefault(); // Previene que el formulario o la petición se envíen
        return false; // Cancela la acción
    }

    // Validar el texto antes de encriptar
    if (!isValidText(inputText)) {
        alert("El texto solo debe contener letras minúsculas y sin caracteres especiales.");
        return;
    }

    // Encriptar el texto
    const encryptedText = encryptText(inputText);

    // Mostrar el texto encriptado y ocultar la imagen y los textos de advertencia
    document.getElementById('outputImage').style.display = 'none';
    document.getElementById('outputText1').style.display = 'none';
    document.getElementById('outputText2').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('copyBtn').style.display = 'block';
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;

    if (inputText === "") {
        alert("El campo de texto no puede estar vacío");
        event.preventDefault(); 
        return false; 
    }

    // Validar el texto antes de desencriptar
    if (!isValidText(inputText)) {
        alert("El texto solo debe contener letras minúsculas y sin caracteres especiales.");
        return;
    }

    // Desencriptar el texto
    const decryptedText = decryptText(inputText);

    // Mostrar el texto desencriptado y ocultar la imagen y los textos de advertencia
    document.getElementById('outputImage').style.display = 'none';
    document.getElementById('outputText1').style.display = 'none';
    document.getElementById('outputText2').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('copyBtn').style.display = 'block';
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
});
