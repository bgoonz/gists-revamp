      return unless Rails.env.production?
      Typhoeus::Request.new('firehoseurl',
        method: :post,
        body: somejson,
        headers: { 'Content-Type' => 'application/json' }).run