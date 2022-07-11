class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :avatar_url
      t.string :full_name
      t.string :address

      t.timestamps
    end
  end
end
