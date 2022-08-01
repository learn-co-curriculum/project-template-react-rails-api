class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email_address
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.belongs_to :user_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
