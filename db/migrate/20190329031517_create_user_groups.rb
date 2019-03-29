class CreateUserGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :user_groups do |t|
      t.string		 :user_id, null: false, foreign_key: true
      t.string		 :group_id, null: false, foreign_key: true
      t.timestamps

	belongs_to :group
	belongs_to :user
    end
  end
end
