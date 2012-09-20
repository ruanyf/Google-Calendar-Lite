jQuery(document).ready(function(){

    var loginMessage = $("#login-message");

    loginMessage.hide();

    if (!XMLHttpRequest || !("withCredentials" in new XMLHttpRequest()) ){
 
      var login = $("#login");

      login.hide();

      loginMessage.show();

    }
});
