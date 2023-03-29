<html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Gravando dados</title>
        </head>

        <?php
            $servidor ="localhost";
            $usuario ="root";
            $senha ="";
            $bancodedados = "PRODUCAO";  
 
            $conexao = new mysqli ($servidor, $usuario, $senha, $bancodedados) ;

            if ($conexao -> connect_error) {
                die ("A conexão falhou:" + $conexao->conexaoect_error) ;
            }

             //pegar último código gravado

            $sql = "SELECT MAX(CODIGO) AS CODIGO FROM CONTATO";
            $resultado = $conexao->query($sql);
            if ($resultado -> num_rows > 0) {
                $registro = $resultado -> fetch_assoc() ;
                $codigo = $registro ["CODIGO"];
                $codigo = $codigo + 1 ;
            }
            else {
                $codigo = 1 ;
            }

            $nome = $_POST['nome'];
            $sexo = $_POST['sexo'];
            $email = $_POST['email'];
            $msg = $_POST['mensagem'];

            $sql = " INSERT INTO CONTATO (CODIGO,NOME,EMAIL,SEXO,MENSAGEM) VALUES ('".$codigo."','".$nome."','".$email."','".$sexo."','".$msg."') " ;
             
            if(!($conexao->query($sql) === TRUE)) {
                $conexao->close();              
                die ("Erro:".$sql."<br>".$conexao->error);
            }

            $conexao->close();

            echo "gravado com sucesso" ;
           
        ?>

        <body>
            <a href ="formulario.html"> Voltar para formulário </a>
        </body>          
</html>



