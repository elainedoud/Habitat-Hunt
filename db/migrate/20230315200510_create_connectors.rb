class CreateConnectors < ActiveRecord::Migration[6.1]
  def change
    create_table :connectors do |t|
      t.integer :listing_id
      t.integer :category_id
      t.timestamps
    end
  end
end
