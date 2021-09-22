slugify = (text) ->
  text = text.replace(/[^-a-zA-Z0-9,&\s]+/g, "")
  text = text.replace(/-/g, "_")
  text = text.replace(/\s/g, "-")
  text.toLowerCase()

$ ->
  $('h1,h2,h3,h4').each (i, elm) ->
    heading = $(elm)
    anchor = slugify(heading.text())
    heading.attr('id', anchor).prepend("<a href='##{anchor}' class='anchor'>&para;</a>")