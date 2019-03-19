

function save(sex){
	
	
		// 1 创建对象
		let xhr = new XMLHttpRequest();
		//2 设置请求参数
		xhr.open('post','php/set.php',true);
		//3 设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="1"){
					alert("注册成功！");
					location.href = "login.html";
				}else{
						
					}
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//4 发送请求
		xhr.send("email="+$$("#email").value + "&firstname="+$$("#firstname").value + "&lastname="+$$("#lastname").value + "&phone="+$$("#phone").value + "&sex="+sex + "&password="+$$("#password").value);// +"&sex="+sex
	}



	function checkemail(){
		
			let xhr = new XMLHttpRequest();
			//2 设置请求参数
			xhr.open('post','php/checkemail.php',true);
			//3 设置回调函数
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4 && xhr.status==200){
					if(xhr.responseText=="1"){
						$$("#spanBox").style.display = "block";
						$$("#spanBox").innerHTML="电子邮件地址已经存在";
						
					}else{
						
					}
				}
			}
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			//4 发送请求
			xhr.send("email="+$$("#email").value);
		}