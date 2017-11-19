// ==UserScript==
// @name        Redact
// @namespace   https://damos.world
// @description Redact parts of CQU web pages for privacy such as live demos
// @include     https://moodle.cqu.edu.au/*
// @include     https://moodle-vet.cqu.edu.au/*
// @include     https://moodle-sandpit.cqu.edu.au/*
// @include     http://moodle-archive-2014.cqu.edu.au/*
// @include     https://indicators.cqu.edu.au/easi/*
// @include     https://aims.cqu.edu.au/*
// @require     https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @grant       GM_addStyle
// @grant       GM.addStyle
// @run-at      document-start
// @version     1.1.0
// ==/UserScript==

try
{
  console.log("Hiding body") ;
  GM.addStyle("body {visibility: hidden;}") ;
  console.log("Body hidden") ;

  var func = function()
  {
    try
    {
      var redact_text = 
      [
        '.useridnumber, .useremail, .idnumber, .email, .subfield_firstname, .subfield_idnumber, .subfield_email, .subfield_userfullnamedisplay',
        'a[href*="/user/view.php"]',
        'a[href*="/assignsubmission_file/"]',
        'td[id^="mod-quiz-report-overview-report"].cell.c3',
        'td[id^="mod-quiz-report-overview-report"].cell.c4',
        'div.choicegroups-membersnames',
        'table[id=completion-progress] tbody tr th a',
        'select[name=userid] option',
        'optgroup[label^="Student"] option, optgroup[label^="No roles"] option',
        'table#completion-progress tbody tr td:nth-child(2), table#completion-progress tbody tr td:nth-child(3)',
        'table#participants tbody tr td:nth-child(4), table#participants tbody tr td:nth-child(5)',
        'span.ui-id-1',
        'table.studentInfo tbody tr:nth-child(3) td',
        'table.studentAccess tbody tr td:nth-child(1), table.studentAccess tbody tr td:nth-child(2), table.studentAccess tbody tr td:nth-child(3)',
        //OU Blog
        'div.oublog-post-editsummary',
        //EASI Integration
        'span[id=ui-id-1].ui-dialog-title',
        //EASI System
        'a[href*="/student/students/detail/"]',
        'div#nudgeLog h3',
        'input#emailTo',
        'span#previewEmailTo',
        //Handbook System
        'div#studentResultsArea div.tab-content div#cqucentral div#studentResultsArea table tbody tr:nth-child(1) th', /*student name*/
        'div#studentResultsArea div.tab-content div#cqucentral div#studentResultsArea table tbody tr:nth-child(2) td:nth-child(2)', /*student number*/
        'div#studentResultsArea div.tab-content div#cqucentral div#studentResultsArea table tbody tr:nth-child(3) td:nth-child(2)', /*student name*/
        'div#studentResultsArea div.tab-content div#cqucentral div#studentResultsArea table tbody tr:nth-child(3) td:nth-child(2) small span', /*student name*/
        'div#studentResultsArea div.tab-content div#cqucentral div#studentResultsArea table tbody tr:nth-child(5) td:nth-child(2) small a', /*email*/
        'div#studentResultsArea div.tab-content div#cqucentral div#studentResultsArea table tbody tr:nth-child(6) td:nth-child(2)', /*phone*/
        'div#studentResultsArea div.tab-content div#cqucentral div#studentResultsArea table tbody tr:nth-child(7) td:nth-child(2)', /*phone*/
        'div#studentResultsArea div.tab-content div#cqucentral div#studentResultsArea table tbody tr:nth-child(8) td:nth-child(2)', /*phone*/
        'div#studentResultsArea div.tab-content div#cqucentral div#studentResultsArea table tbody tr:nth-child(9) td:nth-child(2)', /*address*/
        'a[href^="mailto:"]'
      ] ;

      var redact_image =
      [
        '.userpicture',
        'img[src*="studentphoto.cqu.edu.au"]' /*handbook photo*/
      ] ;

      console.log("Redacting text") ;
      GM.addStyle(redact_text.join()+' {color: transparent !important; text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 6px !important;}') ;
      console.log("Text Redacted") ;

      console.log("Redacting Images") ;
      GM.addStyle(redact_image.join()+' {filter: blur(10px) !important;}') ;
      console.log("Images Redacted") ;

      console.log("Removing title and alt attributes") ;
      redact_text.concat(redact_image).forEach(function(s)
      {
				var nodes = document.querySelectorAll(s) ;
				for(var i=0; i<nodes.length; i++)
				{
					nodes[i].removeAttribute('title') ;
					nodes[i].removeAttribute('alt') ;
				}
      }) ;

      console.log("Setting page visible") ;
      window.document.getElementsByTagName("body")[0].style.visibility = "visible" ;
    }
    catch(err)
    {
      console.log('Error: '+err) ;
      console.log('On line: '+err.lineNumber) ;
      console.log('Stack:'+err.stack) ;
    }
  } ;

  addEventListener('DOMContentLoaded', func, false);
}
catch(err)
{
  console.log('Error: '+err) ;
  console.log('On line: '+err.lineNumber) ;
  console.log('Stack:'+err.stack) ;
}
