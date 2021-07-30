class AddPriceColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :beans, :price, :float
  end
end
