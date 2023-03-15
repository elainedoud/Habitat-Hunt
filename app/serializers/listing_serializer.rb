class ListingSerializer < ActiveModel::Serializer
  attributes :id, :apartment_name, :address, :price, :contact_info, :website, :comment

  has_many :categories
end
