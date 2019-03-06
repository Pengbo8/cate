<template>
    <div id="app">
        <Header/>
        <div class="u-content"></div>
        <Footer/>
    </div>
</template>

<script>
    import Header from './components/Header'
    import Footer from './components/Footer'

    export default {
        name: 'app',
        components: {Header, Footer}
    }
</script>

<style>
    .u-content {
        min-height: 300px;
    }

    /*【Css Document】*/
    body, ul, ol, li, p, h1, h2, h3, h4, h5, h6, form, fieldset, table, td, img, div, dl, dt, dd, input {
        margin: 0;
        padding: 0;
    }

    body {
        line-height: 1.8;
        color: #222;
        font-size: 12px;
        font-family: "微软雅黑", sans-serif, "microsoft yahei";
        color: #222;
        min-width: 960px;
    }

    img {
        border: none;
    }

    li {
        list-style: none;
    }

    input, select, textarea {
        outline: none;
    }

    textarea {
        resize: none;
    }

    a {
        text-decoration: none;
    }

    /*清除浮动*/
    .clearfix:after {
        content: "";
        display: block;
        clear: both;
    }

    .clearfix {
        zoom: 1;
    }

    body img:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    /*设置所有img图片划过时透明度都有变化并且鼠标箭头变成小手。*/
    .clearopacity:hover {
        opacity: 1;
        cursor: auto;
    }

    /*设置清除图片透明度变化*/

    /*【快捷】*/
    .kh20 {
        height: 20px;
    }

    /* 没有//这种注释写法,所有这种写法后紧随的css都会失效.*/
    .kh30 {
        height: 30px;
    }

    .kh40 {
        height: 40px;
    }

    .kh50 {
        height: 50px;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    .hidden {
        display: none;
    }

    .conwidth {
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    /*【复用】*/
    .f14 {
        font-size: 14px;
    }

    .f16 {
        font-size: 16px;
    }

    .f18 {
        font-size: 18px;
    }

    .f20 {
        font-size: 20px;
    }

    .f25 {
        font-size: 25px;
    }

    /*字体*/

    .gray {
        color: #909090;
    }

    .orange {
        color: #dd3915;
    }

    .backgray {
        background: #F5F6F5;
    }

    .backorange {
        background: #DD3915;
    }

    /*颜色*/
    .sliporange:hover {
        color: #dd3915;
    }

    .slipwhite:hover {
        color: #fff;
        background: #dd3915;
    }

    /*划过颜色*/

    .touming:hover {
        opacity: 0.7;
    }

    /*划过半透明*/
    .header h1 .bigtitle {
        font-size: 34px;
        font-weight: 700;
    }

    /*h1大标题*/
    .bdbt {
        border-bottom: 1px solid #f3f3f3;
    }

    /*副标题*/
    .fubiaoti {
        height: 50px;
        line-height: 50px;
        color: #d3c5a1;
        font-size: 20px;
        display: inline;
    }

    .quanbu {
        font-size: 14px;
        color: #dd3915;
        font-weight: normal;
        display: inline;
        margin-left: 30px;
    }

    .quanbu:hover {
        background-color: #DD3915;
        color: #FFFFFF;
    }

    /*【header】*/
    .header {
        width: 100%;
        height: 69px;
        line-height: 69px;
        background: #FFFFFF;
        border-bottom: 1px solid #F3F3F3;
        position: fixed;
        z-index: 99;
    }

    .konghang {
        height: 69px;
    }

    .header h1 {
        height: 65px;
        padding: 0px 10px;
    }

    .header h1 a {
        font-size: 34px;
        color: #dd3915;
    }

    .header h1 span {
        color: #f8825d;
    }

    /*search的css组件*/
    .search {
        margin-left: 50px;
        margin-top: 12.5px;
        width: 390px;
        background: #fff;
    }

    .search .search-text {
        width: 72%;
        height: 40px;
        border: 1px solid #f3f3f3;
        padding: 0 5px;
        color: #ccc;
        font-size: 15px;
    }

    .search .search-btn {
        width: 20%;
        height: 42px;
        background-color: #dd3915;
        color: #fff;
        border: 0px;
        white-space: nowrap;
        cursor: pointer;
    }

    /*导航条*/
    .header .nav {
        width: 450px;
    }

    .header .nav li {
        float: left;
    }

    .header .nav a {
        margin: 0 10px;
        font-size: 16px;
        color: #dd3915;
    }

    .header .nav a:hover {
        background-color: #DD3915;
        color: #FFFFFF;
    }

    /*划过菜谱分类*/
    .topbar-menu {
        width: 385px;
        height: 380px;
        background: #F5F6F5;
        z-index: 100;
        position: absolute;
        left: 670px;
        top: 60px;
        display: none;
    }

    .plain {
        width: 100px;
        padding-top: 30px;
        padding-left: 28px;
        float: left;
    }

    .plain li {
        height: 30px;
        line-height: 30px;
        clear: left;
    }

    .topbar-menu .span {
        text-align: center;
        line-height: 80px;
    }

    .topbar-menu-head {
        color: #909090;
        font-size: 15px;
    }

    .header .nav .menu-class:hover .topbar-menu {
        display: block;
    }

    /*搜索框键盘事件*/
    .suggest {
        width: 292px;
        background: #fff;
        position: absolute;
        left: 315px;
        top: 55px;
        display: none;
    }

    .suggest ul li {
        height: 30px;
        line-height: 30px;
        font-size: 15px;
        color: #DD3915;
        padding: 0px 8px;
        cursor: pointer;
    }

    .suggest ul li:hover {
        background: #F7805A;
        color: #fff;
    }

    /*conwrap*/
    /*【conone】三分之一*/
    .conwrap {
        width: 670px;
    }

    .conone {
        width: 130px;
        padding-top: 20px;
    }

    /*菜单*/
    .menu ul {
        margin: 0;
        padding: 0;
    }

    .menu ul li {
        position: relative;
        margin-bottom: 10px;
    }

    .menu ul li a {
        font-size: 14px;
        color: #222222; /*padding-left: 50px; */
        position: relative;
        display: block;
    }

    .menu ul li a:hover {
        color: #DD3915;
    }

    /* 鼠标滑过菜单menu的样式 */
    .submenubox {
        width: 400px;
        background-color: #F5F6F5;
        position: absolute;
        left: 130px;
        top: 0px;
        z-index: 2;
        display: none;
    }

    .submenubox .hr {
        width: 85%;
        opacity: 0.3;
        color: #CCCCCC;
    }

    .submenubox dl {
        margin: 20px 30px;
    }

    .submenubox dl dt {
        float: left;
    }

    .submenubox dl dd {
        margin-left: 80px;
    }

    .submenubox dl a {
        font-size: 14px;
        color: #222;
    }

    .submenubox dl a:hover {
        color: #dd3915;
    }

    .submenubox dl dd a {
        width: 63px;
        display: inline-block;
    }

    .submenubox1 dl dd {
        margin-left: 150px;
    }

    .submenubox1 dl dd a {
        width: 95px;
        display: inline-block;
    }

    .menu .menu5:hover .submenubox {
        display: block;
    }

    .menu .menu7:hover .submenubox {
        display: block;
    }

    .menu .menu11:hover .submenubox {
        display: block;
    }

    /*关于如何制作icon*/
    .menu .qiantu {
        display: inline-block;
        background: none no-repeat 0;
        width: 32px;
        height: 32px;
        text-indent: 56px;
        margin-right: 16px;
        vertical-align: middle;
    }

    .menu .houtu {
        display: inline-block !important;
        background: none no-repeat 0;
        text-indent: -999em;
    }

    .menu5 .houtu, .menu7 .houtu, .menu11 .houtu {
        position: absolute;
        right: 0;
        bottom: 8px;
        background-position: -10px -60px;
        width: 10px;
        height: 15px;
    }

    .menu .menu1 .qiantu {
        background-position: 0 0;
    }

    .menu .menu2 .qiantu {
        background-position: 0 -40px;
    }

    .menu .menu3 .qiantu {
        background-position: 0 -80px;
    }

    .menu .menu4 .qiantu {
        background-position: 0 -120px;
    }

    .menu .menu5 .qiantu {
        background-position: 0 -160px;
    }

    .menu .menu6 .qiantu {
        background-position: 0 -200px;
    }

    .menu .menu7 .qiantu {
        background-position: 0 -240px;
    }

    .menu .menu8 .qiantu {
        background-position: 0 -280px;
    }

    .menu .menu9 .qiantu {
        background-position: 0 -320px;
    }

    .menu .menu10 .qiantu {
        background-position: 0 -360px;
    }

    .menu .menu11 .qiantu {
        background-position: 0 -400px;
    }

    .menu .menu12 .qiantu {
        background-position: 0 -440px;
    }

    .menu .menu13 .qiantu {
        background-position: 0 -480px;
    }

    .menu .menu14 .qiantu {
        background-position: 0 -520px;
    }

    .menu .menu15 .qiantu {
        background-position: 0 -560px;
    }

    .menu .menu16 .qiantu {
        background-position: 0 -600px;
    }

    .menu .menu17 .qiantu {
        background-position: 0 -640px;
    }

    .menu .menu18 .qiantu {
        background-position: 0 -680px;
    }

    /*二维码*/
    .conone .erweima {
        padding-top: 30px;
    }

    .conone .erweima p a {
        font-size: 15px;
        color: #dd3915;
    }

    .conone .erweima p a:hover {
        background-color: #DD3915;
        color: #FFFFFF;
    }

    .conone .erweima img {
        padding-top: 25px;
    }

    /*时钟*/
    .shizhong {
        width: 120px;
        text-align: center;
        padding-top: 20px;
        clear: both;
    }

    /*【contwo】三分之二*/
    .contwo {
        width: 490px;
        padding-top: 30px;
        padding-left: 20px;
    }

    /*海报*/
    .banner {
        position: relative;
        overflow: auto;
        text-align: center;
        z-index: 1;
    }

    .banner li {
        list-style: none;
    }

    .banner ul li {
        float: left;
    }

    #b03 {
        width: 490px;
    }

    #b03 .dots {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 10px;
    }

    /*设置轮播圆点*/
    #b03 .dots li {
        display: inline-block;
        width: 5px;
        height: 5px;
        margin: 0 4px;
        text-indent: -999em;
        border: 2px solid #fff;
        border-radius: 6px;
        cursor: pointer;
        opacity: 0.4;
        -webkit-transition: background .5s, opacity .5s;
        -moz-transition: background .5s, opacity .5s;
        transition: background .5s, opacity .5s;
    }

    #b03 .dots li.active {
        background: #fff;
        opacity: 1;
    }

    /*副标题  =复用=*/

    /* 清除副标题里margin-top失败的div的clear */
    .zuijinliuxing, .liuxingcaidan {
        width: 100%;
        overflow: hidden;
    }

    /*新秀菜谱*/
    .xinxiucaipu {
        width: 490px;
    }

    .caipu {
        width: 150px;
        float: left;
    }

    .caipu2 {
        padding: 0 20px;
    }

    .caipu a {
        color: #000000;
        font-size: 16px;
        display: block;
        text-align: center;
    }

    .caipu a:hover {
        color: #DD3915;
    }

    /*最近流行*/
    .zuijinliuxing {
        width: 490px;
        overflow: hidden;
        line-height: 1.5;
    }

    .liuxing {
        width: 235px;
        height: 220px;
        float: left;
        border: 1px solid #f0f0f0;
        margin-top: 20px;
    }

    .liuxing1 {
        margin-top: 0px;
    }

    .liuxing2 {
        margin-left: 10px;
    }

    .liuxing .name {
        text-align: center;
        margin: 10px 5px 10px;
    }

    .liuxing .name a {
        color: #000000;
        font-size: 18px;
        display: inline-block;
        max-width: 100%;
    }

    .liuxing .name a:hover {
        color: #DD3915;
    }

    .liuxing .xz {
        color: #999;
        font-size: 13px;
        text-align: center;
    }

    /*厨房问答*/
    .chufangwenda {
        width: 490px;
    }

    .wenda a {
        height: 35px;
        line-height: 35px;
        color: #000000;
        font-size: 16px;
    }

    .wenda a:hover {
        color: #DD3915;
    }

    .wenda span {
        float: right;
        color: #999;
        font-size: 13px;
    }

    /*时令食材*/
    .shilingshicai {
        width: 490px;
    }

    .shicai {
        width: 490px;
        height: 230px;
        background: #f5f6f5;
    }

    .shicaiimg {
        width: 60px;
        padding-left: 18.57px;
        float: left;
        padding-top: 25px;
    }

    .shicaiimg a {
        color: #000;
        cursor: pointer;
        display: block;
        text-align: center;
    }

    .shicaiimg a:hover {
        color: #dd3915;
    }

    /*【conthree】三分之三*/
    .conthree {
        width: 300px;
        padding-top: 30px;
        padding-left: 30px;
    }

    /*登录方框*/
    .denglu {
        width: 300px;
        height: 260px;
        background: #f5f6f5;
    }

    .dengluimg {
        display: block;
        padding-left: 75px;
        padding-top: 80px;
    }

    .dengluimg2 {
        display: block;
        padding-left: 75px;
        padding-top: 0px;
    }

    .denglu .dengluwz {
        display: block;
        text-align: center;
    }

    .denglu .wz {
        color: #DD3915;
        font-size: 14px;
    }

    .denglu .wz:hover {
        background-color: #DD3915;
        color: #FFFFFF;
    }

    /* 公告 */
    #gonggaobox {
        width: 300px;
        height: 155px;
        overflow: hidden;
    }

    #gonggaobox ul li {
        line-height: 30px;
        font-size: 14px;
    }

    #gonggaobox ul li span {
        color: #BFA699;
        float: right;
    }

    #gonggaobox ul li a {
        color: #000;
    }

    #gonggaobox ul li a:hover {
        color: #dd3915;
    }

    /* 流行菜单 */
    .liuxingcaidan ul li {
        height: 35px;
        line-height: 35px;
    }

    .liuxingcaidan ul li a {
        font-size: 16px;
        color: #000;
    }

    .liuxingcaidan ul li a:hover {
        color: #DD3915;
    }

    /* 流行搜索 */
    .liuxingsousuo ol li {
        height: 35px;
        line-height: 35px;
        position: relative;
    }

    .liuxingsousuo ol li a {
        font-size: 16px;
        color: #000;
    }

    .liuxingsousuo ol li a:hover {
        color: #DD3915;
    }

    .liuxingsousuo ol li span {
        color: #909090;
    }

    .liuxingsousuo ol li i {
        display: inline-block;
        width: 10px;
        height: 10px;
        background-position: 0px 0;
        position: absolute;
        left: 100px;
        top: 13px;
    }

    .liuxingsousuo .closeright {
        margin: -35px 0px 0px 170px;
    }

    /*//上一行有需要再另行设置背景*/
    /* 时令食材 */
    .shilingshicai {
        width: 490px;
    }

    .shicai {
        width: 490px;
        height: 230px;
        background: #f5f6f5;
    }

    .shicaiimg {
        width: 60px;
        padding-left: 18.57px;
        float: left;
        padding-top: 25px;
    }

    .shicaiimg a {
        color: #000;
        cursor: pointer;
        display: block;
        text-align: center;
    }

    .shicaiimg a:hover {
        color: #dd3915;
        opacity: 0.8;
    }

    /* 厨房好友 */
    .haoyou {
        width: 300px;
        color: #909090;
    }

    .haoyou img {
        width: 60px;
        height: 60px;
        border-radius: 60px;
        border: 1px solid #CCC;
        float: left;
    }

    .haoyou h6 {
        margin-bottom: -16px;
        font-size: 13px;
        padding-left: 20px;
        text-indent: 20px;
    }

    .haoyou h6 a {
        color: #000;
    }

    .haoyou h6 a:hover {
        color: #dd3915;
    }

    .haoyou span {
        display: inline-block;
        text-indent: 20px;
    }

    .guanzhu {
        margin: -60px 0 0 200px;
        width: 86px;
        height: 40px;
        background: #CCC7C2;
        line-height: 40px;
        font-size: 15px;
        color: #fff;
        text-indent: 28px;
    }

    .haoyou .gengduo {
        text-align: center;
        margin-top: 10px;
    }

    .scrollTop {
        opacity: 1;
        position: fixed;
        width: 50px;
        height: auto;
        z-index: 20;
        border: 0px none;
        padding: 0px;
        bottom: 20px;
        right: 20px;
        margin: 0px;
        cursor: pointer;
    }

</style>
