class ChangeTagsToCocktail < ActiveRecord::Migration[5.0]
  def change
    change_column(:cocktails, :tags, :column)
  end
end
