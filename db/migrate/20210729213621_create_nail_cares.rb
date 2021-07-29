class CreateNailCares < ActiveRecord::Migration[6.1]
  def change
    create_table :nail_cares do |t|
      t.string :name

      t.timestamps
    end
  end
end
