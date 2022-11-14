class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :image
      t.string :workout
      t.string :meal

      t.timestamps
    end
  end
end
