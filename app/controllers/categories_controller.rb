class CategoriesController < ApplicationController

def create
    category = Category.create(category_params)
    render json: category, status: :created
end

private

def category_params
    params.permit(:in_progress, :not_selected, :accepted)
end    


end
