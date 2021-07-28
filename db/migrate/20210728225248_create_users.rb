class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email_address
      t.string :address
      t.string :favorite_drink
      t.string :orders

      t.timestamps
    end
  end
end
