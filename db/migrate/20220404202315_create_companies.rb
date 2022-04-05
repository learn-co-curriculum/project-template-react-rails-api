class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :sector
      t.string :performance_over_time

      t.timestamps
    end
  end
end
