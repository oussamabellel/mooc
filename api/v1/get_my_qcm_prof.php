<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){

	if(isset($_POST['id_prof'])){
		
		$db = new DbOperations(); 
		$response = $db->getProfQCM($_POST['id_prof']);
				
	}else {
		$response['error'] = true; 
		$response['message'] = "problem requete";
	}

}else{
	$response['error'] = true; 
	$response['message'] = "Invalid Request";
}

echo json_encode($response);
?>