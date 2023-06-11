
async function buscaEndereco(cep){
    var mensagemCep = document.getElementById('mensagem-cep');
    try{
        var url = `https://viacep.com.br/ws/${cep}/json/`;
        var respostaCep = await fetch(url);
        var respostaJson = await respostaCep.json();

        if (respostaJson.erro) {
            mensagemCep.innerHTML = `<p>CEP inválido. Tente novamente.</p>`;
            throw Error ('CEP informado não existe.');
        }

        mensagemCep.innerHTML = '';
        
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = respostaJson.localidade;
        logradouro.value = respostaJson.logradouro;
        estado.value = respostaJson.uf;

    } catch (e) {
        mensagemCep.innerHTML = `<p>CEP inválido. Tente novamente.</p>`;
        console.log(e);
    }
}

var inputCep = document.getElementById('cep');

inputCep.addEventListener('focusout', () => buscaEndereco(inputCep.value));


