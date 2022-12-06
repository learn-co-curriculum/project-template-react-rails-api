class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.string :position
      t.string :email
      t.string :password_digest 
      t.string :avatar

      t.timestamps
    end
  end
end
