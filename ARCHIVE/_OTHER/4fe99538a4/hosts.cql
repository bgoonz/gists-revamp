CREATE TABLE IF NOT EXISTS hosts (
    id text,
    cluster_id bigint,
    access_token_id bigint,
    hostname text,
    updated bigint,
    tags map<text, text>,
    master_tags map<text, text>,
    data map<text, text>,
    lucene text,
    PRIMARY KEY (id)
) WITH caching = {'keys': 'ALL', 'rows_per_partition': 'ALL'}
  AND crc_check_chance = 0
  AND dclocal_read_repair_chance = 0
  AND default_time_to_live = 0
  AND gc_grace_seconds = 0
  AND memtable_flush_period_in_ms = 0
  AND read_repair_chance = 0.0
  AND speculative_retry = '99PERCENTILE';

CREATE CUSTOM INDEX IF NOT EXISTS idx_hosts_lucene ON hosts (lucene) USING 'com.stratio.cassandra.lucene.Index' WITH OPTIONS = {
    'schema' : '{
        fields : {
            id : {type : "string"},
            cluster_id: {type : "integer"},
            hostname : {type : "string"},
            updated: {type : "integer"},
            tags : {type : "string"},
            master_tags : {type : "string"},
            data_string : { type : "string", column: "data"},
            data_float : { type : "float", column: "data"}
        }
    }'
};
