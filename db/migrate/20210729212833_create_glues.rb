class CreateGlues < ActiveRecord::Migration[6.1]
  def change
    create_table :glues do |t|
      t.string :name

      t.timestamps
    end
  end
end
