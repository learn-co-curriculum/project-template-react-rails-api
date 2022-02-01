class CreateFosters < ActiveRecord::Migration[6.1]
  def change
    create_table :fosters do |t|

      t.timestamps
    end
  end
end
