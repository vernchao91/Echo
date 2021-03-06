# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :username, length: { maximum: 20 }

  has_many :owned_servers,
    foreign_key: :owner_id,
    dependent: :destroy,
    class_name: :Server

  has_many :lists,
    foreign_key: :user_id,
    dependent: :destroy,
    class_name: :List

  has_many :joined_servers,
    through: :lists,
    source: :server

  has_many :started_conversations,
    foreign_key: :owner_id,
    dependent: :destroy,
    class_name: :Conversation

  has_many :received_conversations,
    foreign_key: :user_id,
    dependent: :destroy,
    class_name: :Conversation

  attr_reader :password
  after_initialize :ensure_session_token
  
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end