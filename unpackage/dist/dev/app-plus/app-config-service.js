
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/home/find","pages/home/tool","pages/home/user","pages/user/userlist","pages/user/useredit","pages/user/mailedit","pages/user/inbox","pages/user/manage","pages/user/userpost","pages/user/post","pages/user/login","pages/user/foget","pages/user/register","pages/user/setup","pages/user/usercomments","pages/user/usermark","pages/user/address","pages/user/pay","pages/user/addshop","pages/user/addshopinfo","pages/user/myshop","pages/user/order","pages/user/sellorder","pages/user/assets","pages/user/userwithdraw","pages/user/userrecharge","pages/user/userwithdrawlist","pages/user/agreement","pages/user/userbind","pages/contents/comments","pages/contents/commentsadd","pages/contents/contentlist","pages/contents/imagetoday","pages/contents/shop","pages/contents/shopinfo","pages/contents/shoptext","pages/contents/info","pages/contents/alltag","pages/contents/randlist","pages/contents/allcategory","pages/contents/search","pages/manage/comments","pages/manage/contents","pages/manage/recharge","pages/manage/shop","pages/manage/users","pages/manage/usersedit","pages/manage/withdraw"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"规则之树","navigationStyle":"custom","navigationBarTextStyle":"black"},"tabBar":{"color":"#333333","selectedColor":"#54b5db","borderStyle":"white","backgroundColor":"#ffffff","list":[{"text":"首页","pagePath":"pages/home/home","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home_cur.png"},{"text":"发现","pagePath":"pages/home/find","iconPath":"static/tabbar/find.png","selectedIconPath":"static/tabbar/find_cur.png"},{"text":"工具","pagePath":"pages/home/tool","iconPath":"static/tabbar/tool.png","selectedIconPath":"static/tabbar/tool_cur.png"},{"text":"我的","pagePath":"pages/home/user","iconPath":"static/tabbar/user.png","selectedIconPath":"static/tabbar/user_cur.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"规则之树","compilerVersion":"3.3.11","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/home/find","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/home/tool","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true}},{"path":"/pages/home/user","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/user/userlist","meta":{},"window":{}},{"path":"/pages/user/useredit","meta":{},"window":{}},{"path":"/pages/user/mailedit","meta":{},"window":{}},{"path":"/pages/user/inbox","meta":{},"window":{}},{"path":"/pages/user/manage","meta":{},"window":{}},{"path":"/pages/user/userpost","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/user/post","meta":{},"window":{}},{"path":"/pages/user/login","meta":{},"window":{}},{"path":"/pages/user/foget","meta":{},"window":{}},{"path":"/pages/user/register","meta":{},"window":{}},{"path":"/pages/user/setup","meta":{},"window":{}},{"path":"/pages/user/usercomments","meta":{},"window":{}},{"path":"/pages/user/usermark","meta":{},"window":{}},{"path":"/pages/user/address","meta":{},"window":{}},{"path":"/pages/user/pay","meta":{},"window":{}},{"path":"/pages/user/addshop","meta":{},"window":{}},{"path":"/pages/user/addshopinfo","meta":{},"window":{}},{"path":"/pages/user/myshop","meta":{},"window":{}},{"path":"/pages/user/order","meta":{},"window":{}},{"path":"/pages/user/sellorder","meta":{},"window":{}},{"path":"/pages/user/assets","meta":{},"window":{}},{"path":"/pages/user/userwithdraw","meta":{},"window":{}},{"path":"/pages/user/userrecharge","meta":{},"window":{}},{"path":"/pages/user/userwithdrawlist","meta":{},"window":{}},{"path":"/pages/user/agreement","meta":{},"window":{}},{"path":"/pages/user/userbind","meta":{},"window":{}},{"path":"/pages/contents/comments","meta":{},"window":{}},{"path":"/pages/contents/commentsadd","meta":{},"window":{}},{"path":"/pages/contents/contentlist","meta":{},"window":{}},{"path":"/pages/contents/imagetoday","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/contents/shop","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/contents/shopinfo","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/contents/shoptext","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/contents/info","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/contents/alltag","meta":{},"window":{}},{"path":"/pages/contents/randlist","meta":{},"window":{}},{"path":"/pages/contents/allcategory","meta":{},"window":{}},{"path":"/pages/contents/search","meta":{},"window":{}},{"path":"/pages/manage/comments","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/manage/contents","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/manage/recharge","meta":{},"window":{}},{"path":"/pages/manage/shop","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/manage/users","meta":{},"window":{"enablePullDownRefresh":true}},{"path":"/pages/manage/usersedit","meta":{},"window":{}},{"path":"/pages/manage/withdraw","meta":{},"window":{"enablePullDownRefresh":true}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
