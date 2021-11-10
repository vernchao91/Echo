# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
  validates :server_id, :user_id, presence: true
  validates :server_id, uniqueness: { scope: :user_id }
  #validates :user_id, uniqueness: { scope: :listable_id }

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
  belongs_to :server,
    primary_key: :id,
    foreign_key: :server_id,
    class_name: :Server

  #belongs_to :listable,
  #  polymorphic: true
end
