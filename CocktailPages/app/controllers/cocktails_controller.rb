class CocktailsController < ApplicationController
    def index ## 칵테일 리스트
        @cocktails = Cocktail.all
    end
    
    def new ## 쿼리문 대신
        @cocktail = Cocktail.new
    end
    
    def search ## 메인 검색 페이지
    end
    
    def create ## 쿼리문 대신
 	 	 @cocktail = Cocktail.new(cocktail_params)
 	 	 
 	 	if @cocktail.save
 	 	    redirect_to @cocktail
 	        else
 	 	        render 'new'
 	 	end
    end
    
    def show ## 칵테일 디테일 페이지
        @cocktail = Cocktail.find(params[:id])
    end
private

     def cocktail_params
        params.require(:cocktail).permit(:name, :alcohol,  :sugar, :recipe, :base, 
                                        :flavor, :tags, :information)
     end
 
end