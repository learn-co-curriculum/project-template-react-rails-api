class AddLinkToConcerts < ActiveRecord::Migration[6.1]
  def change
    add_column :concerts, :link, :string
  end
end
