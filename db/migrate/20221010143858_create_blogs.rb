class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.integer :user_id
      t.string :title
      t.string :content
      t.string :category
      t.string :image_url

      t.timestamps
    end
  end
end
