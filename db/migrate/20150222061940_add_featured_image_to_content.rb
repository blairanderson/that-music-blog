class AddFeaturedImageToContent < ActiveRecord::Migration
  def change
    add_column :contents, :featured_image_id, :integer
  end
end
