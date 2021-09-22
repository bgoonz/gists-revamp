#!/bin/bash
perl -ne 'm/^([^#][^\s=]+)\s*(=.*|)/ && printf("%-35s%s\n", $1, $2)' /etc/mysql/my.cnf