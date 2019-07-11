
<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($_POST['nom']) and 
			isset($_POST['id_module']) and
				isset($_POST['content']))
		{
		//operate the data further 

		$db = new DbOperations(); 

		$result = $db->AddQCM( 		$_POST['nom'],
									$_POST['id_module'],
									$_POST['content']
								);
		if($result == 1){
			$response['error'] = false; 
			$response['message'] = "Qcm added successfully";
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
