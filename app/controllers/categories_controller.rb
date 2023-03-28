class CategoriesController < ApplicationController

def index
    categories = Category.all
    render json: categories
end

def create
    category = Category.create(category_params)
    render json: category, status: :created
end

private

def category_params
    params.permit(:category_name)
end    


end
