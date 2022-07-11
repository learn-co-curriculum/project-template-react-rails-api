class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :location
      t.string :name
      t.string :image

      t.timestamps
    end
  end
end
