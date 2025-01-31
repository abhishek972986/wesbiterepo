var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
  
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },

    autoplay: {
        delay: 2000, // Change slides every 2 seconds
        disableOnInteraction: false, // Continue autoplay after user interactions
    },
});



  // ------------------------------------------------------------------------------


  window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to(".marque", {
            transform: "translateX(-100%)",
            duration: 6,
            ease: "linear"
        });
        gsap.to(".marque img", {
           rotate: 180,
          
           
        });
    } else {
        gsap.to(".marque", {
            transform: "translateX(100%)",
            duration: 6,
            ease: "none"
        });
        gsap.to(".marque img", {
            rotate: 0,
            
            
             
         });
    }
}
);

let moosi = document.querySelector(".move");
moosi.addEventListener("mouseenter", function () {
    gsap.to(".marque", {
        x: 0,
        duration: 3,
        ease: "power3"
    });
});


// ---------------------------------------------------------------------------------------------------


let nav = gsap.timeline();
nav.from('.nav-upper', {
opacity :0,
duration :2,
y:-40,
stagger:0.5,

})

gsap.from('.head',{
y:60,
duration :3,
opacity:0,
stagger:1,
ease:'power2'
})

gsap.from('.head-info', {

    x:-100,
    duration :4,
opacity:0,
ease:'power3'

})


// -------------------------------------------------education gsap---


gsap.from('.left', {

    x:-100,
    duration :6,
opacity:0,
ease:'linear',
scrollTrigger : {
    trigger:'.page2',
scroller:'body',
start:"top 60%",
end:'top 0%',
scrub:2,
 
}

});




gsap.from('.right-bottom ', {

    y:100,
    duration :6,
opacity:0,
ease:'linear',
scrollTrigger : {
    trigger:'.page2',
scroller:'body',
start:"top 10%",
end:'top -10%',
scrub:4,
 
}

});



gsap.from('.clubs', {
    y:100,
    duration :8,
    scale:0,
opacity:0,
ease:'linear',
stagger:2,
scrollTrigger : {
    trigger:'.page3',
scroller:'body',
start:"top 30%",
end:'top -10%',
scrub:4,
 
}
})

gsap.from('.page4 .clubs-main', {
    y:-100,
    duration :8,
    
opacity:0,
ease:'power3',
stagger:2,
scrollTrigger : {
    trigger:'.page4',
scroller:'body',
start:"top 80%",
end:'top -10%',
scrub:4,
 
}
})

gsap.from('.teacher-cards', {
    y:100,
    duration :8,
    
opacity:0,
ease:'power3',
stagger:2,
scrollTrigger : {
    trigger:'.page4',
scroller:'body',
start:"top 30%",
end:'top -10%',
scrub:4,
 
}
})

let join = new gsap.timeline();
join.from('.joincard', {
    x:-100,
    duration :9,
    
opacity:0,
ease:'power3',
stagger:2,
scrollTrigger : {
    trigger:'.page5',
scroller:'body',
start:"top 40%",
end:'top 0%',
scrub:4,
 
}
})



gsap.from('.page6 .clubs-main', {
    x:-100,
    duration :8,
    
opacity:0,
ease:'power4',
stagger:2,
scrollTrigger : {
    trigger:'.page6',
scroller:'body',
start:"top 40%",
end:'top -10%',
scrub:4,
 
}
})



