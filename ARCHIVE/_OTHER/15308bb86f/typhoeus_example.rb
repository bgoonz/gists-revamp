    Typhoeus::Request.new(url,
      method: :post,
      timeout_ms: 10000,
      body: Oj.dump(data, mode: :compat),
      headers: { 'Content-Type' => 'application/json', 'Accept-Encoding' => 'application/json' })


a_request(:post, "http://localhost:4000/test.json").with(:body => params.to_json,
          :headers => {'Authorization'=>['test', 'test'],
                       'Content-Type'=>'application/json'}).should have_been_made
