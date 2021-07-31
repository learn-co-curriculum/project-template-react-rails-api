class AddCurrentOrderColumnToOrdersTable < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :current_order, :boolean
  end
end
