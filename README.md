侧栏工具条开发整理
Less
Less介绍
Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
Less 可以运行在 Node 或浏览器端。
Sass和css 异同

相同点：
· 混入(Mixins)——class中的class；<br/>
· 参数混入——可以传递参数的class，就像函数一样；<br/>
· 嵌套规则——Class中嵌套class，从而减少重复的代码；<br/>
· 运算——CSS中用上数学；<br/>
· 颜色功能——可以编辑颜色；<br/>
· 名字空间(namespace)——分组样式，从而可以被调用；<br/>
· 作用域——局部修改样式；<br/>
· JavaScript 赋值——在CSS中使用JavaScript表达式赋值<br/>

不同点：
实现方式，LESS是基于JavaScript，所以，是在客户端处理的。Sass是基于Ruby的，然后是在服务器端处理的。
还有很多不一样的，可见下面的其他参考。

Less用法及koala使用
本地用法：
1：使用koala工具，把之前的文件拖到koala里面，设置输出路径xx.css，并执行，这个软件的作用就是负责将less转换为css了，然后应用.css文件。另外在 koala里面执行编译，选择compress,可以压缩css,一般下都是nomal模式下。

2：使用hubilder，在建的项目xx.html里的link引入就是xx.css，样式的设置就在xx.less里面执行， 然后选择右键→编译 为xx.css或者参见下面：Hbuilder开启less自动编译的方法
Hbuilder开启less自动编译的方法
先说目前遇到的问题:如果在某一个 .less 中使用@import 'mixin'; 插入mixin.less的话，hubilder 编译的时候没有对应的css，在那个某一个 上面编译才可以。


3：Hbuilder开启less自动编译的方法，打开菜单栏->工具->预编译器设置，新建：
文件后缀为.less，（npm全局安装less, npm install -g less），→选择智能完成。以后每次less文件有改动保存的时候就会自动编译了
客户端用法：
<link rel="stylesheet/less" type="text/css" href="css/index1.less"/>
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js"></script>
或者：
<!--<link rel="stylesheet" href="css/index1.css" />--> 


index1.less 写完之后，引入，没有翻译成 .css
注意less样式文件一定要在引入less.js前先引入。 

备注：在服务器环境下使用！本地直接打开可能会报错！(只是可能会报错)

在服务器端使用：
在服务器端安装 LESS 的最简单方式就是通过 npm(node 的包管理器)
前提：npm 环境存在
$ npm install less          //最简单方式就是通过 npm(node 的包管理器),
$ npm install less@latest    //下载最新稳定版本的 LESS

假设xx.less文件中代码如下：
var less = require('less');
less.render('.class { width: 1 + 1 }', function (e, css) {
    console.log(css);
});

终端调用 LESS 解析器:
$ lessc  xx.less 或者：
$ lessc  xx.less > xx.css  //编译后的 CSS 压缩掉，那么加一个 -x 参数


语法（基本）
@import 'mixin';引入分离出来的less代码
变量：
// LESS
@color: #4D926F;

#header {
  color: @color;
}	/* 生成的 CSS */

#header {
  color: #4D926F;
}
混用：
// LESS

.rounded-corners (@radius: 5px) {
  border-radius: @radius;
}

#header {
  .rounded-corners;
}
#footer {
  .rounded-corners(10px);
}	/* 生成的 CSS */

#header {
  border-radius: 5px;
}

#footer {
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
}
嵌套规则：

// LESS

#header {
  h1 {
    font-size: 26px;
  }
  p { font-size: 12px;
a { text-decoration: none;
    }
  }
}	/* 生成的 CSS */

#header h1 {
  font-size: 26px;
}
#header p {
  font-size: 12px;
}
#header p a {
  text-decoration: none;
}

函数 & 运算：
// LESS

@the-border: 1px;
@base-color: #111;
@red: #842210;

#header {
  color: @base-color * 3;
  border-left: @the-border;
  border-right: @the-border * 2;}	/* 生成的 CSS */

#header {
  color: #333;
  border-left: 1px;
  border-right: 2px;
}}

混合-带参数有默认值
// LESS

.toolbar-item(@pos,@hoverPos){
   background-position: 0 @pos;
   &:hover {
     background-position: 0 @hoverPos;
        } 
}

.toolbar-item-feedback {
.toolbar-item(-426px,-488px);
}

.transition(@transition){
    -webkit-transition:@transition;
    -moz-transition: @transition;
    -ms-transition: @transition;
    -moz-transition: @transition;
transition: @transition;}

. transition(.transition(background-position 1s);)	/* 生成的 CSS */

.toolbar-item-feedback {
  background-position: 0 -426px;
}
.toolbar-item-feedback:hover {
  background-position: 0 -488px;
}





  -webkit-transition: background-position 1s;
  -ms-transition: background-position 1s;
  -moz-transition: background-position 1s;
  transition: background-position 1s;
但是在 sass的.scss中不是的
@mixin toolbar-item($pos,$hoverPos){
   background-position: 0 $pos;
   &:hover {
     background-position: 0 $hoverPos;
        } 
}
.toolbar-item-feedback {
@include toolbar-item(-426px,-488px);
}
继承：
在scss中，继承：@extend  .iconfont;

在less中，没有伪类的继承：&:extend(.iconfont);

但是如果是继承伪类  .iconfont：before ，怎么写？（目前没有解决）
RequireJS
为什么使用RequireJS
1、	有效防止命名冲突
2、	声明不同js文件之间的依赖
3、	可以让代码以模块化的方式组织

官网：http://requirejs.org/  下载requirejs

RequireJS常用方法：
1、	requirejs.config  //配置别名
2、	requires        //引入之前的模块
3、	define          //定义新的模块

 
使用步骤
前提：Js文件夹中存在 jquery-1.11.3.min.js

1：index.html中创建入口文件
<script src="js/require.js" data-main = "js/main"></script>

2：main.js中
requirejs.config({
	paths:{jquery:'jquery-1.11.3.min'}
});

//requirejs(['jquery'],function($){
//	$('body').css("background-color","red");
//})  或者下面

requirejs(['jquery','val'],function($,validate){
	console.log(validate.isEqual(1,1));   //true
})

3：val.js中
define(['jquery'],function($){
	return{
		isEmpty:function(){},
	    checkLength:function(){},
	    isEqual:function(str1,str2){
		 return str1 === str2;
	}
		
	};
});

侧栏工具-案例分析
 
三种方式：
使用背景图片的方式（CSS精灵）
代码思路：
#icon{background-image:url(/整图地址); background-repeat:no-repeat;width:;height:;}
引用该类 .. 然后在元素中逐一定义背景坐标 .. 以下为关键属性 ..
.ico1 {background-position:X坐标 Y坐标}
.ico2 {background-position:X坐标 Y坐标}
.ico3 {background-position:X坐标 Y坐标}
.nav {background-position:X坐标 Y坐标}
内容如下：
HTML:
A:<link rel="stylesheet/less" type="text/css" href="css/index1.less"/>
B:<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js"></script>
C:或者直接引用.css<!--<link rel="stylesheet" href="css/index1.css" />-->

效果发现：用AB刷新页面的话，没有什么变化，但是C的话，会先加载一遍图片，为什么这么说呢，因为刷新的时候都可以看到加载过程！

<div class="toolbar">
	<a href="javascript:;" class="toolbar-item toolbar-item-weixin">
		<span class="toolbar-layer"></span>
	</a>
	<a href="javascript:;" class="toolbar-item toolbar-item-feedback"></a>
	<a href="javascript:;" class="toolbar-item toolbar-item-app">
		<span class="toolbar-layer"></span>
	</a>
	<a href="javascript:;" class="toolbar-item toolbar-item-top"></a>
</div>

主要的Less:
@toolbar-size: 52px;
* {padding: 0; margin: 0;}

.toolbar {
    position: fixed;
    left: 50%;
    bottom: 5px;
    margin-left: - @toolbar-size / 2;
}
每个共同的class标签写背景图片属性
.toolbar-item {
    position: relative;
    cursor: pointer;
    width: @toolbar-size;
    height: @toolbar-size;
    /*background: pink;*/
    margin: 10px 0;
    background: url(../img/toolbar.png) no-repeat;
    display: block;
    transition: background-position 1s;
    
    &:hover {
        .toolbar-layer {
            opacity: 1;
            filter: alpha(opacity=100);
            transform: scale(1);
        }
    }
}
针对共同的class的单独的一个进行背景图片定位
.toolbar-item-weixin {
    background-position: 0 -798px;
    &:hover {
        background-position: 0 -860px;
    }
    .toolbar-layer {
        height: 212px;
        background-position: 0 0;
    }
}

.toolbar-item-feedback {
    background-position: 0 -426px;
    &:hover {
        background-position: 0 -488px;
    }
}
CSS3的一些效果
.toolbar-layer {
    position: absolute;
    right: @toolbar-size - 6;
    bottom: -10px;
    width: 172px;
    background: url(../img/toolbar.png) no-repeat;
    opacity: 0;
    filter: alpha(opacity=0);
transform-origin: right bottom;//右下角出现  或者95%  95%
    transform: scale(0.01);
    transition:all 1s;
}
优缺点：
总结：使用背景图片的方式
优点，缺点和兼容性
1、html结构简单
2、兼容性良好，可以兼容到IE6。
3、使用大量图片，对性能有一定影响，不利于修改，所以接下来，图标字体方法

使用图标字体的方式
1：首先下载图标字体，我是在http://www.iconfont.cn/plus/collections/detail?cid=3261 阿里巴巴矢量图标上下载的。
2、下载后 使用 了 iconfont.css 里面的所有的内容，前面 .less页面上引入 相对应的class就行了。

问题：
在sublime中的快捷键，安装 Nameclass 插件（sublime选中所有不重复的class快捷键），失败(目前放弃了)；
package install 报错 ( 目前没有解决！)
there are no packages available for installation.怎么办？下面参考方法，借鉴了，但是还是没有解决。
https://packagecontrol.io/installation#st2
http://blog.csdn.net/freshlover/article/details/44261229

代码思路：
利用overflow：hidden实现隐藏，当鼠标hover的时候 定位的top为0。没有hover之前，要出现的位置定位为52px,原来那个就为 -52px.通过hover切换，速度由.transition(top 1s);控制，还有透明度，缩放以及怎么出现的方式。

主要代码如下：
上面的引用的不变。
<div class="toobar">
	<a href="javascript:;" class="toolbar-item">
		<span class="toobar-btn">
			<i class="toolbar-icon icon-chat iconfont"></i>
 //另外两个class是下载的图标代码样式
			<span class="toolbar-text">公众<br/>账号</span>
		</span>
		<span class="toolbar-layer toolbar-layer-weixin"></span>
	</a>
	
	<a href="javascript:;" class="toolbar-item">
		<span class="toobar-btn">
			<i class="toolbar-icon icon-yingdaicon04 iconfont"></i>
			<span class="toolbar-text">意见<br/>反馈</span>
		</span>
	</a>
（下面补充： icon-5app    APP<br/>下载   toolbar-layer-app
   icon-verticalaligntop   返回<br/>顶部  ）
	</div>

主要的Less
公共：mixin.less
//封装css3在各个浏览器的兼容性
.transition(@transition){
    -webkit-transition:@transition;
    -moz-transition: @transition;
    -ms-transition: @transition;
    -moz-transition: @transition;
    transition: @transition;
}
.scale(@scale){
    -webkit-transform: scale(@scale);
    -moz-transform: scale(@scale);
    -ms-transform: scale(@scale);
    -moz-transform: scale(@scale);
    transform: scale(@scale);
}	.transform-origin(@origin){
    -webkit-transform-origin: @origin;
    -moz-transform-origin: @origin;
    -ms-transform-origin: @origin;
    -moz-transform-origin: @origin;
    transform-origin: @origin;
}

//为了兼容IE
.opacity(@opacity){
    @var:@opacity * 100;
    filter: alpha(opacity=@var);
    opacity: @opacity;
}

用法：参见混合-带参数有默认值 目录

主要的toolbar.less
//第二种方法:使用图标字体方法
@toolbar-size: 52px;
.toolbar-item,.toobar-btn,.toolbar-icon,.toolbar-text{
    width: @toolbar-size;
    height: @toolbar-size;
}
.toolbar-icon,.toolbar-text{
    position: absolute;
    left: 0;
    color: #fff;
    text-align: center;
    .transition(top 1s);
}
//普通的居中
.toobar {
    position: fixed;left: 50%;bottom: 5px;
    margin-left: - @toolbar-size / 2;
}

.toolbar-item {
    position: relative;
    cursor: pointer;
    margin: 10px 0;
    display: block;
    &:hover {
        .toolbar-icon {
            top: -@toolbar-size;
        }
        .toolbar-text {
            top: 0;
        }
        .toolbar-layer {
            .opacity(1);
            .scale(1);
        }
    }
}	.toobar-btn {
    position: absolute;   
top: 0;
    left: 0;
    overflow: hidden;
}
.toolbar-icon {
    top: 0;
    background: #d0d6d9;
    font-size: 30px;
    line-height: @toolbar-size;
}
.toolbar-text {
    top: @toolbar-size;
    background: #98a1a6;
    font-size: 12px;
    padding-top: 12px;
    line-height: 1.2;
}

.toolbar-layer {
    background: url(../img/toolbar.png) no-repeat;
    position: absolute;
    right: @toolbar-size - 6;
    bottom: -10px;
    width: 172px;
    .opacity(0);
    .transform-origin(95% 95%);
    .scale(0.01);
    .transition(all 1s);
}
然后设置：.toolbar-layer-weixin和app的高212，和位置0 0 

优缺点：
总结：使用图标字体的方式
优点，缺点和兼容性
1、避免图片使用，节约性能，修改方便
2、缺点：Html结构稍微复杂
3、不兼容IE6,IE7因为图标字体要用IE8的原因，所以接下来，before和after 伪类方法

利用before和after 伪类的方式(有疑问)
(before和after)
用这两个的话，需要content:""
如果&:after {content: "返回\A顶部";}  文字需要换行的话，添加 \A
另外，同时加上：white-space: pre;

问题：Less继承之前.iconfont：before的样式，怎么写？？
在scss中，继承：@extend  .iconfont;
在less中，没有伪类的继承：&:extend(.iconfont);
但是如果是继承伪类  .iconfont：before ，怎么写？
 未解决，保留！先不尝试了

代码思路：
.toolbar-btn {
        &:before {
            content: "\ed82";
        }
//     &:extend(.icon-verticalaligntop);
      &:after {
            content: "返回\A顶部";
        }
}	注意：
(before和after)
用这两个的话，需要content:""
如果
&：after {
            content: "返回\A顶部";
        }  文字需要换行的话，添加 \A
另外，同时加上：white-space: pre;

主要代码如下：
<!--方法三：利用before和after 伪类的方式-->
<div class="toolbar">
	<a href="javascript:;" class="toolbar-item toolbar-item-weixin">
		<span class="toolbar-btn"></span>
	</a><a href="javascript:;" class="toolbar-item toolbar-item-feedback">
		<span class="toolbar-btn"></span>
	</a>
	<a href="javascript:;" class="toolbar-item toolbar-item-app">
		<span class="toolbar-btn"></span>
	</a>
	<a href="javascript:;" class="toolbar-item toolbar-item-top">
		<span class="toolbar-btn"></span>
	</a>
</div>

主要的Less:
//方法三：利用before和after 伪类的方式
@toolbar-size:52px;
.toolbar {
    position: fixed;
    left: 50%;
    bottom: 5px;
    margin-left: - @toolbar-size / 2;
}
.toolbar-item {
    position: relative;
    display: block;
    width: @toolbar-size;
    height: @toolbar-size;
    margin: 10px 0;
    &:hover {
        .toolbar-btn {
            &:before {top:- @toolbar-size}
            &:after {top:0; }}
        &:after{ .opacity(1);.scale(1); } }
    //  代表二维码
    &:after {
        content: "";
        position: absolute;
        right: @toolbar-size - 6;
        bottom: -10px;
        width: 172px;
        background: url(../img/toolbar_img.png) no-repeat;
        .opacity(0);
        .transform-origin(95% 95%);
        .scale(0.01);
        .transition(all 1s);}}
.toolbar-item-weixin {
    &:after {
        content: "";
        height: 212px;
        background-position: 0 0;
    }
    .toolbar-btn {
        &:before {
            content: "\e63b";
        }
        &:after {	content: "公众\A账号";
        }}}  
.toolbar-item-feedback {
    .toolbar-btn {
        &:before {
            content: "\e643";
        }
//      &:extend(.icon-yingdaicon04);      
&:after {
            content: "意见\A反馈";
        }
    }
}
.toolbar-btn {
    &,&:before,&:after{
        width: @toolbar-size;
        height: @toolbar-size;
        position: absolute;
        left: 0;
    }
    &:before,&:after{
         content: "";
         color: #fff;
         text-align: center;
         .transition(top 1s);
    }
    top: 0; overflow: hidden;
    &:extend(.iconfont);//  继承之前的样式
    &:before {//icon
        top: 0;
        line-height: @toolbar-size;
        background: #d0d6d9;
        font-size: 30px;}
    &:after {//text
        top: @toolbar-size;
        background: #98a1a6;
        font-size: 12px;
        line-height: 1.2;
        padding-top: 12px;
        white-space: pre;
}}
这里面可以看出缺点：太繁琐了，太繁琐了！！！
优缺点：
总结：利用before和after 伪类的方式
优点，缺点和兼容性
1、	避免图片使用，节约性能，修改方便
2、	HTML结构简单，但是CSS复杂
3、	不兼容IE6,IE7

以上三种方法：考虑兼容性的话，可以选择第一种；对性能要求高的话，使用后两种

用到的CSS3实现简单的动画效果（主要）
1、 过渡效果transition
transition: background-position 1s;

2、 2D变换transform
transform-origin(right bottom)); // 变换的基准点
transform: scale(0.01);
JS实现返回顶部按钮功能 
这里主要是用上述的require.js,过程或参照上面的使用步骤或下面的流程
1：官网：http://requirejs.org/  下载requirejs
2：引入：<script src="js/require.js" data-main="js/main1"></script><!--js入口-->
3：main1.js中
//设置别名
requirejs.config({
	paths:{
		jquery:'jquery-1.11.3.min'  //js中存在的文件
	}
});
//引入模块
requirejs(['jquery'],function($){
//	$('body').css("background-color","red");
//	按顺序写到上面进行测试,注释的部分
   里面写js
})

Js主要内容：
//设置别名
requirejs.config({
	paths:{jquery:'jquery-1.11.3.min'}});
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
    checkPosition($(window).height());//加载的时候执行一下这个函数	function move(){
    	$('html,body').animate({
    		scrollTop:0
    	},800);
    }
//  需求改变:返回到顶部的时候,迅速一下子
    function go(){
    	$('html,body').scrollTop(0);
    }
    
    function checkPosition(pos){
    	if($(window).scrollTop() > pos){
//这里有个参数，所以要写个匿名函数，进行构造
    	$("#backTop").fadeIn();
    	}else{
    		$("#backTop").fadeOut();}}})

源代码：
https://github.com/huangjuntu/Less
git@github.com:huangjuntu/Less.git
https://github.com/huangjuntu/Less.git

问题：
客户端用法中，传到服务器上，是不是用less的话不能实现跨域？就会报错了？
再次实验下发现又可以了！是因为缓存么？

其他参考
Koala下载：http://koala-app.com/index-zh.html
Less网站：http://www.bootcss.com/p/lesscss/
LESS介绍及其与Sass的差异： http://blog.jobbole.com/24671/
我的：
https://github.com/GongchuangSu/Front-end_Web_In_Action/tree/master/toolbar
https://huangjuntu.vip/2017/09/20/css-sprise/
Hubilder快捷键学习
1：选择某几列：统一选中，按ctrl
2：选择列：ctrl+alt+C
3： 左侧输入，右侧输出
. Toobar, 按下tab键	<div class="toobar"></div>
a[href="javascript:;"].toolbar-item,按下tab键	<a href="javascript:;" class="toolbar-item"></a>
p{111}*100	100个p标签，内容为111

