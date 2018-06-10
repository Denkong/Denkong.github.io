<?
try {
    $dbh = new PDO('mysql:dbname=StarBattle;host=localhost', 'root', '');
    $stmt = $dbh->prepare("INSERT INTO `leaders` VALUES (NULL,?,?,?)");
		$stmt -> execute(array($_POST['name'],$_POST['score'],$_POST['time']));
		echo "true";
  } catch (PDOException $e) {
    echo 'Error : '.$e->getMessage();
		exit();
}
?>