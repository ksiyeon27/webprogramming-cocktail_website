class CommentsController < ApplicationController
    def create
        @cocktail=Cocktail.find(params[:cocktail_id])
        @comment=@cocktail.comments.create(comment_params)
        redirect_to cocktail_path(@cocktail)
    end
    
    def destroy
        @cocktail = Cocktail.find(params[:cocktail_id])
        @comment = @cocktail.comments.find(params[:id])
        @comment.destroy
        redirect_to cocktail_path(@cocktail)
    end
    private
        def comment_params
            params.require(:comment).permit(:commenter, :body)
        end
end


