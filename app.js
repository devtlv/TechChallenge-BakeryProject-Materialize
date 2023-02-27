document.addEventListener('DOMContentLoaded', function () {
    var elemSidenav = document.querySelectorAll('.sidenav');
    var instancesSidenav = M.Sidenav.init(elemSidenav, {});
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        indicators: true,
        duration: 500,
    });
});