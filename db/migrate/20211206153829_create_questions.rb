class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.text :prompt
      t.text :question
      t.string :answer

      t.timestamps
    end
  end
end
