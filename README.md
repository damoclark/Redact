# Redact

**Firefox utility to redact parts of CQU web pages for student privacy such as during live demos**

The utility is specifically for CQUniversity systems including [Moodle](https://moodle.org/), EASICONNECT and CQU Student Handbook. It will hide personal details of students during live demonstrations or screencast recordings.  The utility is incomplete so test your pages before your presentation.

If you are looking to customise Redact for your own requirements, [a more generic branch](https://github.com/damoclark/Redact) is available in this repository. 

It could be made a little more sophisticated and extensible with external json sources providing the css selectors for redacting.  Contributions welcome.

## Installation Instructions

If you don't have The Moodle Activity Viewer (MAV) installed in your Firefox browser, then firstly [Install Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) into your Firefox.

Then [install Redact](https://raw.githubusercontent.com/damoclark/Redact/cqu/Redact.user.js).

## Usage

Enable it in the Greasemonkey Add-ons UI when you want to redact, and disable when not.

Press Ctrl-Shift-A to access the settings (Cmd-Shift-A for Mac)

![Greasemonkey Scripts](https://raw.githubusercontent.com/damoclark/Redact/cqu/Firefox_Add-ons_Manager.png "Access Greasemonkey Scripts")
![Enable or Disable](https://raw.githubusercontent.com/damoclark/Redact/cqu/Enable_Redact.png "Enable or Disable Redact")

## Licence 
Copyright (c) 2016 Damien Clark<br/>

Licenced under the terms of the [GPLv3](https://www.gnu.org/licenses/gpl.txt)<br/>
![GPLv3](https://www.gnu.org/graphics/gplv3-127x51.png "GPLv3")

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 