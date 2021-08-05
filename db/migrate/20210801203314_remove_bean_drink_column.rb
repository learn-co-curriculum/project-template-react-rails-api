class RemoveBeanDrinkColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :drink_id
    remove_column :orders, :bean_id
  end
end
