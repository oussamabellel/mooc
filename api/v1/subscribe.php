<?php 

require_once '../includes/DbOperations.php';

$postdata = file_get_contents("php://input");
$response = array();
$_POST = json_decode($postdata, true);
$id = $_GET['id'];
$id_niveau = $_GET['id_niveau'];

if($_SERVER['REQUEST_METHOD']=='POST'){
	if(
		isset($id) and 
			isset($id_niveau) )
		{
		//operate the data further 

		$db = new DbOperations(); 
        $mychildrens =  $db->get_my_childrens($id);
        foreach($mychildrens as $children){
            $db->Subscribe($children['id'], $id_niveau);
        }
		$result = $db->Subscribe($id, $id_niveau);
        
        if($result == 1){
			$response['error'] = false; 
			$response['message'] = "Abonnement effectuée avec succés";
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
?>