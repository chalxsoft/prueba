vBreport = [];

if (!window.__PostBit_Init) {
	__PostBit_Init = PostBit_Init;
	PostBit_Init = function(C, D) {
		__PostBit_Init(C, D);
		vbreport_register(D);
	}
}

function vbreport_register(postid) {
	if (AJAX_Compatible && (typeof vb_disable_ajax == "undefined" || vb_disable_ajax < 2)) {
		vBreport[postid] = new vB_Ajax_Report(postid);
		fetch_object("reportmenu_" + postid).onclick = vB_Ajax_Report.prototype.reportClick;
	}
}

function vB_Ajax_Report(postid) {
	this.postid = postid;
	this.divname = "reportmenu_" + postid + "_menu";
	this.divobj = null;
	this.postobj = fetch_object("post" + postid);
	this.message = "report_message_" + postid;
	this.vbmenuname = "reportmenu_" + postid;
	this.vbmenu = null;
	this.ajaxObject = null;
}

vB_Ajax_Report.prototype.stripHTML = function(text) {
	return text.replace(/(\n|\r)/g, '').replace(/<br.*?>/g, "\n").replace(/<.*?>/g, '');
}

vB_Ajax_Report.prototype.readXmlTag = function(objXML, tag, stripHTML) {
	var returnValue = false;
	if (objXML.responseXML) {
		var elements = objXML.responseXML.getElementsByTagName(tag);
		if (elements.length > 0) {
			returnValue = elements[0].firstChild.nodeValue;
		}
	}
	if (!returnValue) {
		var expr = new RegExp("<" + tag + ".*?>((?:.|\n|\r)*)</" + tag + ">");
		var text = objXML.responseText.match(expr);
		if (text) {
			text = text[1];
			var cdata = text.match(/^<!\[CDATA\[((?:.|\n|\r)*)]]>$/);
			if (cdata) {
				text = cdata[1];
			}
			returnValue = text;
		}
	}
	if (stripHTML && returnValue) {
		returnValue = this.stripHTML(returnValue);
	}
	return returnValue;
}

vB_Ajax_Report.prototype.reportClick = function(evt) {
	do_an_e(evt);
	var postid = this.id.split("_").pop();
	var A = vBreport[postid];
	if(A.vbmenu == null) {
		A.fetchForm();
	} else {
		if(vBmenu.activemenu != A.vbmenuname) {
			A.vbmenu.show(fetch_object(A.vbmenuname))
		} else {
			A.vbmenu.hide()
		}
	}
}

vB_Ajax_Report.prototype.fetchForm = function() {
	YAHOO.util.Connect.asyncRequest("POST", "report.php?p=" + this.postid,
		{
			success : this.fetchingForm,
			failure : vB_Ajax_Report.prototype.fetchFailure,
			timeout : vB_Default_Timeout,
			scope : this
		},
		SESSIONURL + "securitytoken=" + SECURITYTOKEN + "&p=" + this.postid + "&ajax=1"
	);
}

vB_Ajax_Report.prototype.fetchFailure = function(E) {
	vBulletin_AJAX_Error_Handler(E);
	location.href = "report.php?p=" + this.postid;
}

vB_Ajax_Report.prototype.fetchingForm = function(E) {
	var error;
	if (error = this.readXmlTag(E, "error", true)) {
		alert(error);
	} else {
		if (!this.divobj) {
			this.divobj = document.createElement("div");
			this.divobj.id = this.divname;
			this.divobj.style.display = "none";
			this.divobj.style.width = "300px";
			this.postobj.parentNode.appendChild(this.divobj);
			this.vbmenu = vbmenu_register(this.vbmenuname, true);
			fetch_object(this.vbmenu.controlkey).onmouseover = null;
		}
		this.divobj.innerHTML = this.readXmlTag(E, "reportbit");
		this.vbmenu.show(fetch_object(this.vbmenuname));
	}
}

vB_Ajax_Report.prototype.submit = function() {
	if (YAHOO.util.Connect.isCallInProgress(this.ajaxObject)) {
		YAHOO.util.Connect.abort(this.ajaxObject);
	}
	this.form = new vB_Hidden_Form("report.php?" + SESSIONURL + "p=" + this.postid);
	this.form.add_variable("securitytoken", SECURITYTOKEN);
	this.form.add_variable("do", "sendemail");
	this.form.add_variable("postid", this.postid);
	this.form.add_variable("reason", fetch_object(this.message).value);
	var PHP_urlencode = PHP.urlencode;
	PHP.urlencode = escape;
	this.ajaxObject = YAHOO.util.Connect.asyncRequest("POST", this.form.action,
		{
			success : this.submitListener,
			failure : vB_Ajax_Report.prototype.submitFailure,
			timeout : vB_Default_Timeout,
			scope : this
		},
		"ajax=1&" + this.form.build_query_string()
	);
	PHP.urlencode = PHP_urlencode;
}

vB_Ajax_Report.prototype.submitFailure = function(E) {
	vBulletin_AJAX_Error_Handler(E);
	this.form.submit_form();
}

vB_Ajax_Report.prototype.submitListener = function(E) {
	this.vbmenu.hide(fetch_object(this.vbmenuname));
	var error;
	if (error = this.readXmlTag(E, "error", true)) {
		alert(error);
	} else {
		alert(this.readXmlTag(E, "redirect", true));
	}
}