<?php

require_once '../includes/DbOperations.php';
// Get the posted data.
$postdata = file_get_contents("php://input");
$response = array();

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  	$request = json_decode($postdata);
	$db = new DbOperations(); 

	$result = $db->createUser( 		$request->nom,
									$request->prenom,
									$request->age,
									$request->username,
									$request->password,
									$request->email,
									$request->type
								);


			$response['error'] = false; 
			$response['message'] = "User registered successfully";

			echo json_encode($response);
}

?>