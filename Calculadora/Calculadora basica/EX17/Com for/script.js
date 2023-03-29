function tabuada(){
    var num = document.getElementById("numero")
    var tab = document.getElementById("tabuada")
    if (num.value == "") {
        window.alert("[ERROR] Não foi digitado nenhum valor,tente novamente!")
    }
    else{
        var num1 = Number(num.value)
        tab.innerHTML = '' // para limar a tabuada
        if(num1>=0){
            for(c=1;c<=10;c++){
                var item = document.createElement('option')
                item.text = `${num1} X ${c} = ${num1*c}`
                item.value =`tab${c}`
                tab.appendChild(item) //para aparecer na  caixa de opções
            }
        }
    }

}