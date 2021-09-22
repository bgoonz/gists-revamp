number = 1

string = "andrew"

hash = { "foo" => "bar" }

array = [1,3,2]

symbol = :cheese

range = 1..3

# try puts each variable above

puts string

def swap(argument1, argument2)
  [argument2, argument1]
end

class Cheese < String
  def reverse
    'cheese'
  end
end

cheese = Cheese.new('andrew')
cheese.reverse