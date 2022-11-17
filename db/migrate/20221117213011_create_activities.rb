class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :organization
      t.string :activity_name
      t.string :activity_description
      t.string :image

      t.timestamps
    end
  end
end
