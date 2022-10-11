class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.integer :seller_id
      t.integer :property_id

      t.timestamps
    end
  end
end
