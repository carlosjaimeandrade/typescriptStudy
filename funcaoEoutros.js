"use strict";
//--------------------------------------- Usando types nos parâmetros de uma função
function uppserCase(name) {
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}
let nome_pessoa = uppserCase('carlos');
//--------------------------------------- Usando types no retorno de uma função
function somar(n1, n2) {
    return n1 + n2;
}
let resultado = somar(90, 80);
//--------------------------------------- Contextual Typing em funções anônimas
let names = ['carlos', 'joão', 'pedro', 60];
names.forEach(function (name) {
    if (typeof name === 'string') {
        console.log(name.toUpperCase());
    }
    else {
        console.log(name);
    }
});
//--------------------------------------- Types em Objetos
function resumo(usuario) {
    return `olá ${usuario.nome}, você tem ${usuario.idade} de idade`;
}
let u = {
    nome: "carlos",
    idade: 20
};
resumo(u);
//--------------------------------------- Propriedades Opcionais, colocando a  "?" informa que é opcional
function resumo2(usuario) {
    if (usuario.idade !== undefined) {
        return `olá ${usuario.nome}, você tem ${usuario.idade} de idade`;
    }
    else {
        return `olá ${usuario.nome}`;
    }
}
let u2 = {
    nome: "carlos",
};
resumo2(u2);
//--------------------------------------- Union Types (múltiplos types)
let suaIdade = 90;
suaIdade = "50";
function mostrarIdade(idade) {
    if (typeof idade === "string") {
        console.log(idade.toUpperCase());
    }
    else {
        console.log(idade);
    }
}
mostrarIdade(20);
mostrarIdade('20');
let nome_meu = "Carlos";
let minhaidade = "20";
function resumo3(usuario) {
    if (usuario.idade !== undefined) {
        return `olá ${usuario.nome}, você tem ${usuario.idade} de idade`;
    }
    else {
        return `olá ${usuario.nome}`;
    }
}
let u3 = {
    nome: "carlos",
    idade: 90
};
resumo3(u3);
//--------------------------------------- Type Assertions
let idadeField = document.getElementById('idade');
console.log(idadeField.value);
//--------------------------------------- Types literais
let meunome = 'Carlos';
meunome = "Carlos";
meunome = "Jaime";
function mostrarTexto(texto, alinhamento) {
    return `Teste`;
}
mostrarTexto('carlos', 'left');
mostrarTexto('carlos', 'right');
mostrarTexto('carlos', 'center');
const somarValores = (n1, n2) => {
    return n1 + n2;
};
//--------------------------------------- Retorno void (não irá retornar nada )
function removerElement(el) {
    el.remove();
    return 'ola'; // isso não pode ser feito
}
