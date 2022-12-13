class ChangeIntegerInClients < ActiveRecord::Migration[6.1]
  def change
    change_column :clients, :phone, :integer, limit: 8
  end
end
