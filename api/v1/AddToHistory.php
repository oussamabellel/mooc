<?php 

require_once '../includes/DbOperations.php';
$postdata = file_get_contents("php://input");
$response = array();
$request = json_decode($postdata);
$_POST = json_decode($postdata, true);
$db = new DbOperations(); 
$res = $db->AddHistoryDetails($request->id_personne, $request->description);

if ($res == 1){
            $response['error'] = false; 
			$response['message'] = "User registered successfully";
}else {
            $response['error'] = true; 
			$response['message'] = "error";
}

echo json_encode($response);
?>