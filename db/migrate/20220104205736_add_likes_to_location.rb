class AddLikesToLocation < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :likes, :integer, null: false, default: 0
  end
end
