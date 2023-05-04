echo off
set pluginPath=..\moodledev5\lib\editor\atto\plugins\htmlbootstrapeditor

rem remove the current link
..\outils\junction -d src

rem set the link
..\outils\junction src %pluginPath%

pause