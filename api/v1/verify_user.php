<?php 

require_once '../includes/DbOperations.php';

$response = array();
$db = new DbOperations();
$results = $db->isUserExistAjax_username($_GET['username']);

if (mysqli_num_rows($results) > 0) {
       
        $response['error'] = true; 
        $response['message'] = "Already exists";

      }
      else{

        $response['error'] = false; 
        $response['message'] = "User available";

      }
      
echo json_encode($response);

?>