function Contar() {


    var inicio = document.getElementById("inicio.txt")
    var fim = document.getElementById("fim.txt")
    var passo = document.getElementById("passo.txt")
    var res = document.getElementById("res")

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)


    res.innerHTML = ""


    if (p == 0 ) {

        alert('PASSO INVÁLIDO! Considerando passo = 1')

        p = 1

    }





    if (i < f) {


        if (i != '') {


            res.innerHTML += "<p>Contando:</p>"

            for (i; i <= f; i = i + p) {



                res.innerHTML += ` 👉 ${i} `


            }

            res.innerHTML += '🎊'

        } else {

            res.innerHTML = 'Impossivel contar! Verifique os valores.'


        }


    } else{


        for (i; i >=f; i =i - p) {

            res.innerHTML += ` 👉 ${i} `



        }
        
 res.innerHTML += '🎊'

    }














}