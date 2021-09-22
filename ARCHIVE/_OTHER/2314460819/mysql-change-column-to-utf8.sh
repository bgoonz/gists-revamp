mysqldump --user=root --default-character-set=latin1 -c --insert-ignore --skip-set-charset <dbname> <table-name> > <filename>.sql &&
iconv -f ISO-8859-1 -t UTF-8 <filename>.sql > <filename>.utf8.sql &&
perl -pi -w -e 's/CHARSET=latin1/CHARSET=utf8/g;' <filename>.sql.utf8.sql &&
mysql --user=root --max_allowed_packet=16M --default-character-set=utf8 <dbname> < <filename>.utf8.sql