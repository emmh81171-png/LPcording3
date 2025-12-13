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
    centerPadding: '60px',

    initialSlide: 1, // ★ 2番目を最初に表示（0始まり）

    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerPadding: '40px',
                initialSlide: 1 // ★ スマホでも2番目スタートにしたいなら入れる
            }
        },
        {
            breakpoint: 390,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerPadding: '40px',
                initialSlide: 1 // ★ ここも同様
            }
        }
    ]
});