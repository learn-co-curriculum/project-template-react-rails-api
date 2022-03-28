class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :image_url
      t.string :github
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
