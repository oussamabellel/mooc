<?php 

session_start();

require_once '../includes/DbOperations.php';

	$postdata = file_get_contents("php://input");
	$response = array();
	$request = json_decode($postdata);

		$db = new DbOperations(); 
		$teacher = "Teacher";

		if($db->userLogin($request->username, $request->password)){

			$user = $db->getUserByUsername($request->username);
			$credits = $db->getCredits($user['id']);

			$response['error'] = false; 
			$response['id'] = $user['id'];
			$response['email'] = $user['email'];
			$response['username'] = $user['username'];
			$response['nom'] = $user['nom'];
			$response['prenom'] = $user['prenom'];
			$response['age'] = $user['age'];
			$response['type'] = $user['type'];

			$_SESSION['user'] = $user['id'];

			if ($response['type'] == $teacher ){
						
			}else {
				$response['credits'] = $credits[0]['credits'];
			}
			
		}else{
			$response['error'] = true; 
			$response['message'] = "Invalid username or password";			
		}

echo json_encode($response);