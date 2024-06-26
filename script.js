// window.addEventListener('scroll', function() {
//     const header = document.getElementById('stickyHeader');
//     if (window.scrollY > 100 ) {
//         header.classList.add('sticky-header-visible');
//     } else {
//         header.classList.remove('sticky-header-visible');
//     }
// });
window.addEventListener('scroll', function() {
    var stickyHeader = document.getElementById('sticky-header');
    if (window.scrollY >= 2 * window.innerHeight) {
        stickyHeader.style.display = 'block';
    } else {
        stickyHeader.style.display = 'none';
    }
});
