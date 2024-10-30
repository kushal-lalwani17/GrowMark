const slider = new Swiper('.slider-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true, 
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    breakpoints: {
        200:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

const testimonialSlider = new Swiper('.testimonial-slider-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',  
    speed: 400,
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },
    spaceBetween: 15,
    on: {
        init: function () {
            const activeSlide = this.slides[this.activeIndex];
            if (activeSlide) activeSlide.classList.add('active');
        },
        slideChange: function () {
            this.slides.forEach(slide => slide.classList.remove('active'));
            const activeSlide = this.slides[this.activeIndex];
            if (activeSlide) activeSlide.classList.add('active');
        },
    },
});









const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-custom-next',
        prevEl: '.swiper-custom-prev',
    },
    breakpoints: {
        320:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {     
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {     
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {   
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});


function toggleNavbar(){
    const collapsedNav = document.getElementById('collapsed-nav');
    collapsedNav.style.display = collapsedNav.style.display === 'none' ? 'block' : 'none';

    if (collapsedNav.classList.contains('slide-up')){
        collapsedNav.classList.remove('slide-up')
        collapsedNav.classList.add('slide-down')
    }
    if (collapsedNav.classList.contains('slide-down')){
        collapsedNav.classList.remove('slide-down')
        collapsedNav.classList.add('slide-up')
    }
    else{
        collapsedNav.classList.add('slide-down')

    }
    // document.getElementById('collapsed-nav').style.display = 'none';

}

function dropdownCollapsed(){
    const dropdown = document.getElementById('pages-dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block': 'none';
    // console.log(dropdown.style.display);
    
}


window.onscroll = function () {
    scroll();
};


function scroll() {
    const nav = document.getElementById("large-nav");
    const navbar = document.getElementById("navbar");
    

    if (document.documentElement.scrollTop < 250) {
       
        nav.style.position = "initial";
        navbar.style.position = "initial";
        
        if (nav.classList.contains('navbar-animation')) {
            nav.classList.remove('navbar-animation');
        }
    } else {
        nav.style.position = "fixed";
        
        nav.style.top = "0px";
        if (!nav.classList.contains('navbar-animation')) {
            nav.classList.add('navbar-animation');
        }
    }

    if(window.innerWidth < 1024){
        const nav = document.getElementById("nav");
        if (document.documentElement.scrollTop < 250) {
            nav.style.position = "initial";
            
            if (nav.classList.contains('navbar-animation')) {
                nav.classList.remove('navbar-animation');
            }
        } else {
            nav.style.position = "fixed";
            nav.style.top = "0px";
            
            if (!nav.classList.contains('navbar-animation')) {
                nav.classList.add('navbar-animation');
            }
        }
    }
    
    
}
function displayModel(){
    model=document.getElementById("model");
    if (model.style.display === "none"){
      model.style.display="flex";
    }else{
        model.style.display="none";
  
    }
  }

  function dropDD(){
    const dropItem = document.getElementById('drop-item')
    dropItem.style.display = 'block'
  }

  function closeDD(){
    const dropItem = document.getElementById('drop-item')
    dropItem.style.display = 'none'
  }