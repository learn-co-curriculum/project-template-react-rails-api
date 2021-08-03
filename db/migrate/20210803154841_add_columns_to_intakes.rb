class AddColumnsToIntakes < ActiveRecord::Migration[6.1]
  def change
    change_table :intakes do |t|
      t.string :reason_for_visit
    end
  end
end
