class ChangeFlavorToCocktail < ActiveRecord::Migration[5.0]
  def change
        change_column(:cocktails, :flavor, :column)
  end
end
