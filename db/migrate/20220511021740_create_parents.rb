class CreateParents < ActiveRecord::Migration[6.1]
  def change
    create_table :parents do |t|
      t.string :image
      t.string :name
      t.string :kids
      t.integer :age
      t.boolean :emergency
      t.string :location
      t.boolean :nightOwl
      t.boolean :verified
      t.boolean :early

      t.timestamps
    end
  end
end
