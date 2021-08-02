class RenameTypeColumnsInAllTables < ActiveRecord::Migration[6.1]
  def change
    rename_column :beans, :type, :variety
    rename_column :drinks, :type, :name
    
  end
end
