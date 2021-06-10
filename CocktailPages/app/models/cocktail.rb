class Cocktail < ApplicationRecord
    serialize :tags, Array
    serialize :flavor, Array
    serialize :base, Array
    serialize :sugar, Array
    serialize :alcohol, Array
    has_many :comments, dependent: :destroy
    validates :name,
	 	 	 presence: true,
	 	 	 length: { minimum: 1 } ##예시로 한번..
end
