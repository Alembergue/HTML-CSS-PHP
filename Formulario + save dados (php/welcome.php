<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Dados do Formulário</title>        
        <style>
            table.bordasimples {
                border-collapse:collapse;
            }
            table.bordasimples tr td {
                border:1px solid #FF0000;
            }
            td:hover {
                background-color: #F0F0F0;
                text-decoration: underline;
            }           
        </style>
    </head>
    <body>
        <table class="bordasimples">
            <tr class="even">
                <td>Nome</td>
                <td>Sexo</td>
                <td>E-mail</td>
                <td>Mensagem</td>
                <td>Compra com meu salário</td>               
            </tr>
            <?php
              $contador = 0 ;
              for ($contador = 1; $contador <=4; $contador++) { ?>
                <tr class="even">
                  <td><?php echo $_POST["nome"];?></td>
                  <td>
                    <?php
                        if ($_POST["sexo"] == "masculino"){
                            echo "<img src = 'C:\Users\Alembergue Silva\Downloads\masculino.jpg' height='100px'/>";
                        }                        
                        else {
                            echo "<img src = 'C:\Users\Alembergue Silva\Downloads\feminino.jpg' height='100px'/>";
                        }                       
                    ?>              
                  </td>
                  <td><?php echo $_POST["email"];?></td>
                  <td><?php echo $_POST["mensagem"];?></td>
                  <td>
                     <?php
                        $mensgagemDeErro ="";

                       switch ($_POST["salario"]){
                          case 0:
                              $mensgagemDeErro ="Nâo compra nada.";
                              break;
                          case 1000 :
                              $mensgagemDeErro ="Posso compra um notebook.";
                              break;
                          default :
                              $mensgagemDeErro ="Posso compra um carro.";
                        }
                    echo $mensgagemDeErro;
                    ?>
                </td> 
            </tr>
         <?php  } ?>          
        </table>    
    </body>
</html>