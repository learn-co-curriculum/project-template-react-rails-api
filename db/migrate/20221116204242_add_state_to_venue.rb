class AddStateToVenue < ActiveRecord::Migration[6.1]
  def change
    add_column :venues, :state, :string
  end
end
