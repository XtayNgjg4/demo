//判断是否是微信浏览器的函数
function isWeiXin(){
  //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
  var ua = window.navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if(ua.match(/MicroMessenger/i) == 'micromessenger'){
  return true;
  }else{
  return false;
  }
}
//登录提醒弹框
function login_msg(is_login,url){
	if (is_login == 1) {return true}
    //弹窗
    weui.dialog({
        title: '登录提醒',
        content: '<div class="weui-cell "><div class="weui-cell__bd">你还没有登录！</div></div>',
        className: 'custom-classname',
        buttons: [{
            label: '取消',
            type: 'default'
        }, {
            label: '登录',
            type: 'primary',
            onClick: function () { 
                self.location = url;
            }
        }]
    });
}
//函数防抖(debounce)
function debounce(fn, interval = 1000) {
    let timeout = null;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, interval);
    };
}
var date = new Date().getTime();
//浏览器缓存(localStorage)
const foowwLocalStorage = {
	set: function (key, value, ttl_ms) {
		var time = date+ttl_ms;
		var data = { value: value, expirse: new Date(time).getTime() };
		localStorage.setItem(key, JSON.stringify(data));
	},
	get: function (key) {
	    var data = JSON.parse(localStorage.getItem(key));
	    if (data !== null) {
	        if (data.expirse != null && data.expirse < new Date().getTime()) {
	            localStorage.removeItem(key);
	        } else {
	            return data.value;
	        }
	    }
	    return null;
	}
}

//没有上一页返回首页
function goback(referrer,url){
    // var referrer = document.referrer;       //上一页url
    
    if (referrer == '') {
        self.location = url;
    } else {
        self.location = "javascript:history.go(-1)";
    }
}
/**
 * 加密函数
 * @param str 待加密字符串
 * @returns {string}
 */
function str_encrypt(str,k,table) {
    str = k+str+table;
    var c = String.fromCharCode(str.charCodeAt(0) + str.length);

    for (var i = 1; i < str.length; i++) {
        c += String.fromCharCode(str.charCodeAt(i) + str.charCodeAt(i - 1));
    }

    return encodeURIComponent(c);
}
/**
 * 解密函数
 * @param str 待解密字符串
 * @returns {string}
 */
function str_decrypt(str,k,table) {
    str = decodeURIComponent(str);
    var c = String.fromCharCode(str.charCodeAt(0) - str.length);

    for (var i = 1; i < str.length; i++) {
        c += String.fromCharCode(str.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    c = c.replace(table,"");
    c = c.replace(k,"");
    return c;
}