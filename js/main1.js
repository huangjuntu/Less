//设置别名
requirejs.config({
	paths:{
		jquery:'jquery-1.11.3.min'
	}
});
//引入模块
requirejs(['jquery','backtop'],function($,backtop){
	
//	new backtop.BackTop($("#backTop"),{
//		mode:'move',//和go
//		pos:100,
//		speed:2000
//		
//	});

//   插件写法
	$("#backTop").backtop({
		mode:'move'
	});
	
//	var scroll = new scrollto.ScrollTo({//	实例化并构造函数
//		dest:0,
//		speed:800
//	});
//	
////	$("#backTop").on("click",scroll.move);这个不对，需要加上新属性$.proxy，人为调整this指向，下面
//	$("#backTop").on("click",$.proxy(scroll.move,scroll));//两个参数表示：方法,this的指向
////	$("#backTop").on("click",$.proxy(scroll.go,scroll));
//
//
//
//
////	监听滚动事件
//  $(window).on("scroll",function(){
//  	checkPosition($(window).height());
//  });
//  
//  checkPosition($(window).height());//加载的时候执行一下这个函数
//  
//  
//  function checkPosition(pos){
//  	if($(window).scrollTop() > pos){//这里有个参数，所以要写个匿名函数，进行构造
//  		$("#backTop").fadeIn();
//  	}else{
//  		$("#backTop").fadeOut();
//  	}
//  }



//没有模块化封装的时候写法:一直到最后  没有scrollTo.js的加入

////引入模块
//requirejs(['jquery'],function($){
////	$('body').css("background-color","red");
////	按顺序写到上面进行测试,注释的部分
//
////	$("#backTop").on("click",move);
//	$("#backTop").on("click",go);//迅速返回顶部
//	
////	监听滚动事件
//  $(window).on("scroll",function(){
//  	checkPosition($(window).height());
//  });
//  
//  checkPosition($(window).height());//加载的时候执行一下这个函数
//  
//  function move(){
//  	$('html,body').animate({
//  		scrollTop:0
//  	},800);
//  }
//  
////  需求改变:返回到顶部的时候,迅速一下子
//  function go(){
//  	$('html,body').scrollTop(0);
//  }
//  
//  function checkPosition(pos){
//  	if($(window).scrollTop() > pos){//这里有个参数，所以要写个匿名函数，进行构造
//  		$("#backTop").fadeIn();
//  	}else{
//  		$("#backTop").fadeOut();
//  	}
//  }

})