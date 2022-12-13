class ChangeIntegerInChefs < ActiveRecord::Migration[6.1]
  def change
      change_column :chefs, :phone, :integer, limit: 8
  end
end
