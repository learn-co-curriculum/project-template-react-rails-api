class CreateTrivia < ActiveRecord::Migration[6.1]
  def change
    create_table :trivia do |t|
      t.string :trivia
      t.string :user_id
      t.string :movie_id

      t.timestamps
    end
  end
end
