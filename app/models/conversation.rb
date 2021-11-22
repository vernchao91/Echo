# == Schema Information
#
# Table name: conversations
#
#  id         :bigint           not null, primary key
#  owner_id   :integer          not null
#  user_id    :integer          not null
#  pending    :boolean          default(TRUE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Conversation < ApplicationRecord
  validates :owner_id, :user_id, presence: true
  validates :owner_id, uniqueness: { scope: :user_id }

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
  
  has_many :messages,
    as: :messageable,
    dependent: :destroy

  #has_many :lists,
  #  as: :listable,
  #  dependent: :destroy 

  #has_many :joined_users,
  #  through: :lists,
  #  source: :user

  def friendlist_check
    
    
  end

end