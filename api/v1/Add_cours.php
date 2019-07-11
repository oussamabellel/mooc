
<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($_POST['nom']) and 
			isset($_POST['type']) and
				isset($_POST['lien']) and
					isset($_POST['code_matiere']))
		{
		//operate the data further 

		$db = new DbOperations(); 

		$result = $db->AddCours( 	$_POST['nom'],
									$_POST['type'],
									$_POST['lien'],
									$_POST['code_matiere']
								);
		if($result == 1){
			$response['error'] = false; 
			$response['message'] = "Cours added successfully";
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
