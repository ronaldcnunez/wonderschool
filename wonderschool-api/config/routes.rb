Rails.application.routes.draw do
  namespace :api do
  namespace :v1 do
    resources :tasks, only: [:index, :update]
  end
end

end
