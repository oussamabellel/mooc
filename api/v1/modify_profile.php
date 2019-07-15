<?php 

require_once '../includes/DbOperations.php';

$postdata = file_get_contents("php://input");
$response = array();
$_POST = json_decode($postdata, true);
$id = $_GET['id'];

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($id) and 
			isset($_POST['nom']) and
				isset($_POST['prenom']) and
					isset($_POST['age']) and
							isset($_POST['password']))
		{
		//operate the data further 

		$db = new DbOperations(); 

		$result = $db->ModifyProfile($id,
										$_POST['nom'],
											$_POST['prenom'],
												$_POST['age'],
														$_POST['password']);
		if($result == 1){
			$response['error'] = false; 
			$response['message'] = "information modified successfully";
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