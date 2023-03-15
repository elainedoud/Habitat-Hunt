class Category < ApplicationRecord

    has_many :connectors
    has_many :listings, through: :connectors

end
