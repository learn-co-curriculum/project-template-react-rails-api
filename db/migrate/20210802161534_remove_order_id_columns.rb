class RemoveOrderIdColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :drinks, :order_id
    remove_column :beans, :order_id
  end
end
