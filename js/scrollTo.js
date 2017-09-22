//引入模块,主要目的：封装模块
define(['jquery'], function() {
	function ScrollTo(opts) {
		//		jquery的extend方法
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);
		//将用户传递的参数去覆盖默认的参数，生成一个新的对象，并返回保存出来为this.opts;
		this.$el = $('html,body'); //缓存下来

	}

	ScrollTo.prototype.move = function() {
		var opts = this.opts,
		    dest = opts.dest;

//		console.log(this); //this指向的是返回顶部代码

//缺点:向下时,点击向上,一直点击,会发现没有滚动条了，因为点击了多少次，就执行了多少次动画，这个发现好
//分析。点击向上的前提是：滚动条没有在运动或者已经到达顶端，就不应该再次调用animate方法，所以加一个条件了

		if($(window).scrollTop() != dest) {
			if(!this.$el.is(':animated')) {console.log(1);
				this.$el.animate({
					scrollTop: dest
				}, opts.apeed);
			}
		}

	};

	ScrollTo.prototype.go = function() {
		var dest = this.opts.dest;
		if($(window).scrollTop() != dest) {//判断只有没有到达目的地的时候执行
			this.$el.scrollTop(dest);
		}
		
	};

	ScrollTo.DEFAULTS = {
		dest: 0, //目的地 destination  表示位置
		apeed: 800 //滚动条运动的速度，设为默认值
	};

	//	上面就是写好的,如何和外面进行通信?
	return {
		ScrollTo: ScrollTo
	};

});