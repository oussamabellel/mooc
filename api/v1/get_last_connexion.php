<?php 

require_once '../includes/DbOperations.php';

	$postdata = file_get_contents("php://input");
	$response = array();
	$request = json_decode($postdata);
	$id = $_GET['id'];


	if(isset($id)){
		$db = new DbOperations(); 
		$response = $db->get_last_connexion($id);		
	}
	else{
		$response['error'] = true; 
		$response['message'] = "Invalid Request";
	}

	echo json_encode($response);
?>