class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.string :email
      t.string :photo
      t.string :location
      t.integer :age

      t.timestamps
    end
  end
end
