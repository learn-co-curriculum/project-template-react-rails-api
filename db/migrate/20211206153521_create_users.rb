class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.belongs_to :avatar
      t.integer :points, :array => true
      t.timestamps
    end
  end
end
