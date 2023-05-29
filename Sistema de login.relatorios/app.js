//nodeJS nodemon
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cadastro = require("./models/cadastro");
const relatorios = require("./models/relatorios");

// Carregar css/java no nodejs
app.use(express.static('design')) 

//Parse aplication jason
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas

//Direcionamento para a pagina de cadastro realizado com sucesso
app.get("/", function(req, res){
   res.sendFile(__dirname + "/design/login.html"); //Endereço do arquivo html
});

//Direcionamento para a pagina (principal - login)
app.get("/relatoriosucesso",function(req,res){
   res.sendFile(__dirname + "/design/relatoriosucesso.html"); // Endereço do arquivo html
});


//Adicionar dados no SQL
app.post('/add-relatorios', function(req, res){
   cadastro.create({
      Empresa: req.body.Empresa,
      WTG: req.body.WTG,
      Site: req.body.Site,
      Tecnico1: req.body.Tecnico1,
      Tecnico2: req.body.Tecnico2,
      Data: req.body.Data,
      Tipo_manutencao: req.body.Tipo_manutencao,
      Atividade: req.body.Atividade,
      Responsavel: req.body.Responsavel

    }).then(function(){
      //res.redirect('/sucesso') Apenas teste
      //res.send("Cadastro realizado com sucesso!") Apenas teste
      res.redirect("/relatoriosucesso")
   }).catch(function(erro){
      res.send("[Error] - Cadastro não realizado [O email cadastrado já existe no banco de dados , tente com  outro endereço valido]")
      //res.send("[Error] - Cadastro não realizado [O email cadastrado já existe no banco de dados]" + erro) mostrando o log de error
   })

    //res.send("Nome:" + req.body.Name) teste de verficação se esta funcionando
});


//localhost:8080
app.listen(8080);

