class CreateProviders < ActiveRecord::Migration[6.1]
  def change
    create_table :providers do |t|
      t.string :name
      t.string :specialty
      t.string :location

      t.timestamps
    end
  end
end
