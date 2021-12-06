class CreateOutfits < ActiveRecord::Migration[6.1]
  def change
    create_table :outfits do |t|
      t.string :name
      t.string :image
      t.string :bonus
      t.string :description

      t.timestamps
    end
  end
end
