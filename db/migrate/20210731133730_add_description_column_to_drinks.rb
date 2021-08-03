class AddDescriptionColumnToDrinks < ActiveRecord::Migration[6.1]
  def change
    add_column :drinks, :description, :string
  end
end
