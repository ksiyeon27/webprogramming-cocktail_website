{"filter":false,"title":"routes.rb","tooltip":"/CocktailPages/config/routes.rb","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["Rails.application.routes.draw do","  get 'cocktails/search'","","  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html","end",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":5,"column":3},"action":"insert","lines":["Rails.application.routes.draw do","  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html","    get 'cocktails/search'","    root 'cocktails#search'","    resources :cocktails","end"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":5,"column":3},"end":{"row":5,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1622736280606,"hash":"c5713bc8a049feed4ef40fcddc6e01d2505f6563"}