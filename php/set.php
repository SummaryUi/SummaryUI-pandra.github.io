<?php
	header("Content-type:text/html;charset=utf-8");
	// 一 获取请求信息

	/*xhr.send("email="+$("#email").value + "&firstname="+$("#firstname").value + "&lastname="+$("#lastname").value + "&phone="+$("#phone").value + "&password="+$("#password").value +"&sex="+sex);*/

	$email = $_POST['email'];
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$phone = $_POST['phone'];
	$password = $_POST['password'];
	$sex = $_POST['sex'];
	//二 与数据库建立连接
	$conn = mysql_connect('localhost','root','root');
	if(!$conn){
		die("连接失败！");
	}
	//选择数据库
	mysql_select_db("web1809",$conn);
	//执行sql语句
	$sqlstr = "insert into login values('$email','$firstname','$lastname','$phone','$password','$sex')";
	$result = mysql_query($sqlstr,$conn);
	//关闭 数据库
	mysql_close($conn);
	//三 响应
	if($result>0){
		echo "1";
	}else{
		echo "0";
	}
?>