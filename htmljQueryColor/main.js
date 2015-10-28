$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var words = $("p").text().split(" ");
  $("p").empty();
  $.each(words, function(i, text) {
    $("p").append($("<span>").text(text + " "));
  });

  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!
  function randomColor() {

    $('span').each(function() {
      r = Math.floor(Math.random() * (256));
      g = Math.floor(Math.random() * (256));
      b = Math.floor(Math.random() * (256));
      $(this).css('color', 'rgb(' + r + ',' + g + ',' + b + ')');

    })

  };
  randomColor();
  var t = setInterval(randomColor, 1000);

});


// $(function() {
//   $("p").each(function(index, element) {
//     var $el = $(element);
//     var words = $el.text().split('');
//     $el.html('');
//     for (var i = 0; i < words.length; i++) {
//       var newSpan = $('<span>').text(words[i] + '');
//       $el.append(newSpan)
//     }
//   });

//   $('span').each(function() {
//     var that = this;
//     setInterval(function() {
//       var r = Math.floor(Math.random() * (256));
//       var g = Math.floor(Math.random() * (256));
//       var b = Math.floor(Math.random() * (256));
//       $(that).css('color', 'rgb(' + r + ',' + g + ',' + b + ')');
//     }, Math.random() * 1000);
//   });
// })
