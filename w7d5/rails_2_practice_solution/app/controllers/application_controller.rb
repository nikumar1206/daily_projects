class ApplicationController < ActionController::Base

  # Expose these methods to the views
  helper_method :current_user, :signed_in?

  # most of these methods are to help make our code DRY
  # they are optional but help 

  private
  
  # getter method for @current_user
  def current_user
    # we save a query by doing this logic 
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    # current_user can be either truthy or falsey 
    # we want a boolean, true or false 

    # if current_user
    #   return true 
    # end
    # false 

    !!current_user
  end

  def sign_in!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def sign_out!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_signed_in!
    redirect_to new_session_url unless signed_in?
  end
end
