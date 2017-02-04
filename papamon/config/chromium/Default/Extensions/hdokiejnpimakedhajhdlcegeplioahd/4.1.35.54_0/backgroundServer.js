BackgroundServer=function(n){LPServer.initialize(n,{ajax:function(a){a.data&&(a.data.method=get_method());LPPlatform.ajax(a)}});var e=function(a){return function(){a.apply(this,arguments);increment_local_accts_version();rewritelocalfile()}},h=function(a,c,b){c instanceof Array?c.push(a):c[a[b]]=a},m=e(h),f=function(a,c,b){if(c instanceof Array)for(var d=0,e=c.length;d<e;++d){if(a[b]===c[d][b]){c[d]=a;break}}else c[a[b]]=a},l=e(f),g=function(a,c,b){if(a instanceof Array)for(var d=0,e=a.length;d<e;++d){if(b===
a[d][c]){a.splice(d,1);break}}else delete a[c]},k=e(g);return{emergencyAccess:{updateRecipient:function(a){var c=a.success;a.success=function(b){l(a.params.recipient,g_emer_sharees,"username");c(a.params.recipient)};LPServer.emergencyAccess.updateRecipient(a)},addRecipient:function(a){var c=a.success;a.success=function(b){m(a.params.recipient,g_emer_sharees,"username");c(a.params.recipient)};LPServer.emergencyAccess.addRecipient(a)},removeRecipient:function(a){a.success=LPServer.extendCallback(a.success,
function(){k(g_emer_sharees,"username",a.params.id)});LPServer.emergencyAccess.removeRecipient(a)},getRecipientInfo:function(a){LPServer.emergencyAccess.getRecipientInfo(a)},getSharerInfo:function(a){LPServer.emergencyAccess.getSharerInfo(a)},acceptOffer:function(a){var c=a.success;a.success=function(){var b=a.params.sharer;b.accepted="1";l(b,g_emer_sharers,"username");c(b)};LPServer.emergencyAccess.acceptOffer(a)},declineOffer:function(a){a.success=LPServer.extendCallback(a.success,function(){k(g_emer_sharers,
"username",a.params.email)});LPServer.emergencyAccess.declineOffer(a)},requestAccess:function(a){a.callbacks=a.callbacks||{};var c=a.callbacks.successLinked;a.callbacks.successLinked=function(a,b){var d=b.params.sharer;d.confirmed="1";d.allowed_access="1";d.linked="1";d.override_date=new Date;refreshsites();c&&c(d,b)};var b=a.callbacks.successGranted;a.callbacks.successGranted=function(a,c){var d=c.params.sharer;d.confirmed="1";d.override_date=new Date;d.override_date.setTime(d.override_date.getTime()+
36E5*d.hours_to_override);b&&b(d,c)};LPServer.emergencyAccess.requestAccess(a)},denyAccess:function(a){a.success=LPServer.extendCallback(a.success,function(){var c;a:if(g_emer_sharees instanceof Array){c=0;for(var b=g_emer_sharees.length;c<b;++c)if(a.params.email===g_emer_sharees[c].username){c=g_emer_sharees[c];break a}c=void 0}else c=g_emer_sharees.username;c.confirmed="0";c.allowed_access="0"});LPServer.emergencyAccess.denyAccess(a)},unlinkAccount:function(a){a.success=LPServer.extendCallback(a.success,
e(function(){if(a.params.folderID)delete g_sites[a.params.folderID];else for(var c in g_sites){var b=g_sites[c];if("http://group"===b.url&&b.group===a.params.email){delete g_sites[c];break}}}));LPServer.emergencyAccess.unlinkAccount(a)}},identities:{add:function(a){var c=a.success;a.success=function(b){var d=a.params.identity;d.iid=LPServer.getAttr(b,"iid","");m(d,g_identities,"iid");c(d)};LPServer.identities.add(a)},remove:function(a){a.success=LPServer.extendCallback(a.success,function(){k(g_identities,
"iid",a.params.id)});LPServer.identities.remove(a)},update:function(a){var c=a.success;a.success=function(){var b=a.params.identity;l(b,g_identities,"iid");c(b)};LPServer.identities.update(a)}},sharing:{individual:{shareItems:function(a){LPServer.sharing.individual.shareItems(a)},unshareItem:function(a){LPServer.sharing.individual.unshareItem(a)},acceptShare:function(a){a.success=LPServer.extendCallback(a.success,function(){refreshsites()});LPServer.sharing.individual.acceptShare(a)},rejectShare:function(a){a.success=
LPServer.extendCallback(a.success,function(){k(g_pendings,"id",a.params.id)});LPServer.sharing.individual.rejectShare(a)},inviteFriends:function(a){LPServer.sharing.individual.inviteFriends(a)},getSentShareData:function(a){LPServer.sharing.individual.getSentShareData(a)},getReceivedShareData:function(a){LPServer.sharing.individual.getReceivedShareData(a)}},folder:{getFolders:function(a){LPServer.sharing.folder.getFolders(a)},getPublicKeys:function(a){LPServer.sharing.folder.getPublicKeys(a)},create:function(a){a.success=
LPServer.extendCallback(a.success,e(function(a,b){b.shareInfo.sharekeyaes=lpmenc(AES.bin2hex(b.shareInfo.key),!0,g_local_key);h(b.shareInfo,g_shares,"id");h(b.sharedFolder,g_sites,"aid")}));a.params.username=g_username;LPServer.sharing.folder.create(a)},rename:function(a){a.success=LPServer.extendCallback(a.success,e(function(a,b){f(b.shareInfo,g_shares,"id");f(b.sharedFolder,g_sites,"aid")}));LPServer.sharing.folder.rename(a)},remove:function(a){a.success=LPServer.extendCallback(a.success,e(function(a,
b){f(b.shareInfo,g_shares,"id");for(var c in g_sites)g_sites[c].sharefolderid===b.shareInfo.id&&delete g_sites[c]}));LPServer.sharing.folder.remove(a)},accept:function(a){a.success=LPServer.extendCallback(a.success,function(){g(g_pending_shares,"id",a.params.shareInfo.id);refreshsites()});LPServer.sharing.folder.accept(a)},reject:function(a){a.success=LPServer.extendCallback(a.success,e(function(){g(g_pending_shares,"id",a.params.shareInfo.id)}));LPServer.sharing.folder.reject(a)},addMembers:function(a){LPServer.sharing.folder.addMembers(a)},
getMembers:function(a){LPServer.sharing.folder.getMembers(a)},removeMember:function(a){LPServer.sharing.folder.removeMember(a)},reinviteMember:function(a){LPServer.sharing.folder.reinviteMember(a)},updateMemberPermissions:function(a){LPServer.sharing.folder.updateMemberPermissions(a)},getRestrictions:function(a){LPServer.sharing.folder.getRestrictions(a)},updateRestrictions:function(a){LPServer.sharing.folder.updateRestrictions(a)},startDownloading:function(a){a.success=LPServer.extendCallback(a.success,
function(a,b){refreshsites()});LPServer.sharing.folder.startDownloading(a)},stopDownloading:function(a){a.success=LPServer.extendCallback(a.success,e(function(a,b){f(b.shareInfo,g_shares,"id");for(var c in g_sites)g_sites[c].sharefolderid===b.shareInfo.id&&delete g_sites[c]}));LPServer.sharing.folder.stopDownloading(a)},restoreDeleted:function(a){a.success=LPServer.extendCallback(a.success,e(function(a,b){f(b.shareInfo,g_shares,"id");refreshsites()}));LPServer.sharing.folder.restoreDeleted(a)},purgeDeleted:function(a){a.success=
LPServer.extendCallback(a.success,e(function(){g(g_shares,"id",a.params.shareid);g(g_sites,"aid",a.params.shareid)}));LPServer.sharing.folder.purgeDeleted(a)},convertToEnterprise:function(a){a.success=LPServer.extendCallback(a.success,e(function(a,b){f(b.shareInfo,g_shares,"id");f(b.sharedFolder,g_sites,"aid")}));LPServer.sharing.folder.convertToEnterprise(a)}}},sitesAndNotes:{saveCustomNoteTemplate:function(a){a.success=LPServer.extendCallback(a.success,e(function(a,b){h(b,g_note_templates,"id")}));
LPServer.sitesAndNotes.saveCustomNoteTemplate(a)},deleteCustomNoteTemplate:function(a){a.success=LPServer.extendCallback(a.success,e(function(c,b){g(g_note_templates,"id",a.params.id)}));LPServer.sitesAndNotes.deleteCustomNoteTemplate(a)}}}}(this);
