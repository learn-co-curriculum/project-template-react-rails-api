class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :email
      t.text :bio
      t.string :image
      t.string :contacts
      t.string :address
      t.integer :user_id

      t.timestamps
    end
  end
end
