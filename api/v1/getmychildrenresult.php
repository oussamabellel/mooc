<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(isset($_POST['id_parent'])){
		$db = new DbOperations(); 
		$response = $db->GetMyChildrenResult($_POST['id_parent']);		
	}

}else{
	$response['error'] = true; 
	$response['message'] = "Invalid Request";
}


echo json_encode($response);
?>