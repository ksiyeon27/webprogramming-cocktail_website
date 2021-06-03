Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    get 'cocktails/search'
    root 'cocktails#search'
    resources :cocktails
end