var omsNotification=function(){function m(){LPPlatform.onTabActivated(function(a){b.opened&&(e(),b.tabInterface=a,g(a))});LPPlatform.onTabUpdated(function(a){b.opened&&a.tabDetails.tabID===b.tabInterface.tabDetails.tabID&&(b.opened=!1,b.tabInterface=a,g(a))})}function g(a){var d=OmsNotificationPopup.getState();if(lploggedin&&!isOffline()&&g_onemin_advert_enabled&&!(n()>g_onemin_advert_app_threshold)&&!b.opened&&d!==oneMinuteSignup.FeatureState.started&&d!==oneMinuteSignup.FeatureState.cancel){if(d===
oneMinuteSignup.FeatureState.postpone){var d=parseInt(localStorage_getItem(db_prepend("oms_postponed_date"))),c=parseInt(localStorage_getItem(db_prepend("oms_postponed_threshold_days"))),c=isNaN(c)?7:c,c=864E5*c;if(Date.now()-d<c)return}k||(f=Date.now(),k=!0,sendLpImprove("oneminute::notificationshown"));a.getTop().LPFrame.openDialog("omsNotificationPopup",{provider:l()},{css:{top:0,right:0},callback:function(a){b.dialogId=a}});b.opened=!0;b.tabInterface=a}}function h(a){switch(a){case oneMinuteSignup.FeatureState.started:localStorage_setItem(db_prepend("oms_state"),
oneMinuteSignup.FeatureState.started);break;case oneMinuteSignup.FeatureState.cancel:localStorage_setItem(db_prepend("oms_state"),oneMinuteSignup.FeatureState.cancel);break;case oneMinuteSignup.FeatureState.postpone:localStorage_setItem(db_prepend("oms_state"),oneMinuteSignup.FeatureState.postpone)}}function n(){var a=0,b;for(b in g_sites)g_sites.hasOwnProperty(b)&&a++;return a}function l(){if(g_username){if(-1!==g_username.indexOf("@gmail"))return"Gmail";if(-1!==g_username.indexOf("@yahoo"))return"Yahoo";
if(-1!==g_username.indexOf("@outlook"))return"Office365"}return"Unknown"}function e(){b.opened=!1;var a=b.dialogId;a&&b.tabInterface&&LPTabs.get({tabID:b.tabInterface.tabDetails.tabID,callback:function(b){(b=b.getTop())&&b.LPFrame.close(a)}})}var b={opened:!1,tabInterface:null,dialogId:-1},k=!1,f;(function(){m();setInterval(function(){LPPlatform.getCurrentTab(function(a){g(a)})},1E4)})();return{startOms:function(){var a=(Date.now()-f)/1E3;e();openvault(!1,"omsstart",function(b){sendLpImprove("oneminute::notificationomsstart",
{provider:l(),elapsedTimeInSec:a.toFixed()})})},cancelNotification:function(){var a=(Date.now()-f)/1E3;h(oneMinuteSignup.FeatureState.cancel);e();sendLpImprove("oneminute::notificationclose",{elapsedTimeInSec:a.toFixed()})},postponeNotification:function(){var a=(Date.now()-f)/1E3;h(oneMinuteSignup.FeatureState.postpone);e();localStorage_setItem(db_prepend("oms_postponed_date"),Date.now());sendLpImprove("oneminute::notificationnotnowclicked",{elapsedTimeInSec:a.toFixed()})},setState:h,getState:function(){return localStorage_getItem(db_prepend("oms_state"))}}}();
