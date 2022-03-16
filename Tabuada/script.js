function Calcular() {

    let valor = document.getElementById('num')
    let tab = document.getElementById('tab')

    
    let v = Number(valor.value)


    let result = 0;

    tab.innerHTML = ''

    if (v != ' ') {
        for (var i = 0; i <= 10; i++) {


            result = v * i

            let item = document.createElement('option')
            

            item.text += ` ${v} x ${i} = ${result} `
            item.value = `tab${i}`
            tab.appendChild(item)

              


        



    }

    } else {

        alert("[ERRO] tente novamente")
    }




}