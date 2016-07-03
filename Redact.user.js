// ==UserScript==
// @name        Redact
// @namespace   https://damos.world
// @description Redact parts of CQU web pages for privacy such as live demos
// @include     https://moodle.cqu.edu.au/*
// @include     https://moodle-sandpit.cqu.edu.au/*
// @include     http://moodle-archive-2014.cqu.edu.au/*
// @include     https://indicators.cqu.edu.au/easi/*
// @include     https://handbook.cqu.edu.au/*
// @grant       GM_addStyle
// @run-at      document-start
// @version     1.0.1
// ==/UserScript==

try
{
  console.log("Hiding body") ;
  GM_addStyle("body {visibility: hidden;}") ;
  console.log("Body hidden") ;

  var func = function()
  {
    var redact_text = 
    [
      '.useridnumber, .useremail, .idnumber, .email, .subfield_firstname, .subfield_idnumber, .subfield_email',
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
      //EASI Integration
      'span[id=ui-id-1].ui-dialog-title',
      //EASI System
      'a[href*="/students/studentDetail/"]',
      'div#nudgeLog h3',
      'input#emailTo',
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
    GM_addStyle(redact_text.join()+' {color: transparent !important; text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 6px !important;}') ;
    console.log("Text Redacted") ;

    console.log("Redacting Images") ;
    GM_addStyle(redact_image.join()+' {filter: blur(10px) !important;}') ;
    console.log("Images Redacted") ;

    console.log("Setting page visible") ;
    window.document.getElementsByTagName("body")[0].style.visibility = "visible" ;
  } ;

  addEventListener('DOMContentLoaded', func, false);
}
catch(err)
{
  console.log('Error: '+err) ;
  console.log('On line: '+err.lineNumber) ;
  console.log('Stack:'+err.stack) ;
}
