// ids
let nome = 0;
let endereco = 0;
let formapagamento = 0;
let principal= 0;
let bebida= 0 ;
let sobremesa= 0 ;
let valor1= 0 ;
let valor2= 0;
let valor3= 0;
let soma= 0;

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
    valor1 = 15.90;
}
function selecao1_3 () {
    document.getElementById("Frango").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("Frango2").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("Frango3").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("checkmark1_1").style.display = "none";
    document.getElementById("checkmark1_2").style.display = "none";
    document.getElementById("checkmark1_3").style.display = "inline-block";
    principal = "Frango Yin Yang 3" ; 
    valor1 = 16.90;
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
    valor2 = 5.90;
}
function selecao2_3 () {
    document.getElementById("coca1").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("coca2").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("coca3").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("checkmark2_1").style.display = "none";
    document.getElementById("checkmark2_2").style.display = "none";
    document.getElementById("checkmark2_3").style.display = "inline-block";
    bebida = "Coca-Cola Lata 3" ; 
    valor2 = 6.90;
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
    valor3 = 8.90;
}
function selecao3_3 () {
    document.getElementById("pudin1").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("pudin2").style.boxShadow = "0px 0px 5px 1px #FFFFFF";
    document.getElementById("pudin3").style.boxShadow = "0px 0px 10px 2px rgba(0,194,11,0.52)";
    document.getElementById("checkmark3_1").style.display = "none";
    document.getElementById("checkmark3_2").style.display = "none";
    document.getElementById("checkmark3_3").style.display = "inline-block";
    sobremesa = "Pudin 3" ; 
    valor3 =  9.90;
}   
function finalizarPedido (){
    if (principal && bebida  && sobremesa ) {
        document.getElementById("botao").disabled = false;
        document.getElementById("botao").style.button.backgroundColor = "rgba(0,194,11,0.52)";
        document.getElementById("backfinalizar").removeClass("backfinalizar_back");
        principal = document.getElementById("finalprato_name").innerHTML;
        bebida = document.getElementById("finalbebida_name").innerHTML;
        sobremesa = document.getElementById("finalsobremesa_name").innerHTML ;
        valor1 = document.getElementById("pratofinal").innerHTML;
        valor2 =document.getElementById("bebidafinal").innerHTML;
        valor3 =document.getElementById("sobremesafinal").innerHTML ;
        soma = valor1.toFixed(2) + valor2.toFixed(2) + valor3.toFixed(2);
        soma = document.getElementById("finalsoma").innerHTML;
    }
}
    function enviarPedido(){
        let wame = 
        `Boa Noite +${nome}+
        Prato: + ${finalprato_name}+ R$ + ${pratofinal} +
        Bebida: + ${finalbebida_name} + R$ + ${bebidafinal} + 
        Sobremesa: + ${finalsobremesa_name} + R$ + ${sobremesafinal} +
        Forma de pagamento: + ${formapagamento} +
        Valor Total: + R$ + ${soma}`;
        window.open("https://wa.me/5532984898132?text=" + encodeURIComponent(wame));
        }
