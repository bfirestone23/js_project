class AddFormattedDateToConcerts < ActiveRecord::Migration[6.1]
  def change
    add_column :concerts, :date_formatted, :string
  end
end
