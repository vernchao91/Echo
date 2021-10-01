# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: { scope: :owner_id }

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

  has_many :lists,
    foreign_key: :server_id,
    dependent: :destroy,
    class_name: :List

  has_many :joined_users,
    through: :lists,
    source: :user

  #after_initialize :create_welcome_channel
  #has_many :channels,
  #  dependent: :destroy
  
  #has_many :messages,
  #  through: :channels,
  #  source: :messages
  
  #def create_welcome_channel
  #  Channel.new(
    #    name: "general",
    #    server_id: :self.id
    #  ).save
    # end
    
    
end
