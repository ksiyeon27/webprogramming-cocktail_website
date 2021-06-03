class Cocktail < ApplicationRecord
    # serialize :tags, Array
    # serialize :flavor, Array
    # serialize :base, Array
    
    validates :name,
	 	 	 presence: true,
	 	 	 length: { minimum: 1 } ##예시로 한번..
end
