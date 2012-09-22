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

    $("#calendar-list").html("日历列表 "+listEntrySelect);

    // 绑定日历列表的change事件

    $("#calendar-list").find("select").change(function(event){
        
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



$("#dpmin").click(function(){
  
  $("#dpmin").datepicker();
  
  });

$("#dpmax").click(function(){

    $("#dpmax").datepicker();
    
    });

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

      _eventsListUrl = _eventsListUrl + "&orderBy=updated"

      Calendar.currentTimemin = (new Date(timemin.split("-")[0],(timemin.split("-")[1]-1),timemin.split("-")[2])).toISOString();  
 
      Calendar.currentTimemax = (new Date(timemax.split("-")[0],(timemax.split("-")[1]-1),timemax.split("-")[2])).toISOString();

      _eventsListUrl = _eventsListUrl + "&timeMin="+Calendar.currentTimemin;

      _eventsListUrl = _eventsListUrl + "&timeMax="+Calendar.currentTimemax;      

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


/* Utility：与页面结构密切关联的工具函数 */

var Utility = (function(window,$){
    
    var Utility = new Object();

    // 更新事件列表

    Utility.refreshEventsList = function(){

    var infoMessage = "<strong>提示：</strong>正在加载，请稍候……";

    $("#content-message").fadeIn(1500).find(".alert").addClass("alert-info").html(infoMessage);

     Calendar.getEventsList(Calendar.currentCalendar["id"],$("#timemin").val(),$("#timemax").val());

     var response = Calendar.eventsList;

     $("#content-message").fadeOut(1500).find(".alert").removeClass("alert-info");

     // $("#calendar-events").text(response.toString());

      console.dir(response);

    };

    // 重置日期栏为当前日期

    Utility.resetCurrentDate = function(){

      var currendTime = new Date();

      var currendTimemaxYear = currendTime.getFullYear();

      var currendTimemaxMonth = currendTime.getMonth()+1;

      var currendTimemaxDate = currendTime.getDate();

      var currendTimemax = currendTimemaxYear + "-" + currendTimemaxMonth + "-" + currendTimemaxDate;

      var currendTimestamp =  currendTime.getTime()/1000;

      var currendTimeminStamp = (currendTimestamp/(60*60*24) - 90)*60*60*24;

      var currendTimemin = (new Date(currendTimeminStamp*1000)).getFullYear()+"-"+((new Date(currendTimeminStamp*1000)).getMonth()+1)+"-"+(new Date(currendTimeminStamp*1000)).getDate();

      $("#timemin")[0].value = currendTimemin;

      $("#dpmin").attr("data-date",currendTimemin);

      $("#timemax")[0].value = currendTimemax;

      $("#dpmax").attr("data-date", currendTimemax); 

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
