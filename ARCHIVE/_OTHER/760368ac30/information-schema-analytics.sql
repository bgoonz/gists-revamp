SELECT concat( table_schema, '.', table_name ) table_name,
concat( round( data_length / ( 1024 *1024 ) , 2 ) , 'M' ) data_length,
concat( round( index_length / ( 1024 *1024 ) , 2 ) , 'M' ) index_length,
concat( round( round( data_length + index_length ) / ( 1024 *1024 ) , 2 ) , 'M' ) total_size,
table_rows,
engine
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = 'coolshit_dev'
ORDER BY data_length DESC;