require 'colorize'

def debug
  heatmap.pixels.each do |row|
    row.each do |pixel|
      print "#{pixel} ".colorize(colour(pixel))
    end
    print "\n"
  end
  nil
end

def colour(val)
  {
    0 => :white,
    1 => :green,
    2 => :yellow,
    3 => :red
  }[val]
end