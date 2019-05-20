$( document ).ready(() => {
  // TOGGLE HAMBURGER & COLLAPSE NAV
  $('.nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.menu-left').toggleClass('collapse');
  });
  // REMOVE X & COLLAPSE NAV ON ON CLICK
  $('.menu-left a').on('click', function() {
    $('.nav-toggle').removeClass('open');
    $('.menu-left').removeClass('collapse');
  });

  $('.streams').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  setTimeout(() => {
    const [btnNext] = document.getElementById("section9").getElementsByClassName("slick-next");
    btnNext.innerText = "";
    const [btnPrev] = document.getElementById("section9").getElementsByClassName("slick-prev");
    btnPrev.innerText = "";
  }, 100);
})

focusMethod = function getFocus() {
  document.getElementById("myTextField").focus();
}
