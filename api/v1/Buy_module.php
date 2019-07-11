
<?php 

require_once '../includes/DbOperations.php';

$response = array(); 

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($_POST['id_etudiant']) and 
			isset($_POST['id_module']) and
				isset($_POST['price']))
		{
		//operate the data further 

		$db = new DbOperations(); 

		$result = $db->BuyModule(
									$_POST['id_etudiant'],
									$_POST['id_module']
								);

		$parent = $db->getParent($_POST['id_etudiant']);

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
