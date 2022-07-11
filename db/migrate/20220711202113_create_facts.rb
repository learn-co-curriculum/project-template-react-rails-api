class CreateFacts < ActiveRecord::Migration[6.1]
  def change
    create_table :facts do |t|
      t.string :fact
      t.integer :user_id
      t.integer :movie_id

      t.timestamps
    end
  end
end
