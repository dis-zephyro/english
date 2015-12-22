$(document).ready(function() {
    if (YMaps.location.city != '') {
     //   $('.country span').html(YMaps.location.country);
     //   $('.region span').html(YMaps.location.region);
        $('span.city').html(' в г. ' + YMaps.location.city);
        console.log(YMaps.location);
    }
    else {

    }
});



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
    autoplay: false,
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


// ----- Маска ----------
jQuery(function($){
    $("input[name='phone']").mask("+7(999) 999-9999");
});



$(document).ready(function() {

    $('.btn-send').click(function() {

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
                document.location.href = "http://englishtolondon.ru/done.html";
            });
        }
    });

});


$('.topnav li a').click(function(){
    var str=$(this).attr('href');
    $.scrollTo(str, 500, {offset:-140 });
    return false;
});