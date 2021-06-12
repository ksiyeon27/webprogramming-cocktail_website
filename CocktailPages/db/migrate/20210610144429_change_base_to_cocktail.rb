class ChangeBaseToCocktail < ActiveRecord::Migration[5.0]
  def change
    change_column(:cocktails, :base, :column)

  end
end
