
侧栏工具条开发整理

&nbsp;

<a href="#_Toc493868075">Less 1</a>

<a href="#_Toc493868076">Less介绍. 1</a>

<a href="#_Toc493868077">Sass和css 异同. 1</a>

<a href="#_Toc493868078">Less用法及koala使用. 1</a>

<a href="#_Toc493868079">本地用法：. 1</a>

<a href="#_Toc493868080">Hbuilder开启less自动编译的方法. 2</a>

<a href="#_Toc493868081">客户端用法：. 2</a>

<a href="#_Toc493868082">在服务器端使用：. 2</a>

<a href="#_Toc493868083">语法（基本）. 3</a>

<a href="#_Toc493868084">变量：. 3</a>

<a href="#_Toc493868085">混用：. 3</a>

<a href="#_Toc493868086">嵌套规则：. 3</a>

<a href="#_Toc493868087">函数 &amp; 运算：. 4</a>

<a href="#_Toc493868088">混合-带参数有默认值. 4</a>

<a href="#_Toc493868089">继承：. 5</a>

<a href="#_Toc493868090">RequireJS 5</a>

<a href="#_Toc493868091">为什么使用RequireJS 5</a>

<a href="#_Toc493868092">使用步骤. 6</a>

<a href="#_Toc493868093">侧栏工具-案例分析. 7</a>

<a href="#_Toc493868094">三种方式：. 7</a>

<a href="#_Toc493868095">使用背景图片的方式（CSS精灵）. 7</a>

<a href="#_Toc493868096">使用图标字体的方式. 10</a>

<a href="#_Toc493868097">利用before和after 伪类的方式. 12</a>

<a href="#_Toc493868098">用到的CSS3实现简单的动画效果（主要）. 15</a>

<a href="#_Toc493868099">JS实现返回顶部按钮功能. 15</a>

<a href="#_Toc493868100">源代码：. 16</a>

<a href="#_Toc493868101">问题：. 16</a>

<a href="#_Toc493868102">其他参考. 16</a>

<u>
</u>

&nbsp;
<h1><a name="_Toc493868075"></a>Less</h1>
<h2><a name="_Toc493868076"></a>Less介绍</h2>
Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。

Less 可以运行在 Node 或浏览器端。
<h2><a name="_Toc493868077"></a>Sass和css 异同</h2>
相同点：
<ul>
 	<li>混入(Mixins)——class中的class；</li>
 	<li>参数混入——可以传递参数的class，就像函数一样；</li>
 	<li>嵌套规则——Class中嵌套class，从而减少重复的代码；</li>
 	<li>运算——CSS中用上数学；</li>
 	<li>颜色功能——可以编辑颜色；</li>
 	<li>名字空间(namespace)——分组样式，从而可以被调用；</li>
 	<li>作用域——局部修改样式；</li>
 	<li>JavaScript 赋值——在CSS中使用JavaScript表达式赋值</li>
</ul>
&nbsp;

不同点：

实现方式，LESS是基于JavaScript，所以，是在客户端处理的。Sass是基于Ruby的，然后是在服务器端处理的。

还有很多不一样的，可见下面的其他参考。

&nbsp;
<h2><a name="_Toc493868078"></a>Less用法及koala使用</h2>
<h3><a name="_Toc493868079"></a>本地用法：</h3>
1：使用koala工具，把之前的文件拖到koala里面，设置输出路径xx.css，并执行，这个软件的作用就是负责将less转换为css了，然后应用.css文件。另外在 koala里面执行编译，选择compress,可以压缩css,一般下都是nomal模式下。

&nbsp;

2：使用hubilder，在建的项目xx.html里的link引入就是xx.css，样式的设置就在xx.less里面执行， 然后选择右键→编译 为xx.css或者参见下面：Hbuilder开启less自动编译的方法<a name="_Toc493868080"></a>
<h3>Hbuilder开启less自动编译的方法</h3>
先说目前遇到的问题:如果在某一个 .less 中使用@import 'mixin'; 插入mixin.less的话，hubilder 编译的时候没有对应的css，在那个某一个 上面编译才可以。

&nbsp;

&nbsp;

3：Hbuilder开启less自动编译的方法，打开菜单栏-&gt;工具-&gt;预编译器设置，新建：

文件后缀为.less，（npm全局安装less, npm install -g less），→选择智能完成。以后每次less文件有改动保存的时候就会自动编译了
<h3><a name="_Toc493868081"></a>客户端用法：</h3>
<table>
<tbody>
<tr>
<td width="568">&lt;link rel="stylesheet/less" type="text/css" href="css/index1.less"/&gt;

&lt;script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js"&gt;&lt;/script&gt;

或者：

&lt;!--&lt;link rel="stylesheet" href="css/index1.css" /&gt;--&gt;

&nbsp;</td>
</tr>
</tbody>
</table>
&nbsp;

index1.less 写完之后，引入，没有翻译成 .css

注意less样式文件一定要在引入less.js前先引入。

&nbsp;

备注：在服务器环境下使用！本地直接打开可能会报错！(只是可能会报错)

&nbsp;
<h3><a name="_Toc493868082"></a>在服务器端使用：</h3>
在服务器端安装 LESS 的最简单方式就是通过 npm(node 的包管理器)

前提：npm 环境存在

$ npm install less          //最简单方式就是通过 npm(node 的包管理器),

$ npm install less@latest    //下载最新稳定版本的 LESS

&nbsp;
<table>
<tbody>
<tr>
<td width="568">假设xx.less文件中代码如下：

var less = require('less');

less.render('.class { width: 1 + 1 }', function (e, css) {

console.log(css);

});

&nbsp;

终端调用 LESS 解析器:

$ lessc  xx.less 或者：

$ lessc  xx.less &gt; xx.css  //编译后的 CSS 压缩掉，那么加一个 -x 参数</td>
</tr>
</tbody>
</table>
&nbsp;

&nbsp;
<h2><a name="_Toc493868083"></a>语法（基本）</h2>
@import 'mixin';引入分离出来的less代码
<h3><a name="_Toc493868084"></a>变量：</h3>
<table>
<tbody>
<tr>
<td width="284">// LESS

@color: #4D926F;

&nbsp;

#header {

color: @color;

}</td>
<td width="284">/* 生成的 CSS */

&nbsp;

#header {

color: #4D926F;

}</td>
</tr>
</tbody>
</table>
<h3><a name="_Toc493868085"></a>混用：</h3>
<table>
<tbody>
<tr>
<td width="284">// LESS

&nbsp;

.rounded-corners (@radius: 5px) {

border-radius: @radius;

}

&nbsp;

#header {

.rounded-corners;

}

#footer {

.rounded-corners(10px);

}</td>
<td width="284">/* 生成的 CSS */

&nbsp;

#header {

border-radius: 5px;

}

&nbsp;

#footer {

border-radius: 10px;

-webkit-border-radius: 10px;

-moz-border-radius: 10px;

}</td>
</tr>
</tbody>
</table>
<h3><a name="_Toc493868086"></a>嵌套规则：</h3>
<table>
<tbody>
<tr>
<td width="284">&nbsp;

// LESS

&nbsp;

#header {

h1 {

font-size: 26px;

}

p { font-size: 12px;

a { text-decoration: none;

}

}

}</td>
<td width="284">/* 生成的 CSS */

&nbsp;

#header h1 {

font-size: 26px;

}

#header p {

font-size: 12px;

}

#header p a {

text-decoration: none;

}

&nbsp;</td>
</tr>
</tbody>
</table>
<h3><a name="_Toc493868087"></a>函数 &amp; 运算：</h3>
<table>
<tbody>
<tr>
<td width="284">// LESS

&nbsp;

@the-border: 1px;

@base-color: #111;

@red: #842210;

&nbsp;

#header {

color: @base-color * 3;

border-left: @the-border;

border-right: @the-border * 2;}</td>
<td width="284">/* 生成的 CSS */

&nbsp;

#header {

color: #333;

border-left: 1px;

border-right: 2px;

}}

&nbsp;</td>
</tr>
</tbody>
</table>
<h3><a name="_Toc493868088"></a>混合-带参数有默认值</h3>
<table>
<tbody>
<tr>
<td width="284">// LESS

&nbsp;

.toolbar-item(@pos,@hoverPos){

background-position: 0 @pos;

&amp;:hover {

background-position: 0 @hoverPos;

}

}

&nbsp;

.toolbar-item-feedback {

.toolbar-item(-426px,-488px);

}

&nbsp;

.transition(@transition){

-webkit-transition:@transition;

-moz-transition: @transition;

-ms-transition: @transition;

-moz-transition: @transition;

transition: @transition;}

&nbsp;

. transition(.transition(background-position 1s);)</td>
<td width="284">/* 生成的 CSS */

&nbsp;

.toolbar-item-feedback {

background-position: 0 -426px;

}

.toolbar-item-feedback:hover {

background-position: 0 -488px;

}

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

-webkit-transition: background-position 1s;

-ms-transition: background-position 1s;

-moz-transition: background-position 1s;

transition: background-position 1s;</td>
</tr>
</tbody>
</table>
但是在 sass的.scss中不是的

@mixin toolbar-item($pos,$hoverPos){

background-position: 0 $pos;

&amp;:hover {

background-position: 0 $hoverPos;

}

}

.toolbar-item-feedback {

@include toolbar-item(-426px,-488px);

}
<h3><a name="_Toc493868089"></a>继承：</h3>
在scss中，继承：@extend  .iconfont;

&nbsp;

在less中，没有伪类的继承：&amp;:extend(.iconfont);

&nbsp;

但是如果是继承伪类  .iconfont：before ，怎么写？（目前没有解决）
<h1><a name="_Toc493868090"></a>RequireJS</h1>
<h2><a name="_Toc493868091"></a>为什么使用RequireJS</h2>
<ul>
 	<li>有效防止命名冲突</li>
 	<li>声明不同js文件之间的依赖</li>
 	<li>可以让代码以模块化的方式组织</li>
</ul>
&nbsp;

官网：<a href="http://requirejs.org/">http://requirejs.org/</a>  下载requirejs

&nbsp;

RequireJS常用方法：
<ul>
 	<li>config //配置别名</li>
 	<li>requires //引入之前的模块</li>
 	<li>define //定义新的模块</li>
</ul>
&nbsp;
<h2><a name="_Toc493868092"></a>使用步骤</h2>
前提：Js文件夹中存在 jquery-1.11.3.min.js

&nbsp;

1：index.html中创建入口文件

&lt;script src="js/require.js" data-main = "js/main"&gt;&lt;/script&gt;

&nbsp;

2：main.js中
<table>
<tbody>
<tr>
<td width="553">requirejs.config({

paths:{jquery:'jquery-1.11.3.min'}

});

&nbsp;

//requirejs(['jquery'],function($){

//      $('body').css("background-color","red");

//})  或者下面

&nbsp;

requirejs(['jquery','val'],function($,validate){

console.log(validate.isEqual(1,1));   //true

})</td>
</tr>
</tbody>
</table>
&nbsp;

3：val.js中
<table>
<tbody>
<tr>
<td width="553">define(['jquery'],function($){

return{

isEmpty:function(){},

checkLength:function(){},

isEqual:function(str1,str2){

return str1 === str2;

}

&nbsp;

};

});</td>
</tr>
</tbody>
</table>
&nbsp;
<h1><a name="_Toc493868093"></a>侧栏工具-案例分析</h1>
<h2><a name="_Toc493868094"></a>三种方式：</h2>
<h3><a name="_Toc493868095"></a>使用背景图片的方式（CSS精灵）</h3>
<h4>代码思路：</h4>
#icon{background-image:url(/整图地址); background-repeat:no-repeat;width:;height:;}
引用该类 .. 然后在元素中逐一定义背景坐标 .. 以下为关键属性 ..

.ico1 {background-position:X坐标 Y坐标}.ico2 {background-position:X坐标 Y坐标}.ico3 {background-position:X坐标 Y坐标}.nav {background-position:X坐标 Y坐标}

内容如下：

HTML:
<table>
<tbody>
<tr>
<td width="568">A:&lt;link rel="stylesheet/less" type="text/css" href="css/index1.less"/&gt;

B:&lt;script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js"&gt;&lt;/script&gt;

C:或者直接引用.css&lt;!--&lt;link rel="stylesheet" href="css/index1.css" /&gt;--&gt;

&nbsp;

效果发现：用AB刷新页面的话，没有什么变化，但是C的话，会先加载一遍图片，为什么这么说呢，因为刷新的时候都可以看到加载过程！

&nbsp;

&lt;div class="toolbar"&gt;

&lt;a href="javascript:;" class="toolbar-item toolbar-item-weixin"&gt;

&lt;span class="toolbar-layer"&gt;&lt;/span&gt;

&lt;/a&gt;

&lt;a href="javascript:;" class="toolbar-item toolbar-item-feedback"&gt;&lt;/a&gt;

&lt;a href="javascript:;" class="toolbar-item toolbar-item-app"&gt;

&lt;span class="toolbar-layer"&gt;&lt;/span&gt;

&lt;/a&gt;

&lt;a href="javascript:;" class="toolbar-item toolbar-item-top"&gt;&lt;/a&gt;

&lt;/div&gt;</td>
</tr>
</tbody>
</table>
&nbsp;

主要的Less:
<table>
<tbody>
<tr>
<td width="568">@toolbar-size: 52px;

* {padding: 0; margin: 0;}

&nbsp;

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

&nbsp;

&amp;:hover {

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

&amp;:hover {

background-position: 0 -860px;

}

.toolbar-layer {

height: 212px;

background-position: 0 0;

}

}

&nbsp;

.toolbar-item-feedback {

background-position: 0 -426px;

&amp;:hover {

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

transform-origin: right bottom;//右下角出现  或者95%  95%

transform: scale(0.01);

transition:all 1s;

}</td>
</tr>
</tbody>
</table>
<h4>优缺点：</h4>
总结：使用背景图片的方式

优点，缺点和兼容性

1、html结构简单

2、兼容性良好，可以兼容到IE6。

3、使用大量图片，对性能有一定影响，不利于修改，所以接下来，图标字体方法

&nbsp;
<h3><a name="_Toc493868096"></a>使用图标字体的方式</h3>
1：首先下载图标字体，我是在<a href="http://www.iconfont.cn/plus/collections/detail?cid=3261">http://www.iconfont.cn/plus/collections/detail?cid=3261</a> 阿里巴巴矢量图标上下载的。

2、下载后 使用 了 iconfont.css 里面的所有的内容，前面 .less页面上引入 相对应的class就行了。

&nbsp;

问题：

在sublime中的快捷键，安装 Nameclass 插件（sublime选中所有不重复的class快捷键），失败(目前放弃了)；

package install 报错 ( 目前没有解决！)

there are no packages available for installation.怎么办？下面参考方法，借鉴了，但是还是没有解决。

<a href="https://packagecontrol.io/installation#st2">https://packagecontrol.io/installation#st2</a>

<a href="http://blog.csdn.net/freshlover/article/details/44261229">http://blog.csdn.net/freshlover/article/details/44261229</a>

&nbsp;
<h4>代码思路：</h4>
利用overflow：hidden实现隐藏，当鼠标hover的时候 定位的top为0。没有hover之前，要出现的位置定位为52px,原来那个就为 -52px.通过hover切换，速度由.transition(top 1s);控制，还有透明度，缩放以及怎么出现的方式。

&nbsp;

主要代码如下：
<table>
<tbody>
<tr>
<td width="568">上面的引用的不变。

&lt;div class="toobar"&gt;

&lt;a href="javascript:;" class="toolbar-item"&gt;

&lt;span class="toobar-btn"&gt;

&lt;i class="toolbar-icon icon-chat iconfont"&gt;&lt;/i&gt;

//另外两个class是下载的图标代码样式

&lt;span class="toolbar-text"&gt;公众&lt;br/&gt;账号&lt;/span&gt;

&lt;/span&gt;

&lt;span class="toolbar-layer toolbar-layer-weixin"&gt;&lt;/span&gt;

&lt;/a&gt;

&nbsp;

&lt;a href="javascript:;" class="toolbar-item"&gt;

&lt;span class="toobar-btn"&gt;

&lt;i class="toolbar-icon icon-yingdaicon04 iconfont"&gt;&lt;/i&gt;

&lt;span class="toolbar-text"&gt;意见&lt;br/&gt;反馈&lt;/span&gt;

&lt;/span&gt;

&lt;/a&gt;

（下面补充： icon-5app    APP&lt;br/&gt;下载   toolbar-layer-app

icon-verticalaligntop   返回&lt;br/&gt;顶部  ）

&lt;/div&gt;</td>
</tr>
</tbody>
</table>
&nbsp;

主要的Less

公共：mixin.less
<table>
<tbody>
<tr>
<td width="284">//封装css3在各个浏览器的兼容性

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

}</td>
<td width="284">.transform-origin(@origin){

-webkit-transform-origin: @origin;

-moz-transform-origin: @origin;

-ms-transform-origin: @origin;

-moz-transform-origin: @origin;

transform-origin: @origin;

}

&nbsp;

//为了兼容IE

.opacity(@opacity){

@var:@opacity * 100;

filter: alpha(opacity=@var);

opacity: @opacity;

}

&nbsp;

用法：参见混合-带参数有默认值 目录</td>
</tr>
</tbody>
</table>
&nbsp;

主要的toolbar.less
<table>
<tbody>
<tr>
<td width="284">//第二种方法:使用图标字体方法

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

&nbsp;

.toolbar-item {

position: relative;

cursor: pointer;

margin: 10px 0;

display: block;

&amp;:hover {

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

}</td>
<td width="284">.toobar-btn {

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

&nbsp;

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

然后设置：.toolbar-layer-weixin和app的高212，和位置0 0</td>
</tr>
</tbody>
</table>
&nbsp;
<h4>优缺点：</h4>
总结：使用图标字体的方式

优点，缺点和兼容性

1、避免图片使用，节约性能，修改方便

2、缺点：Html结构稍微复杂

3、不兼容IE6,IE7因为图标字体要用IE8的原因，所以接下来，before和after 伪类方法

&nbsp;
<h3><a name="_Toc493868097"></a>利用before和after 伪类的方式(有疑问)</h3>
(before和after)

用这两个的话，需要content:""

如果&amp;:after {content: "返回\A顶部";}  文字需要换行的话，添加 \A

另外，同时加上：white-space: pre;

&nbsp;

问题：Less继承之前.iconfont：before的样式，怎么写？？

在scss中，继承：@extend  .iconfont;

在less中，没有伪类的继承：&amp;:extend(.iconfont);

但是如果是继承伪类  .iconfont：before ，怎么写？

未解决，保留！先不尝试了

&nbsp;
<h4>代码思路：</h4>
<table>
<tbody>
<tr>
<td width="284">.toolbar-btn {

&amp;:before {

content: "\ed82";

}

//     &amp;:extend(.icon-verticalaligntop);

&amp;:after {

content: "返回\A顶部";

}

}</td>
<td width="284">注意：

(before和after)

用这两个的话，需要content:""

如果

&amp;：after {

content: "返回\A顶部";

}  文字需要换行的话，添加 \A

另外，同时加上：white-space: pre;</td>
</tr>
</tbody>
</table>
&nbsp;

主要代码如下：
<table>
<tbody>
<tr>
<td width="568">&lt;!--方法三：利用before和after 伪类的方式--&gt;

&lt;div class="toolbar"&gt;

&lt;a href="javascript:;" class="toolbar-item toolbar-item-weixin"&gt;

&lt;span class="toolbar-btn"&gt;&lt;/span&gt;

&lt;/a&gt;&lt;a href="javascript:;" class="toolbar-item toolbar-item-feedback"&gt;

&lt;span class="toolbar-btn"&gt;&lt;/span&gt;

&lt;/a&gt;

&lt;a href="javascript:;" class="toolbar-item toolbar-item-app"&gt;

&lt;span class="toolbar-btn"&gt;&lt;/span&gt;

&lt;/a&gt;

&lt;a href="javascript:;" class="toolbar-item toolbar-item-top"&gt;

&lt;span class="toolbar-btn"&gt;&lt;/span&gt;

&lt;/a&gt;

&lt;/div&gt;</td>
</tr>
</tbody>
</table>
&nbsp;

主要的Less:
<table>
<tbody>
<tr>
<td width="284">//方法三：利用before和after 伪类的方式

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

&amp;:hover {

.toolbar-btn {

&amp;:before {top:- @toolbar-size}

&amp;:after {top:0; }}

&amp;:after{ .opacity(1);.scale(1); } }

//  代表二维码

&amp;:after {

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

&amp;:after {

content: "";

height: 212px;

background-position: 0 0;

}

.toolbar-btn {

&amp;:before {

content: "\e63b";

}

&amp;:after {</td>
<td width="284">content: "公众\A账号";

}}}

.toolbar-item-feedback {

.toolbar-btn {

&amp;:before {

content: "\e643";

}

//      &amp;:extend(.icon-yingdaicon04);

&amp;:after {

content: "意见\A反馈";

}

}

}

.toolbar-btn {

&amp;,&amp;:before,&amp;:after{

width: @toolbar-size;

height: @toolbar-size;

position: absolute;

left: 0;

}

&amp;:before,&amp;:after{

content: "";

color: #fff;

text-align: center;

.transition(top 1s);

}

top: 0; overflow: hidden;

&amp;:extend(.iconfont);//  继承之前的样式

&amp;:before {//icon

top: 0;

line-height: @toolbar-size;

background: #d0d6d9;

font-size: 30px;}

&amp;:after {//text

top: @toolbar-size;

background: #98a1a6;

font-size: 12px;

line-height: 1.2;

padding-top: 12px;

white-space: pre;

}}

这里面可以看出缺点：太繁琐了，太繁琐了！！！</td>
</tr>
</tbody>
</table>
<h4>优缺点：</h4>
总结：利用before和after 伪类的方式

优点，缺点和兼容性
<ul>
 	<li>避免图片使用，节约性能，修改方便</li>
 	<li>HTML结构简单，但是CSS复杂</li>
 	<li>不兼容IE6,IE7</li>
</ul>
&nbsp;

以上三种方法：考虑兼容性的话，可以选择第一种；对性能要求高的话，使用后两种

&nbsp;
<h2><a name="_Toc493868098"></a>用到的CSS3实现简单的动画效果（主要）</h2>
1、 过渡效果transition

transition: background-position 1s;

&nbsp;

2、 2D变换transform

transform-origin(right bottom)); // 变换的基准点

transform: scale(0.01);
<h2><a name="_Toc493868099"></a>JS实现返回顶部按钮功能</h2>
这里主要是用上述的require.js,过程或参照上面的使用步骤或下面的流程

1：官网：<a href="http://requirejs.org/">http://requirejs.org/</a>  下载requirejs

2：引入：&lt;script src="js/require.js" data-main="js/main1"&gt;&lt;/script&gt;&lt;!--js入口--&gt;

3：main1.js中
<table>
<tbody>
<tr>
<td width="568">//设置别名

requirejs.config({

paths:{

jquery:'jquery-1.11.3.min'  //js中存在的文件

}

});

//引入模块

requirejs(['jquery'],function($){

//      $('body').css("background-color","red");

//      按顺序写到上面进行测试,注释的部分

里面写js

})</td>
</tr>
</tbody>
</table>
&nbsp;

Js主要内容：
<table>
<tbody>
<tr>
<td width="284">//设置别名

requirejs.config({

paths:{jquery:'jquery-1.11.3.min'}});

//引入模块

requirejs(['jquery'],function($){

//      $('body').css("background-color","red");

//      按顺序写到上面进行测试,注释的部分

&nbsp;

//      $("#backTop").on("click",move);

$("#backTop").on("click",go);//迅速返回顶部

//      监听滚动事件

$(window).on("scroll",function(){

checkPosition($(window).height());

});

checkPosition($(window).height());//加载的时候执行一下这个函数</td>
<td width="284">function move(){

$('html,body').animate({

scrollTop:0

},800);

}

//  需求改变:返回到顶部的时候,迅速一下子

function go(){

$('html,body').scrollTop(0);

}

&nbsp;

function checkPosition(pos){

if($(window).scrollTop() &gt; pos){

//这里有个参数，所以要写个匿名函数，进行构造

$("#backTop").fadeIn();

}else{

$("#backTop").fadeOut();}}})</td>
</tr>
</tbody>
</table>
&nbsp;
<h1><a name="_Toc493868100"></a>源代码：</h1>
<a href="https://github.com/huangjuntu/Less">https://github.com/huangjuntu/Less</a>

<a href="mailto:git@github.com:huangjuntu/Less.git">git@github.com:huangjuntu/Less.git</a>

<a href="https://github.com/huangjuntu/Less.git">https://github.com/huangjuntu/Less.git</a>

&nbsp;
<h1><a name="_Toc493868101"></a>问题：</h1>
客户端用法中，传到服务器上，是不是用less的话不能实现跨域？就会报错了？

再次实验下发现又可以了！是因为缓存么？

&nbsp;
<h1><a name="_Toc493868102"></a>其他参考</h1>
Koala下载：<a href="http://koala-app.com/index-zh.html">http://koala-app.com/index-zh.html</a>

Less网站：<a href="http://www.bootcss.com/p/lesscss/">http://www.bootcss.com/p/lesscss/</a>

LESS介绍及其与Sass的差异： <a href="http://blog.jobbole.com/24671/">http://blog.jobbole.com/24671/</a>

我的：

<a href="https://github.com/GongchuangSu/Front-end_Web_In_Action/tree/master/toolbar">https://github.com/GongchuangSu/Front-end_Web_In_Action/tree/master/toolbar</a>

<a href="https://huangjuntu.vip/2017/09/20/css-sprise/">https://huangjuntu.vip/2017/09/20/css-sprise/</a>
<h1><a name="_Toc493868103"></a>Hubilder快捷键学习</h1>
1：选择某几列：统一选中，按ctrl

2：选择列：ctrl+alt+C

3： 左侧输入，右侧输出
<table>
<tbody>
<tr>
<td width="287">. Toobar, 按下tab键</td>
<td width="211">&lt;div class="toobar"&gt;&lt;/div&gt;</td>
</tr>
<tr>
<td width="287">a[href="javascript:;"].toolbar-item,按下tab键</td>
<td width="211">&lt;a href="javascript:;" class="toolbar-item"&gt;&lt;/a&gt;</td>
</tr>
<tr>
<td width="287">p{111}*100</td>
<td width="211">100个p标签，内容为111</td>
</tr>
</tbody>
</table>
&nbsp;
