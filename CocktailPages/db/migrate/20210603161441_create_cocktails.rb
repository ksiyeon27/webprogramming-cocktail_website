class CreateCocktails < ActiveRecord::Migration[5.0]
  def change
    create_table :cocktails do |t|
      t.string :name
      t.string :image
      t.float :alcohol
      t.integer :sugar
      t.text :recipe
      t.column :base
      t.column :flavor
      t.column :tags
      t.text :information

      t.timestamps
    end
  end
end
