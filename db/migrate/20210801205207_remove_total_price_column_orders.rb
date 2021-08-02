class RemoveTotalPriceColumnOrders < ActiveRecord::Migration[6.1]
  def change
    remove_column :orders, :total_price
  end
end
