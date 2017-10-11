document.addEventListener("DOMContentLoaded", function() {

  $(function(){
    $('.summon-cats').on('click', function(e){
      e.preventDefault();
      // var self = $(this)

      $.ajax({
        url: 'http://bitkittens.herokuapp.com',
        method: 'GET',
        // data: ,
        datatype: 'html'
      }).done(function(data){
        console.log(data);
      })
    })
  })

});
