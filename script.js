document.addEventListener('DOMContentLoaded', () => {

    /*--------------------------------------------------------------
    Header nav fix scroll
    --------------------------------------------------------------*/
    
    var header = document.querySelector('header');

    window.addEventListener('scroll', function()  {

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }

    });


    /*--------------------------------------------------------------
    Scroll animations
    --------------------------------------------------------------*/

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });

    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

});