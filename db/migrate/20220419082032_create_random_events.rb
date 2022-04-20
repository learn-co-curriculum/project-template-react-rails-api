class CreateRandomEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :random_events do |t|
      t.string :situation
      t.string :prompt_1
      t.string :prompt_2
      t.string :effect_1
      t.string :effect_2

      t.timestamps
    end
  end
end
