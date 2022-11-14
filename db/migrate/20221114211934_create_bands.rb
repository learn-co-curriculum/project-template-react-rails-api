class CreateBands < ActiveRecord::Migration[6.1]
  def change
    create_table :bands do |t|
      t.string :name
      t.string :image_url
      t.string :genre
      t.string :secondary_genre 
      t.string :hometown

      t.timestamps
    end
  end
end
