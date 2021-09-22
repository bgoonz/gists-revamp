#!/bin/bash

DUMPFILE=/tmp/dump.`date +%Y.%m.%d`.sql

echo Dumping > $DUMPFILE
mysqldump dump > $DUMPFILE
echo Finished dumping >> $DUMPFILE