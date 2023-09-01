async function performOCR() {
    const imageInput = document.getElementById('imageInput');
    const resultElement = document.getElementById('result');

    if (imageInput.files.length === 0) {
        resultElement.textContent = 'Please select an image.';
        return;
    }

    const imageFile = imageInput.files[0];
    const { data: { text } } = await Tesseract.recognize(imageFile);
    resultElement.textContent = 'Extracted Text: ' + text;
}
