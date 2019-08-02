$('.owl-carousel').owlCarousel({
    merge:true,
    loop:true,
    margin:100,
    lazyLoad:true,
    center:true,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    nav:false,
    smartSpeed:500,
        responsive:{
            0:{
        items:1,
        stagePadding: 60
    },
    600:{
        items:1,
        stagePadding: 100
    },
    1000:{
        items:1,
        stagePadding: 200
    },
    1200:{
        items:1,
        stagePadding: 250
    },
    1400:{
        items:1,
        stagePadding: 300
    },
    1600:{
        items:1,
        stagePadding: 350
    },
    1800:{
        items:1,
        stagePadding: 400
    }
    }
})


$('.next').click(function(){
    $('.owl-carousel').trigger('next.owl.carousel')
})


$('.pre').click(function(){
    $('.owl-carousel').trigger('prev.owl.carousel')
})