#!/bin/bash

function addnext {
	NUM=$1
	sleep 1
	echo HI $NUM
	NUM=$(expr $NUM + 1)
	echo addnext $NUM >> $0
}

addnext 1