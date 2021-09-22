#!/bin/sh
PORT=4200
sudo launchctl unload /Library/LaunchDaemons/com.crashplan.engine.plist
sudo sed -i '' "s/\(<servicePort>\)[^<]*/\1$PORT/" /Library/Application\ Support/CrashPlan/conf/my.service.xml
sed -i '' "s/#*\(servicePort=\).*/\1$PORT/" /Applications/CrashPlan.app/Contents/Resources/Java/conf/ui.properties
defaults write /Applications/CrashPlan.app/Contents/Resources/CrashPlan\ menu\ bar.app/Contents/Info CPPort $PORT
sudo launchctl load /Library/LaunchDaemons/com.crashplan.engine.plist