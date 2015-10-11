<?php
	$name = $_POST['popinp'];
	$data = array();

	$data['status'] = 'OK';
	
	if ($name === '') {
		$data['status'] = 'error';	
		$data['text'] = 'Заполните имя!';
	}else{
		$data['status'] = 'OK';	
		$data['text'] = 'Успешно заполнено';
	}

  	header("Content-Type: application/json");
  	echo json_encode($data);
  	exit;
?>