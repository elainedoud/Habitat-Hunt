class CategorySerializer < ActiveModel::Serializer
  attributes :id, :in_progress, :not_selected, :accepted

  has_many :listings
end
