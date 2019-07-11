
<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($_POST['id_etudiant']) and 
			isset($_POST['id_qcm']) and
				isset($_POST['result']) )
		{
		//operate the data further 

		$db = new DbOperations(); 

		$result = $db->AddResult( 	$_POST['id_etudiant'],
										$_POST['id_qcm'],
										$_POST['result']
								);
		if($result == 1){
			$response['error'] = false; 
			$response['message'] = "operation enregistré avec succés";
		}else{
			$response['error'] = true; 
			$response['message'] = "Some error occurred please try again";	
		}

	}else{
		$response['error'] = true; 
		$response['message'] = "Required fields are missing";
		}
	
}else{
	$response['error'] = true; 
	$response['message'] = "Invalid Request";
}

echo json_encode($response);
