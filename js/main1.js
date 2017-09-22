//设置别名
requirejs.config({
	paths:{
		jquery:'jquery-1.11.3.min'
	}
});

//引入模块
requirejs(['jquery'],function($){
//	$('body').css("background-color","red");
//	按顺序写到上面进行测试,注释的部分

//	$("#backTop").on("click",move);
	$("#backTop").on("click",go);//迅速返回顶部
	
//	监听滚动事件
    $(window).on("scroll",function(){
    	checkPosition($(window).height());
    });
    
    checkPosition($(window).height());//加载的时候执行一下这个函数
    
    function move(){
    	$('html,body').animate({
    		scrollTop:0
    	},800);
    }
    
//  需求改变:返回到顶部的时候,迅速一下子
    function go(){
    	$('html,body').scrollTop(0);
    }
    
    function checkPosition(pos){
    	if($(window).scrollTop() > pos){//这里有个参数，所以要写个匿名函数，进行构造
    		$("#backTop").fadeIn();
    	}else{
    		$("#backTop").fadeOut();
    	}
    }

})