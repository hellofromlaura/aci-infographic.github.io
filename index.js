//animation trigger 
jQuery(function($) {

  const doAnimations = function() {
    const offset = $(window).scrollTop() + $(window).height();
    const $animatables = $('.animatable');

    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    $animatables.each(function(i) {
      $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });
  };

  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});

// Slider
var SlideIndex = 0;
let isMobile = false;

var x = window.matchMedia("(max-width: 577px)");
showSlides(SlideIndex);
myFunction(x);
x.addEventListener("change", myFunction );
x.addEventListener("change", function(){ location.reload(); });

function plusSlides(plus) {
    showSlides(plus);
}

function showSlides(n) {
    var slides  = document.getElementsByClassName("mySlides");
    if (isMobile) {
      if (SlideIndex == 8 && n == 1) {
        SlideIndex = 0
        console.log('Back to first');
        console.log('Slide index ', SlideIndex);
      }
      else if (SlideIndex == 0 && n == -1) {
          SlideIndex = 8
          console.log('Back to first');
          console.log('Slide index ', SlideIndex);
      }
      else {
        SlideIndex = SlideIndex + n;
        console.log('Slide index ', SlideIndex);
        console.log('Just Slide');
      }
      
      if(SlideIndex >= 0 && SlideIndex < 3) {       
          slides[0].style.display = "block";
          slides[1].style.display = "none";
          slides[2].style.display = "none";
      }
      if(SlideIndex >= 3 && SlideIndex < 6) {        
          slides[1].style.display = "block";
          slides[0].style.display = "none";
          slides[2].style.display = "none";
      }
      if(SlideIndex >= 6 && SlideIndex <= 8) {        
          slides[2].style.display = "block";
          slides[1].style.display = "none";
          slides[0].style.display = "none";
      }
    } 
    if (!isMobile) {
        SlideIndex = SlideIndex + n;
        if ((SlideIndex) >= slides.length) {
            SlideIndex = 0
        }
        if ((SlideIndex) < 0) {
            SlideIndex = slides.length - 1
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[SlideIndex].style.display = "block";
    }
}

function myFunction(x) {
    if (x.matches) { 
      isMobile = true;
    } else {
      isMobile = false;
    }
  }

  var glider = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    rewind: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        breakpoint: 577,
        draggable: true,
        rewind: true,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          duration: 0.25
        }
      }
    ]
  });