class CreateCocktails < ActiveRecord::Migration[5.0]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.float :alcohol
      t.integer :sugar
      t.text :recipe
      t.string :base
      t.string :flavor
      t.string :tags
      t.text :information

      t.timestamps
    end
  end
end
