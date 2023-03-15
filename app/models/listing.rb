class Listing < ApplicationRecord

    has_many :connectors
    has_many :categories, through: :connectors

end
