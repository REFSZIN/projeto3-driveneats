let formapagamento = '';
let principal= '';
let bebida= '';
let sobremesa= '';
let soma= 0;
let finalprato_name = '';
let pratofinal = 0;
let finalbebida_name = '';
let bebidafinal = 0;
let finalsobremesa_name = '';
let sobremesafinal =  0;

function selecionarPrin(principal){
    let ctz;
    let selecionado = document.querySelector(".principal > .box.selecionado");
    if (selecionado !== null){
    ctz = document.querySelector(".principal > .box.selecionado > .checkmark");
    ctz.classList.add("sumir");
    selecionado.classList.remove("selecionado");
}
    principal.classList.add("selecionado");
    ctz = document.querySelector(".principal > .box.selecionado > .checkmark");
    ctz.classList.remove("sumir");
}
function selecionarBebi(bebida){
    let ctz1;
    let selecionado2 = document.querySelector(".bebida > .box1.selecionado");
    if (selecionado2 !== null){
    ctz1 = document.querySelector(".bebida > .box1.selecionado > .checkmark");
    ctz1.classList.add("sumir");
    selecionado2.classList.remove("selecionado");
}
    bebida.classList.add("selecionado");
    ctz1 = document.querySelector(".bebida > .box1.selecionado > .checkmark");
    ctz1.classList.remove("sumir");
}
function selecionarSobre(sobremesa){
    let ctz2;
    let selecionado3 = document.querySelector(".sobremesa > .box2.selecionado");
    if (selecionado3 !== null){
    ctz2 = document.querySelector(".sobremesa > .box2.selecionado > .checkmark");
    ctz2.classList.add("sumir");
    selecionado3.classList.remove("selecionado");
}
    sobremesa.classList.add("selecionado");
    ctz2 = document.querySelector(".sobremesa > .box2.selecionado > .checkmark");
    ctz2.classList.remove("sumir");

    const seleprin = document.querySelector(".box.selecionado");
    const selebebi = document.querySelector(".box1.selecionado");
    const selesobre = document.querySelector(".box2.selecionado");
    if (seleprin && selebebi && selesobre) {
        let botao =  document.querySelector(".botao");
        botao.classList.add("verdao");
        botao.innerHTML = `Revisar pedido`;
        botao.disabled = false;
    }
}
function revisarPedido() {
    let finalizador = document.querySelector(".backfinalizar");
    finalizador.classList.add("sumirfinal");
    finalprato_name = selecionado.querySelector(".box figure figcaption").innerHTML;
    pratofinal = selecionado.querySelector(".box span").innerHTML;
    finalbebida_name = selecionado1.querySelector(".box figure figcaption").innerHTML;
    bebidafinal = selecionado1.querySelector(".box span").innerHTML;
    finalsobremesa_name = selecionado2.querySelector(".box figure figcaption").innerHTML;
    sobremesafinal = selecionado2.querySelector(".box span").innerHTML;
    Number(soma.toFixed(2)) = sobremesafinal + bebidafinal + pratofinal;
}
function enviarPedido(){
    const endereco = document.querySelector('.endereco .enderesu').value;
    const nome = document.querySelector(".nome .name").value;
    let wame = 
    `Boa Noite +${nome}+
    Prato: + ${finalprato_name}+ R$ + ${pratofinal} +
    Bebida: + ${finalbebida_name} + R$ + ${bebidafinal} + 
    Sobremesa: + ${finalsobremesa_name} + R$ + ${sobremesafinal} +
    Endereço: + ${endereco} +
    Forma de pagamento: + ${formapagamento} +
    Valor Total: + R$ + ${soma}`;
    window.open("https://wa.me/5532984898132?text=" + encodeURIComponent(wame));
}
