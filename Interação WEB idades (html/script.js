function verificar() {
   // window.alert('Funcionou!') teste botao verificar
   var data = new Date() 
   var ano  = data.getFullYear() // coletar ano atual
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   // var res =document.querySelector('div#res') maneira alternativa de coletar o resultado
   if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   }
   else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    // res.innerHTML = `Idade calculada ${idade}` teste da res aos inserir a data no formulario
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero ='Homem'
        if (idade >= 0 && idade < 15){
            //criança
            img.setAttribute('src','foto-bebe-m.png')
        }
        else if (idade < 30){
            //Jovem
            img.setAttribute('src','foto-jovem-m.png')
        }
        else if (idade < 60){
            //Adulto
            img.setAttribute('src','foto-adulto-m.png')
        }
        else{
            //Idoso
            img.setAttribute('src','foto-idoso-m.png')
        }
    }
    else if (fsex[1].checked) {
        genero ="Mulher"
        if (idade >= 0 && idade < 15){
            img.setAttribute('src','foto-bebe-f.png')
            //criança
        }
        else if (idade < 30){
            img.setAttribute('src','foto-jovem-f.png')
            //Jovem
        }
        else if (idade < 60){
            img.setAttribute('src','foto-adulto-f.png')
            //Adulto
        }
        else{
            img.setAttribute('src','foto-idoso-f.png')
            //Idoso
        }
    }
    res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
    // res.style.textAlign='center' alinhar aragrafo pelo JS
    res.appendChild(img) // adiconar a imagem
    
   }

   

}