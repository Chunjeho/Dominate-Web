<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
      <div style="font-size: 50px;">
        Welcome, 
          <?php
         $_id = $_GET['_id'];
            echo $_GET['_id']
          ?>
          !!
      </div>
    <h1><a href="index.php">WEB</a></h1>

      <ol>
        <?php
        $list = scandir('Data');
        $i = 0;

        while($i<count($list)){
          if($list[$i] != '.' and $list[$i] != '..'){
            echo "<li><a href='index.php?_id={$_id}&id={$list[$i]}'>$list[$i]</a></li>";
          }
          $i = $i + 1;
        }
         ?>
      </ol>

      <h2>
        <?php
        if(isset($_GET['id'])){
          echo $_GET['id'];
        }
        else{
          echo "Welcome";
        }
         ?>
      </h2>
      <?php
      if(isset($_GET['id'])){
          echo file_get_contents("Data/".$_GET['id']);
      }
      else{
        echo "Hello, PHP!";
      }
       ?>
  </body>
</html>
