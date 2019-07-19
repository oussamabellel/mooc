
<?php 

require_once '../includes/DbOperations.php';

$postdata = file_get_contents("php://input");
$response = array();
$_POST = json_decode($postdata, true);

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($_POST['username']) and 
			isset($_POST['email']) and
				isset($_POST['type']) and
					isset($_POST['password']) and
						isset($_POST['nom']) and 
							isset($_POST['prenom']) and
								isset($_POST['age']))
		{
		//operate the data further 

		$db = new DbOperations(); 

		$result = $db->createUser( 	$_POST['nom'],
									$_POST['prenom'],
									$_POST['age'],
									$_POST['username'],
									$_POST['password'],
									$_POST['email'],
									$_POST['type']
								);
		if($result == 1){
			$response['error'] = false; 
			$response['message'] = "User registered successfully";
		}elseif($result == 2){
			$response['error'] = true; 
			$response['message'] = "Some error occurred please try again";			
		}elseif($result == 0){
			$response['error'] = true; 
			$response['message'] = "It seems you are already registered, please choose a different email and username";						
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
