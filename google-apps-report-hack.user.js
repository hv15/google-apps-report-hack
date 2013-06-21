// ==UserScript==
// @name	Google Apps Report Hack
// @namespace	https://github.com/hv15/google-apps-report-hack
// @description	This solves (hackishly) the Google Apps problem relating to the reports not being fully shown by alterting some CSS.
// @match	https://www.google.com/a/cpanel/*/AdminHome#Reports/subtab=emaillogs
// @include	/^https://www\.google\.com/a/cpanel/.+/AdminHome#Reports/subtab=emaillogs$/
// @grant	none
// @version	1.3
// ==/UserScript==

var selector = 'GLGLAIEIBC';
var div = document.getElementsByClassName(selector);

if(div.length == 1){
	div.item(0).style.overflow = 'scroll';
} else {
	console.log('UserScript failed, there are more then one elements that reference class ' + selector);
}
