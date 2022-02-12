class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.integer :property_id
      t.string :task_name
      t.datetime :last_completed
      t.integer :frequency
      t.string :status
      t.integer :service_category_id
      t.timestamps
    end
  end
end
