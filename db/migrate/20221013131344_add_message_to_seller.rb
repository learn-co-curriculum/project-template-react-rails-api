class AddMessageToSeller < ActiveRecord::Migration[6.1]
  def change
    add_column :sellers, :message, :string
  end
end
