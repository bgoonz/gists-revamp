# name: Github
# description: search github
# keyword: github
 
if command.hasQuery
  log command.query
  url = "https://api.github.com/legacy/repos/search/#{command.query}?callback=?"
  http.getJSON url, (data) ->
    log data
    if data.data.repositories
      for item in data.data.repositories
        log item
        result
          title:       utils.sanitize(item.name)
          description: utils.sanitize(item.description)
          action:      actions.open(item.url)