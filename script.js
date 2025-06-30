const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const cep = document.getElementById('cep').value.trim();
    const mensagem = document.getElementById('mensagem'); 
    mensagem.textContent ='Buscando por informações...';

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            console.log('Objeto response:', response);
            return response.json();
        })
        .then(data => {
            console.log('Dados convertidos (data):', data);
            if(data.erro) {
                mensagem.textContent = 'CEP não encontrado'
            } else {
                mensagem.textContent = `Endereço: ${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`
            }
        })
        .catch(() => {
            mensagem.textContent = 'Erro ao buscar o CEP'
        })
})