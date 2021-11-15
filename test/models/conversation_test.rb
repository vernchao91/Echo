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
require 'test_helper'

class ConversationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
