class AddBeanIdDrinkIdOrdersColumns < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :bean_id, :integer
    add_column :orders, :drink_id, :integer
  end
end
