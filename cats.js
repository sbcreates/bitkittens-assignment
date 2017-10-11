document.addEventListener("DOMContentLoaded", function() {
  var count = 0;

  $(function(){
    $('.summon-cats').on('click', function(e){
      e.preventDefault();

      $.ajax({
        url: 'http://bitkittens.herokuapp.com/cats.json',
        method: 'GET',
        datatype: 'json'
      }).done(function(data){
        if (count < data['cats'].length){
          var $img = $('<img>', {src: data['cats'][count]['photo'], alt: data['cats'][count]['name']});
          $('#cat' + (count + 1)).append($img);
          count += 1;
        } else {
          alert('Sorry, no more kittehs!');
        };
      })
    })
  })

});
