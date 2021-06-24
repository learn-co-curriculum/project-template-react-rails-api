class CreateProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :profiles do |t|
      t.integer :weight
      t.integer :desired_weight
      t.integer :bmi
      t.integer :exercise
      t.integer :therapy
      t.integer :user_id

      t.timestamps
    end
  end
end
