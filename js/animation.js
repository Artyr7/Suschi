// анимация добавления товара

$('.slider__item').click(function (e) {
   let butWrap = $(this).parents('.slider__item');
   butWrap.append('<div class="animtocart"></div>');
   $('.animtocart').css({
     'position': 'absolute',
     'background': 'var(--main-color-orahge)',
     'width': '25px',
     'height': '25px',
     'border-radius': '100px',
     'z-index': '9999999999',
     'left': e.pageX - 25,
     'top': e.pageY - 25,
 
   });
   var cart = $('.order-cart-wrapper').offset();
   $('.animtocart').animate({ top: cart.top + 'px', left: cart.left + 'px', width: 0, height: 0 }, 800, function () {
     $(this).remove();
   });
 });
 