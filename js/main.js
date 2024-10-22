$(function(){

   // COMMON

   // Menu mobile

   $('.menu__btn').on('click', function() {
      $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
   });

   // Tabs

   $('.tab').on('click', function(e) {
      e.preventDefault();

      $(this).siblings().removeClass('tab--active');
      $(this).addClass('tab--active');

      $(this).parent().siblings().find('.tabs-content').removeClass('tabs-content--active');
      $($(this).attr('href')).addClass('tabs-content--active');
   });

   // Favorite product item

   $('.product-item__favorite').on('click', function(e) {
      $(this).toggleClass('product-item__favorite--active');
   });

   // INDEX PAGE

   // Slick (banner section slider)

   $('.banner-section__slider').slick({
      dots: true,
      prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt="Previous"></button>',
      nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt="Next"></button>',
      responsive: [
         {
            breakpoint: 969,
            settings: {
               arrows: false,
            }
         }
      ],
   });

   // Slick (product slider)

   $('.product-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button class="product-slider__btn product-slider__btn-prev"><img src="images/arrow-black-left.svg" alt="Previous"></button>',
      nextArrow: '<button class="product-slider__btn product-slider__btn-next"><img src="images/arrow-black-right.svg" alt="Next"></button>',
   });

   // CATALOG PAGE

   // formstyler

   $('.filter-style').styler();

   // view grid / list

   $('.catalog__filter-btngrid').on('click', function() {
      $(this).addClass('catalog__filter-button--active');
      $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
      $('.product-item__wrapper').removeClass('product-item__wrapper--list');
   });
   $('.catalog__filter-btnline').on('click', function() {
      $(this).addClass('catalog__filter-button--active');
      $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
      $('.product-item__wrapper').addClass('product-item__wrapper--list');
   });

   // filter item drop

   $('.filter__item-drop').on('click', function() {
      $(this).toggleClass('filter__item-drop--active');
      $(this).next().slideToggle(200);
   });

   // ionRangeSlider

   $('.js-range-slider').ionRangeSlider({
      hide_from_to: true,
   });

   // PRODUCT PAGE

   // rateYo

   $('.rate-yo').rateYo({
      normalFill: '#c4c4c4',
      ratedFill: '#1c62cd',
      starWidth: "23px",
      spacing: '7px',
      readOnly: true,
   });
});