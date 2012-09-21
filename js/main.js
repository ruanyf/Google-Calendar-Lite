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

    // 用户未登录

    if (hash["state"]!=="login"){
      
    var loginMessage = $("#login-message");

    loginMessage.hide();

    var login = $("#login");

    // 判断是否支持垮域请求

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
      return ;

    }

// 用户点击登录按钮后，从Google跳转回来

      var welcome = $("#welcome");

      welcome.hide();

      var content = $("#content");

      content.show();

      // 如果没有获得用户授权

      if(!hash["access_token"]){
        $("#content-result").hide();

        var message;

        if (hash["error"]){
          message = "未获得授权。"+hash["error"];
        } else {
          message = "请正常登录。";
        }

        message = "<strong>提示：</strong> "+ message + "<a href=\""+url["protocol"]+"//"+url["host"]+url["path"] +"\">[返回]</a>";

        console.info(message);

        $("#content-message").show().find(".alert").addClass("alert-error").html(message);

        return ;

      }

// 已经获得用户授权

        var access_token = hash["access_token"];

        // 此处省略验证access token的步骤，将来可以在Calendar对象中部署

        // 读出日历列表

        // console.info(access_token);

        Calendar.getCalendarList(access_token);

        // console.dir(response);

        var response = Calendar.listResponse;

        // 如果取回的Calendar List有错误

        if (!response["items"]){
          var errorMessage = (response["error"]?response["error"]["message"]:"返回结果有错误。");

          errorMessage = "<strong>提示：</strong>"+errorMessage+ "<a href=\""+url["protocol"]+"//"+url["host"]+url["path"] +"\">[返回]</a>";

        $("#content-message").show().find(".alert").addClass("alert-error").html(errorMessage);
      return ;
        }

// 已经取回了日历列表

    Calendar.setListEntry(response["items"]);

// 如果日历列表项为空

    if(Calendar.listEntry.length===0){
      var infoMessage = "<strong>提示：</strong>您尚未创建任何日历。<a href=\""+url["protocol"]+"//"+url["host"]+url["path"] +"\">[返回]</a>";

      $("#content-message").show().find(".alert").addClass("alert-info").html(infoMessage);

        return ;

    }

// 确定存在日历列表项

   var listEntrySelect = "<select>";

   for(i in Calendar.listEntry){

     listEntrySelect = listEntrySelect + "<option value=\"" + Calendar.listEntry[i]["id"] + "\" " + (Calendar.listEntry[i]["main"]?"selected":"")  + " >"+Calendar.listEntry[i]["summary"]+"</option>"; 

    }

    listEntrySelect = listEntrySelect + "</select>";

    listEntrySelect = listEntrySelect + "<div class=\"pull-right\"><a href=\""+url["protocol"]+"//"+url["host"]+url["path"] +"\">[退出]</a></div>";

    $("#calendar-list").html("日历列表："+listEntrySelect);

    // 判断是否存在主日历

    if (!Calendar.currentCalendar){

      return;
    }

// 确定存在主日历

var infoMessage = "<strong>提示：</strong>正在加载，请稍候……";

$("#content-message").fadeIn().find(".alert").addClass("alert-info").html(infoMessage);

 Calendar.getEventsList(Calendar.currentCalendar["id"]);

var response = Calendar.eventsList;

$("#content-message").fadeOut().find(".alert").removeClass("alert-info");

// $("#calendar-events").text(response.toString());

 console.dir(response);

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

    Calendar.listResponse = '';

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

          Calendar.listResponse = $.parseJSON(req.responseText); 
        }
      };

      req.send(null);
   
    };

    // 创建日历列表

    Calendar.listEntry = new Array();

    Calendar.currentCalendar = new Object();

    Calendar.setListEntry = function(calendarListArray){

      for (i in calendarListArray){
        var item = calendarListArray[i];

        if (item["accessRole"]==="owner"){

          var _mainOption = 0;

          if (item["id"].substring(item["id"].length-10)==="google.com" || _mainOption === 1){
            item["main"] = 0;
          } else {
            item["main"] = 1;
            Calendar.currentCalendar = item;
            _mainOption = 1;
          }
        
          Calendar.listEntry.push(item);
        
        }

      }

    };

    // 获取某个日历列表项的事件

    Calendar.eventsList = new Object();

    Calendar.getEventsList = function(calendarId){

      var _eventsListEndPoint = "https://www.googleapis.com/calendar/v3/calendars/" + calendarId +"/events";

      var _eventsListUrl = _eventsListEndPoint + "?maxResults=3";
        
      var req = new XMLHttpRequest();

      req.open('GET',_eventsListUrl,false);

      req.setRequestHeader("Authorization","Bearer "+_access_token);

      req.onreadystatechange = function (e) {

        if (req.readyState == 4) {

          // console.info("response:"+req.responseText);

          Calendar.eventsList = $.parseJSON(req.responseText); 
        }
      };

      req.send(null);


    };



    return Calendar;

    })(window,jQuery);
