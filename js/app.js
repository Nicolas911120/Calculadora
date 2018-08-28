var n1, n2, resul, opera, x=0;
var pantalla=document.getElementById('display');
var botonesPagina = document.getElementsByClassName('tecla');

function mostrar(num){
  if(pantalla.textContent==0 && num!='.'){
    pantalla.innerHTML=num;
  }else if(pantalla.textContent.length <8 && num!='.'){
    pantalla.innerHTML+=num;
  }
  if(num=='.' && x==0){
    pantalla.innerHTML+=num;
    x=1;
  }

}

function operaciones(op){
  opera=op;
  n1= parseFloat(pantalla.textContent);
  pantalla.innerHTML='';
  x=0;
}

function resultado(){
  n2=parseFloat(pantalla.textContent);
  switch (opera) {
    //suma
    case 1:
    resul=n1+n2;
    break;
    //resta
    case 2:
    resul=n1-n2;
    break;
    //multiplica
    case 3:
    resul=n1*n2;
    break;
    //divide
    case 4:
    if(n2!=0){
      resul=n1/n2;
    }else {
      resul='NULL'
    }
    break;
  }

  if(String(resul).length<=8){
    pantalla.innerHTML=resul;
  }else {
    pantalla.innerHTML=String(resul).slice(0,-1*(String(resul).length-8));
  }
  n1=0,n2=0;
}

function cambiaSigno(){
  if (pantalla.textContent!=0 && pantalla.textContent!='NULL') {
    pantalla.innerHTML *=-1;
  }
}

function borrar(){
  pantalla.innerHTML='0';
  x=0;
}

function CambiarTamaño(elemento){
  document.getElementById(elemento).style.width='21%';
}

function RetornarTamaño(elemento){
  document.getElementById(elemento).style.width='22%';
}

var Calculadora = {
  init: function(){
    this.asignarEventosBotones();
    this.EventosMovimientoBotones();
  },
  asignarEventosBotones: function(){
    var num0= document.getElementById('0');
    var num1= document.getElementById('1');
    var num2= document.getElementById('2');
    var num3= document.getElementById('3');
    var num4= document.getElementById('4');
    var num5= document.getElementById('5');
    var num6= document.getElementById('6');
    var num7= document.getElementById('7');
    var num8= document.getElementById('8');
    var num9= document.getElementById('9');
    var punto= document.getElementById('punto');
    var igual= document.getElementById('igual');
    var suma= document.getElementById('mas');
    var resta= document.getElementById('menos');
    var multiplica= document.getElementById('por');
    var divide= document.getElementById('dividido');
    var borra= document.getElementById('on');
    var signo= document.getElementById('sign');
    var decimal= document.getElementById('punto');

    num0.addEventListener("click", function(){mostrar('0')});
    num1.addEventListener("click", function(){mostrar('1')});
    num2.addEventListener("click", function(){mostrar('2')});
    num3.addEventListener("click", function(){mostrar('3')});
    num4.addEventListener("click", function(){mostrar('4')});
    num5.addEventListener("click", function(){mostrar('5')});
    num6.addEventListener("click", function(){mostrar('6')});
    num7.addEventListener("click", function(){mostrar('7')});
    num8.addEventListener("click", function(){mostrar('8')});
    num9.addEventListener("click", function(){mostrar('9')});
    suma.addEventListener("click", function(){operaciones(1)});
    resta.addEventListener("click", function(){operaciones(2)});
    multiplica.addEventListener("click", function(){operaciones(3)});
    divide.addEventListener("click", function(){operaciones(4)});
    igual.addEventListener("click", function(){resultado()});
    borra.addEventListener("click", function(){borrar()});
    signo.addEventListener("click", function(){cambiaSigno()});
    decimal.addEventListener("click", function(){mostrar('.')});
  },

}
Calculadora.init();
