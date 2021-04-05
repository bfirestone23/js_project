class AddDateToConcerts < ActiveRecord::Migration[6.1]
  def change
    add_column :concerts, :date, :date
  end
end
