class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.integer :like_id
      t.string :message

      t.timestamps
    end
  end
end
