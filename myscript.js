function addEvent(obj, evType, fn, useCapture){
  if (obj.addEventListener){
    obj.addEventListener(evType, fn, useCapture);
    return true;
  } else if (obj.attachEvent){
    var r = obj.attachEvent("on"+evType, fn);
    return r;
  } else {
    alert("Handler could not be attached");
  }
}

// invoked by clicking on sizer icons
function changeSizeStyle(evt) {
	evt = evt || window.event
	var elem = evt.target || evt.srcElement
	var re = /(.*)(Styler\b)/
	var sizeStyle = re.exec(elem.id)[1]
	Cookies.set("fontSize", sizeStyle)
	document.body.className=sizeStyle + "Text"
	setIconBorder(elem.id)
}

function setIconBorder(elemID) {
	elemID = (elemID) ? elemID :
	(Cookies.get("fontSize") ? Cookies.get("fontSize") + "Styler" : "mediumStyler")
	var iconIDs = ["smallStyler", "mediumStyler", "largeStyler"]
	for (var i = 0; i <iconIDs.length; i++) {
		document.getElementById(iconIDs[i]).style.borderColor = "black";
	}
	document.getElementById(elemID).style.borderColor = "red";
}

function setEvents( ) {
	addEvent(document.getElementById("smallStyler"), "click", changeSizeStyle, false)
	addEvent(document.getElementById("mediumStyler"), "click", changeSizeStyle, false)
	addEvent(document.getElementById("largeStyler"), "click", changeSizeStyle, false)
}

window.onload = function() {
	setIconBorder()
	setEvents()
}