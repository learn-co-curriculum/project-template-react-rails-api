class CreateVenues < ActiveRecord::Migration[6.1]
  def change
    create_table :venues do |t|
      t.string :city
      t.string :name
      t.string :logo_url

      t.timestamps
    end
  end
end
