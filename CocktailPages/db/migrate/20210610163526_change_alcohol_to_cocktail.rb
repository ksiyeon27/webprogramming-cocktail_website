class ChangeAlcoholToCocktail < ActiveRecord::Migration[5.0]
  def change
    change_column(:cocktails, :alcohol, :column)
  end
end
