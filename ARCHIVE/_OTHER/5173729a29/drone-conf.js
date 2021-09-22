// node 0.8.22

// change wifi connection 
var execSync = require('execSync'); // https://github.com/mgutz/execSync
var droneSSIDName = 'BTWiFi'
var result = execSync.stdout('networksetup -setairportnetwork en1 ' + droneSSIDName)
console.log(result)


// create telnet connection to drone
// http://nodejs.org/api/net.html#net_net_createconnection_options_connectionlistener
// telnet 192.168.1.1


// send command to change wifi to drone
var sharedSSIDName = 'nodecopter'
var droneIP = '192.168.1.10'
var subnet  = '255.255.255.0'
var command = 'killall udhcpd; iwconfig ath0 mode managed essid ' + 
              sharedSSIDName +
              '; ifconfig ath0 ' +
              droneIP +
              ' netmask ' +
              subnet +
              ' up;'

