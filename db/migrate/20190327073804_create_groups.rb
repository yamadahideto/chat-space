class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string 		:name, null: false
      t.timestamps

	 has_many: users, through: user_groups
	 has_many: messages
	 has_many: user_groups
	 end
  end
end
