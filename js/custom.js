//    Template Name: Athena Fashion
//    Version: 1.0.0
//    Author: Webstrot

/************ TABLE OF CONTENTS ***************
// Preloader
// Toggle sub menus
// Expand sidebar
// Close sidebar with close button
// ✅ Close sidebar when clicking outside
// top toggle btn with top filter bar 
// cart page  increase decrease btn js start
// custom heart js start 
// thumbnails slider js start 
//  left sidebar js start
// banner two js start 
// banner three js start 
// shop category slider section js start 
// our Best Team  section js start 
// newArivalSliderSec  section js start 
// testimonails four js start 
// trending Product Slider js
// patner section js start
// latest news two blog js start 
// Open Cart
// Handle quantity buttons
//  sidebar js start 
// menu fixed js start 
// customerReviewSlider js start 
// Deals  Slider js
// trending season Slider js start
// News arival  Slider js
// latest news blog js start 
// rating star js start 
// password hide and show js start 


 * **********************************************/


  // Preloader
  window.addEventListener("load", function () {
      const preloader = document.getElementById("preloader");

      // Optional fade-out effect
      preloader.style.opacity = "0";
      preloader.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
          preloader.style.display = "none";
      }, 500); // match transition timing
  });




$(document).ready(function () {
  // Toggle sub menus
  $('.sub-btn').on ('click', function (e) {
    e.stopPropagation(); // prevent this click from closing the sidebar
    $(this).next('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  // Expand sidebar
  $('.menu-btn').on ('click', function (e) {
    e.stopPropagation(); // prevent this click from closing the sidebar
    $('.side-bar').addClass('active');
    $('.menu-btn').css("visibility", "visible");
  });

  // Close sidebar with close button
  $('.close-btn').on ('click', function () {
    $('.side-bar').removeClass('active');
    $('.menu-btn').css("visibility", "visible");
  });

  // ✅ Close sidebar when clicking outside
  $(document).on ('click', function (e) {
    // if click is not inside sidebar or on menu button
    if (!$(e.target).closest('.side-bar, .menu-btn').length) {
      $('.side-bar').removeClass('active');
      $('.menu-btn').css("visibility", "visible");
    }
  });
});




$('.bxslider.text').bxSlider({
  mode: 'vertical',
  pager: false,
  controls: false,
  infiniteLoop: true,
  auto: true,
  speed: 200,
  pause: 2000
});


// top toggle btn with top filter bar 

function myFunction() {
  const el = document.getElementById("myDIV");

  if (el.style.display === "none") {
    el.style.display = "block";
    el.style.transition = "opacity 0.5s ease, height 0.5s ease";
    el.style.height = "0px";
    el.style.opacity = "0";

    requestAnimationFrame(() => {
      el.style.height = "auto"; // adjust height to content size
      el.style.opacity = "1";
    });

  } else {
    el.style.transition = "opacity 0.5s ease, height 0.5s ease";
    el.style.height = "0px";
    el.style.opacity = "0";

    // Wait for the transition to complete before hiding
    setTimeout(() => {
      el.style.display = "none";
    }, 500); // Match the transition time
  }
}



// cart page  increase decrease btn js start

function increaseValue(button, limit) {
  const numberInput = button.parentElement.querySelector('.number');
  var value = parseInt(numberInput.innerHTML, 10);
  if (isNaN(value)) value = 0;
  if (limit && value >= limit) return;
  numberInput.innerHTML = value + 1;
}

function decreaseValue(button) {
  const numberInput = button.parentElement.querySelector('.number');
  var value = parseInt(numberInput.innerHTML, 10);
  if (isNaN(value)) value = 0;
  if (value < 1) return;
  numberInput.innerHTML = value - 1;
}


//  custom heart js start 
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.likeBtn').forEach(button => {
    const key = button.dataset.like;

    // Load state from localStorage
    if (localStorage.getItem(`liked-${key}`) === 'true') {
      button.classList.add('liked');
    }

    button.addEventListener('click', () => {
      button.classList.toggle('liked');
      const liked = button.classList.contains('liked');
      localStorage.setItem(`liked-${key}`, liked);
    });
  });
});



// thumbnails slider js start 

const thumbs = document.querySelectorAll(".thumb");
const slider = document.querySelector(".image-slider");
let currentIndex = 0;

function changeImage(element, index) {
  // Update active thumbnail
  thumbs.forEach(t => t.classList.remove("active"));
  element.classList.add("active");

  // Slide to correct image
  slider.style.transform = `translateX(-${index * 100}%)`;

  currentIndex = index;
}


//  left sidebar js start  //

const sidebar = document.getElementById("LeftSidebarBox");

const toggleSidebar = () => {
  sidebar.classList.toggle("active");
};

const closeSidebar = () => {
  sidebar.classList.remove("active");
};



// banner two js start 
$(document).ready(function () {
  $('.bannerTwoSlider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  $(".bannerTwoSlider .owl-prev").html(
    '<svg fill="none" viewBox="0 0 36 28"><path fill="#F8F1E9" d="M2 14L14 2 2 14zm0 0l12 12L2 14zm0 0h21H2zm32 0h-5 5z"/><path stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M2 14L14 2M2 14l12 12M2 14h21m11 0h-5"/></svg>'
  );
  $(".bannerTwoSlider .owl-next").html(
    '<svg fill="none" viewBox="0 0 36 28"><path fill="#F8F1E9" d="M34 14L22 2l12 12zm0 0L22 26l12-12zm0 0H13h21zM2 14h5-5z"/><path stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M34 14L22 2m12 12L22 26m12-12H13M2 14h5"/></svg>'
  );
});


// banner three js start 
$(document).ready(function () {
  $('.bannerThreeSlider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  $(".bannerThreeSlider .owl-prev").html(
    '<svg fill="none" viewBox="0 0 36 28"><path fill="#F8F1E9" d="M2 14L14 2 2 14zm0 0l12 12L2 14zm0 0h21H2zm32 0h-5 5z"/><path stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M2 14L14 2M2 14l12 12M2 14h21m11 0h-5"/></svg>'
  );
  $(".bannerThreeSlider .owl-next").html(
    '<svg fill="none" viewBox="0 0 36 28"><path fill="#F8F1E9" d="M34 14L22 2l12 12zm0 0L22 26l12-12zm0 0H13h21zM2 14h5-5z"/><path stroke="#704F38" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M34 14L22 2m12 12L22 26m12-12H13M2 14h5"/></svg>'
  );
});

// banner three js start 
$(document).ready(function () {
  $('.bannerFourSlider .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })
  $(".bannerFourSlider .owl-prev").html(
    '<svg fill="none" viewBox="0 0 52 40"><path stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M2 20L20 2M2 20l18 18M2 20h31.5M50 20h-7.5"/></svg>'
  );
  $(".bannerFourSlider .owl-next").html(
    '<svg fill="none" viewBox="0 0 36 28"><path fill="#F8F1E9" d="M34 14L22 2l12 12zm0 0L22 26l12-12zm0 0H13h21zM2 14h5-5z"/><path stroke="#949494" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M34 14L22 2m12 12L22 26m12-12H13M2 14h5"/></svg>'
  );
});

// shop category slider section js start 
$('.shopCategorySlider .owl-carousel').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
// shop category slider section js end

// our Best Team  section js start 
$(document).ready(function () {
  $(".ourBestTeamInfo .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
  $(".ourBestTeamInfo .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".ourBestTeamInfo .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});


// newArivalSliderSec  section js start 
$(document).ready(function () {
  $(".newArivalSliderBox .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.5,
      },
    },
  });
  $(".newArivalSliderBox .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".newArivalSliderBox .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});


// testimonails four js start 
$('.testimonialsFourSlider .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  center: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})


$('.athenaFashionBlogGroupSlider .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

// trending Product Slider js
$(document).ready(function () {
  $(".trendingProductSliderBox .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.5,
      },
    },
  });
  $(".trendingProductSliderBox .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".trendingProductSliderBox .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});


// patner section js start
$(".patner_slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 1000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
// patner section js end

// latest news two blog js start 
$(document).ready(function () {
  $(".latestNewsCardTwo .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
  $(".latestNewsCardTwo .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".latestNewsCardTwo .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});
// latest news two blog js end


// cart sidebar js start 
// Open Cart
document.addEventListener('DOMContentLoaded', () => {
  const cartBtn = document.querySelector('.cart-icon-btn');
  const closeCartBtn = document.querySelector('.close-cart');
  const cartSidebar = document.querySelector('.cart-sidebar');

  if (cartBtn && cartSidebar) {
    // Open Cart
    cartBtn.addEventListener('click', () => {
      cartSidebar.classList.add('active');
    });
  }

  if (closeCartBtn && cartSidebar) {
    // Close Cart
    closeCartBtn.addEventListener('click', () => {
      cartSidebar.classList.remove('active');
    });
  }
});


// Handle quantity buttons
document.querySelectorAll('.cart-item').forEach(item => {
  const minusBtn = item.querySelector('.quantity button:first-child');
  const plusBtn = item.querySelector('.quantity button:last-child');
  const quantityDisplay = item.querySelector('.quantity span');

  minusBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityDisplay.textContent);
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  plusBtn.addEventListener('click', () => {
    let quantity = parseInt(quantityDisplay.textContent);
    quantity++;
    quantityDisplay.textContent = quantity;
  });
});


//  sidebar js start 
(function () {
  // Toggle menu
  $('.hamburger-menu').on('click', function (e) {
    e.stopPropagation(); // Prevent click from bubbling to document
    $('.bar').toggleClass('animate');
    $('.mobile-menu').toggleClass('active');
    return false;
  });

  // Toggle submenu
  $('.has-children').on('click', function (e) {
    e.stopPropagation();
    $(this).children('ul').slideToggle('slow', 'swing');
    $(this).find('.icon-arrow').toggleClass('open');
  });

  // Close menu when clicking outside
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.mobile-menu, .hamburger-menu').length) {
      $('.mobile-menu').removeClass('active');
      $('.bar').removeClass('animate');
      $('.has-children ul').slideUp('slow');
      $('.icon-arrow').removeClass('open');
    }
  });
})();



// menu fixed js start 
$(window).scroll(function () {
  var window_top = $(window).scrollTop() + 1;
  if (window_top > 100) {
    $('.menu-item-wrapper').addClass('menu-fixed animated fadeInDown');
  } else {
    $('.menu-item-wrapper').removeClass('menu-fixed animated fadeInDown');
  }
});
// menu fixed js end



$(document).ready(function () {
  $(".imgSliderBox .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    center: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      991: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  });
  $(".imgSliderBox .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".imgSliderBox .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});


$(".featuredCollectionSliderBox .owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".latestBlogThreeSlider .owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

// customerReviewSlider js start 

$('.customerReviewSlider .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})



// Deals  Slider js
$(document).ready(function () {
  $(".DealsSliderBox .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.5,
      },
    },
  });
  $(".DealsSliderBox .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".DealsSliderBox .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});




// trending season Slider js start
$(document).ready(function () {
  $(".trendingSeasonSlider .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.5,
      },
    },
  });
  $(".trendingSeasonSlider .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".trendingSeasonSlider .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});
// trending season Slider js end


// News arival  Slider js
$(document).ready(function () {
  $(".newArivalSliderBox .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.5,
      },
    },
  });
  $(".newArivalSliderBox .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".newArivalSliderBox .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});

$(document).ready(function () {
  $(".clientReviewsSliderBox .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
  $(".clientReviewsSliderBox .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".clientReviewsSliderBox .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});


// News arival  Slider js

$(".shopByCategorySliderBox .owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});



// latest news blog js start 
$(document).ready(function () {
  $(".latestNewsCard .owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".latestNewsCard .owl-prev").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M20 6.5a.726.726 0 00-.21-.51.71.71 0 00-.504-.212H2.44l4.495-4.544A.723.723 0 007.09.446a.724.724 0 00-.387-.391.708.708 0 00-.78.157L.21 5.989a.723.723 0 00-.155.788.723.723 0 00.155.234l5.714 5.777a.715.715 0 00.78.157.715.715 0 00.386-.391.73.73 0 00-.155-.788L2.44 7.222h16.846a.71.71 0 00.505-.211A.726.726 0 0020 6.5z" clip-rule="evenodd"/></svg>'
  );
  $(".latestNewsCard .owl-next").html(
    '<svg fill="none" viewBox="0 0 20 13"><path fill="#704F38" fill-rule="evenodd" d="M0 6.5c0-.192.075-.375.21-.51a.71.71 0 01.504-.212H17.56l-4.495-4.544a.723.723 0 01-.155-.788.723.723 0 01.387-.391.708.708 0 01.78.157l5.713 5.777a.723.723 0 01.155.788.723.723 0 01-.155.234l-5.714 5.777a.714.714 0 01-.78.157.714.714 0 01-.386-.391.73.73 0 01.155-.788l4.495-4.544H.714a.71.71 0 01-.505-.211A.726.726 0 010 6.5z" clip-rule="evenodd"/></svg>'
  );
});
// latest news blog js end 



// +++++++++++++++++++ countdwon js start ++++++++++++++++++++++++++++++

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  function startCountdown(el) {
    const targetDate = new Date(el.getAttribute("data-date")).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime(),
        distance = targetDate - now;

      if (distance < 0) {
        el.innerHTML = "<h2>Time's up!</h2>";
        clearInterval(timer);
        return;
      }

      el.querySelector(".days").innerText = Math.floor(distance / day);
      el.querySelector(".hours").innerText = Math.floor((distance % day) / hour);
      el.querySelector(".minutes").innerText = Math.floor((distance % hour) / minute);
      el.querySelector(".seconds").innerText = Math.floor((distance % minute) / second);
    }, 1000);
  }

  document.querySelectorAll(".countdown").forEach(startCountdown);
})();



$(".searchBar a").on("click", function () {
  $(".overlay").addClass("is-on");
});

$("#close").on("click", function () {
  $(".overlay").removeClass("is-on");
});



// rating star js start 

const stars = document.querySelectorAll('.star');
let rating = 0;

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    rating = index + 1;
    updateStars();
  });

  star.addEventListener('mouseover', () => {
    highlightStars(index + 1);
  });

  star.addEventListener('mouseleave', () => {
    updateStars();
  });
});

function updateStars() {
  stars.forEach((star, i) => {
    star.classList.toggle('active', i < rating);
  });
}

function highlightStars(num) {
  stars.forEach((star, i) => {
    star.style.color = i < num ? '#ffc107' : '#ccc';
  });
}





// password hide and show js start 

document.addEventListener("DOMContentLoaded", function () {
  let eye_icon = document.getElementById("eye_icon");
  let password = document.getElementById("password");

  if (eye_icon && password) {
    eye_icon.onclick = function () {
      if (password.type === "password") {
        password.type = "text";
        eye_icon.src = "images/slash_eye.png";
      } else {
        password.type = "password";
        eye_icon.src = "images/open_eye.png";
      }
    };
  }
});

// form validation js
   document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("subscribeForm");
            // Exit if form does not exist on this page
            if (!form) return;
            const input = form.querySelector(".form-control");
            const errorMessage = form.querySelector(".error-message");
            // Optional extra safety
            if (!input || !errorMessage) return;
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                const email = input.value.trim();
                const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!validEmail.test(email)) {
                    errorMessage.textContent = "Please enter a valid email address.";
                    input.classList.add("error");
                    return;
                }
                // Clear error
                errorMessage.textContent = "";
                input.classList.remove("error");
                console.log("Subscribed:", email);
                input.value = "";
            });
        });
