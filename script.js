 document.addEventListener('DOMContentLoaded', function () {
        var navbar = document.querySelector('nav.navbar');
        var textBarSection = document.querySelector('.text_bar');

        window.addEventListener('scroll', function () {
            var textBarSectionTop = textBarSection.getBoundingClientRect().top + window.scrollY;

            if (window.scrollY >= textBarSectionTop) {
                navbar.classList.add('fixed-top');
            } else {
                navbar.classList.remove('fixed-top');
            }
        });
    });

