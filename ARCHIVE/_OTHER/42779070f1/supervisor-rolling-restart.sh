#!/bin/bash

#
# Usage: ./supervisor-rolling-restart [supervised-process-name]
#
PROGRAM=$1

# Time in seconds.
TIME_BETWEEN_RUNNING_CHECKS=0.5
TIME_BETWEEN_RESTARTS=1

for f in `supervisorctl status | grep "$PROGRAM" | awk '{print $1}'`; do
  supervisorctl restart $f

  while [ 1 ]; do
    sleep $TIME_BETWEEN_RUNNING_CHECKS
    status=`supervisorctl status $f | awk '{print $2}'`
    if [ "$status" == "RUNNING" ] ; then
      echo $f restarted
      break
    elif [ "$status" == "FATAL" ] ; then
      echo "Error during restart of $f ($status). Stopping rolling update."
      exit 1
    else
      echo "Now: $status"
    fi
  done

  sleep $TIME_BETWEEN_RESTARTS
done

