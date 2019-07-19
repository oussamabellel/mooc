<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	class DbOperations{

		private $con; 

		function __construct(){

			require_once dirname(__FILE__).'/DbConnect.php';

			$db = new DbConnect();

			$this->con = $db->connect();

		}

		/*CRUD -> C -> CREATE */

		public function createUser($nom, $prenom, $age, $username, $pass, $email, $type){
			if($this->isUserExist($username,$email)){
				return 0; 
			}else{
				$password = md5($pass);
				$stmt = $this->con->prepare("INSERT INTO `users` (`id`, `username`, `password`, `email`, `nom`, `prenom`, `age`, `type`) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?);");
				$stmt->bind_param("sssssis",$username,$password,$email,$nom,$prenom,$age,$type);

				if($stmt->execute()){
					return 1; 
				}else{
					return 2; 
				}
			}
		}

			public function isUserExist($username, $email){
			$stmt = $this->con->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
			$stmt->bind_param("ss", $username, $email);
			$stmt->execute(); 
			$stmt->store_result(); 
			return $stmt->num_rows > 0; 
		}

		
			public function isUserExistAjax_username($username){
			// $stmt = $this->con->prepare("SELECT id FROM users WHERE username = ?");
			// $stmt->bind_param("s", $username);
			// $stmt->execute(); 
			// $stmt->store_result(); 
			// return $stmt->num_rows; 

			$sql = "SELECT * FROM users WHERE username='$username'";
			$results = mysqli_query($this->con, $sql);
			return $results;
		}

		public function isUserExistAjax_email($email){
			$stmt = $this->con->prepare("SELECT id FROM users WHERE email = ?");
			$stmt->bind_param("s", $email);
			$stmt->execute(); 
			$stmt->store_result(); 
			return $stmt->num_rows > 0; 
		}

		public function AddCours($nom, $type, $lien, $code_module){
			
				$stmt = $this->con->prepare("INSERT INTO `cours` (`id`, `nom`, `type`, `lien`, `code_module`) VALUES (NULL, ?, ?, ?, ?);");
				$stmt->bind_param("ssss",$nom,$type,$lien,$code_module);
				if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
			
		}

		public function Add_to_family($id_parent,$id_enfant,$credits){
			
				$stmt = $this->con->prepare("INSERT INTO `famille` (`id_parent`,`id_enfant`, `credits`) VALUES (?, ?, ?);");
				$stmt->bind_param("iii",$id_parent,$id_enfant,$credits);
				if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
			
		}

		public function userLogin($username, $pass){
			$password = md5($pass);
			$stmt = $this->con->prepare("SELECT id FROM users WHERE username = ? AND password = ?");
			$stmt->bind_param("ss",$username,$password);
			$stmt->execute();
			$stmt->store_result(); 
			return $stmt->num_rows > 0; 
		}

		public function getUserByUsername($username){
			$stmt = $this->con->prepare("SELECT * FROM users WHERE username = ?");
			$stmt->bind_param("s",$username);
			$stmt->execute();
			return $stmt->get_result()->fetch_assoc();
		}


	

		public function getAllusers()
		{
			# code...
			$stmt = $this->con->prepare("SELECT * FROM users;");
			$stmt->execute();
			$stmt->bind_result($id,$username,$password,$email,$nom,$prenom,$age,$type);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['id'] = $id;
				$user['username'] = $username;
				$user['password'] = $password;
				$user['email'] = $email;
				$user['type'] = $type;
				$user['nom'] = $nom;
				$user['prenom'] = $prenom;
				$user['age'] = $age;
				array_push($users, $user);
			}
			return $users;
		}

		public function getAllMatiere()
		{
			# code...
			$stmt = $this->con->prepare("SELECT * FROM intitule;");
			$stmt->execute();
			$stmt->bind_result($code,$matiere);
			$users = array();
			while ($stmt->fetch()){

				$user=array();
				$user['code'] = $code;
				$user['matiere'] = $matiere;
				array_push($users, $user);

			}
			return $users;
		}

		public function getallmodules()
		{
			# code...
			$stmt = $this->con->prepare("SELECT * FROM module;");
			$stmt->execute();
			$stmt->bind_result($id,$username,$price);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['code'] = $id;
				$user['matiere'] = $username;
				$user['price'] = $price;
				array_push($users, $user);
			}
			return $users;

		}

		public function getProfModule($id)
		{
			# code...
			$stmt = $this->con->prepare("SELECT module.id, module.matiere, module.price FROM module, profmodule WHERE profmodule.id_user= ? AND module.id = profmodule.id_module");
			$stmt->bind_param("i",$id);
			$stmt->execute();
			$stmt->bind_result($code,$matiere,$price);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['code'] = $code;
				$user['matiere'] = $matiere;
				$user['price'] = $price;
				array_push($users, $user);
			}
			return $users;
		}

			public function get_my_childrens($id)
		{
			# code...
			$stmt = $this->con->prepare("SELECT users.id, users.username, users.email, users.nom, users.prenom, users.age, users.type FROM users, famille WHERE famille.id_parent= ? AND users.id = famille.id_enfant");
			
			$stmt->bind_param("i",$id);
			$stmt->execute();
			$stmt->bind_result($id_enfant,$username,$email,$nom,$prenom,$age,$type);
			$users = array();
			while ($stmt->fetch()){

				$user=array();
				$user['id'] = $id_enfant;
				$user['username']= $username;
				$user['email'] = $email;
				$user['nom'] = $nom;
				$user['prenom'] = $prenom;
				$user['age'] = $age;
				$user['type'] = $type;
				array_push($users, $user);
			}
			return $users;
		}

		public function getCours($code)
		{
			# code...
			$stmt = $this->con->prepare("SELECT * FROM cours WHERE code_module = ?");
			$stmt->bind_param("s",$code);
			$stmt->execute();
			$stmt->bind_result($id,$nom,$type,$lien,$code_module);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['id'] = $id;
				$user['nom'] = $nom;
				$user['type'] = $type;
				$user['lien'] = $lien;
				$user['code_module'] = $code_module;
				
				array_push($users, $user);
			}
			return $users;
			
		}

		public function UpdateCredits($id_parent,$credits)
		{
			# code...
			$stmt = $this->con->prepare("UPDATE `famille` SET credits = credits + ? WHERE id_parent = ?");
			$stmt->bind_param("ii",$credits,$id_parent);
			if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
		}

		public function getCredits($id)
		{
			# code...
			$stmt = $this->con->prepare("SELECT credits FROM famille WHERE id_parent = ? OR id_enfant = ?");
			$stmt->bind_param("ii",$id,$id);
			$stmt->execute();
			$stmt->bind_result($credits);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['credits'] = $credits;
				array_push($users, $user);
			}
			return $users;
		}

		public function ModuleToBuy($id_etudiant)
		{
			# code...

			$stmt = $this->con->prepare("SELECT module.id, module.matiere, module.price FROM module,famille WHERE module.id NOT IN (SELECT etudiantmodule.id_module FROM etudiantmodule WHERE etudiantmodule.id_etudiant = ?) AND ( module.price <= famille.credits ) AND ( famille.id_enfant = ? )");

			$stmt->bind_param("ii",$id_etudiant,$id_etudiant);
			$stmt->execute();
			$stmt->bind_result($id,$matiere,$price);
			$users = array();

			while ($stmt->fetch()){
				$user=array();
				$user['id'] = $id;
				$user['matiere'] = $matiere;
				$user['price'] = $price;
				array_push($users, $user);
			}
			return $users;
			
		}

		public function BuyModule($id_etudiant, $id_module){
			
				$stmt = $this->con->prepare("INSERT INTO `etudiantmodule` (`id_etudiant`, `id_module`) VALUES (?, ?);");
				$stmt->bind_param("is",$id_etudiant,$id_module);
				if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
		}

		public function RetraitCredit($id_parent, $price)
		{
			# code...
			$stmt = $this->con->prepare("UPDATE `famille` SET credits = credits - ? WHERE id_parent = ?");
			$stmt->bind_param("ii",$price,$id_parent);
			if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
		}

		public function GetMyModule($id_etudiant)
		{
			# code...
			$stmt = $this->con->prepare("SELECT module.id, module.matiere, module.price FROM module WHERE module.id IN (SELECT etudiantmodule.id_module FROM etudiantmodule WHERE etudiantmodule.id_etudiant = ?)");

			$stmt->bind_param("i",$id_etudiant);
			$stmt->execute();
			$stmt->bind_result($id,$matiere,$price);
			$users = array();

			while ($stmt->fetch()){
				$user=array();
				$user['id'] = $id;
				$user['matiere'] = $matiere;
				$user['price'] = $price;
				array_push($users, $user);
			}
			return $users;
		}

		public function Add_to_history($id_personne,$type,$credits)
		{
			# code...
			$stmt = $this->con->prepare("INSERT INTO `historique` (`id`, `id_personne`,`type`, `value`) VALUES (NULL,?, ?, ?);");
				$stmt->bind_param("isi",$id_personne,$type,$credits);
				if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}

		}
		public function getHistory($id_personne)
		{
			# code...
			$stmt = $this->con->prepare("SELECT * FROM historique WHERE id_personne = ?");
			$stmt->bind_param("i",$id_personne);
			$stmt->execute();
			$stmt->bind_result($id,$idperonne,$type,$value);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['id_personne'] = $idperonne;
				$user['id'] = $id;
				$user['type'] = $type;
				$user['value'] = $value;
				
				array_push($users, $user);
			}
			return $users;
			
		}

		public function Add_to_connexion($id_personne)
		{
			# code...
			$stmt = $this->con->prepare("INSERT INTO `connexion`(`id`, `id_personne`, `date`) VALUES (NULL, ?, Now())");
				$stmt->bind_param("i",$id_personne);
				if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}

		}

		public function get_last_connexion($id)
		{
			# code...	
			$stmt = $this->con->prepare("SELECT users.nom, users.prenom, connexion.date FROM users, famille, connexion WHERE famille.id_parent= ? AND users.id = famille.id_enfant AND users.id = connexion.id_personne ORDER BY connexion.date DESC LIMIT 10");

			$stmt->bind_param("i",$id);
			$stmt->execute();
			$stmt->bind_result($nom,$prenom,$date);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['nom'] = $nom;
				$user['prenom'] = $prenom;
				$user['date'] = $date;
				
				array_push($users, $user);
			}
			return $users;
		}
		public function get_last_cours($id_etudiant)
		{
			# code...	
			$stmt = $this->con->prepare("SELECT cours.nom, cours.lien, cours.type, module.id, module.matiere FROM module, cours WHERE module.id IN (SELECT etudiantmodule.id_module FROM etudiantmodule WHERE etudiantmodule.id_etudiant = ? AND cours.code_module = etudiantmodule.id_module) LIMIT 5");
			$stmt->bind_param("i",$id_etudiant);
			$stmt->execute();
			$stmt->bind_result($nom,$lien,$type,$id,$matiere);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['nom'] = $nom;
				$user['lien'] = $lien;
				$user['type'] = $type;
				$user['id'] = $id;
				$user['matiere'] = $matiere;
				
				array_push($users, $user);
			}
			return $users;
		}
		
/*SELECT DISTINCT qcm.id, qcm.nom, qcm.id_module, qcm.content FROM qcm, etudiantqcm WHERE qcm.id NOT IN (SELECT etudiantqcm.id_qcm FROM etudiantqcm WHERE etudiantqcm.id_etudiant = 1)*/

/*SELECT DISTINCT qcm.id, qcm.nom, qcm.id_module, qcm.content FROM qcm, etudiantqcm, etudiantmodule WHERE qcm.id NOT IN (SELECT etudiantqcm.id_qcm FROM etudiantqcm WHERE etudiantqcm.id_etudiant = 1) AND ( etudiantmodule.id_module = qcm.id_module)*/
		public function GetMyQcm($id_etudiant)
		{
			# code...
			$stmt = $this->con->prepare("SELECT DISTINCT qcm.id, qcm.nom, qcm.id_module, qcm.content FROM qcm, etudiantqcm, etudiantmodule WHERE qcm.id NOT IN (SELECT etudiantqcm.id_qcm FROM etudiantqcm WHERE etudiantqcm.id_etudiant = ?) AND ( etudiantmodule.id_module = qcm.id_module)");

			$stmt->bind_param("i",$id_etudiant);
			$stmt->execute();
			$stmt->bind_result($id,$nom,$id_module,$content);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['id'] = $id;
				$user['nom'] = $nom;
				$user['id_module'] = $id_module;
				$user['content'] = $content;
				
				array_push($users, $user);
			}
			return $users;
		}

		public function AddResult($id_etudiant,$id_qcm,$result)
		{
			# code...
			$stmt = $this->con->prepare("INSERT INTO `etudiantqcm`(`id`, `id_etudiant`, `id_qcm`, `result`, `date`) VALUES (NULL, ?, ?, ?, NOW())");
				$stmt->bind_param("iis",$id_etudiant,$id_qcm,$result);
				if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
		}

		public function GetMyChildrenResult($id_parent)
		{
			# code...
			$stmt = $this->con->prepare("SELECT qcm.id_module, etudiantqcm.id_etudiant, users.nom, users.prenom, AVG(etudiantqcm.result), etudiantqcm.date FROM etudiantqcm, users,qcm WHERE etudiantqcm.id_etudiant IN (SELECT users.id FROM users, famille WHERE famille.id_parent= ? AND users.id = famille.id_enfant) AND users.id = etudiantqcm.id_etudiant GROUP BY users.id");
			$stmt->bind_param("i",$id_parent);
			$stmt->execute();
			$stmt->bind_result($id_module,$id,$nom,$prenom,$result,$date);
			$users = array();
			while ($stmt->fetch()){
				$user=array();
				$user['id_module'] = $id_module;
				$user['id'] = $id;
				$user['nom'] = $nom;
				$user['prenom'] = $prenom;
				$user['result'] = $result;
				$user['date'] = $date;
				
				array_push($users, $user);
			}
			return $users;
		}

		public function GetMyResult($id_etudiant)
		{
			# code...
			$stmt = $this->con->prepare("SELECT qcm.id_module, qcm.nom, etudiantqcm.result, etudiantqcm.date FROM etudiantqcm,qcm WHERE etudiantqcm.id_etudiant = ? AND qcm.id = etudiantqcm.id_qcm");
			$stmt->bind_param("i",$id_etudiant);
			$stmt->execute();
			$stmt->bind_result($id_module,$nom,$result,$date);
			$users = array();
			
			while ($stmt->fetch()){
				$user=array();
				$user['id_module'] = $id_module;
				$user['nom'] = $nom;
				$user['result'] = $result;
				$user['date'] = $date;
				
				array_push($users, $user);
			}
			return $users;
		}

		public function getParent($id_enfant)
		{
			# code...
			$stmt = $this->con->prepare("SELECT id_parent FROM famille WHERE id_enfant = ?");
			$stmt->bind_param("i",$id_enfant);
			$stmt->execute();
			return $stmt->get_result()->fetch_assoc();

		}

		public function AssocierParent($id_parent,$id_etudiant,$credits)
		{
			# code...
			$stmt = $this->con->prepare("INSERT INTO `famille` (`id_parent`,`id_enfant`, `credits`) VALUES (?, ?, ?);");
				$stmt->bind_param("iii",$id_parent,$id_etudiant,$credits);
				if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
		}

		public function ModifyProfile($id_personne, $nom, $prenom, $age, $password)
		{
			# code...
			$pass = md5($password);
			$stmt = $this->con->prepare("UPDATE `users` SET nom = ?, prenom = ?, age = ?, password = ? WHERE id = ?");
			$stmt->bind_param("ssisi",$nom,$prenom,$age,$pass,$id_personne);
			if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
		}

		public function DeleteCours($id)
		{
			# code...
			$stmt = $this->con->prepare("DELETE FROM cours WHERE id = ?");
			$stmt->bind_param("i",$id);
			if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
		}

		public function AddQCM($nom, $id_module, $content){
			
				$stmt = $this->con->prepare("INSERT INTO `qcm` (`id`, `nom`, `id_module`, `content`) VALUES (NULL, ?, ?, ?);");
				$stmt->bind_param("sss",$nom,$id_module,$content);
				if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
		}

		public function getProfQCM($id_prof)
		{
			# code...
			$stmt = $this->con->prepare("SELECT DISTINCT qcm.id, qcm.nom, qcm.id_module, qcm.content FROM qcm, profmodule, users WHERE qcm.id_module = profmodule.id_module AND profmodule.id_user = ?");
			
			$stmt->bind_param("s",$id_prof);
			$stmt->execute();
			$stmt->bind_result($id,$nom,$id_module,$content);
			$users = array();
			while ($stmt->fetch()){

				$user = array();

				$user['id'] = $id;
				$user['nom']= $nom;
				$user['id_module'] = $id_module;
				$user['content'] = $content;
		
				array_push($users, $user);
			}
			return $users;
		}

		public function DeleteQcm($id)
		{
			# code...
			$stmt = $this->con->prepare("DELETE FROM qcm WHERE id = ?");
			$stmt->bind_param("s",$id);
			if ($stmt->execute()){
					return 1;
				}else{
					return 2;
				}
		}

		public function getQCMResult($id_qcm)
		{
			# code...
			$stmt = $this->con->prepare("SELECT etudiantqcm.id, users.nom, users.prenom, etudiantqcm.result, etudiantqcm.date FROM etudiantqcm, users WHERE etudiantqcm.id_qcm = ? AND etudiantqcm.id_etudiant = users.id");
			
			$stmt->bind_param("i",$id_qcm);
			$stmt->execute();
			$stmt->bind_result($id,$nom,$prenom,$result,$date);
			$users = array();
			while ($stmt->fetch()){

				$user = array();

				$user['id'] = $id;
				$user['nom']= $nom;
				$user['prenom'] = $prenom;
				$user['result'] = $result;
				$user['date'] = $date;
		
				array_push($users, $user);
			}
			return $users;
		}


	}