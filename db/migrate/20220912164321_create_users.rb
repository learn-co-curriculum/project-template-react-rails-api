class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :zipcode
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
