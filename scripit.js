const anoAtual = 2021
const anodeNascimento = prompt ("Digite o ano que você nasceu")
const nome = prompt("Digite seu nome")
function idade (a, b){
    return a-b;
}
const x = idade (anoAtual, anodeNascimento );
alert (`Seu nome é ${nome} e você tem ${x} anos`)