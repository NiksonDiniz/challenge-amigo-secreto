let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultadoSorteio = document.getElementById('resultado');

function adicionarAmigo() {    
    let nomeAmigo = document.querySelector('input').value;
    if(nomeAmigo !== ""){
        amigos.push(nomeAmigo);
        exibirAmigo(nomeAmigo);
        limparCampo();
    } else {
        alert("Por favor, insira um nome válido!");
    }    
}

function exibirAmigo(nome) {
    let novoItem = document.createElement('li'); 
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);
}

function sortearAmigo() {
    if(amigos.length > 0){
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let itemSorteado = document.createElement('li'); 
        itemSorteado.textContent = `O amigo secreto sorteado é: ${amigos[indiceAleatorio]}`;
        resultadoSorteio.appendChild(itemSorteado);
        reiniciarSorteio();
    } else {
        alert("A lista de amigos está vazia!");
    }
}

function limparCampo() {
    let campoEntrada = document.querySelector('input');
    campoEntrada.value = "";
}

function reiniciarSorteio() {
    amigos = [];
    listaAmigos.innerHTML = '';
}