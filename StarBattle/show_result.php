<?
try {
    $dbh = new PDO('mysql:dbname=StarBattle;host=localhost', 'root', '');
} catch (PDOException $e) {
    die($e->getMessage());
}

$MTS = $dbh->prepare('SELECT * FROM leaders ORDER BY score DESC LIMIT 10' );
$MTS->execute();
$results= $MTS->fetchAll();	
  echo json_encode($results);
?>