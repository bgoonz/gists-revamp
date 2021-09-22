I noticed you are hotlinking to http://labjs.com/js/LAB.js.
While I'm thrilled that you've found a use for LABjs, my 
server is not a CDN and is not set up to handle the bandwidth
load your high traffic site is sending at it. I've added a 
note to the file to help explain that to your users. Please 
stop hotlinking.