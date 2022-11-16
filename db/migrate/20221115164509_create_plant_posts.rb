class CreatePlantPosts < ActiveRecord::Migration[6.1]
  def change
    create_table :plant_posts do |t|
      t.string :image
      t.belongs_to :user, null: false, foreign_key: true
      t.string :plant_name
      t.boolean :indoor
      t.string :state
      t.boolean :pet_safe

      t.timestamps
    end
  end
end
