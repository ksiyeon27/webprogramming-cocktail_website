class ChangeSugarToCocktail < ActiveRecord::Migration[5.0]
  def change
     change_column(:cocktails, :sugar, :column)
  end
end
