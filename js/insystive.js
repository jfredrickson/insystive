$(document).ready(function () {

  /* DEBUG */
  var currentImageIndex = 0;
  $('#debug .change-image').click(function (event) {
    var images = [
      ['R', 'images/shutterstock-134145785.jpg'],
      ['R', 'images/stock-photo-17596022-senior-couple-sitting-on-the-park-bench.jpg'],
      ['L', 'images/jumbotron-image2.jpg'],
      ['R', 'images/jumbotron-image3.jpg'],
      ['L', 'images/stock-photo-13869419-rear-view-of-senior-couple-walking-alone-on-tropical-beach.jpg'],
      ['L', 'images/stock-photo-19341740-senior-couple-sitting-by-water.jpg'],
      ['R', 'images/stock-photo-21440887-senior-couple-enjoying-their-golden-years.jpg'],
      ['R', 'images/stock-photo-6144317-senior-couple-on-cycle-ride.jpg'],
      ['L', 'images/708618_14284178.jpg']
    ];
    if (currentImageIndex === (images.length - 1)) {
      currentImageIndex = 0;
    } else {
      currentImageIndex++;
    }
    var selectedImage = images[currentImageIndex];
    $('body.home #background').css('background-image', 'url(' + selectedImage[1] + ')');
    var introWidth = $('body.home .intro').width();
    var containerWidth = $('.container').width();
    if (containerWidth > (introWidth * 2)) {
      if (selectedImage[0] === 'R') {
        $('body.home .intro').css('float', 'right');
      } else if (selectedImage[0] === 'L') {
        $('body.home .intro').css('float', 'left');
      }
    }
    event.preventDefault();
  });

  $('a.colorbox-video').colorbox({
    iframe: true,
    innerWidth: 640,
    innerHeight: 390
  });

  // Disable colorbox on mobile
  $(function () {
    $mobile_colorbox();
    $(window).resize(function () {
      $mobile_colorbox();
    });
  });
  $mobile_colorbox = function () {
    if ($(window).width() <= 767) {
      $('.colorbox').colorbox.remove();
    } else {
      $('.colorbox').colorbox({rel:'colorbox'});
    }
  };

});