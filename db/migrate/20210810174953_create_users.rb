class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :fav_genre
      t.string :bio

      t.timestamps
    end
  end
end
