class CreateEquipment < ActiveRecord::Migration[6.1]
  def change
    create_table :equipment do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :bonus
      t.string :type

      t.timestamps
    end
  end
end
