class CreateProviders < ActiveRecord::Migration[6.1]
  def change
    create_table :providers do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :location
      t.string :account_type
      t.timestamps
    end
  end
end
