class RandomImageColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :random_events, :imageurl, :string
  end
end
