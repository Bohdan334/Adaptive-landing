$(document).ready(function () {
  $(".header__toggle").click(function (event) {
    $(".header__toggle, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

/* smooth scroll */
$("[data-scroll]").on("click", function (event) {
  event.preventDefault();
  $(".header__toggle, .header__menu").removeClass("active");
  $("body").removeClass("lock");

  let blockId = $(this).data("scroll");
  let blockOffset = $(blockId).offset().top;

  $("html, body").animate(
    {
      scrollTop: blockOffset,
    },
    500
  );
});
