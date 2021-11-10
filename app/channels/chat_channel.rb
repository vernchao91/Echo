class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for "chat_channel"
  end

  def speak(data)
    message = Message.new(body: data['message']['body'], author_id: data['message']['authorId'], messageable_type: data['message']['messageableType'], messageable_id: data['message']['messageableId'])
    puts "--------------------------"
    puts message
    if message.save
      socket = {
        id: message.id,
        body: message.body,
        author_id: message.author_id,
        messageable_type: message.messageable_type,
        messageable_id: message.messageable_id
      }
      ChatChannel.broadcast_to('chat_channel', socket)
    else
      puts "failed"
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
