class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :firstName
      t.string :lastName
      t.string :password_digest
      t.string :role
      t.string :phone, null: true
      t.integer :applicant_id, null: true

      t.timestamps
    end
  end
end
