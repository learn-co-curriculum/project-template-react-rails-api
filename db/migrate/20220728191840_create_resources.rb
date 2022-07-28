class CreateResources < ActiveRecord::Migration[6.1]
  def change
    create_table :resources do |t|
      t.belongs_to :rec_center, null: false, foreign_key: true
      t.string :name
      t.belongs_to :sports_type, null: false, foreign_key: true

      t.timestamps
    end
  end
end
