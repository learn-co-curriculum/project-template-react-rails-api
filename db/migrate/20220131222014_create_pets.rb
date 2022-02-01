class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|

      t.timestamps
    end
  end
end
