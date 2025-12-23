$('.voices__slick').slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 600,
    pauseOnHover: false,

    prevArrow: $('.voices__arrow-prev'),
    nextArrow: $('.voices__arrow-next'),

    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '74px',
    initialSlide: 1, // ★ 2番目を最初に表示（0始まり）

    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                arrows: false,
                centerPadding: '60px',
                initialSlide: 1 // ★ スマホでも2番目スタートにしたいなら入れる
            }

        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                arrows: false,
                centerPadding: '33px',
                initialSlide: 1 // ★ スマホでも2番目スタートにしたいなら入れる
            }

        }
    ]
});