<?php 

require_once '../includes/DbOperations.php';
$response = array(); 

$db = new DbOperations(); 
$users = $db->getallmodules();
echo json_encode($users);
?>