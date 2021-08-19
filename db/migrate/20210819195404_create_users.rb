class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :email
      t.string :username
      t.string :password_digest
      t.boolean :is_parent
      t.belongs_to :household, null: false, foreign_key: true

      t.timestamps
    end
  end
end
