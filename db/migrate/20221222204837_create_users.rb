class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :avatar
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
