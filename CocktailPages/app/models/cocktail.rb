class Cocktail < ApplicationRecord
    serialize :tags, Array
    serialize :flavor, Array
    serialize :base, Array
    serialize :sugar, Array
    serialize :alcohol, Array
    # serialize :tags, Array
    # serialize :flavor, Array
    # serialize :base, Array
    acts_as_votable
    has_many :comments, dependent: :destroy
    validates :name,
            presence: true,
            length: { minimum: 1 } ##예시로 한번..
end