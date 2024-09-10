
document.getElementById('meuFormulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);


    const messageElement = document.getElementById('message');


    if (campoB > campoA) {
        messageElement.textContent = 'Tudo certo!.';
        messageElement.className = 'message valid';
    } else {
        messageElement.textContent = 'Preencha novamente';
        messageElement.className = 'message invalid';
    }
});
