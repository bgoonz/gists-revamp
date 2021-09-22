description = 'Valuable is a ruby base class that is essentially attr_accessor on steroids'
u = URI.escape 'site:github.com "'+description+'"'
doc = Nokogiri::HTML(open("https://www.google.com/search?q="+u))
text = doc.css('cite').first.text
GithubRepository.extract_full_name(text)