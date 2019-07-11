<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(isset($_POST['id_personne'])){
		$db = new DbOperations(); 
		$response = $db->getHistory($_POST['id_personne']);		
	}

}else{
	$response['error'] = true; 
	$response['message'] = "Invalid Request";
}


echo json_encode($response);
?>