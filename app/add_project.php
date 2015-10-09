<?php
	$data = array();

	$data['message'] = 'OK';

  	header("Content-Type: application/json");
  	echo json_encode($data);
  	exit;
?>