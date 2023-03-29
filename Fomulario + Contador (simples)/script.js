function contar() {
    
    var inicio = document.getElementById('inicio') // o valor aqui ainda esta com string
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res =document.getElementById('res')


    if (inicio.value == "" || fim.value =="" || passo.value == ""){
        window.alert('[ERROR] Faltam dados!Tente novamente!')
        res.innerHTML = 'Aguardando dados.'
    }

    else {   
        res.innerHTML = `Contanto : <br>`
        var ini = Number(inicio.value) //convertendo a variavel ara numero
        var fim1 = Number(fim.value)
        var pass = Number(passo.value)

        if (pass <=0){
            window.alert('Passo invalido,considerando PASSO 1 ')
             var pass =1
        }
     
        if (ini < fim1) { // CONTAGEM CRESCENTE
            for (c=ini; c<= fim1;c+=pass){
                res.innerHTML += ` ${c} \u{1F449} ` // colcando o emoj
            }    
            
        } else { // CONTAGEM DECRESCENTE
            for (c=ini;c>=fim1; c-=pass){
                res.innerHTML += ` ${c} \u{1F449} ` // colcando o emoj
            }
           
        }
    res.innerHTML+= `\u{1F3C1}` // emoj final de bandeira 
    }
}