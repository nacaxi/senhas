const numeroSenha = document.querySelector('.parametro-senha__texto')
const botoes = document.querySelectorAll('.parametro-senha__botao')
const campoSenha = document.querySelector('#campo-senha')
const checkbox = document.querySelectorAll('.checkbox')

console.log(checkbox[0].checked)

botoes[0].onclick= diminuirTamanho
botoes[1].onclick= aumentarTamanho


let tamanhoSenha = 5 
numeroSenha.textContent = tamanhoSenha

let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let minuscula = "abcedfghijklmnopqrstuvwxyz"
let numero = "0123456789"
let simbolos = "!?@%&*"

geraSenha()

function diminuirTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentarTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function geraSenha(){
    let senha = " "
    for(let i = 0; i < tamanhoSenha; i++){
    let numeroAleatorio = Math.random()*maiuscula.length
    numeroAleatorio = Math.floor(numeroAleatorio)
    senha = senha + maiuscula[numeroAleatorio];

    console.log(senha)
}
campoSenha.value = senha
}