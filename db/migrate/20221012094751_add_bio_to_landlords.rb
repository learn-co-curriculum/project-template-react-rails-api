class AddBioToLandlords < ActiveRecord::Migration[6.1]
  def change
    add_column :landlords, :bio, :string
  end
end
