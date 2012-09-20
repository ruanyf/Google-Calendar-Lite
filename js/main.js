jQuery(document).ready(function(){

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

});

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

    Calendar.getLoginUrl = function(){
    
      for(x in _loginArray){

        _loginUrlArray.push(x+"="+encodeURIComponent(_loginArray[x]));

      }

      _loginUrl = _loginEndPoint+"?"+_loginUrlArray.join("&");  
    
      return _loginUrl; 
    
    };





    return Calendar;

    })(window,jQuery);
