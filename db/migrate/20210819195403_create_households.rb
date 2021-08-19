class CreateHouseholds < ActiveRecord::Migration[6.1]
  def change
    create_table :households do |t|
      t.string :last_name

      t.timestamps
    end
  end
end
