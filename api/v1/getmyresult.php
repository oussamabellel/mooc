<?php 

require_once '../includes/DbOperations.php';

$postdata = file_get_contents("php://input");
$response = array();
$request = json_decode($postdata);
$id = $_GET['id'];

	if(isset($id )){
		$db = new DbOperations(); 
		$response = $db->GetMyResult($id);		
	}

echo json_encode($response);
?>