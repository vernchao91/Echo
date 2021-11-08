Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  mount ActionCable.server, at: '/cable'

  namespace :api, defaults: { format: :json } do 
    resource :session, only: [ :create, :destroy ]
 
    resources :users, only: [ :show, :create, :destroy] do
      resources :servers, only: [ :index, :create, :update, :destroy ]
      #resources :conversations, only: [ :show, :index, :create, :update, :destroy]
    end

    resources :servers, only: [ :index, :show ] do
      resources :users, only: [ :index ]
      resources :lists, only: [ :destroy ]
     resources :channels, only: [ :index, :show, :create, :update, :destroy ]
    end

    resources :lists, only: [ :create ]

  end
end