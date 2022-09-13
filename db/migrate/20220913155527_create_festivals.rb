class CreateFestivals < ActiveRecord::Migration[6.1]
  def change
    create_table :festivals do |t|
      t.string :name
      t.string :date
      t.string :location

      t.timestamps
    end
  end
end
