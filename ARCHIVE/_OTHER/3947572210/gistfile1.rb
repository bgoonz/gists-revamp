# the initializer
CarrierWave.configure do |config|
  config.storage = :file
  config.root = Rails.root.join('public')
  config.cache_dir = Rails.root.join('tmp/uploads')
  config.enable_processing = false
end


# the uploader
class PdfVoucherUploader < CarrierWave::Uploader::Base
  def store_dir
    "pdfs/vouchers"
  end

  def filename=(name)
    @filename = name
  end

end
