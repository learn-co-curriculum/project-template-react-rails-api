class AddImageUrlColumnToDrinks < ActiveRecord::Migration[6.1]
  def change
    add_column :drinks, :img_url, :string
  end
end
