$(document).ready(function () {
  $(".sidenav").sidenav();
  $(".slider").slider();
  $(".collapsible").collapsible();
  $(".modal").modal();
});
function animatePage() {
  gsap.fromTo(
    ".img1",
    1.2,
    { y: "-150%" },
    { y: "0%", ease: Power3.easeInOut }
  );
  gsap.fromTo(
    ".img2",
    1.2,
    { x: "200%" },
    { x: "0%", ease: Power3.easeInOut, delay: 1.2 }
  );
}
animatePage();
