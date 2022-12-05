class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.integer :weight
      t.integer :calories
      t.belongs_to :user
      t.timestamps
    end
  end
end
