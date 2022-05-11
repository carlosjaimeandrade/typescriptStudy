//--------------------------------------- Usando types nos parâmetros de uma função
function uppserCase(name: string): string{
    let firstLetter = name.charAt(0).toUpperCase()
    return firstLetter+name.substring(1)
}

let nome_pessoa: string = uppserCase('carlos')


//--------------------------------------- Usando types no retorno de uma função


function somar(n1: number, n2:number): number{
    return n1+n2
}

let resultado = somar(90,80)

//--------------------------------------- Contextual Typing em funções anônimas

let names = ['carlos', 'joão', 'pedro',60];

names.forEach(function(name){
    if(typeof name === 'string'){
        console.log(name.toUpperCase());
    }else{
        console.log(name);
    }
   
})

//--------------------------------------- Types em Objetos

function resumo(usuario: {nome: string, idade: number }){
    return `olá ${usuario.nome}, você tem ${usuario.idade} de idade` 
}

let u = {
    nome: "carlos",
    idade: 20
}

resumo(u)

//--------------------------------------- Propriedades Opcionais, colocando a  "?" informa que é opcional

function resumo2(usuario: {nome: string, idade?: number }){
    if(usuario.idade !== undefined){
        return `olá ${usuario.nome}, você tem ${usuario.idade} de idade` 
    }else{
        return `olá ${usuario.nome}` 
    }

}

let u2 = {
    nome: "carlos",
}

resumo2(u2)

//--------------------------------------- Union Types (múltiplos types)

let suaIdade: string | number = 90;

suaIdade = "50"

function mostrarIdade(idade: number | string){
    if(typeof idade === "string"){
        console.log(idade.toUpperCase())
    }else{
        console.log(idade)
    }

}

mostrarIdade(20)
mostrarIdade('20')

//--------------------------------------- Type e Interface: Como usar e diferenças

type NomeCompleto = string;

let nome_meu: NomeCompleto = "Carlos";

type Idades = string | number;

let minhaidade: Idades = "20"

/* type User = { // não pode alterar propriedasdes novas
    nome: string,
    idade?: number
}
 */

interface User{ // aqui você poderá adicionar novos valores
    nome: string,
    idade?: number
}

interface User{ // aqui você poderá adicionar novos valores
    cpf?: string
}

function resumo3(usuario: User){
    if(usuario.idade !== undefined){
        return `olá ${usuario.nome}, você tem ${usuario.idade} de idade` 
    }else{
        return `olá ${usuario.nome}` 
    }

}

let u3 = {
    nome: "carlos",
    idade: 90
}

resumo3(u3)


//--------------------------------------- Type Assertions

let idadeField = document.getElementById('idade') as HTMLInputElement;

console.log(idadeField.value);

//--------------------------------------- Types literais

let meunome: 'Carlos' = 'Carlos';

meunome = "Carlos";
meunome = "Jaime";


function mostrarTexto(texto: string, alinhamento: 'left' | 'right' | 'center'){
    return `Teste` 
}

mostrarTexto('carlos', 'left')
mostrarTexto('carlos', 'right')
mostrarTexto('carlos', 'center')

//--------------------------------------- Type para funções

type MathFunction = (n1: number, n2: number) => number;


const somarValores: MathFunction = (n1, n2) =>{
     return n1 + n2
}


//--------------------------------------- Retorno void (não irá retornar nada )
function removerElement(el: HTMLElement): void {
    el.remove();

    return 'ola' // isso não pode ser feito
}