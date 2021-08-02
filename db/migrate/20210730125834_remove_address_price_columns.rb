class RemoveAddressPriceColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :carts, :address, :string
    remove_column :carts, :price, :float
  end
end
