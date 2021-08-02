class AddTotalPriceColumnToOrders < ActiveRecord::Migration[6.1]
  def change
    add_column :orders, :total_price, :float
  end
end
