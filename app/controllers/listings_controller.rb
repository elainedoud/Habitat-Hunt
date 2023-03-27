class ListingsController < ApplicationController

def create
    listing = Listing.create(listing_params)
    render json: listing, status: :created
end

def index
    listings = Listing.all 
    render json: listings
end

private

def listing_params
    params.permit(:apartment_name, :address, :price, :contact_info, :website, :comment)
end

end
