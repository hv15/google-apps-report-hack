// ==UserScript==
// @name	Google Apps Report Hack
// @namespace	https://github.com/hv15/google-apps-report-hack
// @description	This solves (hackishly) the Google Apps problem relating to the reports not being fully shown by alterting some CSS.
// @match	https://www.google.com/a/cpanel/*/AdminHome#Reports/*
// @version	1.0
// ==/UserScript==

var div = document.getElementsByClassName('GGLYHMPCIBC');

if(div.length == 1){
	div.style.overflow = 'scroll';
} else {
	console.log('UserScript failed, there are more then one elements that reference class GGLYHMPCIBC');
}
