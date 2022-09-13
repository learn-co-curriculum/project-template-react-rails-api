class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.boolean :vip
      t.integer :festival_id
      t.integer :user_id
      t.integer :quantity

      t.timestamps
    end
  end
end
