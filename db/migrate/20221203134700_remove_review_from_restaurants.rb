class RemoveReviewFromRestaurants < ActiveRecord::Migration[6.1]
  def change
    remove_column :restaurants, :review, :string
  end
end
