
<?php 

require_once '../includes/DbOperations.php';

$postdata = file_get_contents("php://input");
$response = array();
$_POST = json_decode($postdata, true);
$id = $_GET['id'];

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($id) and 
			isset($_POST['id']) and
				isset($_POST['price']))
		{
		//operate the data further 

		$db = new DbOperations(); 

		$result = $db->BuyModule(
									$id,
									$_POST['id']
								);

		$parent = $db->getParent($id);

		$result2 = $db->RetraitCredit(
									$parent['id_parent'],
									$_POST['price']
								);

		if(($result == 1) && ($result2 == 1)){
			$response['error'] = false; 
			$response['message'] = "Module Buyed successfully";
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
