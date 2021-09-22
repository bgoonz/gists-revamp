class ErrorsController < ApplicationController
  def missing
    render :status => 404, :layout => 'layouts/application'
  end
end