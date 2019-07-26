<?php 

require_once '../includes/DbOperations.php';

$db = new DbOperations(); 
$id = $_GET['id'];
$id_module = $_GET['id_module'];
$response = $db->getModuleResult($id, $id_module);		
	
echo json_encode($response);

?>