<?
move_uploaded_file($_FILES["dropImage"]["tmp_name"], "images/user_images/".$_FILES["dropImage"]["name"]);
// print_r($_FILES);
echo "images/user_images/".$_FILES["dropImage"]["name"];
?>