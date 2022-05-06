let numero1 = document.querySelector('#n1') as HTMLInputElement;
let numero2 = document.querySelector('#n2') as HTMLInputElement;
let btn = document.querySelector('#somar') 
let retorno = document.querySelector('#res') 

function somarValores(n1: number, n2: number) {
    return n1 + n2;
}

btn.addEventListener('click', ()=>{
    retorno.innerHTML = somarValores(+numero1.value, +numero2.value).toString();
})