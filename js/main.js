jQuery(document).ready(function(){

    // 解析URL

    var url = new Array();

    url["host"] = location.host;

    url["href"] = location.href;

    url["path"] = location.pathname;

    url["protocol"] = location.protocol;

    url["port"] = location.port;

    url["hash"] = location.hash;

    url["search"] = location.search;

    var hashArray = (url["hash"].substr(1)).split("&");

    var hash = new Object();

    for (i in hashArray){

      var hashKey = hashArray[i].split("=")[0];

      var hashValue = hashArray[i].split("=")[1];

      hash[hashKey] = hashValue;

    }


    // 显示结果页面

    if (hash["state"]==="login"){

      var welcome = $("#welcome");

      welcome.hide();

      var content = $("#content");

      content.show();

      if(hash["access_token"]){



        var access_token = hash["access_token"];

        // 此处省略验证access token的步骤，将来可以在Calendar对象中部署

        // 读出日历列表

        // console.info(access_token);

        var response = Calendar.getCalendarList(access_token);

        // console.dir(response);

        var contentMessage = $("#content-result").text(Calendar.listResponse);


      } else {

        $("#content-result").hide();

        var message;

        if (hash["error"]){
          message = "未获得授权。";
        } else {
          message = "请正常登录。";
        }

        message = "<strong>提示：</strong> "+ message + "<a href=\""+url["protocol"]+"//"+url["host"]+url["path"] +"\">[返回]</a>";

        console.info(message);

        $("#content-message").show().find(".alert").addClass("alert-error").html(message);


      }
      


    } else {

    // 显示登录页面
    
    var loginMessage = $("#login-message");

    loginMessage.hide();

    var login = $("#login");

    if (!XMLHttpRequest || !("withCredentials" in new XMLHttpRequest()) ){
 
      login.hide();

      loginMessage.show();

      return 0;

    }

    var loginButton = login.find("a"); 

    loginButton.click(function(){

    $("#modal-progress-bar").modal({"keyboard":false,"show":true}); 

    var progress = setInterval(function() {
    var $bar = $('#modal-progress-bar .bar');

    var progressWidth = $("#modal-progress-bar").width();

    
    if ($bar.width() >= progressWidth) {
        clearInterval(progress);
        $('.progress').removeClass('active');
    } else {
        $bar.width($bar.width()+parseInt(progressWidth/30));
    }
    $bar.text(parseInt(($bar.width()/progressWidth)*100)+ "%");
}, 10);

    window.location = Calendar.getLoginUrl();

      });
  }

});

// 定义主函数Calendar

var Calendar = (function(window,$){
    
    var Calendar = {};
   

    // Google的登录网址
    var _loginUrl = "";

    var _loginEndPoint = "https://accounts.google.com/o/oauth2/auth";

    var _loginArray = new Array();

    _loginArray["scope"] = "https://www.googleapis.com/auth/calendar";

    _loginArray["redirect_uri"] = "http://www.ruanyifeng.com/webapp/calendar/";

    _loginArray["response_type"] = "token";

    _loginArray["state"] = "login";
    _loginArray["client_id"] = "497007402964.apps.googleusercontent.com";

    var _loginUrlArray = new Array();

    // 构建登录网址

    Calendar.getLoginUrl = function(){
    
      for(x in _loginArray){

        _loginUrlArray.push(x+"="+encodeURIComponent(_loginArray[x]));

      }

      _loginUrl = _loginEndPoint+"?"+_loginUrlArray.join("&");  
    
      return _loginUrl; 
    
    };

    var _access_token = '';



    // 读取日历列表

    Calendar.getCalendarList = function(access_token){

      var _calendarListEndPoint = "https://www.googleapis.com/calendar/v3/users/me/calendarList";

      _access_token = access_token;

      var _calendarListUrl = _calendarListEndPoint+"?access_code="+access_token;

      // console.info(_calendarListUrl);

      var req = new XMLHttpRequest();

      req.open('GET',_calendarListEndPoint,false);

      req.setRequestHeader("Authorization","Bearer "+access_token);

      req.onreadystatechange = function (e) {

        if (req.readyState == 4) {

          // console.info("response:"+req.responseText);

          Calendar.listResponse = req.responseText; 
        }
      };

      req.send(null);
   
    };

    return Calendar;

    })(window,jQuery);
