let formapagamento = '';
let principal= '';
let bebida= '';
let sobremesa= '';
let soma= '';
let finalprato_name = '';
let pratofinal = '';
let finalbebida_name = '';
let bebidafinal = '';
let finalsobremesa_name = '';
let sobremesafinal =  '';

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
    let seleprin = document.querySelector(".box.selecionado");
    let selebebi = document.querySelector(".box1.selecionado");
    let selesobre = document.querySelector(".box2.selecionado");
    if (seleprin && selebebi && selesobre) {
        let botao =  document.querySelector(".botao");
        botao.classList.add("verdao");
        botao.innerHTML = `Revisar pedido`;
        botao.disabled = false;
    }
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
    let seleprin = document.querySelector(".box.selecionado");
    let selebebi = document.querySelector(".box1.selecionado");
    let selesobre = document.querySelector(".box2.selecionado");
    if (seleprin && selebebi && selesobre) {
        let botao =  document.querySelector(".botao");
        botao.classList.add("verdao");
        botao.innerHTML = `Revisar pedido`;
        botao.disabled = false;
    }
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
    let seleprin = document.querySelector(".box.selecionado");
    let selebebi = document.querySelector(".box1.selecionado");
    let selesobre = document.querySelector(".box2.selecionado");
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
    finalprato_name = document.querySelector(".box figure figcaption").innerHTML;
    document.querySelector(".finalprato .finalprato_name").innerHTML = `${finalprato_name}`;
    pratofinal = document.querySelector(".box span").innerHTML
    document.querySelector(".finalprato .pratofinal").innerHTML = `${pratofinal}`;
    finalbebida_name = document.querySelector(".box1 figure figcaption").innerHTML;
    document.querySelector(".finalbebida .finalbebida_name").innerHTML = `${finalbebida_name}`;
    bebidafinal = document.querySelector(".box1 span").innerHTML;
    document.querySelector(".finalbebida .bebidafinal").innerHTML = `${bebidafinal}`;
    finalsobremesa_name = document.querySelector(".box2 figure figcaption").innerHTML;
    document.querySelector(".finalsobremesa .finalsobremesa_name").innerHTML = `${finalsobremesa_name}`;
    sobremesafinal = document.querySelector(".box2 span").innerHTML;
    document.querySelector(".finalsobremesa .sobremesafinal").innerHTML = `${sobremesafinal}`;
    
    soma = parseFloat(sobremesafinal.replace(/[^\d\.]*/g, "")) + parseFloat(bebidafinal.replace(/[^\d\.]*/g, "")) + parseFloat(pratofinal.replace(/[^\d\.]*/g, ""));
    soma = soma/100;
    document.querySelector(".somafinal .finalsoma").innerHTML = ` R$ ${soma}0`;
    console.log(soma);
}
function enviarPedido(){
    const endereco = document.querySelector('.endereco .enderesu').value;
    const nome = document.querySelector(".nome .name").value;
    let wame = 
    `Boa Noite ${nome}
    Prato: ${finalprato_name} ${pratofinal} 
    Bebida: ${finalbebida_name} ${bebidafinal} 
    Sobremesa: ${finalsobremesa_name} ${sobremesafinal} 
    Endereço: ${endereco} 
    Valor Total: R$ ${soma}0`;

window.open("https://wa.me/5532984898132?text=" + encodeURIComponent(wame));                                                         
}
