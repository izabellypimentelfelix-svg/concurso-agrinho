const formulario = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    resposta.textContent =
        `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. 🌱`;

    formulario.reset();
});
