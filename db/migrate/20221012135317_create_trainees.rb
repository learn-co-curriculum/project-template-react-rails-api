class CreateTrainees < ActiveRecord::Migration[6.1]
  def change
    create_table :trainees do |t|
      t.string :username
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
