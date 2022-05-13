class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.boolean :admin, default: false
      t.string :image
      t.string :name
      t.integer :age
      t.boolean :emergency
      t.string :address
      t.boolean :nightOwl
      t.boolean :early
      t.timestamps
    end
  end
end
