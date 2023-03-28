class ChangeToCategoryTable < ActiveRecord::Migration[6.1]
  
  change_table(:categories) do |t|
    t.rename(:in_progress, :category_name)
    t.remove :not_selected
    t.remove :accepted

  end

end
