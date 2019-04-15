if @new_message.present?
  json.array! @new_message do |message|
    json.content      message.content
    json.image        message.image.url
    json.user_name    message.user.name
    json.created_at   message.created_at.strftime("%y/%m/%d %H:%M")
    json.id           message.id
  end
end

