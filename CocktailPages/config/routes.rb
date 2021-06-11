Rails.application.routes.draw do
  get 'account/index'

  get 'accounts/index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    get 'cocktails/search'
    root 'cocktails#search'
    resources :cocktails do
      resources :comments
      member do
        put "like" => "cocktails#like"
      end
  end
end