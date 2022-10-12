class CreateProperties < ActiveRecord::Migration[6.1]
  def change
    create_table :properties do |t|
      t.string :image_url
      t.string :name
      t.string :address
      t.string :description
      t.integer :seller_id
      t.integer :user_id

      t.timestamps
    end
  end
end
