class ConnectorSerializer < ActiveModel::Serializer
  attributes :id, :listing_id, :category_id

  belongs_to :listing
  belongs_to :category
end
