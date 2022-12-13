class CreateChefs < ActiveRecord::Migration[6.1]
  def change
    create_table :chefs do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :phone
      t.string :image
      t.string :cuisine
      t.string :last_job

      t.timestamps
    end
  end
end
