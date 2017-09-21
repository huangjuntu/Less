requirejs.config({
	paths:{
		jquery:'jquery-1.11.3.min'
	}
});

//requirejs(['jquery'],function($){
//	$('body').css("background-color","red");
//})

requirejs(['jquery','val'],function($,validate){
	console.log(validate.isEqual(1,1));
})