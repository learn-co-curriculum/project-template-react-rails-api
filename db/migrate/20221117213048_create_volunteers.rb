class CreateVolunteers < ActiveRecord::Migration[6.1]
  def change
    create_table :volunteers do |t|
      t.string :name
      t.string :age
      t.string :email
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
