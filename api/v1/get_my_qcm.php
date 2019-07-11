<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){

	if(isset($_POST['id_etudiant'])){
		
		$db = new DbOperations(); 
		$response = $db->GetMyQcm($_POST['id_etudiant']);		
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