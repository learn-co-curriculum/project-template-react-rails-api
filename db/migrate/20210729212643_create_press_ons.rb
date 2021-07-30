class CreatePressOns < ActiveRecord::Migration[6.1]
  def change
    create_table :press_ons do |t|
      t.string :name

      t.timestamps
    end
  end
end
