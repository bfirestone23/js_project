class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.string :artist
      t.string :venue
      t.string :attendees
      t.string :highlights
      t.string :lowlights
      t.string :photo
      t.references :user

      t.timestamps
    end
  end
end
