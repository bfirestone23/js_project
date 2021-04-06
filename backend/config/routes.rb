Rails.application.routes.draw do
  resources :concerts, except: [:edit, :update] do
    resources :comments, except: [:edit, :update, :index]
  end

  resources :comments, only: [:index]
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end