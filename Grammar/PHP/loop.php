<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Loop</title>
  </head>
  <body>
    <h1>Loop Loop Loop</h1>
    <h2>while</h2>
    <?php
    $a = 0;
    while($a<3){
      echo "$a <br>";
      if($a == 0){
        echo "This is zero <br>";
      }
      if($a == 2){
        echo "This is two <br>";
      }
      $a += 1;
    }
     ?>
     <h2>scandir with while</h2>
     <?php
     $list = scandir('Data');
     $len = count($list);
     $i = 0;
     while($i<$len){
       echo "$list[$i] <br>";
       $i += 1;
     }
      ?>
      <h2>Index</h2>
      <ol>
        <?php
        $i = 0;
        while($i<$len){
          echo "<li><a href='loop.php?id=$list[$i]'>$list[$i]</a></li>";
          $i += 1;
        }
         ?>
      </ol>
      <h2>Contents</h2>
      <?php
      if(isset($_GET['id'])){
        echo file_get_contents("Data/".$_GET['id']);
      }
      else{
        echo file_get_contents("Data/bio.html");
      }
       ?>
  </body>
</html>
