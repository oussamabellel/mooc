<?php 

require_once '../includes/DbOperations.php';

$db = new DbOperations(); 
$id = $_GET['id'];
$response = $db->getAllLevel($id);		
	
echo json_encode($response);

?>