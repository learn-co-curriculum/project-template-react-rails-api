class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :avatar_url
      t.string :full_name
      t.integer :age
      t.string :address
      t.integer :phone
      t.string :email
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
