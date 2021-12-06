class CreateMinions < ActiveRecord::Migration[6.1]
  def change
    create_table :minions do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :bio

      t.timestamps
    end
  end
end
