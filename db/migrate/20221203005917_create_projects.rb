class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :project_title
      t.datetime :start_date
      t.datetime :end_date
      t.string :goal
      t.string :steps
      t.belongs_to :manager
      t.belongs_to :employee

      t.timestamps
    end
  end
end
