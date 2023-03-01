$('#owl-1').owlCarousel({
    loop: true,
    margin: 30,
    padding: 0,
    nav: true,
    autoHeight: true,
    dots: false,
    navText: ['<i class="fa-solid bg-white rounded-circle fa-circle-arrow-left"></i>', '<i class="fa-solid bg-white rounded-circle fa-circle-arrow-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

$('#owl-3').owlCarousel({
    loop: true,
    margin: 10,
    padding: 0,
    nav: true,
    autoHeight: true,
    dots: false,
    navText: ['<i class="fa-solid bg-white rounded-circle fa-circle-arrow-left"></i>', '<i class="fa-solid bg-white rounded-circle fa-circle-arrow-right"></i>'],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        800: {
            items: 3
        },
        1200: {
            items: 3
        },
        1300: {
            items: 4
        },
        1400: {
            items: 5
        },
    }
})

$('#owl-4').owlCarousel({
    loop: true,
    margin: 30,
    padding: 0,
    nav: true,
    autoHeight: true,
    dots: false,
    navText: ['<i class="fa-solid bg-white rounded-circle fa-circle-arrow-left"></i>', '<i class="fa-solid bg-white rounded-circle fa-circle-arrow-right"></i>'],
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        1400: {
            items: 5
        },
    }
})

$('#owl-2').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:0,
    nav:false,
    items:1,
    lazyLoad: true,
  responsive:{
        0:{
            items:1,
            stagePadding: 10
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