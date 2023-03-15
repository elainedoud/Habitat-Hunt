class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :apartment_name
      t.string :address
      t.string :price
      t.string :contact_info
      t.string :website
      t.string :comment
      t.timestamps
    end
  end
end
