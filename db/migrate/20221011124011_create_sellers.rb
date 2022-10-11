class CreateSellers < ActiveRecord::Migration[6.1]
  def change
    create_table :sellers do |t|
      t.string :name
      t.string :property_name

      t.timestamps
    end
  end
end
