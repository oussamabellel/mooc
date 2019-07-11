
<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($_POST['id_personne']) and 
			isset($_POST['type']) and
				isset($_POST['value']) )
		{
		//operate the data further 

		$db = new DbOperations(); 

		$result = $db->Add_to_history( 	$_POST['id_personne'],
										$_POST['type'],
										$_POST['value']
								);
		if($result == 1){
			$response['error'] = false; 
			$response['message'] = "operation added to history successfully";
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
