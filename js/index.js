function $$(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}
	
function addDom(i,width){
	var left = (parseInt(width)-10)/2;
	var f = -(446-parseInt(width));
	domObj = document.createElement("div");
	domObj.class = "lis-1";
	domObj.style.cssText=`border: 1px solid #d2cfd3;
	border-top:none;
			box-sizing: border-box;
			width: 446px;
			height: 252px;
			background:#fff;
			position: absolute;
			
			top: 48.33px;`
			if(i<4){
				domObj.style.left = "-1px";
			}else{
				domObj.style.left = f+"px";
			}
	$$(".lisObj")[i].appendChild(domObj);

	ulObj = document.createElement("img");
	ulObj.src = "img/qt.png";
	ulObj.style.cssText=`
		position: absolute;
		top: 40px;
		z-index: 2;`
	ulObj.style.left = left+"px";
	$$(".lisObj")[i].appendChild(ulObj);

	dmObj = document.createElement("div");
	dmObj.style.cssText=`width:446px;
	height:247px;`
	domObj.appendChild(dmObj);
		lmObj = document.createElement("div");
		lmObj.style.cssText=`width:200px;
		height:62px;
		padding:15px;
		float:left;`
		dmObj.appendChild(lmObj);
		 for(let a=0; a<2; a++){
			lisObj = document.createElement("li");
			lisObj.style.cssText=`width:200px;
			height:30px;
			border-bottom:1px solid #ededed;`
			lmObj.appendChild(lisObj);
			 //if(a=0){
			lisObj.innerHTML="新年系列";
			//}else{
				lisObj.innerHTML="Pandora Reflexions系列";
			//}
		}
		rmObj = document.createElement("div");
		rmObj.style.cssText=`width:191px;
		height:227px;
		padding:10px;
		float:right;`
		dmObj.appendChild(rmObj);
			imgObj = document.createElement("img");
			imgObj.src = "img/lis1.jpg";
			imgObj.style.cssText=`
				width:192px;
				height:227px;`
			rmObj.appendChild(imgObj);

}



function removeDom(i){
	$$(".lisObj")[i].removeChild(ulObj);
	$$(".lisObj")[i].removeChild(domObj);
}

window.onload = function(){

	let arr = $$(".lisObj");
	for(let i in arr){
		
		$$(".lisObj")[i].onmouseover=function(){
			let width = getStyle(arr[i],"width");
			addDom(i,width);
			this.style.borderLeft="1px solid #d2cfd3";
			this.style.borderRight="1px solid #d2cfd3";
			this.style.zIndex = 2;
		}
		$$(".lisObj")[i].onmouseout=function(){
			removeDom(i);
			this.style.border = "none";
		}
	
	}

		$$("#selectcountry").onmouseover = function(){
			this.parentNode.style.cssText = `height:324.5px;`
			$$("#countrylist").style.cssText = `display:block;`
		}
		$$("#selectcountry").onmouseout = function(){
			this.parentNode.style.cssText = `height:276.5px;`
			$$("#countrylist").style.cssText = `display:none;`
		}

//ajax


	if($$("#select")){
		let i = 0;
		$$("#select").onclick = function(){
			i++;
			if(i%2==1){
				this.style.backgroundColor="#4caf50";
				this.style.textAlign="center";
				this.style.color="#fff";
				this.style.borderColor="#4caf50";
				this.innerHTML="√";
				$$("#submit").onclick = function(){
					check();
					submitFunc();
					
					}
			}else{
				this.style.backgroundColor="#fff";
				this.style.borderColor="#000";
				this.innerHTML="";
				this.nextElementSibling.innerHTML=""
			}
		}
	}
	
	if($$("#button-text")){
		$$("#button-text").onclick = function(){
			location.href = "index.html";
		}
	}



	// 注册信息
	// 1、已注册账号的验证
	if($$("#email")){
		$$("#email").onchange = function(){
			checkemail();
		}
	}
	

	// 2、未注册账号的注册
	//判断性别
	if($$("#set")){
		// var sex = "";
		// if($$("#boy").onclick = function(){
		// 	sex="男";
		// }){
		// 	sex = "男";
		// 	if($$("#girl").onclick = function(){
		// 		sex = "女";
		// }){
		// 	sex = "女";
		// }
		// }else {
		// 	sex = "女";
		// }
		// // 调用
		// $$("#set").onclick = function(){
		// 	save(sex);
		// }
	}
	


	// 登录框信息验证
	if($$("#submit")){
		// $$("#submit").onclick = function(){
		// check();
		// submitFunc();
		// }
	}
	
	if($$("#secChildLeft2")){
		let brr = $$("#secChildLeft2").children;
		for(let i in brr){
			brr[i].onfocus = function(){
				this.style.cssText = `border-bottom:1px solid #e5e5e5;`
			}
			brr[i].onblur = function(){
				this.style.cssText = `border-bottom:1px solid #000;`
			}
		}
	}
	
	if($$("#select1")){
		let i = 0;
		$$("#select1").onclick = function(){
		i++;
			if(i%2==1){
				this.style.backgroundColor="#4caf50";
				this.style.textAlign="center";
				this.style.color="#fff";
				this.style.borderColor="#4caf50";
				this.innerHTML="√";
				this.parentNode.style.cssText = `padding:0;
				border:none;
				border-radius:0;`
				var sex = "";
		if($$("#boy").onclick = function(){
			sex="男";
		}){
			sex = "男";
			if($$("#girl").onclick = function(){
				sex = "女";
		}){
			sex = "女";
		}
		}else {
			sex = "女";
		}
		// 调用
		$$("#set").onclick = function(){
			save(sex);
		}
			}else{
				this.style.backgroundColor="#fff";
				this.style.borderColor="#000";
				this.innerHTML="";
				this.parentNode.style.cssText = `
				padding: 5px 100px 8px 10px;
				border: 1px solid red;
				border-radius: 8px;`
			}
		}
	}

	if($$("#inBox")){
		$$("#inBox").onfocus = function(){
		this.style.cssText = `border-bottom:1px solid #e5e5e5;`
		}
		$$("#inBox").onblur = function(){
			this.style.cssText = `border-bottom:1px solid #000;`
		}
	}
	
	if($$("#passBox")){
		$$("#passBox").onfocus = function(){
		this.style.cssText = `border-bottom:1px solid #e5e5e5;`
		}

		$$("#passBox").onblur = function(){
			this.style.cssText = `border-bottom:1px solid #000;`
		}
	}
	
	// shoplist列表显示部分
	if($$(".exp")){
		
		var array = $$(".exp");
		for(let i in array){
			array[i].onclick = function(){
				if(this.nextElementSibling.style.display=="none"){
					console.log(i);
					this.style.cssText=`background-position-y:13px;`
					this.nextElementSibling.style.cssText=`display:block;`
				}else{
					console.log(i);
					this.style.cssText=`background-position-y:-5px;`
					this.nextElementSibling.style.cssText=`display:none;`
				}
				
			}
		}
	}
	

	
}