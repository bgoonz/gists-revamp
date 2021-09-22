#!/bin/bash

# This is recipe for OS X only
# A wise man once said; When shit fails, use strace(Linux) or dtruss(OS X)

# Installing MySQL gem
export ARCHFLAGS="-arch i386 -arch x86_64" ; gem install --no-rdoc --no-ri mysql -- --with-mysql-dir=/usr/local/mysql --with-mysql-config=/usr/local/mysql/bin/mysql_config

# Create symlink
# If that symlink does not work, use strace to figure out where MySQL gem is looking for it.
ln -s /usr/local/mysql/lib/libmysqlclient.16.dylib /usr/local/lib/libmysqlclient.16.dylib