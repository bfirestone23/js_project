class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.text :content
      t.string :user
      t.bigint :concert_id
      t.timestamps
    end
  end
end
