
<?php 

require_once '../includes/DbOperations.php';

$postdata = file_get_contents("php://input");
$response = array();
$_POST = json_decode($postdata, true);

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(isset($_POST['id_enfant']) and 
			isset($_POST['id_parent']) )
	{
		//operate the data further 

		$db = new DbOperations();

		$credits = $db->getCredits($_POST['id_parent']);
		$result = $db->AssocierParent($_POST['id_parent'], $_POST['id_enfant'], $credits[0]['credits']);
		
		if($result == 1){
			$response['error'] = false; 
			$response['message'] = "Association effectué avec succée";
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
