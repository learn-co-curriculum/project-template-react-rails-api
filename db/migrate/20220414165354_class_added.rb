class ClassAdded < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :level, :integer
    add_column :characters, :charClass, :string
    add_column :characters, :armor, :integer
    add_column :characters, :weapon, :integer
    add_column :characters, :trinket, :integer
  end
end
