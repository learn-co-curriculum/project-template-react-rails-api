class AddNotesColumnToBeans < ActiveRecord::Migration[6.1]
  def change
    add_column :beans, :type, :string
    
  end
end
