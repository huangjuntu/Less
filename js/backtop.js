//引入模块,主要目的：封装模块
define(['jquery','scrollTo'], function($,scrollto) {
	function BackTop(el,opts) {
		this.opts = $.extend({}, BackTop.DEFAULTS, opts);
		this.$el = $(el); //上面的el转换为jquery对象
		
		this.scroll = new scrollto.ScrollTo({
			dest:0,
			speed:this.opts.speed
		});
		
//		按钮添加点击事件
		
		
		if(this.opts.mode == 'move'){
			this.$el.on('click',$.proxy(this._move,this));
		}else{
			this.$el.on('click',$.proxy(this._go,this));
		}
		
		$(window).on('scroll',$.proxy(this._checkPosition,this)); //下划线的目的是:仅供内部使用

	}
	BackTop.DEFAULTS = {
		mode:'move',
		pos:$(window).height()
	};
	BackTop.prototype._move = function(){
		this.scroll.move();
	};
	BackTop.prototype._go = function(){
		this.scroll.go();
	};
	BackTop.prototype._checkPosition = function(){
		var $el = this.$el;
		
		if($(window).scrollTop() > this.opts.pos) {
			$el.fadeIn();
		}else{
			$el.fadeOut();
		}
	};
	//	上面就是写好的,如何和外面进行通信?
	return {
		BackTop: BackTop
	};
	
});