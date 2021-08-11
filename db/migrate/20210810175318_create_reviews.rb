class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :book_id
      t.integer :rating
      t.string :content

      t.timestamps
    end
  end
end
