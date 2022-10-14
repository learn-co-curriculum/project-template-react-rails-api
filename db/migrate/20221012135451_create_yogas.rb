class CreateYogas < ActiveRecord::Migration[6.1]
  def change
    create_table :yogas do |t|
      t.string :name
      t.string :url
      t.integer :trainer_id

      t.timestamps
    end
  end
end
