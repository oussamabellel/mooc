<?php 

require_once '../includes/DbOperations.php';
error_reporting(0);
$postdata = file_get_contents("php://input");
$response = array();
$_POST = json_decode($postdata, true);

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(isset($_POST['username']) and isset($_POST['password'])){
		$db = new DbOperations(); 
		$teacher = "Teacher";

		if($db->userLogin($_POST['username'], $_POST['password'])){

			$user = $db->getUserByUsername($_POST['username']);
			$credits = $db->getCredits($user['id']);
			
			$response['error'] = false; 
			$response['id'] = $user['id'];
			$response['email'] = $user['email'];
			$response['username'] = $user['username'];
			$response['nom'] = $user['nom'];
			$response['prenom'] = $user['prenom'];
			$response['age'] = $user['age'];
			$response['type'] = $user['type'];
			$response['message'] = "Authentification effectuée avec succée";

			if ($response['type'] == $teacher ){
						
			}else {
				$response['credits'] = $credits[0]['credits'];
			}
			
		}else{
			$response['error'] = true; 
			$response['message'] = "Invalid username or password";			
		}

	}else{
		$response['error'] = true; 
		$response['message'] = "Required fields are missing";
	}

} else{
	$response['error'] = true; 
	$response['message'] = "Invalid Request";
}

echo json_encode($response);

?>