
window.onload=function(){
//首页滑过滑出菜单和搜索框显示隐藏效果
	$('#sreach-input').bind('keyup',function(){
		$('#sreach-suggest').show();
	})
	$('#sreach-input').bind('mouseout',function(){ /* 鼠标在其他地方点击一下就取消的事件*/
		$('#sreach-suggest').delay(4000).hide(0)
	})


//菜谱分类页里点击展开和收起时的效果
	$(".cates-list-more").eq(1).bind("click",function(){//id是唯一的，所以只有第一个id生效,改用class。
		$(".cate-list2").eq(1).show();
		$(".cate-list").eq(1).hide();
	})
	$(".cates-list-more2").eq(1).bind("click",function(){
		$(".cate-list").eq(1).show();
		$(".cate-list2").eq(1).hide();
	})
	$(".cates-list-more").eq(0).bind("click",function(){//id是唯一的，所以只有第一个id生效,改用class。
		$(".cate-list2").eq(0).show();
		$(".cate-list").eq(0).hide();
	})
	$(".cates-list-more2").eq(0).bind("click",function(){
		$(".cate-list").eq(0).show();
		$(".cate-list2").eq(0).hide();
	})
	$(".cates-list-more").eq(2).bind("click",function(){//id是唯一的，所以只有第一个id生效,改用class。
		$(".cate-list2").eq(2).show();
		$(".cate-list").eq(2).hide();
	})
	$(".cates-list-more2").eq(2).bind("click",function(){
		$(".cate-list").eq(2).show();
		$(".cate-list2").eq(2).hide();
	})
	
	//要一一对应应该需要for、数组之类的。

//var Oul =document.getElementsByTagName('ul')
//Oul.length   这是其中一种方法

	// switch(num){
	// 	case $(".list-a")[0]:
	// 	$(".cate-list2")[0].show();
	// 	$(".cate-list")[0].hide();
	// 	break;
	// }   就是这么个意思，不知道写法。
	
	//用户厨房页里点击标签切换主内容的js
	$(".bqgaikuang").bind('click',function(){
		$(".survey").show();
		$(".bigmenu").hide();
		$(".works").hide();
		$(".bigmenus").hide();
		$(".collect").hide();
		$(".message_board").hide();
	})
	$(".bqcaipu").bind('click',function(){
		$(".bigmenu").show();
		$(".works").hide();
		$(".survey").hide();
		$(".bigmenus").hide();
		$(".collect").hide();
		$(".message_board").hide();
	})
	$(".bqzuopin").bind('click',function(){
		$(".works").show();
		$(".survey").hide();
		$(".bigmenu").hide();
		$(".bigmenus").hide();
		$(".collect").hide();
		$(".message_board").hide();
	})
	$(".bqcaidan").bind('click',function(){
		$(".bigmenus").show();
		$(".bigmenu").hide();
		$(".works").hide();
		$(".survey").hide();
		$(".collect").hide();
		$(".message_board").hide();
	})
	$(".bqshoucang").bind('click',function(){
		$(".collect").show();
		$(".bigmenu").hide();
		$(".works").hide();
		$(".survey").hide();
		$(".bigmenus").hide();
		$(".message_board").hide();
	})
	$(".bqliuyanban").bind('click',function(){
		$(".message_board").show();
		$(".bigmenu").hide();
		$(".works").hide();
		$(".bigmenus").hide();
		$(".collect").hide();
		$(".survey").hide();
	})
	

}
//焦点图jQuery代码？要注意一点，就是如果不是单独引用某个代码或者是在html结构里直接引用，而是在js页面里，需要把他们加上$(document).ready(function(e) {});这样的更新函数.
$(document).ready(function(e) {
(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">←</span><span class="next">→</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false)
});

//调用焦点图代码!!!!!!注意前后顺序，先有代码才有调用
$(document).ready(function(e) {
    $('#b03').unslider({
		dots: true
	});
});

//最新公告滚动的JS代码
//间歇性滚动
var area=document.getElementById('gonggaobox');
var iliHeight=30;
var speed=20;
var time;
var delay=2000;
area.scrollTop=0;
area.innerHTML+=area.innerHTML;
function startScroll(){
	time=setInterval('scrollUp()',speed);
	area.scrollTop++;
}
function scrollUp(){
 if(area.scrollTop % iliHeight==0){
	 clearInterval(time);
	 setTimeout(startScroll,delay);
	 }else{
		area.scrollTop++;
		if(area.scrollTop >= area.scrollHeight/2){
			area.scrollTop =0;
			}
	}
 }
 setTimeout(startScroll,delay)



$(document).ready(function(){

})


