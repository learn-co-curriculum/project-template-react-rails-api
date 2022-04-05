class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :name
      t.integer :str
      t.integer :ag
      t.integer :intel
      t.integer :exp
      t.integer :exp_gain

      t.timestamps
    end
  end
end
