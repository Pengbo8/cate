<template>
    <div class="header">
        <div class="conwidth">
            <h1 class="fl"><a href="https://github.com/Pengbo8/cate" class="bigtitle">美<span>拾</span></a></h1>
            <div class="search fl" id="search-box">
                <form action="#" method="get" target="_blank" >
                    <input type="text" placeholder="搜索菜谱、食材"
                           id="sreach-input" class="search-text fl"/>
                    <input type="button" value="搜菜谱" class="search-btn fl"/>
                </form>
            </div>
            <div class="nav fr">
                <ul>
                    <li><a href="index.html">首页</a></li>
                    <li class="menu-class"><a href="menu_class.html">菜谱分类</a>
                        <div class="topbar-menu">
                            <ul class="plain">
                                <li class='topbar-menu-head'>常用主题</li>
                                <li><a href="menu_class.html" >家常菜</a></li>
                                <li><a href="menu_class.html" >快手菜</a></li>
                                <li><a href="menu_class.html" >下饭菜</a></li>
                                <li><a href="menu_class.html" >早餐</a></li>
                                <li><a href="menu_class.html" >减肥</a></li>
                                <li><a href="menu_class.html" >汤羹</a></li>
                                <li><a href="menu_class.html" >烘焙</a></li>
                                <li><a href="menu_class.html" >小吃</a></li>
                            </ul>
                            <ul class="plain">
                                <li class='topbar-menu-head'>常见食材</li>
                                <li><a href="menu_class.html" >猪肉</a></li>
                                <li><a href="menu_class.html" >鸡肉</a></li>
                                <li><a href="menu_class.html" >牛肉</a></li>
                                <li><a href="menu_class.html" >鱼</a></li>
                                <li><a href="menu_class.html" >鸡蛋</a></li>
                                <li><a href="menu_class.html" >土豆</a></li>
                                <li><a href="menu_class.html" >茄子</a></li>
                                <li><a href="menu_class.html" >豆腐</a></li>
                            </ul>
                            <ul class="plain">
                                <li class='topbar-menu-head'>时令食材</li>
                                <li><a href="menu_class.html" >春笋</a></li>
                                <li><a href="menu_class.html" >笋</a></li>
                                <li><a href="menu_class.html" >豌豆</a></li>
                                <li><a href="menu_class.html" >草莓</a></li>
                                <li><a href="menu_class.html" >金桔</a></li>
                                <li><a href="menu_class.html" >菠菜</a></li>
                                <li><a href="menu_class.html" >冬笋</a></li>
                                <li><a href="menu_class.html" >韭菜</a></li>
                            </ul>
                            <div class="span">
                                <span><a href="menu_class.html">查看全部分类</a></span>
                            </div>
                        </div>
                    </li>
                    <li><a href="popular_menu.html">菜单</a></li>
                    <li><a href="">作品动态</a></li>
                </ul>
                <div class="dengluzhuce fr">
                    <a href="login.html">登录</a>
                    <a href="register%20.htmlml">注册</a>
                </div>
            </div>
        </div>
        <div class="suggest" id="sreach-suggest"><!---搜索智能提示suggest-->
            <ul>
                <li>搜"  "相关用户</li>
                <li>搜"  "相关菜单</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    header{
        position: fixed;
        top: 0;
        left: 0;
        font-size: 20px;
    }
</style>