class AddReviewToRestaurants < ActiveRecord::Migration[6.1]
  def change
    add_column :restaurants, :review, :string
  end
end
