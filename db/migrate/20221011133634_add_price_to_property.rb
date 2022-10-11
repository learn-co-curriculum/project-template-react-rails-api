class AddPriceToProperty < ActiveRecord::Migration[6.1]
  def change
    add_column :properties, :price, :integer
  end
end
