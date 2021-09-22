window.BackboneExample =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: ->

$ ->
  class BackboneExample.Routers.Posts extends Backbone.Router
    routes :
        "": "posts"
        "new": "new"
  
    posts: ->
      new BackboneExample.Views.PostsIndex
    new: ->
      new BackboneExample.Views.PostsNew
  
  class BackboneExample.Models.Post extends Backbone.Model
    defaults:
      title: 'Hello'
      content: 'Backbone'

  class BackboneExample.Collections.Posts extends Backbone.Collection

    model: BackboneExample.Models.Post
    url: '/posts'

   class BackboneExample.Views.PostsView extends Backbone.View
      tagName: 'li'

      initialize: ->
        _.bindAll @

      render: =>
        $(@el).html("<h2>#{@model.get('title')}</h2><p>#{@model.get('content')}</p>")
        @

  class BackboneExample.Views.PostsIndex extends Backbone.View

    el: $ '#posts'

    initialize: ->
      _.bindAll @
      @collection = new BackboneExample.Collections.Posts
      @collection.bind 'add', @appendItem
      @collection.fetch update: true
      @render()

    render: ->
      $(@el).html('<button>Add Item List</button><ul></ul><a href="#/new">new</a>')
    
    appendItem: (post) ->
      post_view = new BackboneExample.Views.PostsView model: post
      $('ul').append post_view.render().el
    
    addItem: ->
       item = new BackboneExample.Models.Post title: 'hi', content: 'world'
       @collection.add item
    
    events: 'click button': 'addItem'

  class BackboneExample.Views.PostsNew extends Backbone.View

    el: $ '#posts'

    initialize: ->
      _.bindAll @
      @render()

    render: ->
      $(@el).html('<a href="#/">Back</a>')

  BackboneExample.initialize()
  window.router = new BackboneExample.Routers.Posts
  Backbone.history.start()