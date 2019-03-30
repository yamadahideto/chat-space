class User < ApplicationRecord

	has_many :groups, through: user_groups
	has_many :messages
	has_many :user_groups
end
