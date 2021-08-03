class AddImgUrlColumnToBeans < ActiveRecord::Migration[6.1]
  def change
    add_column :beans, :img_url, :string
  end
end
