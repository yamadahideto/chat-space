
$(function(){
  function buildHTML(message){
    var msg =	``
    if( message.content != null){
    msg = `<p class="chat-main-messages-box__text">${message.content}</p>`
    }
    var img =	``
    if(message.image != null){
    img = `<img class="lower-message__image" src="${message.image}">`
    }

    var html =
    `<div class="chat-main-messages-box">
      <div class="hat-main-messages-box__pper-info">
        ${message.user_name}
      </div>
      <div class="chat-main-messages-box__date">
        ${message.created_at}
      </div>
    </div>
    <div class="lower-message">`
      + msg + img +
    `</div>`;
    return html
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
      url:location.href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main-messages').append(html);
      $('#new_message')[0].reset();
      $('.btn').prop('disabled', false);
      $('.chat-main-messages').animate({scrollTop: 100000});
    })
    .fail(function(){
      alert('メッセージを入力してください')
    })
  })
});