class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category_name

  has_many :listings
end
