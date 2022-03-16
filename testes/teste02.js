let num = [5,4,7,9]

let a  = 8
let b = 10
let c = 10
let d = 14

let cont = 0 ;


for(let i=0 ; i<num.length;i++){

   if(num.indexOf(c) == -1 ){
   
       num.push(c)


       cont++



   }
  



}

console.log(`seu array eh : ${num} foram adicionados ${cont} numeros `)
