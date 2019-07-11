<?php 

require_once '../includes/DbOperations.php';
$response = array(); 

$db = new DbOperations(); 
$users = $db->getAllusers();
echo json_encode($users);

?>