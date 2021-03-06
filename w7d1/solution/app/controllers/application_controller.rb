class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Expose current_user method to the views
  helper_method :current_user
  helper_method :logged_in?

  
  def require_no_user!
    redirect_to cats_url if current_user
  end

  def require_user!
    debugger
    redirect_to new_session_url if current_user.nil?
  end

  def current_user
    debugger
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    debugger
    !current_user.nil?
  end

  def login_user!(user)
    debugger
    session[:session_token] = user.reset_session_token!
  end

  def logout_user!
    debugger
    current_user.reset_session_token!
    session[:session_token] = nil
  end


end
