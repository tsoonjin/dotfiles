var g_getfile=-1!=document.location.href.indexOf("?getfile=1"),g_partner_override=null;
function load(a){a?(a=document.getElementById("source"),a.options[a.options.length]=new Option(gs("Please select"),""),a.options[a.options.length]=new Option(gs("Generic CSV File"),"csv"),g_issafari?a.options[a.options.length]=new Option(gs("Safari Password Manager"),"safari"):g_isopera||is_opera_chromium()?a.options[a.options.length]=new Option(gs("Opera Password Manager"),"opera"):g_isfirefoxsdk&&(a.options[a.options.length]=new Option(gs("Firefox Password Manager"),"firefox")),islastpass&&(getBG().g_is_win||
getBG().g_is_mac)&&(a.options[a.options.length]=new Option(gs("Wi-Fi Passwords"),"wlan")),a.options[a.options.length]=new Option(gs("1Password"),"1password"),a.options[a.options.length]=new Option(gs("Clipperz"),"clipperz"),a.options[a.options.length]=new Option(gs("Darn! Passwords!"),"darnpasswords"),a.options[a.options.length]=new Option(gs("Dashlane"),"dashlane"),a.options[a.options.length]=new Option(gs("eWallet"),"ewallet"),a.options[a.options.length]=new Option(gs("FireForm"),"fireform"),a.options[a.options.length]=
new Option(gs("HP Password Safe"),"hppwsafe"),a.options[a.options.length]=new Option(gs("KeePass"),"keepass"),a.options[a.options.length]=new Option(gs("LastPass"),"lastpass"),a.options[a.options.length]=new Option(gs("MSI PasswordKeeper"),"msi"),a.options[a.options.length]=new Option(gs("MyPasswordSafe"),"mypwsafe"),a.options[a.options.length]=new Option(gs("Passpack"),"passpack"),a.options[a.options.length]=new Option(gs("Password Agent"),"pwagent"),a.options[a.options.length]=new Option(gs("Password Corral"),
"pwcoral"),a.options[a.options.length]=new Option(gs("Password Depot"),"passworddepot"),a.options[a.options.length]=new Option(gs("Password Dragon"),"passworddragon"),a.options[a.options.length]=new Option(gs("Password Keeper"),"passkeep"),a.options[a.options.length]=new Option(gs("Password Safe"),"pwsafe"),a.options[a.options.length]=new Option(gs("Passwords Max"),"passwordsmax"),a.options[a.options.length]=new Option(gs("PINs Password Manager"),"pins"),a.options[a.options.length]=new Option(gs("Revelation Password Manager"),
"revelation"),a.options[a.options.length]=new Option(gs("RoboForm"),"Roboform"),a.options[a.options.length]=new Option(gs("SPB Wallet"),"spb"),a.options[a.options.length]=new Option(gs("SplashID"),"splashid"),a.options[a.options.length]=new Option(gs("Sticky Password"),"sticky"),a.options[a.options.length]=new Option(gs("TurboPasswords"),"TurboPasswords"),a.selectedIndex=0,fix_instructions()):get_data("import_other",function(){load(!0)})}var instructions=[];instructions[""]=gs("Choose a source above.");
instructions.safari=gs("To import passwords from Safari Password Manager, simply click Import below.");instructions.opera=gs("To import passwords from Opera Password Manager, simply click Import below.");instructions.firefox=gs("To import passwords from Firefox Password Manager, simply click Import below.");instructions.wlan=gs("To import Wi-Fi passwords, simply click Import below.");instructions.Roboform=gs("To export RoboForm logins, click on RoboForm-Logins...-Print List. Click on the Full URL check-box and press the save button. Import the resulting file.\n\nTo export RoboForm SafeNotes, click on RoboForm-SafeNotes-Print List. Press the save button. Import the resulting file.\n\nTo export RoboForm Identities, click on RoboForm-Identities-Print List. Press the save button. Import the resulting file.");
instructions.clipperz=gs("To export Clipperz cards, login to www.clipperz.com. Click on data, then Export, then Export to JSON. Copy all of the text and save it to a file using a text editor, then import it. Please note that this import may not work properly if you've changed field names from their defaults.");instructions.ewallet=gs("To export eWallet cards, go to eWallet - Tools - Export. Save as a text file. Import the resulting file.");instructions.hppwsafe=gs("To export HP Password Safe save to an HTML file. Import the resulting file.");
instructions.pwagent=gs("To export Password Agent logins, open your Password Agent database, and click on File - Print and Export - Change the output format to XML File, make sure 'Group' is checked.  Choose a file location and press the Save button.  Import the resulting file.");instructions.pwsafe=gs("To export from Password Safe, Click on File - Export To - XML - Save the file.  Import the resulting file.");instructions.mypwsafe=gs("To export from MyPasswordSafe, Click on File - Save As - Select type of UNENCRYPTED XML - Save the file.  Import the resulting file.");
instructions.keepass=gs("To export KeePass logins, open your KeePass database, and click on File - Export To - XML File.  Choose a file location and press the Save button.  Then, press the OK button.  Import the resulting file.");instructions.lastpass=gs("To export LastPass logins, open your browser with the LastPass plugin installed, and click on LastPass - Tools - Export To - CSV File.  Choose a file location and press the Save button.  Import the resulting file.");instructions.pwcoral=gs("To export passwords from Password Corral: Login, go to the File - Export Password - Create a plaintext export of all your password.  Import this file.");
instructions.passworddragon=gs("To export passwords from Password Dragon: Login, go to the File - Export - Text File, make sure you check 'Password', it defaults off.  Import the saved file.");instructions.passpack=gs("To export passwords from Passpack: Login, go to the Tools screen, and click Export. Under _What Type of Format Would You Like To Export?_ Select _Comma Separated Values_, and on _Which Entries Would You Like To Export?_ Select _All of my entries_, then hit _Continue_. Select all of the text in the text-box on the next screen, copy it to the clipboard, create a new file with notepad called passpack.csv, paste the contents into this file. Import this file.");
instructions.splashid=gs("To export passwords, login to the desktop application and go to File - Export - CSV - All Entries.  Import the resulting file.");instructions.sticky=gs("Open Sticky Password - Manage Database - Export - Export as text. Import this file");instructions["1password"]=gs("To export 1Password logins, login to 1Password. Select all or just passwords that you want to export. Then select: File menu / Export All / Text file...  Or    File menu / Export Selected / Text file... Click Export button and Save password file, and Import the resulting file.");
instructions.TurboPasswords=gs("To import your TurboPasswords logins, open the program, and the password file to be exported. If you want to restrict the export to a particular category or type, filter the entries displayed using the Category and Type drop-downs above the main window. Click File|Export Category. This opens a standard Windows Save dialog, so enter a file name and location, and select Comma Separated Values (.csv) from the Save as Type box.");instructions.passkeep=gs("To import your Password Keeper logins, open the program, and the password file to be exported.  Click File - Export File.  Click Yes, enter your password, and click OK.  This opens a standard Windows Save dialog, so enter a file name and location.  Import the resulting file.");
instructions.csv=gs("If you have another format that LastPass doesn't currently support you can attempt to save your data as a CSV file\n\nYOU MUST MODIFY THE FIRST ROW OF THE CSV FILE FOR LASTPASS TO RECOGNIZE IT\n\nThe first row's column names should be properly setup for the data in the columns\nPossible first row names:\n\nurl,username,password,extra,name,grouping\n\n'extra' means 'notes' and 'grouping' is what group it should be in.  You do not have to use all the column names and they don't need to be in any order.  For example your file's first row might be like:\n\nname,username,password,url\n\nIf you want to import a Secure Note instead of a Site, simply ensure the 'url', 'username', and 'password' columns are left blank (or omit the 'url', 'username', and/or 'password' columns entirely), and ensure the 'extra' column is not blank.  As long as these two things have been done, the record will automatically be imported as a Secure Note instead of a Site.\n\nThis should be very simple, just open your saved CSV file in Excel and make sure the top row has the appropriate name from above for what it is.  Save it, then import the resulting file.");
null!=g_partner_override&&(instructions.csv=instructions.csv.replace("LASTPASS",g_partner_override.toUpperCase()),instructions.csv=instructions.csv.replace("LastPass",g_partner_override));instructions.msi=gs("To import your MSI PasswordKeeper logins, open the program.  Click 'Txt', and then 'Open'.  Import the resulting file.");instructions.pins=gs("To import from PINs Password Manager Export in Tab Separated format.  Then, import the resulting file.");instructions.fireform=gs("To export FireForm profiles, right-click the FireForm icon, then choose Simple setup.  Go to the General options tab, click Export all profiles, and save an XML file.  Import the resulting file.");
instructions.passwordsmax=gs("To export Passwords Max passwords, click File - Database - Export - Text.  Click OK, and save a CSV file.  Import the resulting file.");instructions.darnpasswords=gs("To export passwords from Darn! Passwords!, click Tools - Print.  Click Settings, and check Include Notes in Export.  Click Print, and click the Export to File icon that looks like a blue disk.  Name the file, and click Open.  Import the resulting file.");instructions.dashlane=gs("Open Dashlane - File - Export - CSV.  Import the resulting file.");
instructions.spb=gs("To export passwords from SPB Wallet, open the wallet, click File, Export, select file destination in the dialog box and click Save. Then, paste the data into the box on this page.");instructions.passworddepot=gs("To export passwords from Password Depot, click on the 'Tools' tab and select 'Export'. Select the 'Extensible Markup Language format (*.xml)', specify a target file and select the folder you want to export.");instructions.revelation=gs("To export passwords from Revelation Password Manager, export the data as XML.");
function fix_instructions(){var a=document.getElementById("source").value;if(islastpass&&"csv"==a){LP_decimate_children(document.getElementById("instructions"));var b=document.createElement("a");b.setAttribute("href","https://helpdesk.lastpass.com/getting-started/importing-from-other-password-managers/#Importing+from+a+Generic+CSV+File");b.setAttribute("target","_blank");set_innertext(b,gs("Click here for instructions on importing from a generic CSV file."));document.getElementById("instructions").appendChild(b)}else islastpass&&
"Roboform"==a?(LP_decimate_children(document.getElementById("instructions")),b=document.createElement("a"),b.setAttribute("href","https://helpdesk.lastpass.com/getting-started/importing-from-other-password-managers/importing-from-roboform/"),b.setAttribute("target","_blank"),set_innertext(b,gs("Click here for instructions on importing from RoboForm.")),document.getElementById("instructions").appendChild(b)):set_innertext(document.getElementById("instructions"),instructions[a]);document.getElementById("bottom").style.display=
""==a?"none":"block";document.getElementById("choosefile").style.display="wlan"!=a&&"safari"!=a&&"opera"!=a&&"firefox"!=a&&g_getfile?"block":"none"}
function doimport(){"wlan"!=document.getElementById("source").value&&"safari"!=document.getElementById("source").value&&"opera"!=document.getElementById("source").value||getBG().have_binary()?"wlan"!=document.getElementById("source").value||getBG().g_wlan_works?g_getfile&&""==document.getElementById("filename").value&&"wlan"!=document.getElementById("source").value&&"safari"!=document.getElementById("source").value&&"opera"!=document.getElementById("source").value?alert(gs("Please enter the full path of the file to import.")):
getBG().doimport(document.getElementById("source").value,g_getfile?document.getElementById("filename").value:null):getBG().g_wlan_has_exe?alert(gs("No Wi-Fi adapter was detected on this computer.  This feature requires a Wi-Fi adapter.")):confirmex(gs("The LastPass Wi-Fi utility was not detected on this computer.  Would you like to run the LastPass Universal Installer in order to install it?"),function(){getBG().openbaseurl("installer/")}):confirmex(gs("This feature requires the binary version of this browser extension.  Would you like to install it now?"),
function(){getBG().install_binary()})};
