class AddNotesColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :beans, :notes, :string
  end
end
