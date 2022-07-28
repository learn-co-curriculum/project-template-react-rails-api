class CreateSportsTypes < ActiveRecord::Migration[6.1]
  def change
    create_table :sports_types do |t|
      t.string :sports_type
      t.string :image

      t.timestamps
    end
  end
end
