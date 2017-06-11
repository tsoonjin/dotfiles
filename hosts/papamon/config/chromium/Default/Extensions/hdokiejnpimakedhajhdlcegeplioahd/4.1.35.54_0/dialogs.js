(function(e){var k="",r=[],l={},t=["newvaultGlobal","dialog","buttons"],u=["dialog","dialogFields"],y=function(a){for(var b=0,c=r.length;b<c;++b)r[b]===a&&r.splice(b,1)},h=function(){var a=null,b=function(b,d){for(var c=0,e=b.length;c<e;++c){var p=b[c].getAttribute(d);p&&(a[p]=!0)}};return{loadFile:function(b,d){null===a&&h.initialize();var c=k+LPPlatform.getResourcePath(b.name);void 0===a[c]?(a[c]=!0,l[c]=[d],b.load(function(){var a=l[c];delete l[c];for(var b=0,d=a.length;b<d;++b)a[b]()})):l[c]?
l[c].push(d):d()},initialize:function(){null===a&&(a={},b(e.getElementsByTagName("link"),"href"),b(e.getElementsByTagName("script"),"src"))}}}(),f=function(){this.files=[];this.addedFiles={}};f.prototype.load=function(a){var b=0,c=this.files,d=function(){++b;b===c.length?a&&a():h.loadFile(c[b],d)};0===b&&0<c.length&&h.loadFile(c[0],d)};f.prototype.addFile=function(a){void 0===this.addedFiles[a.name]&&(this.files.push(a),this.addedFiles[a.name]=!0)};f.prototype.addFiles=function(a){if(a){a=[].concat(a);
for(var b=0,c=a.length;b<c;++b)this.addFile(a[b])}};var v=function(a){a.indexOf(".js")!==a.length-3&&(a=a+=".js");this.name=a;this.load=function(b){var c=e.createElement("script");c.setAttribute("type","text/javascript");c.setAttribute("src",k+LPPlatform.getResourcePath(a));LPPlatform.addEventListener(c,"load",b);e.body.appendChild(c)}},z=function(a){a.indexOf(".css")!==a.length-4&&(a=a+=".css");this.name=a;this.load=function(b){var c=e.createElement("link");c.setAttribute("type","text/css");c.setAttribute("rel",
"stylesheet");c.setAttribute("href",k+LPPlatform.getResourcePath(a));LPPlatform.addEventListener(c,"load",b);e.body.appendChild(c)}},m=function(a){f.call(this);a=a?t.concat(a):t;for(var b=0,c=a.length;b<c;++b)this.addFile(a[b])};m.prototype=Object.create(f.prototype);m.prototype.constructor=m;m.prototype.addFile=function(a){a&&f.prototype.addFile.call(this,new z(a))};m.prototype.load=function(a){for(var b=0,c=this.files,d=function(){++b===c.length&&a()},e=0,f=c.length;e<f;++e)h.loadFile(c[e],d)};
var n=function(a){f.call(this);a=a?u.concat(a):u;for(var b=0,c=a.length;b<c;++b)this.addFile(a[b])};n.prototype=Object.create(f.prototype);n.prototype.constructor=n;n.prototype.addFile=function(a){a&&f.prototype.addFile.call(this,new v(a))};LPRequire={requireJS:function(a,b){(new n(a)).load(b)}};LPDialog={DialogLoader:function(a){var b=this,c=!1,d=null,e=new n(a.js),f=new m(a.css),p=null;this.parentElementID=a.parentElementID;this.type=a.type;var l=function(){if(null===p)for(var a in dialogs)if(dialogs[a]===
b){p=a;break}return p},h=function(a,b){var c,g,d={},q=a?[].concat(a):[];b=b?[].concat(b):[];c=0;for(g=q.length;c<g;++c)d[q[c]]=!0;c=0;for(g=b.length;c<g;++c)d.hasOwnProperty(b[c])||q.push(b[c]);return q};this.extend=function(b){return new LPDialog.DialogLoader({id:b.id||a.id,htmlSource:h(a.htmlSource,b.htmlSource),css:h(a.css,b.css),js:h(a.js,b.js),type:b.type||a.type,parentElementID:b.parentElementID||a.parentElementID})};this.loadedJS=function(){return c};this.getID=function(){return a.id};var t=
function(b){return function(g){d=new window[a.type](b);c=!0;g(d)}}(this);this.loadJS=function(a){e?(Topics.get(Topics.DIALOG_LOADING).publish(),e.load(function(){t(a)})):t(a)};var u=function(a,b){var c=a.find("img");if(0<c.length)for(var d=function(){var a=0;return function(){++a;a===c.length&&b()}}(),g=0,q=c.length;g<q;++g)$(c[g]).bind("load",d);else b()},v=function(a,b){b=$(b);b.find("[dialogsection]").addBack("[dialogsection]").each(function(){var b=this.getAttribute("dialogsection"),b=a.find("[dialogsection="+
b+"]");b.before(this);b.remove()});b.find("[dialogsectionbefore]").addBack("[dialogsectionbefore]").each(function(){var b=this.getAttribute("dialogsectionbefore");a.find("[dialogsection="+b+"]").before(this)});b.find("[dialogsectionafter]").addBack("[dialogsectionafter]").each(function(){var b=this.getAttribute("dialogsectionafter");a.find("[dialogsection="+b+"]").after(this)});b.find("[dialogsectionappend]").addBack("[dialogsectionappend]").each(function(){var b=this.getAttribute("dialogsectionappend");
a.find("[dialogsection="+b+"]").append(this)});b.find("[dialogsectionprepend]").addBack("[dialogsectionprepend]").each(function(){var b=this.getAttribute("dialogsectionprepend");a.find("[dialogsection="+b+"]").prepend(this)})},w=function(b,c,d,e){d<c.length?LPPlatform.getHTML(k+a.htmlSource[d],function(a){v(b,a);w(b,c,++d,e)}):e()},x=function(b,c){var d=function(){u(b,c)};a.htmlSource instanceof Array?LPPlatform.getHTML(k+a.htmlSource[0],function(c){b.html(c);w(b,a.htmlSource,1,d)}):LPPlatform.getHTML(k+
a.htmlSource,function(a){b.html(a);d()})};this.load=function(a,b){f?f.load(function(){x(a,b)}):x(a,b)};this.open=function(){var a=arguments;this.loadedJS()?d.open.apply(d,a):(r.push(b),this.loadJS(function(){LPDialog.beforeLoad?LPDialog.beforeLoad(l(),function(){d.open.apply(d,a)}):d.open.apply(d,a);y(b)}))};this.close=function(){d&&d.close.apply(d,arguments)};this.getDialog=function(){return d}},JSFileSet:n,CSSFileSet:m,getPendingCount:function(){return r.length},getDialogs:function(){var a=[],b;
for(b in dialogs)a.push(dialogs[b]);return a},setBaseURL:function(a){k=a},openDialog:function(a,b){dialogs[a].open(b)}}})(document);
dialogs={site:new LPDialog.DialogLoader({id:"siteDialog",htmlSource:"siteDialog.html",css:["buttons","dialog","siteDialog","passwordMeter"],js:"selectDropdown typeaheadDropdown dialog dialogWithGroupInput editableFieldsDialog siteDialog passwordMeter bloodhound bloodhoundDropdown".split(" "),type:"SiteDialog"}),note:new LPDialog.DialogLoader({id:"noteDialog",htmlSource:"noteDialog.html",css:["buttons","dialog","noteDialog"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput",
"noteDialog"],type:"NoteDialog"}),customNoteTemplate:new LPDialog.DialogLoader({id:"customNoteTemplateDialog",htmlSource:"customNoteTemplateDialog.html",css:["buttons","dialog","customNoteTemplateDialog"],js:["selectDropdown","typeaheadDropdown","dialog","customNoteTemplateDialog"],type:"CustomNoteTemplateDialog"}),formFill:new LPDialog.DialogLoader({id:"formFillDialog",htmlSource:"formFillDialog.html",css:["buttons","dialog","formFillDialog"],js:["selectDropdown","typeaheadDropdown","dialog","formFillDialog",
"phoneFormatDropdown"],type:"FormFillDialog"}),acceptShare:new LPDialog.DialogLoader({id:"acceptShareDialog",htmlSource:"acceptRejectShareDialog.html",css:["buttons","dialog","acceptRejectShareDialog"],js:["selectDropdown","typeaheadDropdown","dialog","dialogWithGroupInput","acceptRejectShareDialog"],type:"AcceptShareDialog"}),share:new LPDialog.DialogLoader({id:"shareDialog",htmlSource:"shareDialog.html",css:["buttons","dialog","shareDialog","containerSelectionDialog","vaultItem"],js:"selectDropdown typeaheadDropdown dialog shareDialog bloodhound bloodhoundDropdown vaultItemTypeahead sharingModel".split(" "),
type:"ShareDialog"}),identity:new LPDialog.DialogLoader({id:"identityDialog",htmlSource:"identityDialog.html",css:["buttons","dialog","containerSelectionDialog","identityDialog"],js:["dialog","containerSelectionDialog","identityDialog"],type:"IdentityDialog"}),sharedfolderAccess:new LPDialog.DialogLoader({id:"sharedFolderAccessDialog",htmlSource:"sharedFolderAccessDialog.html",css:["buttons","dialog","containerSelectionDialog","sharedFolderAccessDialog"],js:["dialog","containerSelectionDialog","sharedFolderAccessDialog"],
type:"SharedFolderAccessDialog"}),sharedFolder:new LPDialog.DialogLoader({id:"sharedFolderDialog",htmlSource:"sharedFolderDialog.html",css:["buttons","dialog","sharedFolderDialog"],js:"dialog sharedFolderDialog bloodhound selectDropdown typeaheadDropdown bloodhoundDropdown".split(" "),type:"SharedFolderDialog"}),createSharedFolder:new LPDialog.DialogLoader({id:"createSharedFolderDialog",htmlSource:"createSharedFolderDialog.html",css:["buttons","dialog"],js:["dialog","dialogWithGroupInput","folderDialog"],
type:"CreateSharedFolderDialog"}),createCreditMonitoring:new LPDialog.DialogLoader({id:"createCreditMonitoringDialog",htmlSource:"createCreditMonitoringDialog.html",css:["buttons","dialog","createCreditMonitoringDialog"],js:["dialog","createCreditMonitoringDialog"],type:"CreateCreditMonitoringDialog"}),generatePassword:new LPDialog.DialogLoader({id:"generatePasswordDialog",htmlSource:"generatePasswordDialog.html",css:["buttons","dialog","generatePasswordDialog","passwordMeter"],js:["dialog","generatePasswordDialog",
"selectDropdown","passwordMeter"],type:"GeneratePasswordDialog"}),login:new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"loginDialog.html",css:["loginDialog"],js:["loginDialog","capslockstate"],type:"LoginDialog"}),reprompt:new LPDialog.DialogLoader({id:"repromptDialog",htmlSource:"repromptDialog.html",css:["repromptDialog"],js:["repromptDialog"],type:"RepromptDialog"}),createAccount:new LPDialog.DialogLoader({id:"createAccountDialog",htmlSource:"createAccountDialog.html",css:["buttons","dialog",
"createAccountDialog","passwordMeter"],js:["dialog","createAccountDialog","selectDropdown","passwordMeter"],type:"CreateAccountDialog"}),folder:new LPDialog.DialogLoader({id:"folderDialog",type:"FolderDialog",css:["buttons","dialog"],js:["dialog","selectDropdown","typeaheadDropdown","dialogWithGroupInput","folderDialog"],htmlSource:"folderDialog.html"}),fieldHistory:new LPDialog.DialogLoader({id:"fieldHistoryDialog",htmlSource:"fieldHistoryDialog.html",css:["buttons","dialog","fieldHistoryDialog"],
js:["dialog","fieldHistoryDialog"],type:"FieldHistoryDialog"}),linkAccount:new LPDialog.DialogLoader({id:"linkAccountDialog",htmlSource:"linkAccountDialog.html",css:["buttons","dialog","linkAccountDialog"],js:["dialog","linkAccountDialog"],type:"LinkAccountDialog"}),confirmation:new LPDialog.DialogLoader({id:"confirmationDialog",htmlSource:"confirmationDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"ConfirmationDialog"}),alert:new LPDialog.DialogLoader({id:"alertDialog",
htmlSource:"alertDialog.html",css:["buttons","dialog"],js:["dialog","confirmationDialog"],type:"AlertDialog"}),enterpriseTrial:new LPDialog.DialogLoader({id:"enterpriseTrialDialog",htmlSource:"enterpriseTrialDialog.html",css:["buttons","dialog"],js:["dialog","enterpriseTrialDialog"],type:"EnterpriseTrialDialog"}),denyEmergencyAccess:new LPDialog.DialogLoader({id:"denyEmergencyAccessDialog",htmlSource:"denyEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","denyEmergencyAccessDialog"],
type:"DenyEmergencyAccessDialog"}),verifyEmail:new LPDialog.DialogLoader({id:"verifyEmailDialog",htmlSource:"verifyEmailDialog.html",css:["buttons","dialog"],js:["dialog","verifyEmailDialog"],type:"VerifyEmailDialog"}),application:new LPDialog.DialogLoader({id:"applicationDialog",htmlSource:"applicationDialog.html",css:["buttons","dialog","passwordMeter"],js:"dialog dialogWithGroupInput editableFieldsDialog passwordMeter applicationDialog selectDropdown typeaheadDropdown".split(" "),type:"ApplicationDialog"}),
chooseProfile:new LPDialog.DialogLoader({id:"chooseProfileDialog",htmlSource:"chooseProfileDialog.html",css:["buttons","dialog","chooseProfileDialog"],js:["dialog","chooseProfileDialog"],type:"ChooseProfileDialog"}),vaultItemSelect:new LPDialog.DialogLoader({id:"vaultItemSelectDialog",htmlSource:"vaultItemSelectDialog.html",css:["buttons","dialog","vaultItem"],js:["dialog","vaultItemSelectDialog"],type:"VaultItemSelectDialog"}),inviteFriends:new LPDialog.DialogLoader({id:"inviteFriendsDialog",htmlSource:"inviteFriendsDialog.html",
css:["buttons","dialog"],js:["dialog","inviteFriendsDialog"],type:"InviteFriendsDialog"}),addEmergencyAccess:new LPDialog.DialogLoader({id:"addEmergencyAccessDialog",htmlSource:"addEmergencyAccessDialog.html",css:["buttons","dialog"],js:["dialog","addEmergencyAccessDialog"],type:"AddEmergencyAccessDialog"}),upgradePremium:new LPDialog.DialogLoader({id:"upgradePremiumDialog",htmlSource:"upgradePremiumDialog.html",css:["buttons","dialog"],js:["dialog","upgradePremiumDialog"],type:"UpgradePremiumDialog"}),
sharingKey:new LPDialog.DialogLoader({id:"sharingKeyDialog",htmlSource:"sharingKeyDialog.html",css:["buttons","dialog"],js:["dialog","sharingKeyDialog"],type:"SharingKeyDialog"}),addFormField:new LPDialog.DialogLoader({id:"addFormFieldDialog",htmlSource:"addFormFieldDialog.html",js:["dialog","dialogWithGroupInput","editableFieldsDialog"],type:"AddFormFieldDialog"})};dialogs.changePassword=dialogs.vaultItemSelect.extend({id:"changePasswordDialog",js:"changePasswordDialog",type:"ChangePasswordDialog"});
$.extend(dialogs,{notification:new LPDialog.DialogLoader({id:"notificationDialog",htmlSource:"notificationDialog.html",css:["buttons","dialog","notificationDialog"],js:["dialog","notificationDialog"],type:"NotificationDialog"}),duplicatePassword:new LPDialog.DialogLoader({id:"duplicatePasswordDialog",htmlSource:"duplicatePasswordDialog.html",css:["buttons","dialog","duplicatePasswordDialog"],js:["dialog","duplicatePasswordDialog"],type:"DuplicatePasswordDialog"}),weakPassword:new LPDialog.DialogLoader({id:"weakPasswordDialog",
htmlSource:"weakPasswordDialog.html",css:["buttons","dialog","weakPasswordDialog"],js:["dialog","weakPasswordDialog"],type:"WeakPasswordDialog"}),preferences:new LPDialog.DialogLoader({id:"preferencesDialog",htmlSource:"preferencesDialog.html",css:["buttons","dialog","preferencesDialog"],js:["dialog","preferencesDialog"],type:"PreferencesDialog"}),introTutorialInboxImporter:new LPDialog.DialogLoader({id:"introTutorialInboxImporter",htmlSource:"IntroTutorial/introTutorialInboxImporter.html",css:"buttons dialog lpGrid IntroTutorial/introTutorialHelpDialog IntroTutorial/introTutorial introTutorial/introTutorialInboxImporter".split(" "),
js:["dialog","IntroTutorial/introTutorialInboxImporter"],type:"IntroTutorialInboxImporterDialog"}),introTutorialWelcome:new LPDialog.DialogLoader({id:"introTutorialWelcomeDialog",htmlSource:"IntroTutorial/introTutorialWelcomeDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialHelpDialogOriginal","IntroTutorial/introTutorialWelcomeDialog"],type:"IntroTutorialWelcomeDialog"}),introTutorialSelectSite:new LPDialog.DialogLoader({id:"introTutorialSelectSiteDialog",
htmlSource:"IntroTutorial/introTutorialSelectSiteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],js:["dialog","IntroTutorial/introTutorialSelectSiteDialog"],type:"IntroTutorialSelectSiteDialog"}),introTutorialComplete:new LPDialog.DialogLoader({id:"introTutorialCompleteDialog",htmlSource:"IntroTutorial/introTutorialCompleteDialog.html",css:["buttons","dialog","lpGrid","IntroTutorial/introTutorialHelpDialog","IntroTutorial/introTutorial"],
js:["dialog","IntroTutorial/introTutorialCompleteDialog"],type:"IntroTutorialCompleteDialog"}),createAccountSimple:new LPDialog.DialogLoader({id:"createAccountDialog",htmlSource:"extensionCreateAccountDialog.html",css:"extensionDialogSimple buttons dialog lpGrid extensionCreateAccount passwordMeter backgroundOverlay".split(" "),js:"createAccountDialog dialog extensionCreateAccount selectDropdown passwordMeter fieldValidator backgroundOverlay fieldToolTip emailToolTip".split(" "),type:"ExtensionCreateAccount"}),
introTutorialHelp:new LPDialog.DialogLoader({id:"introTutorialHelpDialog",htmlSource:"IntroTutorial/introTutorialHelpDialog.html",css:"IntroTutorial/introTutorialHelpDialog",js:["IntroTutorial/introTutorialHelpDialog"],type:"IntroTutorialHelpDialog"}),tourDialogBase:new LPDialog.DialogLoader({id:"introTourDialog",htmlSource:"Tour/introTourDialog.html",css:["buttons","dialog","lpGrid","Tour/introTourDialog"],js:"dialog lpArrow lpPing Tour/introTourData Tour/introTourFlow Tour/introTourQueue Tour/introTour Tour/introTourDialog".split(" "),
type:"IntroTourDialog"})});dialogs.login=dialogs.login.extend({htmlSource:"extensionLoginDialog.html",css:"extensionLoginDialog",js:["extensionLoginDialog","selectDropdown","typeaheadDropdown"],type:"ExtensionLoginDialog"});dialogs.siteTutorial=dialogs.site.extend({css:"IntroTutorial/introTutorialHelpDialogOriginal",js:["IntroTutorial/introTutorialHelpDialogOriginal","extensionSiteTutorialDialog"],type:"ExtensionSiteTutorialDialog"});
(function(){var e=new LPDialog.DialogLoader({id:"loginDialog",htmlSource:"extensionLoginDialogSimple.html",css:["loginDialog","extensionDialogSimple","extensionLoginDialogBase","lpGrid","backgroundOverlay"],js:"loginDialog extensionLoginDialog capslockstate extensionLoginDialogSimple selectDropdown typeaheadDropdown fieldValidator backgroundOverlay".split(" "),type:"ExtensionLoginDialogSimple"});dialogs.loginSimple=e.extend({css:["extensionLoginDialogSimple"]});dialogs.loginTab=e.extend({css:["extensionLoginDialogTab"]})})();