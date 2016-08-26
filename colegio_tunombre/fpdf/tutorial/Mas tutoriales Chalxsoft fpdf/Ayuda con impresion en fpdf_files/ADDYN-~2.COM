__ADTECH_CODE__ = "";
__theDocument = document;
__theWindow = window;
__bCodeFlushed = false;

function __flushCode() {
	if (!__bCodeFlushed) {
		var span = parent.document.createElement("SPAN");
		span.innerHTML = __ADTECH_CODE__;
		window.frameElement.parentNode.appendChild(span);
		__bCodeFlushed = true;
	}
}

if (typeof inFIF != "undefined") {
	document.write = function(str) {
		__ADTECH_CODE__ += str;
	};
	
	document.writeln = function(str) { document.write(str + "\n"); };

	__theDocument = parent.document;
	__theWindow = parent;
}
document.write("<div id=\"pixelin\" style=\"position:absolute;height:0px;overflow:hidden\"><img src=\"http://adserver.adtech.de/adserv|3.0|224|3116293|0|16|ADTECH;grp=1\" border=\"0\" width=\"0\" height=\"0\"></div>\n");
document.write("<scr"+"ipt>\n");
document.write("<!--\n");
document.write("// Advertiser Infos\n");
document.write("var tracker=new Image();\n");
document.write("tracker.src=\"http://ad-emea.doubleclick.net/ad/N6601.281145.HI_MEDIA/B5270369;sz=1x1;ord=625715015?\"; \n");
document.write("var adl_0190_Unique_Random=Math.floor(Math.random()*1000000000);\n");
document.write("var adl_0190_CreativesBase='http://aka-cdn-ns.adtech.de/apps/108/Ad6150764St3Sz225Sq100230664V0Id1/';\n");
document.write("var adl_0190_AdvertiserURL='http://ad-emea.doubleclick.net/clk;236713155;60324421;u?http://www.promociones.citroen.es/index.asp?salto=5&campaignid=DS3_display_feb_2011&advertiserid=Himedia&bannerid=varios_home';\n");
document.write("// Flash File Infos\n");
document.write("var adl_0190_FlashFile='728x90.swf';\n");
document.write("var adl_0190_VersionRequired=10;\n");
document.write("var adl_0190_FlashWidth=728;\n");
document.write("var adl_0190_FlashHeight=90;\n");
document.write("var adl_0190_FlashParamaters='clickTag=http://adserver.adtech.de/adlink|224|2299750|0|225|AdId=6150764;BnId=1;itime=625715015;nodecode=yes;link=' + escape('http://ad-emea.doubleclick.net/clk;236713155;60324421;u?http://www.promociones.citroen.es/index.asp?salto=5&campaignid=DS3_display_feb_2011&advertiserid=Himedia&bannerid=varios_home') +'&';\n");
document.write("// Backup Image Info\n");
document.write("var adl_0190_ImageFile='728x90';\n");
document.write("var adl_0190_ImageWidth=728;\n");
document.write("var adl_0190_ImageHeight=90;\n");
document.write("// Dont change anything bellow\n");
document.write("// Flash plugin sniffer code\n");
document.write("var adl_0190_AllowFlash=0;\n");
document.write("var adl_0190_BackupImage=1;\n");
document.write("with(navigator){var adl_0190_plugin=(mimeTypes&&navigator.mimeTypes[\"application/x-shockwave-flash\"])?mimeTypes[\"application/x-shockwave-flash\"].enabledPlugin:0;if(adl_0190_plugin){with(adl_0190_plugin){adl_0190_AllowFlash=(parseInt(description.substring(description.indexOf(\".\")-2))>=adl_0190_VersionRequired)?1:0}}else if(userAgent){with(userAgent){if(indexOf(\"MSIE\")>=0&&(indexOf(\"Windows 95\")>=0||indexOf(\"Windows 98\")>=0||indexOf(\"Windows NT\")>=0)){document.write('<scr'+'ipt language=\"VBScript\">\\non error resume next\\nadl_0190_AllowFlash = (IsObject(CreateObject(\"ShockwaveFlash.ShockwaveFlash.'+adl_0190_VersionRequired+'\")))<\\/scr'+'ipt>')}}}}\n");
document.write("// Update creatives url\n");
document.write("if(adl_0190_FlashFile!=''){adl_0190_FlashFile=adl_0190_CreativesBase+adl_0190_FlashFile+'?'+adl_0190_FlashParamaters}else{adl_0190_AllowFlash=0}\n");
document.write("if(adl_0190_ImageFile!=''){adl_0190_ImageFile=adl_0190_CreativesBase+adl_0190_ImageFile}else{adl_0190_BackupImage=0}\n");
document.write("// Create value of the adl_0190_AdContent variable\n");
document.write("var adl_0190_AdContent='';\n");
document.write("if(adl_0190_AllowFlash){adl_0190_AdContent+='<object id=\"adl_0190_flash_object\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"'+adl_0190_FlashWidth+'\" height=\"'+adl_0190_FlashHeight+'\"><param name=\"allowScriptAccess\" value=\"always\"><param name=\"wmode\" value=\"opaque\"><param name=\"movie\" val'+'ue=\"'+adl_0190_FlashFile+'\"><param name=\"FlashVars\" value=\"'+adl_0190_FlashParamaters+'\"><param name=quality value=\"high\"><embed name=\"adl_0190_flash_object\" sr'+'c=\"'+adl_0190_FlashFile+'\" FlashVars=\"'+adl_0190_FlashParamaters+'\"  wmode=\"opaque\" width=\"'+adl_0190_FlashWidth+'\" height=\"'+adl_0190_FlashHeight+'\" swLiveConnect=\"true\" quality=\"autohigh\" type=\"application/x-shockwave-flash\" wmode=\"opaque\" wmode=\"opaque\" allowScriptAccess=\"always\"></embed></object>'}else{adl_0190_AdContent+='<a href=\"http://adserver.adtech.de/adlink|224|2299750|0|225|AdId=6150764;BnId=1;itime=625715015;nodecode=yes;link='+adl_0190_AdvertiserURL+'\" target=\"_new\"><img src=\"'+adl_0190_ImageFile+'\" width=\"'+adl_0190_ImageWidth+'\" height=\"'+adl_0190_ImageHeight+'\" border=\"0\"></a>'}\n");
document.write("document.write(adl_0190_AdContent);\n");
document.write("//-->\n");
document.write("</scr"+"ipt>\n");
document.write("<div id=\"adl_BannerLayerAd\" name=\"adl_BannerLayerAd\"></div>\n");
document.write("<scr"+"ipt>// Advertiser Infos\n");
document.write("var adl_AdvertiserURL='http://ad-emea.doubleclick.net/clk;236713155;60324421;u?http://www.promociones.citroen.es/index.asp?salto=5&campaignid=DS3_display_feb_2011&advertiserid=Himedia&bannerid=varios_home';\n");
document.write("// Flash File Infos\n");
document.write("var adl_FlashFile='http://aka-cdn-ns.adtech.de/apps/108/Ad6150764St3Sz225Sq100230664V0Id1/800x600.swf';\n");
document.write("var adl_VersionRequired=8;\n");
document.write("var adl_FlashWidth=800;\n");
document.write("var adl_FlashHeight=600;\n");
document.write("var adl_FlashParamaters='clickTag=http://adserver.adtech.de/adlink|224|2299750|0|225|AdId=6150764;BnId=1;itime=625715015;nodecode=yes;link=' + escape('http://ad-emea.doubleclick.net/clk;236713155;60324421;u?http://www.promociones.citroen.es/index.asp?salto=5&campaignid=DS3_display_feb_2011&advertiserid=Himedia&bannerid=varios_home');\n");
document.write("var adl_FlashTransparency=(true==false)?\"opaque\":\"transparent\";\n");
document.write("// Backup Image Info\n");
document.write("var adl_ImageFile='http://aka-cdn-ns.adtech.de/apps/108/Ad6150764St3Sz225Sq100230664V0Id1/800x600.gif';\n");
document.write("var adl_ImageWidth=800;\n");
document.write("var adl_ImageHeight=600;\n");
document.write("// Layer Behaviour.\n");
document.write("var adl_isCentered=true;\n");
document.write("var adl_isRelative=false;\n");
document.write("var adl_LayerLeft=0;\n");
document.write("var adl_LayerTop=0;\n");
document.write("var adl_isOpaque=true;\n");
document.write("var adl_isFullcovering=true;\n");
document.write("var adl_LayerOpacity=100;\n");
document.write("var adl_LayerBackgroundColor='#000000';\n");
document.write("var adl_Closing_Timer=10;\n");
document.write("var adl_Closing_Button=true;\n");
document.write("// Dont change anything bellow\n");
document.write("// Flash plugin sniffer code\n");
document.write("var adl_AllowFlash=0;\n");
document.write("var adl_BackupImage=1;\n");
document.write("with(navigator){var adl_plugin=(mimeTypes&&navigator.mimeTypes[\"application/x-shockwave-flash\"])?mimeTypes[\"application/x-shockwave-flash\"].enabledPlugin:0;if(adl_plugin){with(adl_plugin){adl_AllowFlash=(parseInt(description.substring(description.indexOf(\".\")-2))>=adl_VersionRequired)?1:0}}else if(userAgent){with(userAgent){if(indexOf(\"MSIE\")>=0&&(indexOf(\"Windows 95\")>=0||indexOf(\"Windows 98\")>=0||indexOf(\"Windows NT\")>=0)){document.write('<scr'+'ipt language=\"VBScript\">\\non error resume next\\nadl_AllowFlash = (IsObject(CreateObject(\"ShockwaveFlash.ShockwaveFlash.'+adl_VersionRequired+'\")))<\\/scr'+'ipt>')}}}}\n");
document.write("// Update creatives url\n");
document.write("if(adl_FlashFile!=''){adl_FlashFile=adl_FlashFile+'?'+adl_FlashParamaters}else{adl_AllowFlash=0}\n");
document.write("if(adl_ImageFile!=''){adl_ImageFile=adl_ImageFile;adl_BackupImage=1}else{adl_BackupImage=0}\n");
document.write("// Create value of the adl_AdContent variable\n");
document.write("var adl_AdContent='';\n");
document.write("if(adl_AllowFlash){adl_AdContent+='<object id=\"adl_flash_object\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"'+adl_FlashWidth+'\" height=\"'+adl_FlashHeight+'\"><param name=\"allowScriptAccess\" value=\"always\"><param name=\"wmode\" value=\"'+adl_FlashTransparency+'\"><param name=\"movie\" value=\"http://aka-cdn-ns.adtech.de/apps/108/Ad6150764St3Sz225Sq100230664V0Id1/800x600.swf?'+adl_FlashParamaters+'\"><param name=\"FlashVars\" value=\"'+adl_FlashParamaters+'\"><param name=quality value=\"high\"><embed name=\"adl_flash_object\" src=\"http://aka-cdn-ns.adtech.de/apps/108/Ad6150764St3Sz225Sq100230664V0Id1/800x600.swf?'+adl_FlashParamaters+'\" FlashVars=\"'+adl_FlashParamaters+'\" width=\"'+adl_FlashWidth+'\" wmode=\"'+adl_FlashTransparency+'\" height=\"'+adl_FlashHeight+'\" swLiveConnect=\"true\" quality=\"autohigh\" type=\"application/x-shockwave-flash\" allowScriptAccess=\"always\"></embed></object>'}else{adl_AdContent+='<a href=\"http://adserver.adtech.de/adlink|224|2299750|0|225|AdId=6150764;BnId=1;itime=625715015;nodecode=yes;link='+adl_AdvertiserURL+'\" target=\"_new\"><img src=\"http://aka-cdn-ns.adtech.de/apps/108/Ad6150764St3Sz225Sq100230664V0Id1/'+adl_ImageFile+'\" width=\"'+adl_ImageWidth+'\" height=\"'+adl_ImageHeight+'\" border=\"0\"></a>'}\n");
document.write("var adl_LayerContent=adl_AdContent;\n");
document.write("var adl_LayerHeight=(adl_AllowFlash)?adl_FlashHeight:(adl_BackupImage)?adl_ImageHeight:0;\n");
document.write("var adl_LayerWidth=(adl_AllowFlash)?adl_FlashWidth:(adl_BackupImage)?adl_ImageWidth:0;\n");
document.write("var adl_PreloadTimer;\n");
document.write("var adl_KeepPositionTimer;\n");
document.write("var adl_DisplayTimer;\n");
document.write("function adl_KeepLayerPositionAndSize(_LayerName){\n");
document.write("with(__theDocument.body){\n");
document.write("adl_BrowserWidth=(navigator.appName==\"Netscape\")?innerWidth:(__theDocument.documentElement)?((__theDocument.documentElement.clientWidth)?document.documentElement.clientWidth:clientWidth):clientWidth;\n");
document.write("adl_BrowserHeight=(navigator.appName==\"Netscape\")?innerHeight:(__theDocument.documentElement)?((__theDocument.documentElement.clientHeight)?document.documentElement.clientHeight:clientHeight):clientHeight;\n");
document.write("if(adl_isFullcovering){\n");
document.write("adl_LayerHeight=adl_BrowserHeight;\n");
document.write("adl_LayerWidth=adl_BrowserWidth;\n");
document.write("}\n");
document.write("if(__theDocument.getElementById(_LayerName)!=null){\n");
document.write("with(__theDocument.getElementById(_LayerName).style){\n");
document.write("if(adl_isFullcovering){\n");
document.write("top=(__theDocument.body.scrollTop+((adl_BrowserHeight-adl_LayerHeight)/2))+'px';\n");
document.write("}\n");
document.write("else{\n");
document.write("top=((adl_BrowserHeight-adl_LayerHeight)/2)+'px';\n");
document.write("}\n");
document.write("left=((adl_BrowserWidth-adl_LayerWidth)/2)+'px';\n");
document.write("width=adl_LayerWidth+'px';\n");
document.write("height=adl_LayerHeight+'px';\n");
document.write("}\n");
document.write("}\n");
document.write("if(__theDocument.getElementById(\"adl_DhtmlTable\")!=null){\n");
document.write("__theDocument.getElementById(\"adl_DhtmlTable\").style.height=adl_LayerHeight+'px';\n");
document.write("}\n");
document.write("}\n");
document.write("}\n");
document.write("function adl_RefreshGif(){\n");
document.write("var adl_Images=__theDocument.getElementsByTagName('IMG');\n");
document.write("for(i=0;i<adl_Images.length;i++){\n");
document.write("if(adl_Images[i].src.toLowerCase().lastIndexOf('.jpg')<0 || adl_Images[i].src.toLowerCase().lastIndexOf('.jpeg')<0){\n");
document.write("adl_Images[i].src= (adl_Images[i].src.indexOf(\"http://aka-cdn-ns.adtech.de/apps/108/Ad6150764St3Sz225Sq100230664V0Id1/\") >= 0 ) ? adl_Images[i].src : \"http://aka-cdn-ns.adtech.de/apps/108/Ad6150764St3Sz225Sq100230664V0Id1/\" + adl_Images[i].src;\n");
document.write("}\n");
document.write("}\n");
document.write("}\n");
document.write("function adl_CloseLayerAd(){\n");
document.write("clearInterval(adl_KeepPositionTimer);\n");
document.write("clearTimeout(adl_DisplayTimer);\n");
document.write("with(document){\n");
document.write("if(typeof(getElementById(\"adl_DhtmlLayer\"))!=\"undefined\"){\n");
document.write("getElementById(\"adl_DhtmlLayer\").innerHTML='';\n");
document.write("getElementById(\"adl_DhtmlLayer\").parentNode.removeChild(getElementById(\"adl_DhtmlLayer\"));\n");
document.write("with(body.style){\n");
document.write("zIndex=10000;\n");
document.write("visibility=\"visible\";\n");
document.write("if(adl_isFullcovering){overflow=\"visible\"}\n");
document.write("}\n");
document.write("}\n");
document.write("}\n");
document.write("if(adl_isFullcovering){\n");
document.write("__theDocument.body.style.overflow=\"auto\";\n");
document.write("}\n");
document.write("//adl_RefreshGif();\n");
document.write("}\n");
document.write("function adl_CreateNewLayer(_LayerName,_Width,_Height,_innerHTML,_BackGroundColor){\n");
document.write("if(__theDocument.getElementById(_LayerName)==null){\n");
document.write("var _newLayer=__theDocument.createElement('DIV');\n");
document.write("var _newParentLayer=__theDocument.createElement('DIV');\n");
document.write("with(__theDocument.body){\n");
document.write("adl_BrowserWidth=(navigator.appName==\"Netscape\")?innerWidth:(__theDocument.documentElement)?((__theDocument.documentElement.clientWidth)?document.documentElement.clientWidth:clientWidth):clientWidth;\n");
document.write("adl_BrowserHeight=(navigator.appName==\"Netscape\")?innerHeight:(__theDocument.documentElement)?((__theDocument.documentElement.clientHeight)?document.documentElement.clientHeight:clientHeight):clientHeight;\n");
document.write("}\n");
document.write("with(_newLayer){\n");
document.write("id=\"adl_DhtmlLayer\";\n");
document.write("with(style){\n");
document.write("width=_Width+'px';\n");
document.write("height=(_Height+((adl_Closing_Button==true)?20:0))+'px';\n");
document.write("position=\"absolute\";\n");
document.write("overflow=\"hidden\";\n");
document.write("zIndex=2000010;\n");
document.write("left=-_Width+'px';\n");
document.write("top=-_Height+'px';\n");
document.write("textAlign='left';\n");
document.write("}\n");
document.write("}\n");
document.write("with(__theDocument.body){\n");
document.write("if(adl_isRelative){\n");
document.write("__theDocument.getElementById(\"adl_BannerLayerAd\").appendChild(_newLayer);\n");
document.write("}\n");
document.write("else{\n");
document.write("insertBefore(_newLayer,firstChild);\n");
document.write("}\n");
document.write("}\n");
document.write("tmpHTML=\"\";\n");
document.write("tmpHTML+='<div style=\"background-color:'+adl_LayerBackgroundColor+';-moz-opacity:'+(adl_LayerOpacity/100)+';filter:progid:DXImageTransform.Microsoft.Alpha(opacity='+adl_LayerOpacity+');opacity:'+(adl_LayerOpacity/100)+';position:absolute;top:0px;left:0px;z-Index:2000010;width:100%;height:100%;text-Align:left\"><iframe marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no src=\"about:blank\" style=\"width:100%;height:100%;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=0);opacity:0\"></iframe></div>';\n");
document.write("tmpHTML+='<div style=\"position:absolute;top:0px;left:0px;z-Index:2000020;width:100%;height:100%;text-Align:left\"><table style=\"width:100%;height:100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\"><tr><td align=\"center\">';\n");
document.write("if(adl_Closing_Button==true){\n");
document.write("tmpHTML+='<div style=\"padding-bottom:2px;text-align:right;width:'+_Width+'px\"><a href=\"#\" onclick=\"adl_CloseLayerAd()\" style=\"decoration:none\"><IMG SRC=\"http://aka-cdn-ns.adtech.de/apps/108/Ad6150764St3Sz225Sq100230664V0Id1/closebutton.jpg\" border=\"0\"></a></div>';\n");
document.write("}\n");
document.write("tmpHTML+=_innerHTML+'</td></tr></table></div>';\n");
document.write("_newLayer.innerHTML=tmpHTML;\n");
document.write("}\n");
document.write("}\n");
document.write("function adl_Start(){\n");
document.write("adl_CreateNewLayer(\"adl_DhtmlLayer\",adl_LayerWidth,adl_LayerHeight,adl_LayerContent,adl_LayerBackgroundColor);\n");
document.write("if(adl_isCentered){\n");
document.write("adl_KeepPositionTimer=setInterval('adl_KeepLayerPositionAndSize(\"adl_DhtmlLayer\")',10);\n");
document.write("}\n");
document.write("else{\n");
document.write("with(__theDocument.getElementById(\"adl_DhtmlLayer\").style){\n");
document.write("top=adl_LayerTop+'px';\n");
document.write("left=adl_LayerLeft+'px';\n");
document.write("}\n");
document.write("}\n");
document.write("if(adl_isFullcovering){__theDocument.body.style.overflow=\"hidden\"}\n");
document.write("adl_DisplayTimer=setTimeout('adl_CloseLayerAd()',adl_Closing_Timer*1000);\n");
document.write("}\n");
document.write("// Avoiding multilayers overlapping each other\n");
document.write("if(typeof(adl_AvoidOverLapping)=='undefined'){\n");
document.write("if(adl_isFullcovering){__theDocument.body.style.overflow=\"hidden\"}\n");
document.write("var adl_AvoidOverLapping=true;\n");
document.write("if(window.attachEvent){\n");
document.write("window.attachEvent(\"onload\",adl_Start);\n");
document.write("}\n");
document.write("else{\n");
document.write("window.addEventListener(\"load\", adl_Start, false);\n");
document.write("}\n");
document.write("}\n");
document.write("// Additionnal code for OVK compliant dhtml flash\n");
document.write("function adl_flash_object_DoFSCommand(command, args){if(command==\"adlayerhider\"){adl_CloseLayerAd()}}\n");
document.write("document.write('<scr'+'ipt language=\"VBScript\">\\non error resume next\\nSub adl_flash_object_FSCommand(ByVal command, ByVal args)\\ncall adl_flash_object_DoFSCommand(command, args)\\nend sub\\n<\\/scr'+'ipt>');\n");
document.write("</scr"+"ipt>\n");
function cleanUp() {
	if (typeof __parent.swappedRefs == "undefined") {
		__parent.swappedRefs = new Array();
	}
		
	while (__parent.swappedRefs.length > 0) {
		var ref = __parent.swappedRefs.pop();
		if (ref != "swappedRefs") {
			__parent[ref] = null;
		}
	}
}

if (typeof inFIF != "undefined" && inFIF == true) {
	__parent = window.parent;
	window.onunload = cleanUp;
	cleanUp();

	
	for (var ref in window) {
		if ((typeof __parent[ref] == "undefined" || __parent[ref] == null) 
					&& ref != "frameElement" && ref != "event" && ref != "swappedRefs" && ref != "onunload") {
			try {__parent[ref] = window[ref]; __parent.swappedRefs.push(ref);} catch (e) {}
		}
	}	
}	




if (typeof inFIF != "undefined" && inFIF) {
	__flushCode();
}

if (typeof inFIF != "undefined" && inFIF == true) {
try {parent.write = write;
} catch (e) {}try {parent.writeln = writeln;
} catch (e) {}try {parent.__flushCode = __flushCode;
} catch (e) {}try {parent.adl_KeepLayerPositionAndSize = adl_KeepLayerPositionAndSize;
} catch (e) {}try {parent.adl_RefreshGif = adl_RefreshGif;
} catch (e) {}try {parent.adl_CloseLayerAd = adl_CloseLayerAd;
} catch (e) {}try {parent.adl_CreateNewLayer = adl_CreateNewLayer;
} catch (e) {}try {parent.adl_Start = adl_Start;
} catch (e) {}try {parent.adl_flash_object_DoFSCommand = adl_flash_object_DoFSCommand;
} catch (e) {}}


