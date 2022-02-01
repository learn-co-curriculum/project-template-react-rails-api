class CreateAdmins < ActiveRecord::Migration[6.1]
  def change
    create_table :admins do |t|
      t.string :first_name
      t.string :last_name
      t.string :type
      t.string :email
      t.string :phone

      t.timestamps
    end
  end
end
