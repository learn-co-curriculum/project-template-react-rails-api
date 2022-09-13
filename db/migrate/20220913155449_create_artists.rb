class CreateArtists < ActiveRecord::Migration[6.1]
  def change
    create_table :artists do |t|
      t.string :name
      t.text :bio
      t.string :genre
      t.string :stage
      t.integer :festival_id
      t.string :image
      t.string :performance_time

      t.timestamps
    end
  end
end
