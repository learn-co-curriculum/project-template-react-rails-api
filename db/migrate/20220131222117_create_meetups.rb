class CreateMeetups < ActiveRecord::Migration[6.1]
  def change
    create_table :meetups do |t|

      t.timestamps
    end
  end
end
