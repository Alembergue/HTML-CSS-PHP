function tabuada(){
    let num = document.getElementById("numero")
    let tab = document.getElementById("tabuada")

    if(num.value == ""){
        window.alert("[ERROR] Não foi inserido nenhum valor,tente novamente!")
    }
    else {
        let num1 = Number(num.value)
        let c = 1
        tab.innerHTML =''
        while(c <=10 ){
            let item = document.createElement('option')
            item.text = `${num1} X ${c} = ${num1*c}`
            item.value=`tab${c}`
            tab.appendChild(item)              
            c++
        }
    }
}