# Redact

**Userscript to redact parts of a web page for privacy such as during live demos**

Nothing fancy here.  A simple [Userscript](https://github.com/OpenUserJs/OpenUserJS.org/wiki/Userscript-beginners-HOWTO) written using javascript that can be installed under [Greasemonkey](http://www.greasespot.net/) (and maybe [Tampermonkey](https://tampermonkey.net/)) for redacting elements of a page, according to css selectors provided in the script.  

The script comes with css specifically for the [Moodle Learning Management System](https://moodle.org/), to hide personal details of students during demonstrations.  Can be changed to redact whatever it is you need to keep private.

It could be made a little more sophisticated and extensible with external json sources providing the css selectors for redacting.  Contributions welcome.

## Usage

[Install Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) into your Firefox browser.

Then [install Redact](https://raw.githubusercontent.com/damoclark/Redact/master/Redact.user.js).

Enable it in the Greasemonkey Add-ons UI when you want to redact, and disable when not.

![Greasemonkey Scripts](https://raw.githubusercontent.com/damoclark/Redact/master/Firefox_Add-ons_Manager.png "Access Greasemonkey Scripts")
![Enable or Disable](https://raw.githubusercontent.com/damoclark/Redact/master/Enable_Redact.png "Enable or Disable Redact")

## Licence 
Copyright (c) 2016 Damien Clark<br/>

Licenced under the terms of the [GPLv3](https://www.gnu.org/licenses/gpl.txt)<br/>
![GPLv3](https://www.gnu.org/graphics/gplv3-127x51.png "GPLv3")

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 