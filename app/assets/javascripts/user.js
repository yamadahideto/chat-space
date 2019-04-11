$().on('kyeUp',function(e){


  $.ajax({
    url:users,
    type:"get",
    data:'json',
    processData: false,
    contentType: false
  })
  .done(function(){})



});