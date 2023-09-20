function toggleCartStatus() {
  

   const cartWrapper = document.querySelector('.order-cart-wrapper');
   // const cartEmptyBadge1 = document.querySelector('.basket-up');
   // const cartEmptyBadge2 = document.querySelector('.basket-text');
   // const orderForm = document.querySelector('.card-title');
   // const orderForm1 = document.querySelector('.order-form-control');
   // const orderForm2 = document.querySelector('.order-btn');


   // const goBasket = document.querySelector('.go__basket');

    const cartFullprice = document.querySelector('.cart__fullprice');
    const cartFullpriceTitle = document.querySelector('.cart__fullprice-title');
	
    const fullText = document.querySelector('.fullprice-text');
    const fullPrice = document.querySelector('.fullprice-price');
    const valuta = document.querySelector('.valuta');
    const cartContentBtn = document.querySelector('.cart-content__btn');

   if (cartWrapper.children.length > 0) {
     
      // cartEmptyBadge1.classList.add('none');
      //  cartEmptyBadge1.innerText = '';
      //  cartEmptyBadge2.classList.add('none');
      //   cartEmptyBadge2.innerHTML = '';
      // orderForm.classList.remove('none');
      // orderForm1.classList.remove('none');
      // orderForm2.classList.remove('none');

      // cartFullprice.classList.add('www');
      // cartFullprice.innerText = 'Итого:';

      // cartFullpriceTitle.classList.add('www');
      // cartFullpriceTitle.innerText = 'Итого:';

      // goBasket.classList.add('www');
      // goBasket.inneText = 'итого 0 грн';
     

      // cartFullprice.classList.add('www');
      // cartFullprice.innerText = 'Итого:';
   } else {
      
      // cartFullprice.classList.remove('www');
      // cartFullprice.innerText = '';

      // cartFullpriceTitle.classList.remove('www');
      // cartFullpriceTitle.innerText = '';

      // goBasket.classList.remove('www');
      
      // cartEmptyBadge1.classList.remove('none');
      //  cartEmptyBadge1.innerText = 'Ваша корзина пуста.';



      //  cartEmptyBadge2.classList.remove('none');
      //   cartEmptyBadge2.innerHTML = 'Добавьте же скорее что-нибудь!';
      // orderForm.classList.add('none');
      // orderForm1.classList.add('none');
      // orderForm2.classList.add('none');
      
   }

  
}