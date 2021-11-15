class CreateConversations < ActiveRecord::Migration[5.2]
  def change
    create_table :conversations do |t|
      t.integer :owner_id, null: false
      t.integer :user_id, null: false
      t.boolean :pending, default: true, null: false
      t.timestamps
    end
    add_index :conversations, :owner_id
    add_index :conversations, :user_id
  end
end
