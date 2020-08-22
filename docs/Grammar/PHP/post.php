<!DOCTPYE html>
<html>
    <body>
        
        Welcome,
        <?php
            echo " ".$_POST['id']."!!"
        ?>
        
        <?php
            require_once 'welcome_ko.php';
            require_once 'welcome_en.php';
            echo language\ko\welcome().'<br>';
            echo language\en\welcome();
        ?>
        
    </body>
</html>