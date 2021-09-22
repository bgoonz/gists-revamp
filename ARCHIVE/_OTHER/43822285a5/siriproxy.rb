require 'cora'
require 'siri_objects'
require 'pp'
require 'rest_client'

quadcopter_host = 'http://localhost:8080'

def quadcopter_command(name, params = {})
  RestClient.get "#{quadcopter_host}/#{name}", {:params => params}
end

class SiriProxy::Plugin::Example < SiriProxy::Plugin
  def initialize(config)
    #if you have custom configuration options, process them here!
  end

  #get the user's location and display it in the logs
  #filters are still in their early stages. Their interface may be modified
  filter "SetRequestOrigin", direction: :from_iphone do |object|
    puts "[Info - User Location] lat: #{object["properties"]["latitude"]}, long: #{object["properties"]["longitude"]}"

    #Note about returns from filters:
    # - Return false to stop the object from being forwarded
    # - Return a Hash to substitute or update the object
    # - Return nil (or anything not a Hash or false) to have the object forwarded (along with any
    #    modifications made to it)
  end

  listen_for /test siri proxy/i do
    say "Siri Proxy is up and running!" #say something to the user!

    request_completed #always complete your request! Otherwise the phone will "spin" at the user!
  end

  listen_for /take off/i do
    say "taking off"
    quadcopter_command("takeoff")
    request_completed
  end
  
  listen_for /land/i do
    say "landing"
    quadcopter_command("land")
    request_completed
  end
end
