 (function(){
	var topObj = document.createElement("a");
	topObj.href = "##";
	topObj.style.cssText = `
							float: left;
							width: 100%;
							color: #706d75;
							font-size: 12px; 
							line-height: 25px;
							`
	topObj.innerHTML = "主页" + "&nbsp&nbsp" + "&gt"+ "&nbsp&nbsp" + "新品上市";
	$$(".sectiontop")[0].appendChild(topObj);

	$(function(){
		$.ajax({ 
			url: "php/getGoodsList.php", 
			type:"get",
			dataType:"json",
			async:true,
			date:{},
			success: function(data){
			    console.log("------success------")
			    console.log(data)
			    for(let i=0;i<data.length;i++){
					
			    	let str = "\
			    	<div class='goodsLis'>\
			    		<div class='flagtop'></div>\
			    		<div class='productimg'>\
							<img src='"+data[i].goodsImg+"'>\
						</div>\
						<div class='productId'>"+data[i].goodsName+"</div>\
						<div class='productprice'>￥"+data[i].goodsPrice+".00</div>\
						<div class='look'><a href='detail.html?goodsId="+data[i].goodsId+"'>快速查看</a></div>\
					</div>"
					$(".goodslist").append(str);
			    }   
			},
			error: function(data){
			    console.log("------error------")
			    console.log(data)
			}
		});

	})
			
		$(".goodslist").on("mouseenter","div img",function(){
			$(this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling).css("display","block");
				$(".look").mouseover(function(){
				$(this).css("display","block");
			});
			$(".look").click(function(){
				saveCookie("goodsId",data[i].goodsId,7);
				location.href = "detail.html";
			});

		});


		$(".goodslist").on("mouseleave","div img",function(){
			$(this.parentNode.nextElementSibling.nextElementSibling.nextElementSibling).css("display","none");
			$(".look").mouseout(function(){
				$(this).css("display","none");
			});
		});



		/*<div class='goodsLis'>\
			    	<div class='flagtop'></div>\
			    	<div class='productimg'>\
						<img src='"+data[i].goodsImg+"'>\
					</div>\
					<div class='productId'>"+data[i].goodsName+"</div>\
					<div class='look'>快速查看</div>\
					</div>"*/
	
})();
