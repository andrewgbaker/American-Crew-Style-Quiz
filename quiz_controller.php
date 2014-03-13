<?php
require_once("database.php");
$db = new Database();
$answers_arr = ['','','','','','']
$post_fields = ['clothes','music','friday_plans','drinking','girl','hair']
$values_string = ''
$i = 0
foreach($field in $post_fields) {
	if($_POST[$field]) {
		$answers_arr[$i] = $_POST[$field];
	}
	$i++;
}
switch($action) {
	case "submit_answers":
		$sql = "INSERT INTO answers('clothes','music','friday_plans','drinking','girl','hair') values (".implode(",",$answers_arr).")";
}
$answer = $_POST['answer'];

