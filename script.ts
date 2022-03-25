const n1 = document.querySelector('#n1') as HTMLInputElement;
const n2 = document.querySelector('#n2') as HTMLInputElement;
const botao = document.querySelector('#somar')
const res = document.querySelector('#res')

function somar(n1, n2){
    return n1 + n2;
}

botao.addEventListener('click', ()=>{
    res.innerHTML = somar(n1.value, n2.value)
})