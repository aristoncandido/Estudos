var carro;

console.log("Bem Vindo ao AutoHell ")
console.log("")
console.log("Temos Carro : Hatch,Sedan, fora Motocicletas e Caminhonetes" )


var carro = "Carroça"


console.log(`Modelo escolhido foi ${carro}`)

console.log("")
switch (carro) {
    case "Hatch":
        console.log("Compra efetuada com sucesso!")

        break;

    case "Sedan":
        console.log("Tem certeza que não prefere este modelo  Sedan ?")

        break;
    case "Motocicleta":
        console.log("Tem certeza que não prefere este modelo Motocicleta ?")
      break;
    case "Caminhonete":
        console.log("Tem certeza que não prefere este modelo Caminhonete?")

        break;
    default:
        console.log("Não possuimos este modelo aqui ")

}
