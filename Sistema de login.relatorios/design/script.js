
function verificar(){ 

    var idnovo = document.getElementById('idc').value
    var loginok = localStorage.getItem('idok')   
    if(idnovo == loginok){
        window.alert('[ERROR] Já existe uma conta com este ID!')
        location.href="cadastro.html"       
    }
}


function armazenarval(){ 

    localStorage.setItem('idok',document.form1.idc.value)
    localStorage.setItem('senhaok',document.form1.senhac.value)

    var emp = document.getElementById('empresa').value
    var id = document.getElementById('idc').value
    var senha = document.getElementById('senhac').value
    
    if (emp.length > 0 && id.length >=6 && id.length <= 8 && senha.length <= 10 && senha.length >= 6 ){

        window.alert('Cadastro realizado com sucesso!')
        location.href="login.html"
    }

    else if( senha.length < 6 || senha.length > 10){
        window.alert('[ERROR] Ajuste sua senha para o padrão solicitado!')        
    }

    else if(id.length < 6 || id.length > 8){
        window.alert('[ERROR] Ajuste o seu ID para o padrão solicitado!')        
    }

    else{
        window.alert('[ERROR] Verifique os campos pendentes!')
        
    }
            
}


function logar(){ 

    var loginok = localStorage.getItem('idok')
    var senhaok = localStorage.getItem('senhaok')

    var login = document.getElementById('username').value
    var senha = document.getElementById('password').value

    if( login == loginok && senha == senhaok){
        window.alert('Login efetuado com sucesso!')        
        location.href="relatorio.html"      
    } 
    else if(login == 'manager' & senha == 'master123'){
        window.alert('Login efetuado com sucesso!') 
        location.href="manager.html"
    }       
    else{
        window.alert('[ERROR] Usuário ou senha incorretos,crie um acesso caso não possua um!')        
    }
}

  
 function novorelatorio(){
    location.href="relatorio.html"  
 }

 function sair(){
    window.alert('Obrigado por usar nosso sistema, tenha um bom dia!')
    location.href="login.html"  
 }

      







  


