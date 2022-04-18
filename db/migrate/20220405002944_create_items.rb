class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.belongs_to :character, null: false, foreign_key: true
      t.string :itemType
      t.integer :str
      t.integer :ag
      t.integer :intel
      t.integer :exp_gain

      t.timestamps
    end
  end
end
