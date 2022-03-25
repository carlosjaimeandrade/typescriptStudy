var n1 = document.querySelector('#n1');
var n2 = document.querySelector('#n2');
var botao = document.querySelector('#somar');
var res = document.querySelector('#res');
function somar(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = somar(n1.value, n2.value);
});
