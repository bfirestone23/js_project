class RemoveUserIdFromConcerts < ActiveRecord::Migration[6.1]
  def change
    remove_column :concerts, :user_id
  end
end
