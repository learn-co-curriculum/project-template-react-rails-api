class AddBeanDrinkOrderForeignKeyColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :beans, :order_id, :integer
    add_column :drinks, :order_id, :integer
  end
end
