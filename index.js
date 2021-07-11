const pageDes = document.querySelector('.page-des');

window.addEventListener('scroll', function(){
    const page = window.pageYOffset;
    if (page > 121) {
        pageDes.innerHTML = `<img src="https://nasims.gov.ng/nasims-logo.webp" class="js-img alt="logo">`
        pageDes.classList.add('show-logo')
    }

    else {
        pageDes.classList.remove('show-logo')
        pageDes.innerHTML = `<a class="navbar-brand page-des" href="#">Fedral Ministry of Humanitarian Afaires, Disaster
        <br> Management and Social Development</a>`
    }
})
