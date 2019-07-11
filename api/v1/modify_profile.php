
<?php 

require_once '../includes/DbOperations.php';

$postdata = file_get_contents("php://input");
$response = array();

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
		$request = json_decode($postdata);
		$test = json_decode($postdata);
		echo $test;
		//operate the data further 

		$db = new DbOperations(); 
		echo json_encode($response);
		// $result = $db->ModifyProfile($id,
		// 								$request->nom,
		// 									$request->prenom,
		// 										$request->age,
		// 											$request->email);
		// if($result == 1){
		// 	$response['error'] = false; 
		// 	$response['message'] = "information modified successfully";
		// }

		// echo json_encode($response);
	}
	

