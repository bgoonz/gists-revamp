class ApplicationController < ActionController::Base
  protect_from_forgery

  unless Rails.application.config.consider_all_requests_local
    rescue_from ActionController::RoutingError, with: :render_404
    rescue_from ActionController::UnknownController, with: :render_404
    rescue_from ::AbstractController::ActionNotFound, with: :render_404
    rescue_from ActiveRecord::RecordNotFound, with: :render_404
    rescue_from ActionView::MissingTemplate, with: :render_404
  end

  private

  def render_404(exception=nil)
    respond_to do |format|
      format.html { render template: 'errors/missing', layout: 'layouts/application', status: 404 }
      format.all { render nothing: true, status: 404 }
    end
  end

end