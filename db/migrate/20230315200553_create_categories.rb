class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :in_progress
      t.string :not_selected
      t.string :accepted 
      t.timestamps
    end
  end
end
