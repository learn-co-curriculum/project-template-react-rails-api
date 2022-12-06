class CreateManagers < ActiveRecord::Migration[6.1]
  def change
    create_table :managers do |t|
      t.string :first_name
      t.string :last_name
      t.string :position
      t.string :email
      t.string :password #hash and salt passwords later
      t.string :avatar

      t.timestamps
    end
  end
end
