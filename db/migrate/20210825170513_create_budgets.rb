class CreateBudgets < ActiveRecord::Migration[6.1]
  def change
    create_table :budgets do |t|
      t.float :target_budget
      t.float :total_actual
      t.float :total_paid
      t.belongs_to :event, foreign_key: true, null: false 
      t.belongs_to :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
