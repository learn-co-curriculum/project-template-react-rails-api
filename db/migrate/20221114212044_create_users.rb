class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.string :favorite_band
      t.string :location
      t.string :genre_1
      t.string :genre_2
      t.string :genre_3

      t.timestamps
    end
  end
end
