class CharAtkAdder < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :atk, :integer
    add_column :items, :atk, :integer
  end
end
