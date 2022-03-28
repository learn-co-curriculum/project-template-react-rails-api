class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :bio
      t.string :picture
      t.string :name
      t.string :github
      t.string :linkedin
      t.string :blog

      t.timestamps
    end
  end
end
