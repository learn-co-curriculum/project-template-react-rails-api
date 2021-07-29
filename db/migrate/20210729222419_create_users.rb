class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest

      t.integer :role_id
      t.string :role_type

      t.timestamps
    end

    add_index :users, [:role_type, :role_id]
  end
end
