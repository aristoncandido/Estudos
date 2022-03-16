function Adicionar() {
    let valor = document.getElementById("num");
    let t = document.getElementById("tab");

    let numero = Number(valor.value)





  


    
  let pos = tabela.indexOf(numero)



    if (numero <= 100 && numero >= 1) {

        
        
         

        if (pos == -1) {

            tabela.push(numero)

            let item = document.createElement('option')

            item.text = `Valor ${numero} adicionado.`

            t.appendChild(item)


            qnt++ //somar quantos elementos tem 

            soma = soma + numero



            if (numero>maior){
                maior = numero 
          }




          menor = tabela[0]
          for(cont = 1 ; cont<tabela.length;cont++){

                  if(tabela[cont]<menor){

                    menor= tabela[cont]


                  }

          }

          
             
           
            
            
           

            


   
           } else{

                alert("numero ja existe")




        }











    } else {

        alert(`Valor: ${numero} é inválido ! Tente novamente`)



    }

    


}





function Analisar() {


    let valor = document.getElementById("num");
    let t = document.getElementById("tab");
    let p = document.getElementById("anal")


    media = soma/qnt



    
    p.innerHTML = `no total ${qnt} numeros foram adicionados`
    p.innerHTML +=`<p>O maior valor forcenido foi o ${maior}</p>`
    p.innerHTML +=`<p>O menor valor forcenido foi o ${menor}</p>`
    p.innerHTML +=`<p>A média dos valores digitados é : ${media}</p>`
    p.innerHTML +=`<p> A soma dos valores digitados é : ${soma}</p>`






}
//propriedades 

let tabela = []

var qnt = 0;

var maior = 0;

let menor = 0 ;

let soma = 0;

let media = 0;

let antnum; //numero anterior (historico)

let cont ;