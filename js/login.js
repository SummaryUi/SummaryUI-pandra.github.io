


function check(){
		// 1 创建对象
		let xhr = new XMLHttpRequest();
		//2 设置请求参数
		xhr.open('post','php/login.php',true);
		//3 设置回调函数
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4 && xhr.status==200){
				if(xhr.responseText=="1"){
					
				}else{
					$$("#spanId").innerHTML="无效的登录名或密码";
				}
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//4 发送请求
		xhr.send("email="+$$("#inBox").value + "&password="+$$("#passBox").value);
	}
	function submitFunc(){
		
			let xhr = new XMLHttpRequest();
			//2 设置请求参数
			xhr.open('post','php/login1.php',true);
			//3 设置回调函数
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4 && xhr.status==200){
					if(xhr.responseText=="1"){
						//存cookie
						if($$("#select").innerHTML="√"){
							saveCookie("username",$$("#inBox").value,7);
						}
						alert("登录成功！")
						location.href="myword.html";
						
					}else{
						$$("#spanId").innerHTML="无效的登录名或密码";
					}
				}
			}
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			//4 发送请求
			xhr.send("email="+$$("#inBox").value + "&password="+$$("#passBox").value);
		}