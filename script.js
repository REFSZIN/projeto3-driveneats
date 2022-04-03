// id Frango, Coca, pudin
let cliente;
let endereco;
let formapagamento;
let principal;
let sobremesa;
let bebida;
let valor1;
let valor2;
let valor3;

function selecao1_1 () {
    document.getElementById("Frango").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("Frango2").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("Frango3").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("checkmark1_1").style.display = "inline-block";
    document.getElementById("checkmark1_2").style.display = "none";
    document.getElementById("checkmark1_3").style.display = "none";
    principal = "Frango Yin Yang 1" ;
    valor1 = 14.90;
}
function selecao1_2 () {
    document.getElementById("Frango").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("Frango2").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("Frango3").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("checkmark1_1").style.display = "none";
    document.getElementById("checkmark1_2").style.display = "inline-block";
    document.getElementById("checkmark1_3").style.display = "none";
    principal = "Frango Yin Yang 2" ; 
    valor1 = 14.90;
}
function selecao1_3 () {
    document.getElementById("Frango").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("Frango2").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("Frango3").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("checkmark1_1").style.display = "none";
    document.getElementById("checkmark1_2").style.display = "none";
    document.getElementById("checkmark1_3").style.display = "inline-block";
    principal = "Frango Yin Yang 3" ; 
    valor1 = 14.90;
}
function selecao2_1 () {
    document.getElementById("coca1").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("coca2").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("coca3").style.boxShadow ="0px 0px 5px 1px #FFFFFF";
    document.getElementById("checkmark2_1").style.display = "inline-block";
    document.getElementById("checkmark2_2").style.display = "none";
    document.getElementById("checkmark2_3").style.display = "none";
    bebida = "Coca-Cola Lata 1" ; 
    valor2 = 4.90;
}
function selecao2_2 () {
    document.getElementById("coca1").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("coca2").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("coca3").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("checkmark2_1").style.display = "none";
    document.getElementById("checkmark2_2").style.display = "inline-block";
    document.getElementById("checkmark2_3").style.display = "none";
    bebida = "Coca-Cola Lata 2" ; 
    valor2 = 4.90;
}
function selecao2_3 () {
    document.getElementById("coca1").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("coca2").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("coca3").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("checkmark2_1").style.display = "none";
    document.getElementById("checkmark2_2").style.display = "none";
    document.getElementById("checkmark2_3").style.display = "inline-block";
    bebida = "Coca-Cola Lata 3" ; 
    valor2 = 4.90;
}
function selecao3_1 () {
    document.getElementById("pudin1").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("pudin2").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("pudin3").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("checkmark3_1").style.display = "inline-block";
    document.getElementById("checkmark3_2").style.display = "none";
    document.getElementById("checkmark3_3").style.display = "none";
    sobremesa = "Pudin 1" ; 
    valor3 =  7.90;
}
function selecao3_2 () {
    document.getElementById("pudin1").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("pudin2").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("pudin3").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("checkmark3_1").style.display = "none";
    document.getElementById("checkmark3_2").style.display = "inline-block";
    document.getElementById("checkmark3_3").style.display = "none";
    sobremesa = "Pudin 2" ; 
    valor1 = 7.90;
}
function selecao3_3 () {
    document.getElementById("pudin1").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("pudin2").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("pudin3").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("checkmark3_1").style.display = "none";
    document.getElementById("checkmark3_2").style.display = "none";
    document.getElementById("checkmark3_3").style.display = "inline-block";
    sobremesa = "Pudin 3" ; 
    valor3 =  7.90;
}
function finalizar() {
    const pedido =
    "Prato Principal = " + principal 
    + " Bebida = " + bebida
    + " Sobremesa = " + sobremesa;
    const soma = valor1 + valor2 +valor3 ; 
    alert(pedido +"       Valor ===>"+ soma)
}

