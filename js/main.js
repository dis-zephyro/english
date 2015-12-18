$('.hotel-images').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1
});

$('.hotel-nav.prev').click(function(){
    $('.hotel-images').slick('slickPrev');
});

$('.hotel-nav.next').click(function(){
    $('.hotel-images').slick('slickNext');
});


$('.photo-images').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1
});

$('.photo-nav.prev').click(function(){
    $('.photo-images').slick('slickPrev');
});

$('.photo-nav.next').click(function(){
    $('.photo-images').slick('slickNext');
});


$('.victory-slider').slick({
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.victory-nav.prev').click(function(){
    $('.victory-slider').slick('slickPrev');
});

$('.victory-nav.next').click(function(){
    $('.victory-slider').slick('slickNext');
});


$(".btn-modal").fancybox({
    'padding'    : 0,
    'tpl'        : {
        closeBtn : '<a title="Close" class="btn_close" href="javascript:;"></a>'
    }
});


$(document).ready(function() {

    $('.btn-submit').click(function() {

        $('body').find('form:not(this)').children('div').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)
        var answer = checkForm($(this).closest('form').get(0)); //ответ от валидатора
        if(answer != false)
        {
            var $form = $(this).closest('form'),
                name    =     $('input[name="name"]', $form).val(),
                phone   =     $('input[name="phone"]', $form).val(),
                email   =     $('input[name="email"]', $form).val();
            console.log(name, phone, email);
            $.ajax({
                type: "POST",
                url: "form-handler.php",
                data: {name: name, phone: phone, email:email}
            }).done(function(msg) {
                $('form').find('input[type=text], textarea').val('');
                console.log('удачно');
                document.location.href = "http://fantom159.ru/done.html";
            });
        }
    });

});