let tela = {
  numeral1: "",
  numeral2: "",
  operar: ""
};
//--------^^^^ objeto tela acima ^^^^-------//

let numero1 = tela.numeral1;
let numero2 = tela.numeral2;







function multiplicar() {}

function subtrair() {}

function dividir() {}




//funcao apagar 

function apagar() {
  let vis = document.getElementById("visor");

  vis.innerHTML = "";
  tela.operar = "";
  numero1 = "";
  numero2 = "";
}






//funcao seleciona
function selecionar(valor) {
  let vis = document.getElementById("visor");

  //armazenar o primeiro número

  if ( tela.operar == "") {
    switch (valor) {
      case 1:
        vis.innerHTML += "1";
        numero1 += "1";

        break;

      case 2:
        visor.innerHTML += "2";
        numero1 += "2";
        break;

      case 3:
        visor.innerHTML += "3";
        numero1 += "3";
        break;

      case 4:
        visor.innerHTML += "4";
        numero1 += "4";
        break;

      case 5:
        visor.innerHTML += "5";
        numero1 += "5";
        break;

      case 6:
        visor.innerHTML += "6";
        numero1 += "6";
        break;

      case 7:
        visor.innerHTML += "7";
        numero1 += "7";
        break;

      case 8:
        visor.innerHTML += "8";
        numero1 += "8";
        break;

      case 9:
        visor.innerHTML += "9";
        numero1 += "9";
        break;
    }
  }

  //armazenando no segundo número agora
  else {
    switch (valor) {
      case 1:
        vis.innerHTML += "1";
        numero2 += "1";

        break;

      case 2:
        visor.innerHTML += "2";
        numero2 += "2";
        break;

      case 3:
        visor.innerHTML += "3";
        numero2 += "3";
        break;

      case 4:
        visor.innerHTML += "4";
        numero2 += "4";
        break;

      case 5:
        visor.innerHTML += "5";
        numero2 += "5";
        break;

      case 6:
        visor.innerHTML += "6";
        numero2 += "6";
        break;

      case 7:
        visor.innerHTML += "7";
        numero2 += "7";
        break;

      case 8:
        visor.innerHTML += "8";
        numero2 += "8";
        break;

      case 9:
        visor.innerHTML += "9";
        numero2 += "9";
        break;
    }
  }
}





function operacao(op) {
  let vis = document.getElementById("visor");

  switch (op) {
    case "+":
      vis.innerHTML += "+";
      tela.operar = "soma";
      
      break;

    case "x":
        vis.innerHTML += "x";
        tela.operar = "multiplicação";

        break;

    case "/":
        
        vis.innerHTML += "/";
        tela.operar = "divisão";

       break;



    case "-":
        vis.innerHTML += "-";
        tela.operar = "subtração";
       
        break;
    
  }

     return tela.operar;
}


function resultado(){


    let  op = tela.operar
    let vis = document.getElementById("visor")

    let v1 = Number(numero1)
    let v2 = Number(numero2)

    if(op=="soma"){

        vis.innerText= v1+v2

    }else if(op=="multiplicação"){
     
          vis.innerText= v1*v2

    }else if(op=="divisão"){
    
        vis.innerText= v1/v2

    }else if(op=="subtração"){
   
        vis.innerText= v1-v2


    }

      
}
