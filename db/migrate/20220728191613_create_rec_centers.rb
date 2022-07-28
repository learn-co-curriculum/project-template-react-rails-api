class CreateRecCenters < ActiveRecord::Migration[6.1]
  def change
    create_table :rec_centers do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.text :description
      t.time :opens_at
      t.time :closes_at
      t.string :image

      t.timestamps
    end
  end
end
