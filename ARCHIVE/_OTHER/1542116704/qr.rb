require 'rubygems'
require 'rqrcode_png'

QR_CHAR_SIZE_VS_SIZE = [7, 14, 24, 34, 44, 58, 64, 84, 98, 119, 137, 155, 177, 194]

def minimum_qr_size_from_string(string)
  QR_CHAR_SIZE_VS_SIZE.each_with_index do |size, index|
    return (index + 1) if string.size < size
  end
  
  # If it's particularly big, we'll try and create codes until it accepts
  i = QR_CHAR_SIZE_VS_SIZE.size
  begin
    i += 1
    RQRCode::QRCode.new(string, :size => i)
    return i
  rescue RQRCode::QRCodeRunTimeError
    retry
  end
end

def qr_png(string)
  size = minimum_qr_size_from_string(string)
  qr = RQRCode::QRCode.new(string, :size => size, :level => :h )
  png = qr.to_img                                            
  png.resize(200, 200).save("qr.png")
end

qr_png('Hello world')