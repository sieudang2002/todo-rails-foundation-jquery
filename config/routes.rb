Rails.application.routes.draw do
  resources :todos do 
    member do 
      put 'complete'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/info' => "rails/welcome#index"
  root to: 'todos#index'

end
