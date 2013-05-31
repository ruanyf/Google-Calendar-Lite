/* 确定浏览器语言Navigator Language */

var NL = (function(){
			
			if ('sessionStorage' in window && sessionStorage['language']){

				return sessionStorage['language'];				
				
				}

			var NL =  navigator.language?navigator.language:'en';

			if (NL.toLowerCase().substr(0,2)!== 'zh') {
				NL = 'en'; 
				} else {

				if (NL.toLowerCase().substr(3,2) === 'cn'){
					NL = 'cn';
				} else {
					NL = 'tw';
				}
				
				}

			if ('sessionStorage' in window) {
				sessionStorage['language'] = NL;
			}

			return NL;
			
			})();

var NLArray = new Array();

NLArray['cn'] = {

	'html-title':'Google日历简易版',
	'page-title':'Google日历简易版',
	'page-intro':'<li>与Google Calendar同步</li><li>操作简捷</li><li>计划日程、写日记</li><li>所有数据直接保存在Google，不经过第三方，完全私密</li>',
	'button-login':'登录',
	'comment-url':'留言',
	'login-message-text':'<strong>很抱歉!</strong> 暂时不支持您的浏览器，推荐使用最新版本的<a href="http://www.google.com/chrome">Chrome</a>或<a href="http://getfirefox.com/">Firefox</a>浏览器。',
	'timemin-label':'开始日期：',
	'timemax-label':'结束日期：',
	'button-refresh':' 刷新 ',
	'button-refresh-label':'（一次最多返回30个事件。）',
	'add-new-event-header':'添加新事件',
	'new-event-start-label':'开始时间<span class="help-inline">（必填）</span>',
	'new-event-end-label':'结束时间<span class="help-inline">（必填）</span>',
	'new-event-title-label':'事件<span class="help-inline">（必填）</span>',
	'new-event-description-label':'备注<span class="help-inline">（选填）</span>',
	'new-event-button-cancel':'取消',
	'button-insert-event':'保存',
	'delete-event-message':'确认删除这个事件？',
	'delete-event-button-cancel':'取消',
	'button-confirm-event-delete':'确认',
	'new-calendar-header':'新增一个日历',
	'add-new-calendar-label':'名称<span class="help-inline">（必填）</span>',
	'new-calendar-button-cancel':'取消',
	'button-confirm-calendar-create':'确认',
	'no-authorization':'未获得授权。',
	'please-login':'请正常登录。',
	'prompt':'提示：',
	'return':'[返回]',
	'error':'返回结果有错误。',
	'no-calendar':'您尚未创建任何日历。',
	'add-new-calendar':'新增一个日历……',
	'add-new-event':'[添加新事件]',
	'logout':'[退出]',
	'calendar-list':'日历列表 ',
	'edit':'[修改]',
	'delete':'[刪除]',
	'loading':'正在加载，请稍候……',
	'error-prompt':'出错了！',
	'time-range':' 该时段',
	'time-range-message':'是空的，添加一个新事件吧。',
	'event-number':'事件总数：',
	'no-calendar-error':'没有指定日历',
	'delete-fail-error':'删除失败。',
	'event-edit-header':'修改',
	'create-calendar-error':'创建新日历失败。'
};

NLArray['tw'] = {

	'html-title':'Google日曆簡易版',
	'page-title':'Google日曆簡易版',
	'page-intro':'<li>與Google Calendar同步</li><li>操作簡捷</li><li>計劃日程、寫日記</li><li>所有數據保存於Google，不經過第三方，完全私密</li>',
	'button-login':'登錄',
	'comment-url':'留言',
	'login-message-text':'<strong>很抱歉!</strong> 暫時不支持您的瀏覽器，推薦使用最新版的<a href="http://www.google.com/chrome">Chrome</a>或<a href="http://getfirefox.com/">Firefox</a>瀏覽器。',
	'timemin-label':'開始日期：',
	'timemax-label':'結束日期：',
	'button-refresh':' 刷新 ',
	'button-refresh-label':'（一次最多返回30個事件。）',
	'add-new-event-header':'添加新事件',
	'new-event-start-label':'開始時間<span class="help-inline">（必填）</span>',
	'new-event-end-label':'結束時間<span class="help-inline">（必填）</span>',
	'new-event-title-label':'事件<span class="help-inline">（必填）</span>',
	'new-event-description-label':'備註<span class="help-inline">（選填）</span>',
	'new-event-button-cancel':'取消',
	'button-insert-event':'保存',
	'delete-event-message':'確認刪除這個事件？',
	'delete-event-button-cancel':'取消',
	'button-confirm-event-delete':'確認',
	'new-calendar-header':'新增一個日曆',
	'add-new-calendar-label':'名稱<span class="help-inline">（必填）</span>',
	'new-calendar-button-cancel':'取消',
	'button-confirm-calendar-create':'確認',
	'no-authorization':'未獲得授權。',
	'please-login':'請正常登錄。',
	'prompt':'提示：',
	'return':'[返回]',
	'error':'返回結果有錯誤。',
	'no-calendar':'您尚未創建任何日曆。',
	'add-new-calendar':'新增一個日曆……',
	'add-new-event':'[添加新事件]',
	'logout':'[退出]',
	'calendar-list':'日曆列表 ',
	'edit':'[修改]',
	'delete':'[刪除]',
	'loading':'正在加載，請稍候……',
	'error-prompt':'出錯了！',
	'time-range':' 該時段',
	'time-range-message':'是空的，添加一個新事件吧。',
	'event-number':'事件總數：',
	'no-calendar-error':'沒有指定日曆',
	'delete-fail-error':'刪除失敗。',
	'event-edit-header':'修改',
	'create-calendar-error':'創建日曆失敗。'

};

NLArray['en'] = {

	'html-title':'Easy Calendar',
	'page-title':'Easy Calendar',
	'page-intro':'<li>Synchronize your Google Calendar</li><li>Easy to use</li><li>To schedule your day, to write your journal</li><li>All data saved in Google, total privacy</li>',
	'button-login':'Login',
	'comment-url':'comment',
	'login-message-text':'<strong>Sorry!</strong> Your browser is not supported. The newest version of <a href="http://www.google.com/chrome">Chrome</a> or <a href="http://getfirefox.com/">Firefox</a> is recommended.',
	'timemin-label':'Start Date:',
	'timemax-label':'End Date:',
	'button-refresh':' refresh ',
	'button-refresh-label':'(Once return 30 events at most.)',
	'add-new-event-header':'Add New Event',
	'new-event-start-label':'Start Time<span class="help-inline"> (Required)</span>',
	'new-event-end-label':'End Time<span class="help-inline"> (Required)</span>',
	'new-event-title-label':'Summary<span class="help-inline"> (Required)</span>',
	'new-event-description-label':'Description',
	'new-event-button-cancel':'Cancel',
	'button-insert-event':'Save',
	'delete-event-message':'Are you sure to delete this event?',
	'delete-event-button-cancel':'Cancel',
	'button-confirm-event-delete':'Confirm',
	'new-calendar-header':'Add a new calendar',
	'add-new-calendar-label':'Summary<span class="help-inline"> (Required)</span>',
	'new-calendar-button-cancel':'Cancel',
	'button-confirm-calendar-create':'Save',
	'no-authorization':'Didn\'t get authorization. ',
	'please-login':'Please login. ',
	'prompt':'Prompt: ',
	'return':'[Return]',
	'error':'Error returned. ',
	'no-calendar':'You have not created any calendar. ',
	'add-new-calendar':'Add a new calendar...',
	'add-new-event':'[Add new event]',
	'logout':'[Logout]',
	'calendar-list':'Calendar list: ',
	'edit': '[Edit]',
	'delete':'[Delete]',
	'loading':'Loading, please wait...',
	'error-prompt':'Something wrong! ',
	'time-range':' The time range',
	'time-range-message':'is empty. You may add a new event. ',
	'event-number':'Total Event(s): ',
	'no-calendar-error':'no designated calendar',
	'delete-fail-error':'Delete failed. ',
	'event-edit-header':'Edit',
	'create-calendar-error':'Creating new calendar failed. '
};

function NLChange(NL){

	document.title = NLArray[NL]['html-title'];
	$('#page-title').html(NLArray[NL]['page-title']);
	$('#page-intro').html(NLArray[NL]['page-intro']);
	$('#button-login').html(NLArray[NL]['button-login']);
	$('#comment-url').html(NLArray[NL]['comment-url']);
	$('#login-message-text').html(NLArray[NL]['login-message-text']);
	$('#timemin-label').html(NLArray[NL]['timemin-label']);
	$('#timemax-label').html(NLArray[NL]['timemax-label']);
	$('#button-refresh').html(NLArray[NL]['button-refresh']);
	$('#button-refresh-label').html(NLArray[NL]['button-refresh-label']);
	$('#add-new-event-header').html(NLArray[NL]['add-new-event-header']);
	$('#new-event-start-label').html(NLArray[NL]['new-event-start-label']);
	$('#new-event-title-label').html(NLArray[NL]['new-event-title-label']);
	$('#new-event-end-label').html(NLArray[NL]['new-event-end-label']);
	$('#new-event-description-label').html(NLArray[NL]['new-event-description-label']);
	$('#new-event-button-cancel').html(NLArray[NL]['new-event-button-cancel']);
	$('#button-insert-event').html(NLArray[NL]['button-insert-event']);

	$('#delete-event-message').html(NLArray[NL]['delete-event-message']);
	$('#delete-event-button-cancel').html(NLArray[NL]['delete-event-button-cancel']);
	// console.info(NLArray[NL]['delete-event-button-cancel']);

	$('#button-confirm-event-delete').html(NLArray[NL]['button-confirm-event-delete']);
	// console.info(NLArray[NL]['button-confirm-event-delete']);
	$('#new-calendar-header').html(NLArray[NL]['new-calendar-header']);
	$('#add-new-calendar-label').html(NLArray[NL]['add-new-calendar-label']);
	$('#new-calendar-button-cancel').html(NLArray[NL]['new-calendar-button-cancel']);
	$('#button-confirm-calendar-create').html(NLArray[NL]['button-confirm-calendar-create']);
};

/* 网页元素绑定事件 */

jQuery(document).on('show','.modal', function(){

			$(this).find('.modal-footer').width('94.8%');

			$(this).css('overflow','hidden');
			
			});

jQuery(document).on('click','#button-login',function(){

			$("#modal-progress-bar").modal({"keyboard":false,"show":true}); 

			$('#modal-progress-bar .bar').width(10);

			var progress = setInterval(function() {

				var $bar = $('#modal-progress-bar .bar');

				var progressWidth = $("#modal-progress-bar").width();

				if ($bar.width() >= progressWidth) {

					clearInterval(progress);

					$('.progress').removeClass('active');

				} else {

				    $bar.width($bar.width()+parseInt(progressWidth/30));

				}

				var percent = parseInt(($bar.width()/progressWidth)*100);

				percent = percent>100?100:percent;

				$bar.text(percent + "%");

			}, 10);

			window.location = Calendar.getLoginUrl();

		});

jQuery(document).on('click',"#button-add-event",function(){Utility.addEvent();});

jQuery(document).on('click','#dpmin',function(){$("#dpmin").datepicker('show');});

/*
   jQuery(document).on('click',"#timemin",function(){

	$("#timemin").attr({
		'data-date':$('#dpmin').attr('data-date'),
		'data-date-format':'yyyy-mm-dd'
		});

	$('#dpmin').datepicker('show');

});

*/

jQuery(document).on('click',"#dpmax", function(){ $("#dpmax").datepicker('show');});


/*
jQuery(document).on('click',"#timemax",function(){

	$("#timemax").attr({
		'data-date':$('#dpmax').attr('data-date'),
		'data-date-format':'yyyy-mm-dd'
		}).datepicker();

});
*/

jQuery(document).on('click','#dpstart',function(){$("#dpstart").datepicker('show'); });

/*
jQuery(document).on('click',"#timestart",function(){

	$("#timestart").attr({
		'data-date':$('#dpstart').attr('data-date'),
		'data-date-format':'yyyy-mm-dd'
		}).datepicker();

});
*/

jQuery(document).on('click',"#dpend", function(){ $("#dpend").datepicker('show');});

/*
jQuery(document).on('click',"#timeend",function(){

	$("#timeend").attr({
		'data-date':$('#dpend').attr('data-date'),
		'data-date-format':'yyyy-mm-dd'
		}).datepicker();

});
*/

jQuery(document).on('click','#button-insert-event',function(){
			
			if(!Utility.checkEventForm('#form-event-new')) return false;

			var options = Utility.insertEvent();

			Calendar.insertEvent(options);

			$('#event-new').modal('hide');

			Utility.refreshEventsList('add-new-event');
			
			return ;
			
			});

jQuery(document).on('click','.button-delete',function(event){
			
			Utility.confirmEventDelete($(this).attr('data-id'));
			
			});

jQuery(document).on('click','#button-confirm-event-delete',function(event){

			Utility.eventDelete($(this).attr('data-id'));

			});

jQuery(document).on('click','.button-edit',function(event){
			
			Utility.confirmEventEdit($(this).data('id'));
			
			});

jQuery(document).on('click','#button-confirm-calendar-create',function(){
			
			Utility.calendarCreate();
			
			});

jQuery(document).on('click','#english-version',function(){

			if ('sessionStorage' in window) sessionStorage['language'] = 'en';

			var url = Utility.parseUrl();

			location = url["protocol"]+"//"+url["host"]+url["path"];

			NLChange('en');
			
			});

jQuery(document).on('click','#tradition-chinese-version',function(){

			if ('sessionStorage' in window) sessionStorage['language'] = 'tw';

			var url = Utility.parseUrl();

			location = url["protocol"]+"//"+url["host"]+url["path"];

			NLChange('tw');
			
			});

jQuery(document).on('click','#simplified-chinese-version',function(){

			if ('sessionStorage' in window) sessionStorage['language'] = 'cn';

			var url = Utility.parseUrl();

			location = url["protocol"]+"//"+url["host"]+url["path"];

			NLChange('cn');
			
			});

/* 网页加载完成后触发的事件 */
   
jQuery(document).ready(function(){

	NLChange(NL);
	
    // 解析URL

	var url = Utility.parseUrl();

	var hash = Utility.parseHash(url['hash']);

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
          message = NLArray[NL]['no-authorization'] + hash["error"];
        } else {
          message = NLArray[NL]['please-login'];
        }

        message = "<strong>" + NLArray[NL]['prompt'] + "</strong> "+ message + "<a href=\""+url["protocol"]+"//"+url["host"]+url["path"] +"\">" + NLArray[NL]['return'] + "</a>";

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
          var errorMessage = (response["error"]?response["error"]["message"]:NLArray[NL]['error']);

          errorMessage = "<strong>" + NLArray[NL]['prompt'] + "</strong>"+errorMessage+ "<a href=\""+url["protocol"]+"//"+url["host"]+url["path"] +"\">" + NLArray[NL]['return'] + "</a>";

        $("#content-message").show().find(".alert").addClass("alert-error").html(errorMessage);
      return ;
        }

// 已经取回了日历列表

    Calendar.setListEntry(response["items"]);

// 如果日历列表项为空

    if(Calendar.listEntry.length===0){
      var infoMessage = "<strong>" + NLArray[NL]['prompt'] + "</strong>" + NLArray[NL]['no-calendar'] + "<a href=\""+url["protocol"]+"//"+url["host"]+url["path"] +"\">" + NLArray[NL]['return']  + "</a>";

      $("#content-message").show().find(".alert").addClass("alert-info").html(infoMessage);

        return ;

    }

// 确定存在日历列表项

   var listEntrySelect = "<select>";

   for(i in Calendar.listEntry){

     listEntrySelect = listEntrySelect + "<option value=\"" + Calendar.listEntry[i]["id"] + "\" " + (Calendar.listEntry[i]["main"]?"selected":"")  + " >"+Calendar.listEntry[i]["summary"]+"</option>"; 

    }

   listEntrySelect = listEntrySelect + '<option value="new">' + NLArray[NL]['add-new-calendar'] + '</option>';

    listEntrySelect = listEntrySelect + "</select>";

    listEntrySelect = listEntrySelect + "<div class=\"pull-right\"><a class=\"text-error\" id=\"button-add-event\">" + NLArray[NL]['add-new-event'] + "</a> <a href=\""+url["protocol"]+"//"+url["host"]+url["path"] +"\">" + NLArray[NL]['logout'] + "</a></div>";

    $("#calendar-list").html(NLArray[NL]['calendar-list'] + listEntrySelect);

    // 绑定日历列表的change事件

    $("#calendar-list").find("select").change(function(event){

		if (this.value === 'new'){		

		$('#modal-calendar-create').modal({'keyboard':false,'show':true,'backdrop':"static"});

		$('#calendar-list option').each(function(){
			
			if (this.value === Calendar.currentCalendar['id']){

			this.selected = 'selected';

			}

			});

		return ;

		}
        
        Utility.resetCurrentDate();

        Calendar.setCurrentCalendar(this.value);

        Utility.refreshEventsList();
        
        });

    // 判断是否存在主日历

    if (!Calendar.currentCalendar){

      Calendar.setCurrentCalendar($("#calendar-list").find("option")[0].value);

    }

// 确定存在主日历

	Utility.resetCurrentDate();

	$("#calendar-date").find("button").click(function(event){

		event.preventDefault();
    
		Utility.refreshEventsList();

    });

 Utility.refreshEventsList();

});

// 定义主函数Calendar

var Calendar = (function(window,$){
    
    var Calendar = {};
   

    // Google的登录网址
    var _loginUrl = "";

    var _loginEndPoint = "https://accounts.google.com/o/oauth2/auth";

    var _loginArray = new Array();

    _loginArray["scope"] = "https://www.googleapis.com/auth/calendar";

    _loginArray["redirect_uri"] = location.href.split('#')[0].split('?')[0];

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

    // 改变当前的默认日历

    Calendar.setCurrentCalendar = function(calendarId){

      for (i in Calendar.listEntry){

        var item = Calendar.listEntry[i];

       if (item["id"]===calendarId){

          Calendar.currentCalendar = item;

        }

      }

    };

    // 获取某个日历列表项的事件

    Calendar.eventsList = new Object();

    Calendar.currentTimemin = '';

    Calendar.currentTimemax = '';

    Calendar.getEventsList = function(calendarId,timemin,timemax){

      var _eventsListEndPoint = "https://www.googleapis.com/calendar/v3/calendars/" + calendarId +"/events";

      var _eventsListUrl = _eventsListEndPoint + "?maxResults=30";

      _eventsListUrl = _eventsListUrl + "&orderBy=startTime&singleEvents=True"

      Calendar.currentTimemin = (new Date(timemin.split("-")[0],(timemin.split("-")[1]-1),timemin.split("-")[2],'00','00','00')).toISOString();  
 
      Calendar.currentTimemax = (new Date(timemax.split("-")[0],(timemax.split("-")[1]-1),timemax.split("-")[2],'23','59','59')).toISOString();

      _eventsListUrl = _eventsListUrl + "&timeMin="+Calendar.currentTimemin;

      _eventsListUrl = _eventsListUrl + "&timeMax="+Calendar.currentTimemax;

	  _eventsListUrl = _eventsListUrl + "&fields=description%2Cetag%2Citems(creator%2Cdescription%2Cend%2Cetag%2ChtmlLink%2CiCalUID%2Cid%2Cstart%2Cstatus%2Csummary%2Cupdated)%2Ckind%2CnextPageToken%2Csummary%2Cupdated";

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

	// 对取回的事件列表进行处理

	Calendar.eventsListError = false;

	Calendar.eventsListErrorMessage = '';

	Calendar.eventsListNumber = 0;

	Calendar.doEventsList = function(eventsListResponse){

		if (eventsListResponse['error']){

			Calendar.eventsListError = true;

			Calendar.eventsListErrorMessage = eventsListResponse['error']["message"];

			return 0;
		}

		if (!eventsListResponse['items'] && eventsListResponse['kind'] !== 'calendar#event'){

			Calendar.eventsListError = false;

			Calendar.eventsListNumber = 0 ;

			return 0;
		}

		if (eventsListResponse['items']){

			Calendar.eventsListError = false;

			Calendar.eventsListNumber = eventsListResponse['items'].length;

			return ;

		}

		Calendar.eventsListNumber = 1;

	};

	// 生成事件列表

	Calendar.showEventsList = function(itemsArray){

		var _eventsHTML = '';

		for(var i = 0; i < Calendar.eventsListNumber;i++){

			var _item = itemsArray[i];

			if (_item['start']['dateTime'] === undefined){
				var _dateTime = Calendar.parseDateTime(_item['start']['date']);
			} else {
				var _dateTime = Calendar.parseDateTime(_item['start']['dateTime']);
			}

			_eventsHTML = _eventsHTML + '<div class="event-item" id="'+ _item['id']  + '">';

			_eventsHTML = _eventsHTML + '<div class="alert">';
			
			_eventsHTML = _eventsHTML + (i+1) + '.  ' + '<div class="pull-right"><a class="muted button-edit" data-id="' + _item['id'] + '">' + NLArray[NL]['edit'] + '</a> <a class="muted button-delete" data-id="'+ _item['id']  +'">' + NLArray[NL]['delete'] + '</a> <a href="#content-result">↑</a> </div></div>';
			
			_eventsHTML = _eventsHTML + '<div class="well">';
			
			_eventsHTML = _eventsHTML + '<p class="text-info">';
			
			_eventsHTML = _eventsHTML + _dateTime['year'] + '-';
			
			_eventsHTML = _eventsHTML + _dateTime['month'] + '-';
			
			_eventsHTML = _eventsHTML + _dateTime['day'] + '';

			if (_dateTime['hour']!==undefined){
	   			_eventsHTML = _eventsHTML + '<small>（'+ _dateTime['hour'] + ":" + _dateTime['minute']+'）</small>';
			}
			
			_eventsHTML = _eventsHTML + '</p>';

			_eventsHTML = _eventsHTML + '<blockquote>'+ _item['summary'] +'</blockquote>';

			if(_item['description']) {

				_eventsHTML = _eventsHTML + "<blockquote>"+ _item['description']  +"</blockquote>";
			}

			_eventsHTML = _eventsHTML + '</div></div>';

		}

		return _eventsHTML;
		
	};

	// 解析RFC3339时间字符串

	Calendar.parseDateTime = function(dateTimeString){

		var googleDate = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+-]\d{2}):(\d{2})$/;

		var m = googleDate.exec(dateTimeString);

		if (!m){

			var googleDate = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})Z$/;

			var m = googleDate.exec(dateTimeString);

		}

		if (!m){
			var googleDate = /^(\d{4})-(\d{2})-(\d{2})$/;

			var m = googleDate.exec(dateTimeString);
		}

		var dateTimeObject = new Object();

		dateTimeObject['year'] = m[1];
		dateTimeObject['month'] = m[2];
		dateTimeObject['day']   = m[3];
		dateTimeObject['hour']   = m[4];
		dateTimeObject['minute'] = m[5];
		dateTimeObject['second'] = m[6];
		dateTimeObject['msec']   = m[7];
		dateTimeObject['tzHour'] = m[8];
		dateTimeObject['tzMin']  = m[9];
		dateTimeObject['tzOffset'] = new Date().getTimezoneOffset() + dateTimeObject['tzHour'] * 60 + dateTimeObject['tzMin'];

		// return new Date(year, month - 1, day, hour, minute - tzOffset, second, msec);
		
		return dateTimeObject;

	};

	// 插入一个事件

	Calendar.insertEvent = function(eventOptions){

		if (eventOptions['id']){

			var _insertEventEndPoint = 'https://www.googleapis.com/calendar/v3/calendars/' + Calendar.currentCalendar['id']+ '/events/' + eventOptions['id'];

			var req = new XMLHttpRequest();

			req.open('PUT',_insertEventEndPoint,false);
		
		} else {

		var _insertEventEndPoint = 'https://www.googleapis.com/calendar/v3/calendars/' + Calendar.currentCalendar['id'] + '/events';

		var req = new XMLHttpRequest();

		req.open('POST',_insertEventEndPoint,false);

		}

		req.setRequestHeader("Content-Type","application/json");

		req.setRequestHeader("Authorization","Bearer "+_access_token);

		if (eventOptions['id']) delete eventOptions['id'];

		var data = $.toJSON(eventOptions); 

		req.onreadystatechange = function (e) {

        if (req.readyState == 4) {

          // console.info("response:"+req.responseText);

          Calendar.eventsList = $.parseJSON(req.responseText); 

		  if (!Calendar.eventsList['error'] && !Calendar.eventsList['items']){

			  Calendar.eventsList = {'items':new Array(Calendar.eventsList)};
		  }
        }
      };

      req.send(data);

	};

	// 删除一个事件

	Calendar.eventDeleteId = '';

	Calendar.eventDelete = function(eventId){

		var _deleteEventEndPoint = 'https://www.googleapis.com/calendar/v3/calendars/' + Calendar.currentCalendar['id'] + '/events/' + eventId; 

		var req = new XMLHttpRequest();

		req.open('DELETE',_deleteEventEndPoint,false);
		
		req.setRequestHeader("Authorization","Bearer "+_access_token);

		req.onreadystatechange = function (e) {

        if (req.readyState == 4) {

			if (req.status.toString().substr(0,1) === '2' )
			{
				Calendar.eventDeleteId = eventId;

			}

          // console.info("response:"+req.responseText);
 
        }
      };

      req.send(null);

	};

	//  新建一个日历

	Calendar.calendarCreate = function(calendarOptions){

		var _createCalendarEndPoint = 'https://www.googleapis.com/calendar/v3/calendars';

		var req = new XMLHttpRequest();

		req.open('POST',_createCalendarEndPoint,false);

		req.setRequestHeader("Content-Type","application/json");

		req.setRequestHeader("Authorization","Bearer "+_access_token);

		var data = $.toJSON(calendarOptions); 

		req.onreadystatechange = function (e) {

		if (req.readyState == 4) {

			// console.info("response:"+req.responseText);

            Calendar.listResponse = $.parseJSON(req.responseText); 
			

		}

		}

		 req.send(data);

		 return ;
	
	};

	return Calendar;

    })(window,jQuery);


/* Utility：与页面结构密切关联的工具函数 */

var Utility = (function(window,$){
    
    var Utility = new Object();

    // 更新事件列表

    Utility.refreshEventsList = function(mode){

	mode = arguments[0]?arguments[0]:'select-event-list';

	if (mode === 'select-event-list'){

    var infoMessage = "<strong>" + NLArray[NL]['prompt'] + "</strong>" + NLArray[NL]['loading'];

    $("#content-message").fadeIn(500).find(".alert").addClass("alert-info").html(infoMessage);

     Calendar.getEventsList(Calendar.currentCalendar["id"],$("#timemin").val(),$("#timemax").val());

     $("#content-message").fadeOut(500).find(".alert").removeClass("alert-info");

	 }

     // $("#calendar-events").text(response.toString());

     var response = Calendar.eventsList;

	 Calendar.doEventsList(response);

	 if (Calendar.eventsListError){

	 $("#calendar-events").html('<div class="alert alert-error"><strong>' + NLArray[NL]['error-prompt'] + '</strong> '+Calendar.eventsListErrorMessage+"</div>");

		 return 1;


	 }

	 if (Calendar.eventsListNumber === 0){

		 $("#calendar-events").html('<div class="alert alert-block"><strong>Ooops!</strong>' +  NLArray[NL]['time-range'] + '（' + $('#timemin').val() + ' - ' + $('#timemax').val() + '）' + NLArray[NL]['time-range-message'] + '</div>');

		 return 1;

	 }

	 var calendarEventsHTML = '<div class="alert alert-success">' + NLArray[NL]['event-number'] + '<span id="event-number">'+ Calendar.eventsListNumber +'</span></div>';

	 if (!response["items"]) {

		 calendarEventsHTML += Calendar.showEventsList(new Array(response));

	 } else {

		 calendarEventsHTML += Calendar.showEventsList(response["items"]);

	 }

	 $("#calendar-events").html(calendarEventsHTML);

     // console.dir(response);

    };

    // 重置日期栏为当前日期

    Utility.resetCurrentDate = function(){

      var currendTime = new Date();

      var currendTimemaxYear = currendTime.getFullYear();

      var currendTimemaxMonth = currendTime.getMonth()+1;

      var currendTimemaxDate = currendTime.getDate();

      var currendTimemax = currendTimemaxYear + "-" + currendTimemaxMonth + "-" + currendTimemaxDate;

      var currendTimestamp =  currendTime.getTime()/1000;

      var currendTimeminStamp = (currendTimestamp/(60*60*24) - 30)*60*60*24;

      var currendTimemin = (new Date(currendTimeminStamp*1000)).getFullYear()+"-"+((new Date(currendTimeminStamp*1000)).getMonth()+1)+"-"+(new Date(currendTimeminStamp*1000)).getDate();

      $("#timemin")[0].value = currendTimemin;

      $("#dpmin").attr("data-date",currendTimemin);

      $("#timemax")[0].value = currendTimemax;

      $("#dpmax").attr("data-date", currendTimemax); 

    };

	// 添加新事件

	Utility.addEvent = function(){

		if (!Calendar.currentCalendar['id']){

			Utility.showStatusBar('error',NLArray[NL]['no-calendar-error']);

			return ;

		}

		Utility.setNewEventTime();

		$('#momentstart').val(Utility.currentTime['hour'] + ":" + Utility.currentTime['minute']);

		$('#momentstart').timepicker({'showMeridian':false,'defaultTime':'value'});

		$('#momentend').val(new Date(Utility.currentTime['endStamp']*1000).getHours() + ":" + new Date(Utility.currentTime['endStamp']*1000).getMinutes());

		$('#momentend').timepicker({'showMeridian':false,'defaultTime':'value'});

		$('#form-event-summary').val('');

		$('#form-event-description').val('');

		$('#event-new').find('.modal-header p').text(NLArray[NL]['add-new-event-header']);

		$('#event-new').modal({"keyboard":false,"show":true,'backdrop':"static"});

	};

	// 显示状态条

	Utility.showStatusBar = function(status,statusMessage){

		var statusClass = 'alert-' + status; 
	
	    statusMessage = "<strong>" + NLArray[NL]['prompt'] + "</strong>"+ statusMessage + "  <a href=\""+ Utility.url["protocol"] + "//" + Utility.url["host"] + Utility.url["path"] + "\">" + NLArray[NL]['return'] + "</a>";

        $("#content-message").show().find(".alert").addClass(statusClass).html(statusMessage);
	
	};

	// 解析URL

	Utility.url = new Object();

	Utility.parseUrl = function(){

		 Utility.url["host"] = location.host;

		 Utility.url["href"] = location.href;

		 Utility.url["path"] = location.pathname;

		 Utility.url["protocol"] = location.protocol;

		 Utility.url["port"] = location.port;

		 Utility.url["hash"] = location.hash;

		 Utility.url["search"] = location.search;

		 return Utility.url;

	};

	// 解析网址的hash部分

	Utility.hash = new Object();

	Utility.parseHash = function(hashString){

		var hashArray = (hashString.substr(1)).split("&");

		for (i in hashArray){

			var hashKey = hashArray[i].split("=")[0];

			var hashValue = hashArray[i].split("=")[1];

			Utility.hash[hashKey] = hashValue;

		}

		return Utility.hash;	
	
	};
	
	// 设定添加事件时的默认时间

	Utility.currentTime = new Object();

	Utility.setNewEventTime = function(){

	  Utility.currentTime['raw'] = new Date();

      Utility.currentTime['year'] = Utility.currentTime['raw'].getFullYear();

      Utility.currentTime['month'] = Utility.currentTime['raw'].getMonth()+1;

      Utility.currentTime['date'] = Utility.currentTime['raw'].getDate();

	  Utility.currentTime['hour'] = Utility.currentTime['raw'].getHours();

	  Utility.currentTime['minute'] = Utility.currentTime['raw'].getMinutes();

	  Utility.currentTime['second'] = Utility.currentTime['raw'].getSeconds();

	  var TimeStart = Utility.currentTime['year'] + "-" + Utility.currentTime['month'] + "-" + Utility.currentTime['date'];

	  Utility.currentTime['startStamp'] =  Utility.currentTime['raw'].getTime()/1000;

      Utility.currentTime['endStamp'] = Utility.currentTime['startStamp'] + 60*60;

      var TimeEnd = (new Date(Utility.currentTime['endStamp']*1000)).getFullYear();
	  
	  TimeEnd  = TimeEnd +"-"+((new Date(Utility.currentTime['endStamp']*1000)).getMonth()+1);
	  
	  TimeEnd = TimeEnd +"-"+(new Date(Utility.currentTime['endStamp']*1000)).getDate();

      $("#timestart")[0].value = TimeStart;

	  $('#dpstart').data('date',TimeStart);

      $("#dpstart").attr("data-date",TimeStart);

      $("#timeend")[0].value = TimeEnd;

	  $('#dpend').data('date',TimeEnd);

      $("#dpend").attr("data-date", TimeEnd);

	};

	// 检查插入事件的表单

	Utility.checkEventForm = function(formId){

		var form = $(formId);

		var inputArray = form.find('input');

		var formErrorStatus = false ;

		inputArray.each(function(){

			var input = $(this);

			if (input.hasClass('error')){
				input.removeClass('error');
			}

			if (!input.val()){

				input.addClass('error');

				formErrorStatus = true;

			}

			});

		if (formErrorStatus) return 0;

		return 1;
	
	};

	// 插入一个事件

	Utility.insertEvent = function(){

		var options = new Object();

		var dateStart = $('#timestart').val();

		var timeStart = $('#momentstart').val();

		var dateEnd = $('#timeend').val();

		var timeEnd = $('#momentend').val();

		options['start'] = {'dateTime':Utility.setRFC3339(dateStart,timeStart)};

		options['end'] = {'dateTime':Utility.setRFC3339(dateEnd,timeEnd)};

		options['summary'] = $.trim($('#form-event-summary').val()); 

		if ($.trim($('#form-event-description').val())){

			options['description'] = $.trim($('#form-event-description').val());

		}

		if ($('#button-insert-event').data('id')){i

			options['id'] = $('#button-insert-event').data('id');

			$('#button-insert-event').data('id','');

		}

		return options;

	};

	// 生成RFC3339格式的日期

	Utility.setRFC3339 = function(date,time){
	
		var dateArray = date.split("-");

		var rfcString = dateArray[0]+'-';

		rfcString = rfcString + Utility.padZero(dateArray[1]) + '-';

		rfcString = rfcString + Utility.padZero(dateArray[2]) + 'T';

		var timeArray = time.split(":");

		rfcString = rfcString + Utility.padZero(timeArray[0]) + ':' ;

		rfcString = rfcString + Utility.padZero(timeArray[1]) + ':' ;

		rfcString = rfcString + "00";

		var dateOffset = (new Date()).getTimezoneOffset();

		rfcString = rfcString + (dateOffset>0?"-":"+");

		rfcString = rfcString + Utility.padZero(Math.floor(Math.abs(dateOffset) / 60)) + ":" + Utility.padZero(Math.abs(dateOffset) % 60);

		return rfcString;
	
	};

	// 为不到两位的数字加上前导0

	Utility.padZero = function(numString){

		if ((numString*1)<10) numString = '0' + (numString*1).toString();

		return numString;
	
	};

	// 询问是否删除一个事件

	Utility.confirmEventDelete = function(eventId){

		$('#button-confirm-event-delete').attr('data-id',eventId);

		$('#modal-event-delete').modal('show');

	};

	// 删除一个事件

	Utility.eventDelete = function(eventId){

		Calendar.eventDelete(eventId);

		$('#modal-event-delete').modal('hide');

		if (Calendar.eventDeleteId === eventId){

			$('#'+eventId).hide('5000');

			$('#event-number').text(parseInt($('#event-number').text())-1);
		} else {

			$("#content-message").fadeIn(1500).find(".alert").addClass("alert-info").html('<strong>' + NLArray[NL]['error-prompt'] + '</strong>' + NLArray[NL]['delete-fail-error']);

		}

		Calendar.eventDeleteId = '';

	};

	// 显示事件编辑窗口

	Utility.confirmEventEdit = function(eventId){

		// console.info('事件编辑窗口：ID' + eventId);

		for ( i in Calendar.eventsList['items']){

			if (Calendar.eventsList['items'][i]['id'] === eventId){

				var event = Calendar.eventsList['items'][i];

				break;

			}
		}

		if (!event) return ;

		$('#event-new').find('.modal-header p').text(NLArray[NL]['event-edit-header']);

		if (event['start']['dateTime']===undefined) {
			event['start']['dateTime'] = event['start']['date'] + 'T00:00:00' ;
			event['end']['dateTime'] = event['end']['date'] + 'T23:59:59' ; 		
		}

		$('#timestart').val(event['start']['dateTime'].split('T')[0]);

		$('#dpstart').data('date',event['start']['dateTime'].split('T')[0]);

		$('#dpstart').attr('data-date',event['start']['dateTime'].split('T')[0]);

		$('#timeend').val(event['end']['dateTime'].split('T')[0]);

		$('#dpend').data('date',event['end']['dateTime'].split('T')[0]);

		$('#dpend').attr('data-date',event['end']['dateTime'].split('T')[0]);

		$('#momentstart').val(event['start']['dateTime'].split('T')[1].substr(0,5));

		$('#momentstart').timepicker({'showMeridian':false,'defaultTime':'value'});

		$('#momentend').val(event['end']['dateTime'].split('T')[1].substr(0,5));

		$('#momentend').timepicker({'showMeridian':false,'defaultTime':'value'});

		$('#form-event-summary').val(event['summary']);

		$('#form-event-description').val(event['description']);

		$('#button-insert-event').data('id',eventId);
	
		$('#event-new').modal({'keyboard':false,'show':true,'backdrop':"static"});
	
	};

	// 创建一个新日历

	Utility.calendarCreate = function(){

		if(!Utility.checkEventForm('#modal-calendar-create')) return false;	

		$('#modal-calendar-create').modal('hide');
		
		var option = new Object();

		option['summary'] = $('#form-calendar-summary').val();

		var dateOffset = (new Date()).getTimezoneOffset();

		option['timeZone'] = (dateOffset>0?"-":"+") +  Utility.padZero(Math.floor(Math.abs(dateOffset) / 60)) + ":" + Utility.padZero(Math.abs(dateOffset) % 60);

		Calendar.calendarCreate(option);

		var response = Calendar.listResponse;

		if (response['error'] || !response['id']){

		 $("#calendar-events").html('<div class="alert alert-block"><strong>' + NLArray[NL]['error-prompt'] + '</strong>' +  NLArray[NL]['create-calendar-error'] + '</div>');

		 return ;
			 
		}

		response['main'] = 1;

		Calendar.listEntry.forEach(function(value,index,array){
					
					Calendar.listEntry[index]['main'] = 0;
					
					});

		Calendar.listEntry.push(response);

		$('<option value="' + response['id']  + '">' + response['summary']  + '</option>').prependTo('#calendar-list select');

		Utility.resetCurrentDate();

        Calendar.setCurrentCalendar(response.id);

		$('#calendar-list option').each(function(){
			
			if (this.value === Calendar.currentCalendar['id']){

			this.selected = 'selected';

			}

			});
		

        Utility.refreshEventsList();
	
	};

    return Utility;
    
    })(window,jQuery);

/* =========================================================
 * bootstrap-datepicker.js 
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
 
!function( $ ) {
	
	// Picker object
	
	var Datepicker = function(element, options){
		this.element = $(element);
		this.format = DPGlobal.parseFormat(options.format||this.element.data('date-format')||'mm/dd/yyyy');
		this.picker = $(DPGlobal.template)
							.appendTo('body')
							.on({
								click: $.proxy(this.click, this),
								mousedown: $.proxy(this.mousedown, this)
							});
		this.isInput = this.element.is('input');
		this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
		
		if (this.isInput) {
			this.element.on({
				focus: $.proxy(this.show, this),
				blur: $.proxy(this.hide, this),
				keyup: $.proxy(this.update, this)
			});
		} else {
			if (this.component){
				this.component.on('click', $.proxy(this.show, this));
			} else {
				this.element.on('click', $.proxy(this.show, this));
			}
		}
		
		this.viewMode = 0;
		this.weekStart = options.weekStart||this.element.data('date-weekstart')||0;
		this.weekEnd = this.weekStart == 0 ? 6 : this.weekStart - 1;
		this.fillDow();
		this.fillMonths();
		this.update();
		this.showMode();
	};
	
	Datepicker.prototype = {
		constructor: Datepicker,
		
		show: function(e) {
			this.picker.show();
			this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
			this.place();
			$(window).on('resize', $.proxy(this.place, this));
			if (e ) {
				e.stopPropagation();
				e.preventDefault();
			}
			if (!this.isInput) {
				$(document).on('mousedown', $.proxy(this.hide, this));
			}
			this.update();
			this.element.trigger({
				type: 'show',
				date: this.date
			});
		},
		
		hide: function(){
			this.picker.hide();
			$(window).off('resize', this.place);
			this.viewMode = 0;
			this.showMode();
			if (!this.isInput) {
				$(document).off('mousedown', this.hide);
			}
			this.setValue();	
			this.element.trigger({
				type: 'hide',
				date: this.date
			});
		},
		
		setValue: function() {
			var formated = DPGlobal.formatDate(this.date, this.format);
			if (!this.isInput) {
				if (this.component){
					this.element.find('input').prop('value', formated);
				}
				this.element.data('date', formated);
			} else {
				this.element.prop('value', formated);
			}
		},
		
		place: function(){
			var offset = this.component ? this.component.offset() : this.element.offset();
			this.picker.css({
				top: offset.top + this.height,
				left: offset.left
			});
		},
		
		update: function(){
			this.date = DPGlobal.parseDate(
				this.isInput ? this.element.prop('value') : this.element.data('date'),
				this.format
			);
			this.viewDate = new Date(this.date);
			this.fill();
		},
		
		fillDow: function(){
			var dowCnt = this.weekStart;
			var html = '<tr>';
			while (dowCnt < this.weekStart + 7) {
				html += '<th class="dow">'+DPGlobal.dates.daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},
		
		fillMonths: function(){
			var html = '';
			var i = 0
			while (i < 12) {
				html += '<span class="month">'+DPGlobal.dates.monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').append(html);
		},
		
		fill: function() {
			var d = new Date(this.viewDate),
				year = d.getFullYear(),
				month = d.getMonth(),
				currentDate = this.date.valueOf();
			this.picker.find('.datepicker-days th:eq(1)')
						.text(DPGlobal.dates.months[month]+' '+year);
			var prevMonth = new Date(year, month-1, 28,0,0,0,0),
				day = DPGlobal.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());
			prevMonth.setDate(day);
			prevMonth.setDate(day - (prevMonth.getDay() - this.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			nextMonth.setDate(nextMonth.getDate() + 42);
			nextMonth = nextMonth.valueOf();
			html = [];
			var clsName;
			while(prevMonth.valueOf() < nextMonth) {
				if (prevMonth.getDay() == this.weekStart) {
					html.push('<tr>');
				}
				clsName = '';
				if (prevMonth.getMonth() < month) {
					clsName += ' old';
				} else if (prevMonth.getMonth() > month) {
					clsName += ' new';
				}
				if (prevMonth.valueOf() == currentDate) {
					clsName += ' active';
				}
				html.push('<td class="day'+clsName+'">'+prevMonth.getDate() + '</td>');
				if (prevMonth.getDay() == this.weekEnd) {
					html.push('</tr>');
				}
				prevMonth.setDate(prevMonth.getDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
			var currentYear = this.date.getFullYear();
			
			var months = this.picker.find('.datepicker-months')
						.find('th:eq(1)')
							.text(year)
							.end()
						.find('span').removeClass('active');
			if (currentYear == year) {
				months.eq(this.date.getMonth()).addClass('active');
			}
			
			html = '';
			year = parseInt(year/10, 10) * 10;
			var yearCont = this.picker.find('.datepicker-years')
								.find('th:eq(1)')
									.text(year + '-' + (year + 9))
									.end()
								.find('td');
			year -= 1;
			for (var i = -1; i < 11; i++) {
				html += '<span class="year'+(i == -1 || i == 10 ? ' old' : '')+(currentYear == year ? ' active' : '')+'">'+year+'</span>';
				year += 1;
			}
			yearCont.html(html);
		},
		
		click: function(e) {
			e.stopPropagation();
			e.preventDefault();
			var target = $(e.target).closest('span, td, th');
			if (target.length == 1) {
				switch(target[0].nodeName.toLowerCase()) {
					case 'th':
						switch(target[0].className) {
							case 'switch':
								this.showMode(1);
								break;
							case 'prev':
							case 'next':
								this.viewDate['set'+DPGlobal.modes[this.viewMode].navFnc].call(
									this.viewDate,
									this.viewDate['get'+DPGlobal.modes[this.viewMode].navFnc].call(this.viewDate) + 
									DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1)
								);
								this.fill();
								break;
						}
						break;
					case 'span':
						if (target.is('.month')) {
							var month = target.parent().find('span').index(target);
							this.viewDate.setMonth(month);
						} else {
							var year = parseInt(target.text(), 10)||0;
							this.viewDate.setFullYear(year);
						}
						this.showMode(-1);
						this.fill();
						break;
					case 'td':
						if (target.is('.day')){
							var day = parseInt(target.text(), 10)||1;
							var month = this.viewDate.getMonth();
							if (target.is('.old')) {
								month -= 1;
							} else if (target.is('.new')) {
								month += 1;
							}
							var year = this.viewDate.getFullYear();
							this.date = new Date(year, month, day,0,0,0,0);
							this.viewDate = new Date(year, month, day,0,0,0,0);
							this.fill();
							this.setValue();
							this.element.trigger({
								type: 'changeDate',
								date: this.date
							});
						}
						break;
				}
			}
		},
		
		mousedown: function(e){
			e.stopPropagation();
			e.preventDefault();
		},
		
		showMode: function(dir) {
			if (dir) {
				this.viewMode = Math.max(0, Math.min(2, this.viewMode + dir));
			}
			this.picker.find('>div').hide().filter('.datepicker-'+DPGlobal.modes[this.viewMode].clsName).show();
		}
	};
	
	$.fn.datepicker = function ( option ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option == 'object' && option;
			if (!data) {
				$this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults,options))));
			}
			if (typeof option == 'string') data[option]();
		});
	};

	$.fn.datepicker.defaults = {
	};
	$.fn.datepicker.Constructor = Datepicker;
	
	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
		}],
		dates:{
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		},
		isLeapYear: function (year) {
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
		},
		getDaysInMonth: function (year, month) {
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
		},
		parseFormat: function(format){
			var separator = format.match(/[.\/-].*?/),
				parts = format.split(/\W+/);
			if (!separator || !parts || parts.length == 0){
				throw new Error("Invalid date format.");
			}
			return {separator: separator, parts: parts};
		},
		parseDate: function(date, format) {
			var parts = date.split(format.separator),
				date = new Date(1970, 1, 1, 0, 0, 0),
				val;
			if (parts.length == format.parts.length) {
				for (var i=0, cnt = format.parts.length; i < cnt; i++) {
					val = parseInt(parts[i], 10)||1;
					switch(format.parts[i]) {
						case 'dd':
						case 'd':
							date.setDate(val);
							break;
						case 'mm':
						case 'm':
							date.setMonth(val - 1);
							break;
						case 'yy':
							date.setFullYear(2000 + val);
							break;
						case 'yyyy':
							date.setFullYear(val);
							break;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format){
			var val = {
				d: date.getDate(),
				m: date.getMonth() + 1,
				yy: date.getFullYear().toString().substring(2),
				yyyy: date.getFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			var date = [];
			for (var i=0, cnt = format.parts.length; i < cnt; i++) {
				date.push(val[format.parts[i]]);
			}
			return date.join(format.separator);
		},
		headTemplate: '<thead>'+
							'<tr>'+
								'<th class="prev"><i class="icon-arrow-left"/></th>'+
								'<th colspan="5" class="switch"></th>'+
								'<th class="next"><i class="icon-arrow-right"/></th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
	};
	DPGlobal.template = '<div class="datepicker dropdown-menu">'+
							'<div class="datepicker-days">'+
								'<table class=" table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
								'</table>'+
							'</div>'+
						'</div>';

}( window.jQuery )

/* =========================================================
 * bootstrap-timepicker.js
 * http://www.github.com/jdewit/bootstrap-timepicker
 * =========================================================
 * Copyright 2012
 *
 * Created By:
 * Joris de Wit @joris_dewit
 *
 * Contributions By:
 * Gilbert @mindeavor
 * Koen Punt info@koenpunt.nl
 * Nek
 * Chris Martin
 * Dominic Barnes contact@dominicbarnes.us
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

!function($) {

    "use strict"; // jshint ;_;

    /* TIMEPICKER PUBLIC CLASS DEFINITION
     * ================================== */
    var Timepicker = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, $.fn.timepicker.defaults, options, this.$element.data());
        this.minuteStep = this.options.minuteStep || this.minuteStep;
        this.secondStep = this.options.secondStep || this.secondStep;
        this.showMeridian = this.options.showMeridian || this.showMeridian;
        this.showSeconds = this.options.showSeconds || this.showSeconds;
        this.showInputs = this.options.showInputs || this.showInputs;
        this.disableFocus = this.options.disableFocus || this.disableFocus;
        this.template = this.options.template || this.template;
        this.modalBackdrop = this.options.modalBackdrop || this.modalBackdrop;
        this.defaultTime = this.options.defaultTime || this.defaultTime;
        this.open = false;
        this.init();
    };

    Timepicker.prototype = {

        constructor: Timepicker

        , init: function () {
            if (this.$element.parent().hasClass('input-append')) {
                this.$element.parent('.input-append').find('.add-on').on('click', $.proxy(this.showWidget, this));
                this.$element.on({
                    focus: $.proxy(this.highlightUnit, this),
                    click: $.proxy(this.highlightUnit, this),
                    keypress: $.proxy(this.elementKeypress, this),
                    blur: $.proxy(this.blurElement, this)
                });

            } else {
                if (this.template) {
                    this.$element.on({
                        focus: $.proxy(this.showWidget, this),
                        click: $.proxy(this.showWidget, this),
                        blur: $.proxy(this.blurElement, this)
                    });
                } else {
                    this.$element.on({
                        focus: $.proxy(this.highlightUnit, this),
                        click: $.proxy(this.highlightUnit, this),
                        keypress: $.proxy(this.elementKeypress, this),
                        blur: $.proxy(this.blurElement, this)
                    });
                }
            }
            

            this.$widget = $(this.getTemplate()).appendTo('body');
            
            this.$widget.on('click', $.proxy(this.widgetClick, this));

            if (this.showInputs) {
                this.$widget.find('input').on({
                    click: function() { this.select(); },
                    keypress: $.proxy(this.widgetKeypress, this),
                    change: $.proxy(this.updateFromWidgetInputs, this)
                });
            } 

            this.setDefaultTime(this.defaultTime);
        }

        , showWidget: function(e) {
            e.stopPropagation();
            e.preventDefault();

            if (this.open) {
                return;
            }

            this.$element.trigger('show');

            if (this.disableFocus) {
                this.$element.blur();
            }

            var pos = $.extend({}, this.$element.offset(), {
                height: this.$element[0].offsetHeight
            });

            this.updateFromElementVal();

            $('html')
                .trigger('click.timepicker.data-api')
                .one('click.timepicker.data-api', $.proxy(this.hideWidget, this));

            if (this.template === 'modal') {
                this.$widget.modal('show').on('hidden', $.proxy(this.hideWidget, this));
            } else {
                this.$widget.css({
                    top: pos.top + pos.height
                    , left: pos.left
                })

                if (!this.open) {
                    this.$widget.addClass('open');
                }
            }

            this.open = true;
            this.$element.trigger('shown');
        }

        , hideWidget: function(){
            this.$element.trigger('hide');
            
            if (this.template === 'modal') {
                this.$widget.modal('hide');
            } else {
                this.$widget.removeClass('open');
            }
            this.open = false;
            this.$element.trigger('hidden');
        }

        , widgetClick: function(e) {
            e.stopPropagation();
            e.preventDefault();

            var action = $(e.target).closest('a').data('action');
            if (action) {
                this[action]();
                this.update();
            }
        }

        , widgetKeypress: function(e) {
            var input = $(e.target).closest('input').attr('name');

            switch (e.keyCode) {
                case 9: //tab
                    if (this.showMeridian) {
                        if (input == 'meridian') { 
                            this.hideWidget();
                        }
                    } else {
                        if (this.showSeconds) { 
                            if (input == 'second') {
                                this.hideWidget();
                            }
                        } else {
                            if (input == 'minute') {
                                this.hideWidget();
                            }
                        }
                    }
                break;
                case 27: // escape
                    this.hideWidget();
                break;
                case 38: // up arrow
                    switch (input) {
                        case 'hour':
                            this.incrementHour();
                        break;
                        case 'minute':
                            this.incrementMinute();
                        break;
                        case 'second':
                            this.incrementSecond();
                        break;
                        case 'meridian':
                            this.toggleMeridian();
                        break;
                    }
                    this.update();
                break;
                case 40: // down arrow
                    switch (input) {
                        case 'hour':
                            this.decrementHour();
                        break;
                        case 'minute':
                            this.decrementMinute();
                        break;
                        case 'second':
                            this.decrementSecond();
                        break;
                        case 'meridian':
                            this.toggleMeridian();
                        break;
                    }
                    this.update();
                break;
            }
        }

        , elementKeypress: function(e) {
            var input = this.$element.get(0);
            switch (e.keyCode) {
                case 0: //input
                break;
                case 9: //tab
                    this.updateFromElementVal();
                    if (this.showMeridian) {
                        if (this.highlightedUnit != 'meridian') {
                            e.preventDefault();
                            this.highlightNextUnit();
                        }
                    } else {
                        if (this.showSeconds) { 
                            if (this.highlightedUnit != 'second') {
                                e.preventDefault();
                                this.highlightNextUnit();
                            }
                        } else {
                            if (this.highlightedUnit != 'minute') {
                                e.preventDefault();
                                this.highlightNextUnit();
                            }
                        }
                    }
                break;
                case 27: // escape
                    this.updateFromElementVal();
                break;
                case 37: // left arrow
                    this.updateFromElementVal();
                    this.highlightPrevUnit();
                break;
                case 38: // up arrow
                    switch (this.highlightedUnit) {
                        case 'hour':
                            this.incrementHour();
                        break;
                        case 'minute':
                            this.incrementMinute();
                        break;
                        case 'second':
                            this.incrementSecond();
                        break;
                        case 'meridian':
                            this.toggleMeridian();
                        break;
                    }
                    this.updateElement();
                break;
                case 39: // right arrow
                    this.updateFromElementVal();
                    this.highlightNextUnit();
                break;
                case 40: // down arrow
                    switch (this.highlightedUnit) {
                        case 'hour':
                            this.decrementHour();
                        break;
                        case 'minute':
                            this.decrementMinute();
                        break;
                        case 'second':
                            this.decrementSecond();
                        break;
                        case 'meridian':
                            this.toggleMeridian();
                        break;
                    }
                    this.updateElement();
                break;
            }
            
            if (e.keyCode !== 0 && e.keyCode !== 8 && e.keyCode !== 9 && e.keyCode !== 46) {
                e.preventDefault();
            }
        }

        , setValues: function(time) {
            if (this.showMeridian) {
                var arr = time.split(' ');
                var timeArray = arr[0].split(':');
                this.meridian = arr[1];
            } else {
                var timeArray = time.split(':');
            }

            this.hour = parseInt(timeArray[0], 10);
            this.minute = parseInt(timeArray[1], 10);
            this.second = parseInt(timeArray[2], 10);

            if (isNaN(this.hour)) {
                this.hour = 0;
            } 
            if (isNaN(this.minute)) {
                this.minute = 0;
            }

            if (this.showMeridian) {
                if (this.hour > 12) {
                    this.hour = 12;
                } else if (this.hour < 1) {
                    this.hour = 1;
                }

                if (this.meridian == 'am' || this.meridian == 'a') {
                    this.meridian = 'AM';
                } else if (this.meridian == 'pm' || this.meridian == 'p') {
                    this.meridian = 'PM';
                } 

                if (this.meridian != 'AM' && this.meridian != 'PM') {
                    this.meridian = 'AM';
                }
            } else {
                 if (this.hour >= 24) {
                    this.hour = 23;
                } else if (this.hour < 0) {
                    this.hour = 0;
                }
            }

            if (this.minute < 0) {
                this.minute = 0;
            } else if (this.minute >= 60) {
                this.minute = 59;
            }

            if (this.showSeconds) {
                if (isNaN(this.second)) {
                    this.second = 0;
                } else if (this.second < 0) {
                    this.second = 0;
                } else if (this.second >= 60) {
                    this.second = 59;
                }
            }

            this.updateElement();
            this.updateWidget();
        }

        , setMeridian: function(meridian) {
            if (meridian == 'a' || meridian == 'am' || meridian == 'AM' ) {
                this.meridian = 'AM';
            } else if (meridian == 'p' || meridian == 'pm' || meridian == 'PM' ) {
                this.meridian = 'PM';
            } else {
                this.updateWidget();
            }

            this.updateElement();
        }

        , setDefaultTime: function(defaultTime){
            if (defaultTime) {
                if (defaultTime === 'current') {
                    var dTime = new Date();
                    var hours = dTime.getHours();
                    var minutes = Math.floor(dTime.getMinutes() / this.minuteStep) * this.minuteStep;
                    var seconds = Math.floor(dTime.getSeconds() / this.secondStep) * this.secondStep;
                    var meridian = "AM";
                    if (this.showMeridian) {
                        if (hours === 0) {
                            hours = 12;
                        } else if (hours >= 12) {
                            if (hours > 12) {
                                hours = hours - 12;
                            }
                            meridian = "PM";
                        } else {
                           meridian = "AM";
                        }
                    }
                    this.hour = hours;
                    this.minute = minutes;
                    this.second = seconds;
                    this.meridian = meridian;
                } else if (defaultTime === 'value') {
                    this.setValues(this.$element.val());
                } else {
                    this.setValues(defaultTime);
                }
                this.update();
            } else {
                this.hour = 0;
                this.minute = 0;
                this.second = 0;
            }
        }

        , formatTime: function(hour, minute, second, meridian) {
            hour = hour < 10 ? '0' + hour : hour;
            minute = minute < 10 ? '0' + minute : minute;
            second = second < 10 ? '0' + second : second;

            return hour + ':' + minute + (this.showSeconds ? ':' + second : '') + (this.showMeridian ? ' ' + meridian : '');
        }

        , getTime: function() {
            return this.formatTime(this.hour, this.minute, this.second, this.meridian);
        }

        , setTime: function(time) {
            this.setValues(time);
            this.update();
        }

        , update: function() {
            this.updateElement();
            this.updateWidget();
        }

        , blurElement: function() {
          this.highlightedUnit = undefined;
          this.updateFromElementVal();
        }

        , updateElement: function() {
            var time = this.getTime();

            this.$element.val(time).change();

            switch (this.highlightedUnit) {
                case 'hour':
                    this.highlightHour();
                break;
                case 'minute':
                    this.highlightMinute();
                break;
                case 'second':
                    this.highlightSecond();
                break;
                case 'meridian':
                    this.highlightMeridian();
                break;
            }
        }

        , updateWidget: function() {
            if (this.showInputs) {
                this.$widget.find('input.bootstrap-timepicker-hour').val(this.hour < 10 ? '0' + this.hour : this.hour);
                this.$widget.find('input.bootstrap-timepicker-minute').val(this.minute < 10 ? '0' + this.minute : this.minute);
                if (this.showSeconds) {
                    this.$widget.find('input.bootstrap-timepicker-second').val(this.second < 10 ? '0' + this.second : this.second);
                }
                if (this.showMeridian) {
                    this.$widget.find('input.bootstrap-timepicker-meridian').val(this.meridian);
                }
            } else {
                this.$widget.find('span.bootstrap-timepicker-hour').text(this.hour);
                this.$widget.find('span.bootstrap-timepicker-minute').text(this.minute < 10 ? '0' + this.minute : this.minute);
                if (this.showSeconds) {
                    this.$widget.find('span.bootstrap-timepicker-second').text(this.second < 10 ? '0' + this.second : this.second);
                }
                if (this.showMeridian) {
                    this.$widget.find('span.bootstrap-timepicker-meridian').text(this.meridian);
                }
            }
        }

        , updateFromElementVal: function (e) {
            var time = this.$element.val();
            if (time) {
                this.setValues(time);
                this.updateWidget();
            }
        }

        , updateFromWidgetInputs: function () {
            var time = $('input.bootstrap-timepicker-hour', this.$widget).val() + ':' + 
                       $('input.bootstrap-timepicker-minute', this.$widget).val() +
                       (this.showSeconds ? 
                           ':' + $('input.bootstrap-timepicker-second', this.$widget).val() 
                        : '') +
                       (this.showMeridian ? 
                           ' ' + $('input.bootstrap-timepicker-meridian', this.$widget).val() 
                        : '');

            this.setValues(time);
        }

        , getCursorPosition: function() {
            var input = this.$element.get(0);

            if ('selectionStart' in input) {
                // Standard-compliant browsers
                return input.selectionStart;
            } else if (document.selection) {
                // IE fix
                input.focus();
                var sel = document.selection.createRange();
                var selLen = document.selection.createRange().text.length;
                sel.moveStart('character', - input.value.length);

                return sel.text.length - selLen;
            }
        }

        , highlightUnit: function () {
            var input = this.$element.get(0);

            this.position = this.getCursorPosition();
            if (this.position >= 0 && this.position <= 2) {
                this.highlightHour();
            } else if (this.position >= 3 && this.position <= 5) {
                this.highlightMinute();
            } else if (this.position >= 6 && this.position <= 8) {
                if (this.showSeconds) {
                    this.highlightSecond();
                } else {
                    this.highlightMeridian();
                }
            } else if (this.position >= 9 && this.position <= 11) {
                this.highlightMeridian();
            }
        }

        , highlightNextUnit: function() {
            switch (this.highlightedUnit) {
                case 'hour':
                    this.highlightMinute();
                break;
                case 'minute':
                    if (this.showSeconds) {
                        this.highlightSecond();
                    } else {
                        this.highlightMeridian();
                    }
                break;
                case 'second':
                    this.highlightMeridian();
                break;
                case 'meridian':
                    this.highlightHour();
                break;
            }
        }

        , highlightPrevUnit: function() {
            switch (this.highlightedUnit) {
                case 'hour':
                    this.highlightMeridian();
                break;
                case 'minute':
                    this.highlightHour();
                break;
                case 'second':
                    this.highlightMinute();
                break;
                case 'meridian':
                    if (this.showSeconds) {
                        this.highlightSecond();
                    } else {
                        this.highlightMinute();
                    }
                break;
            }
        }

        , highlightHour: function() {
            this.highlightedUnit = 'hour';
            this.$element.get(0).setSelectionRange(0,2); 
        }

        , highlightMinute: function() {
            this.highlightedUnit = 'minute';
            this.$element.get(0).setSelectionRange(3,5); 
        }

        , highlightSecond: function() {
            this.highlightedUnit = 'second';
            this.$element.get(0).setSelectionRange(6,8); 
        }

        , highlightMeridian: function() {
            this.highlightedUnit = 'meridian';
            if (this.showSeconds) {
                this.$element.get(0).setSelectionRange(9,11); 
            } else {
                this.$element.get(0).setSelectionRange(6,8); 
            }
        }

        , incrementHour: function() {
            if (this.showMeridian) {
                if (this.hour === 11) {
                    this.toggleMeridian();
                } else if (this.hour === 12) {
                    return this.hour = 1;
                }
            }
            if (this.hour === 23) {
                return this.hour = 0;
            }
            this.hour = this.hour + 1;
        }

        , decrementHour: function() {
            if (this.showMeridian) {
                if (this.hour === 1) {
                    return this.hour = 12;
                } 
                else if (this.hour === 12) {
                    this.toggleMeridian();
                }
            }
            if (this.hour === 0) {
                return this.hour = 23;
            }
            this.hour = this.hour - 1;
        }

        , incrementMinute: function() {
            var newVal = this.minute + this.minuteStep - (this.minute % this.minuteStep);
            if (newVal > 59) {
                this.incrementHour();
                this.minute = newVal - 60;
            } else {
                this.minute = newVal;
            }
        }

        , decrementMinute: function() {
            var newVal = this.minute - this.minuteStep;
            if (newVal < 0) {
                this.decrementHour();
                this.minute = newVal + 60;
            } else {
                this.minute = newVal;
            }
        }

        , incrementSecond: function() {
            var newVal = this.second + this.secondStep - (this.second % this.secondStep);
            if (newVal > 59) {
                this.incrementMinute();
                this.second = newVal - 60;
            } else {
                this.second = newVal;
            }
        }

        , decrementSecond: function() {
            var newVal = this.second - this.secondStep;
            if (newVal < 0) {
                this.decrementMinute();
                this.second = newVal + 60;
            } else {
                this.second = newVal;
            }
        }

        , toggleMeridian: function() {
            this.meridian = this.meridian === 'AM' ? 'PM' : 'AM';

            this.update();
        }

        , getTemplate: function() {
            if (this.options.templates[this.options.template]) {
                return this.options.templates[this.options.template];
            }
            if (this.showInputs) {
                var hourTemplate = '<input type="text" name="hour" class="bootstrap-timepicker-hour" maxlength="2"/>';
                var minuteTemplate = '<input type="text" name="minute" class="bootstrap-timepicker-minute" maxlength="2"/>';
                var secondTemplate = '<input type="text" name="second" class="bootstrap-timepicker-second" maxlength="2"/>';
                var meridianTemplate = '<input type="text" name="meridian" class="bootstrap-timepicker-meridian" maxlength="2"/>';
            } else {
                var hourTemplate = '<span class="bootstrap-timepicker-hour"></span>';
                var minuteTemplate = '<span class="bootstrap-timepicker-minute"></span>';
                var secondTemplate = '<span class="bootstrap-timepicker-second"></span>';
                var meridianTemplate = '<span class="bootstrap-timepicker-meridian"></span>';
            }
            var templateContent = '<table class="'+ (this.showSeconds ? 'show-seconds' : '') +' '+ (this.showMeridian ? 'show-meridian' : '') +'">'+
                                       '<tr>'+
                                           '<td><a href="#" data-action="incrementHour"><i class="icon-chevron-up"></i></a></td>'+
                                           '<td class="separator">&nbsp;</td>'+
                                           '<td><a href="#" data-action="incrementMinute"><i class="icon-chevron-up"></i></a></td>'+
                                           (this.showSeconds ? 
                                               '<td class="separator">&nbsp;</td>'+
                                               '<td><a href="#" data-action="incrementSecond"><i class="icon-chevron-up"></i></a></td>'
                                           : '') +
                                           (this.showMeridian ? 
                                               '<td class="separator">&nbsp;</td>'+
                                               '<td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="icon-chevron-up"></i></a></td>'
                                           : '') +
                                       '</tr>'+
                                       '<tr>'+
                                           '<td>'+ hourTemplate +'</td> '+
                                           '<td class="separator">:</td>'+
                                           '<td>'+ minuteTemplate +'</td> '+
                                           (this.showSeconds ? 
                                                '<td class="separator">:</td>'+
                                                '<td>'+ secondTemplate +'</td>'
                                           : '') +
                                           (this.showMeridian ? 
                                                '<td class="separator">&nbsp;</td>'+
                                                '<td>'+ meridianTemplate +'</td>'
                                           : '') +
                                       '</tr>'+
                                       '<tr>'+
                                           '<td><a href="#" data-action="decrementHour"><i class="icon-chevron-down"></i></a></td>'+
                                           '<td class="separator"></td>'+
                                           '<td><a href="#" data-action="decrementMinute"><i class="icon-chevron-down"></i></a></td>'+
                                           (this.showSeconds ? 
                                                '<td class="separator">&nbsp;</td>'+
                                                '<td><a href="#" data-action="decrementSecond"><i class="icon-chevron-down"></i></a></td>' 
                                           : '') +
                                           (this.showMeridian ? 
                                                '<td class="separator">&nbsp;</td>'+
                                                '<td><a href="#" data-action="toggleMeridian"><i class="icon-chevron-down"></i></a></td>'
                                           : '') +
                                       '</tr>'+
                                   '</table>';

            var template;
            switch(this.options.template) {
                case 'modal':
                    template = '<div class="bootstrap-timepicker modal hide fade in" style="top: 30%; margin-top: 0; width: 200px; margin-left: -100px;" data-backdrop="'+ (this.modalBackdrop ? 'true' : 'false') +'">'+
                                   '<div class="modal-header">'+
                                       '<a href="#" class="close" data-dismiss="modal">×</a>'+
                                       '<h3>Pick a Time</h3>'+
                                   '</div>'+
                                   '<div class="modal-content">'+
                                        templateContent +
                                   '</div>'+
                                   '<div class="modal-footer">'+
                                       '<a href="#" class="btn btn-primary" data-dismiss="modal">Ok</a>'+
                                   '</div>'+
                               '</div>';
                    
                break;
                case 'dropdown':
                    template = '<div class="bootstrap-timepicker dropdown-menu">'+
                                    templateContent +
                               '</div>';
                break;
                
            }
            return template;
        }
    };


    /* TIMEPICKER PLUGIN DEFINITION
     * =========================== */

    $.fn.timepicker = function (option) {
        return this.each(function () {
            var $this = $(this)
            , data = $this.data('timepicker')
            , options = typeof option == 'object' && option;
            if (!data) {
                $this.data('timepicker', (data = new Timepicker(this, options)));
            }
            if (typeof option == 'string') {
                data[option]();
            }
        })
    }

    $.fn.timepicker.defaults = {
      minuteStep: 15
    , secondStep: 15
    , disableFocus: false
    , defaultTime: 'current'
    , showSeconds: false
    , showInputs: true
    , showMeridian: true
    , template: 'dropdown'
    , modalBackdrop: false
    , templates: {} // set custom templates
    }

    $.fn.timepicker.Constructor = Timepicker
}(window.jQuery);

/**
 * jQuery JSON Plugin
 * version: 2.3 (2011-09-17)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 * website's http://www.json.org/json2.js, which proclaims:
 * "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 * I uphold.
 *
 * It is also influenced heavily by MochiKit's serializeJSON, which is
 * copyrighted 2005 by Bob Ippolito.
 */

(function( $ ) {

	var	escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
		meta = {
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"' : '\\"',
			'\\': '\\\\'
		};

	/**
	 * jQuery.toJSON
	 * Converts the given argument into a JSON respresentation.
	 *
	 * @param o {Mixed} The json-serializble *thing* to be converted
	 *
	 * If an object has a toJSON prototype, that will be used to get the representation.
	 * Non-integer/string keys are skipped in the object, as are keys that point to a
	 * function.
	 *
	 */
	$.toJSON = typeof JSON === 'object' && JSON.stringify
		? JSON.stringify
		: function( o ) {

		if ( o === null ) {
			return 'null';
		}

		var type = typeof o;

		if ( type === 'undefined' ) {
			return undefined;
		}
		if ( type === 'number' || type === 'boolean' ) {
			return '' + o;
		}
		if ( type === 'string') {
			return $.quoteString( o );
		}
		if ( type === 'object' ) {
			if ( typeof o.toJSON === 'function' ) {
				return $.toJSON( o.toJSON() );
			}
			if ( o.constructor === Date ) {
				var	month = o.getUTCMonth() + 1,
					day = o.getUTCDate(),
					year = o.getUTCFullYear(),
					hours = o.getUTCHours(),
					minutes = o.getUTCMinutes(),
					seconds = o.getUTCSeconds(),
					milli = o.getUTCMilliseconds();

				if ( month < 10 ) {
					month = '0' + month;
				}
				if ( day < 10 ) {
					day = '0' + day;
				}
				if ( hours < 10 ) {
					hours = '0' + hours;
				}
				if ( minutes < 10 ) {
					minutes = '0' + minutes;
				}
				if ( seconds < 10 ) {
					seconds = '0' + seconds;
				}
				if ( milli < 100 ) {
					milli = '0' + milli;
				}
				if ( milli < 10 ) {
					milli = '0' + milli;
				}
				return '"' + year + '-' + month + '-' + day + 'T' +
					hours + ':' + minutes + ':' + seconds +
					'.' + milli + 'Z"';
			}
			if ( o.constructor === Array ) {
				var ret = [];
				for ( var i = 0; i < o.length; i++ ) {
					ret.push( $.toJSON( o[i] ) || 'null' );
				}
				return '[' + ret.join(',') + ']';
			}
			var	name,
				val,
				pairs = [];
			for ( var k in o ) {
				type = typeof k;
				if ( type === 'number' ) {
					name = '"' + k + '"';
				} else if (type === 'string') {
					name = $.quoteString(k);
				} else {
					// Keys must be numerical or string. Skip others
					continue;
				}
				type = typeof o[k];

				if ( type === 'function' || type === 'undefined' ) {
					// Invalid values like these return undefined
					// from toJSON, however those object members
					// shouldn't be included in the JSON string at all.
					continue;
				}
				val = $.toJSON( o[k] );
				pairs.push( name + ':' + val );
			}
			return '{' + pairs.join( ',' ) + '}';
		}
	};

	/**
	 * jQuery.evalJSON
	 * Evaluates a given piece of json source.
	 *
	 * @param src {String}
	 */
	$.evalJSON = typeof JSON === 'object' && JSON.parse
		? JSON.parse
		: function( src ) {
		return eval('(' + src + ')');
	};

	/**
	 * jQuery.secureEvalJSON
	 * Evals JSON in a way that is *more* secure.
	 *
	 * @param src {String}
	 */
	$.secureEvalJSON = typeof JSON === 'object' && JSON.parse
		? JSON.parse
		: function( src ) {

		var filtered = 
			src
			.replace( /\\["\\\/bfnrtu]/g, '@' )
			.replace( /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
			.replace( /(?:^|:|,)(?:\s*\[)+/g, '');

		if ( /^[\],:{}\s]*$/.test( filtered ) ) {
			return eval( '(' + src + ')' );
		} else {
			throw new SyntaxError( 'Error parsing JSON, source is not valid.' );
		}
	};

	/**
	 * jQuery.quoteString
	 * Returns a string-repr of a string, escaping quotes intelligently.
	 * Mostly a support function for toJSON.
	 * Examples:
	 * >>> jQuery.quoteString('apple')
	 * "apple"
	 *
	 * >>> jQuery.quoteString('"Where are we going?", she asked.')
	 * "\"Where are we going?\", she asked."
	 */
	$.quoteString = function( string ) {
		if ( string.match( escapeable ) ) {
			return '"' + string.replace( escapeable, function( a ) {
				var c = meta[a];
				if ( typeof c === 'string' ) {
					return c;
				}
				c = a.charCodeAt();
				return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
			}) + '"';
		}
		return '"' + string + '"';
	};

})( jQuery );

