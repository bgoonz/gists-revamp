require 'elasticsearch'

client = Elasticsearch::Client.new log: true

client.index  index: 'myindex', type: 'mytype', id: 1, body: { title: 'Test', store: true }
client.index  index: 'myindex', type: 'mytype', id: 2, body: { title: 'Test', store: true }

resp = client.mlt index: 'myindex', type: 'mytype', id: '1', mlt_fields: 'title', min_term_freq: 1, min_doc_freq: 1

p resp['hits'] # => {"total"=>0, "max_score"=>nil, "hits"=>[]}
