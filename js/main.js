let multipleCardCarousel = document.querySelector("#products");
let scrollPosition = 0;
if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });
    let carouselWidth = $("#prodcar")[0].scrollWidth;
    let cardWidth = $("#products .carousel-item").width();
    $("#products .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - (cardWidth * 4)) {
            scrollPosition += cardWidth;
            $("#prodcar").animate({
                scrollLeft: scrollPosition
            },
                500
            );
        }
    });
    $("#products .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#prodcar").animate({
                scrollLeft: scrollPosition
            },
                500
            );
        }
    });
} else {
    $(multipleCardCarousel).addClass("slide");
}

let multipleCardCarousel1 = document.querySelector("#beauty");
let scrollPosition1 = 0;
if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel1, {
        interval: false,
    });
    let carouselWidth = $("#beautycar")[0].scrollWidth;
    let cardWidth = $("#beauty .carousel-item").width();
    $("#beauty .carousel-control-next").on("click", function () {
        if (scrollPosition1 < carouselWidth - (cardWidth * 4)) {
            scrollPosition1 += cardWidth;
            $("#beautycar").animate({
                scrollLeft: scrollPosition1
            },
                500
            );
        }
    });
    $("#beauty .carousel-control-prev").on("click", function () {
        if (scrollPosition1 > 0) {
            scrollPosition1 -= cardWidth;
            $("#beautycar").animate({
                scrollLeft: scrollPosition1
            },
                500
            );
        }
    });
} else {
    $(multipleCardCarousel1).addClass("slide");
}

// Set the date we're counting down to
let countDownDate = new Date("March 23, 2023 11:16:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    // console.log(distance);

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s " + ' Left';

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);