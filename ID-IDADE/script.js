function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {

        window.alert(" [ERRO]Verifique os dados e tente novamente")


    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img') //cria uma nova tag 
        img.setAttribute('id', 'foto') // define a tag (colcando um atributo por exemplo 'id')

        if (fsex[0].checked) {

            genero = 'Homem'

                if (idade >= 0 && idade < 10) {//kid


                    img.setAttribute('src','bebehomem.png')



                 }   else if (idade < 21){ //jovem
   
                 
                    img.setAttribute('src','jovemhomem.jpeg')


                     } else if (idade < 50){ //adulto

                        img.setAttribute('src','adultohomem.jpeg')



                      } else {
                        img.setAttribute('src','idosohomem.jpeg')


                                            //idoso
                     }


       } else  {
       

            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {//kid

                img.setAttribute('src','bebemulher.jpeg')



            }   else if (idade < 21){ //jovem

                img.setAttribute('src','jovemmulher.jpeg')



                }else if (idade < 50){ //adulto

                    img.setAttribute('src','adultomulher.jpeg')


                 } else {
                    img.setAttribute('src','idosomulher.jpeg')


                                       //idoso
                }

        }




        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(img) //cria mais uma camada no DOM no caso a tag 'img'

    }





}