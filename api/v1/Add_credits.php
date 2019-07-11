
<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($_POST['id_parent']) and 
			isset($_POST['credits']))
		{
		//operate the data further 

		$db = new DbOperations(); 

		$result = $db->UpdateCredits( 	
									$_POST['id_parent'],
									$_POST['credits']
								);
		if($result == 1){
			$response['error'] = false; 
			$response['message'] = "Credits Updated successfully";
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
