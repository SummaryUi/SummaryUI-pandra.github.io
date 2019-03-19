<?php
	header("Content-type:text/html;charset=utf-8");
	// 一 获取请求信息
	$email = $_POST['email'];
	//二 与数据库建立连接
	$conn = mysql_connect('localhost','root','root');
	if(!$conn){
		die("连接失败！");
	}
	//选择数据库
	mysql_select_db("web1809",$conn);
	//执行sql语句
	$sqlstr = "select * from login where email='$email'";
	$result = mysql_query($sqlstr,$conn);
	//关闭 数据库
	mysql_close($conn);
	//三 响应
	if(mysql_num_rows($result)>0){
		echo "1";
		
	}else{
		echo "0";
	}
?>