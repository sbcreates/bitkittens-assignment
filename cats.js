document.addEventListener("DOMContentLoaded", function() {

  $(function(){
    $('.summon-cats').on('click', function(e){
      e.preventDefault();
      // var self = $(this)

      $.ajax({
        url: 'http://bitkittens.herokuapp.com/cats.json',
        method: 'GET',
        // data: ,
        datatype: 'json'
      }).done(function(data){
        console.log(data);
      })
    })
  })

});
