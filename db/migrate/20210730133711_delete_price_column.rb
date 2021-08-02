class DeletePriceColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :beans, :price
  end
end
