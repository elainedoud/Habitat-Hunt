class ConnectorsController < ApplicationController

def create
    connector = Connector.create(connector_params)
    render json: connector, status: :created
end

private

def connector_params
    params.permit(:listing_id, :category_id)
end 

end
