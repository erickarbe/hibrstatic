jQuery(document).ready(function($){
  
  // Fitvids
  //$('.row').fitVids();
  
  // Responsive Menu Toggle
  /*
    $('.menu-toggle').on('click', function(e){
    
    e.preventDefault();
    $('.offcanvas').toggleClass('visible');
    $('.mask-overlay').toggleClass('mask-visible');
    $('html').toggleClass('disable-scroll');
    
  });
  */
  
  /*
    $('html').on('click', function(e) {

      // check that your clicked
      // element has no id=info
      // and is not child of info
      if (e.target.id != 'qoverlay' && !$('#qoverlay').find(e.target).length) {
          $('.offcanvas').toggleClass('visible');
          $('.mask-overlay').toggleClass('mask-visible');
          $('html').toggleClass('disable-scroll');
      }
  });
  */
  
  // "Dropdown" Function for Responsive Nav
	$.fn.dropdown = function ( selector ) {
		return this.each(function () {
			$(this).delegate(selector || oF, 'click', function (e) {
				var m = $(this)
  				, isActive = $('html').hasClass('disable-scroll')
  				, offCanvas = $('.offcanvas')
  				, maskOver = $('.mask-overlay')
  				, mhtMl = $('html')

				clearMenus()
				!isActive && m.toggleClass('open') && offCanvas.toggleClass('visible') && maskOver.toggleClass('mask-visible') && mhtMl.toggleClass('disable-scroll')
			return false
			})
		})
	}

	// Variables for Responsive Nav
	var oF = '.offcanvas'
	  , mT = '.menu-toggle'
	  , mO = '.mask-overlay'
	  , h  = 'html'
	  
  // Clear the Nav Classes
	function clearMenus() {
  	$(oF).removeClass('visible')
		$(mT).removeClass('open')
    $(mO).removeClass('mask-visible');
    $(h).removeClass('disable-scroll');
	}
  
  // Run the function on the proper div
	$(function () {
		$('html').bind("click", clearMenus)
		$('body').dropdown('.menu-toggle')
	})
  
  
  // Cart
  //$('li.cart a').html('<span class="icon-shopping-cart"></span>');
  
  
  // Tabs for FAQ page
  $('.w-tabs').wTabs();
  
  
  // Product Images
  /* Product Pages 
	$('.thumbnails a').click(function(e){
  	  e.preventDefault();
    	$('.woocommerce-main-image img').attr('src',$(this).attr('href').replace());
	});
	*/
	
	
	// The product Price (find and wrap the $ sign)
	/*
  $(".summary .amount:contains('$')").html(function(_, html) {
    return html.replace(/\$/g, '<span>$</span>');
  });
  */
  
  // Checkout Page Phone Number
  $('#billing_phone').mask('(999) 999-9999');
  
  // Load the Pillow Deck once in view
  $('.pillow-deck').one('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      // element is now visible in the viewport
      
      // Slide down pane1
      window.setInterval(function(){
        $('.pane1 .hider').addClass('down');
      }, 1000);
        
      // Wait 1.5 seconds, then slide down pane2
      window.setInterval(function(){
        $('.pane2 .hider').addClass('down');
      }, 2000);
      
      // Wait 3 seconds, then slide down pane3
      window.setInterval(function(){
        $('.pane3 .hider').addClass('down');
      }, 3000);
  
      
      	
      	
      if (visiblePartY == 'top') {
        // top part of element is visible
      } else if (visiblePartY == 'bottom') {
        // bottom part of element is visible
      } else {
        // whole part of element is visible
        
      }
    } else {
      // element has gone out of viewport
    }
  });
  
  
  /*
  $(window).on("resize", function () {
    // Set proper padding on product pages
    var bodywidth = document.body.clientWidth;
    var properHeight = bodywidth/2;
    $('.woocommerce-tabs').css('padding-top', properHeight);
    // Invoke the resize event immediately
  }).resize();
  */
  
  //Flexslider
  /*
  $('.flexslider').flexslider({
    animation: 'slide',
    controlNav: true,
    directionNav: false,
    keyboard: false,
    prevText: '<span class="fdir angle-left"></span>',
    nextText: '<span class="fdir angle-right"></span>'
  });
  */
  
  // Lazy Load
  var bLazy = new Blazy({ 
      breakpoints: [{
          width: 800 // max-width
        , src: 'data-src-medium'
	    }]
  });
  
  // If we are not on a woocommerce page, add that class to the body
    
  var hasWoo = $('body').hasClass('woocommerce-page');
  
  if(hasWoo == false){
    $('body').one().addClass('woocommerce-page woocommerce');
  }
  
    
  // Click Cart Icon to open the SideCart
  $('.shopping-cart a').on('click', function(e){
    
    e.preventDefault();
    
    //$('.mask-overlay').addClass('mask-visible');
    
    if ($(".sidecart .ajax-cart").length > 0){ 
      
      // If the Sidecart has already been loaded via ajax, then just open it
      $('body').toggleClass('sidecart-open');
      
    } else {
      
      // If the sidecart has not been loaded, then lets do some ajax
      
      var front = document.location.origin;
      
      $.ajax({
        url: front+'/ajax-cart/',
        context: document.body,
        dataType: 'html',
        type: 'GET',
        success:function(data) { 
          $('.sidecart .inside').html(data);
          $('body').addClass('sidecart-open');
        },
        error: function (xhr, ajaxOptions, thrownError) {
          //alert(xhr.status);
          //alert(thrownError);
          console.log('An error occured with the ajax request');
        }
      }).done(function() {
        //$( this ).addClass( 'done' );
      });
    
      
    }
  
  
  });
  
  //
  // Sidecart
  //
  
  // Hijack the "Add to Cart" Buttons on single product pages
  //$('#single_add_ajax').click(function(e) {
  //$('.single_add_to_cart_button').click(function(e) {
	
	$.fn.addButton = function ( selector ) {
    
    $(this).on('click', function(e){
      
    e.preventDefault();
    
    // Animate the Add to Cart Button
    $('.atc-icon').addClass('animated zoomIn');
    
    // Set the button to disabled
    $(this).attr('disabled', true);
    
    // Grab the product ID
    if( $(this).is('.variable_add_to_cart') ){
      // if this is a pillow page
      var productID = $(this).parent().siblings("[name='add-to-cart']").attr('value');
    
    } else if ( $(this).is('.off_page') ){
      
      var productID = $(this).attr('data-product-id');
      
    } else {
      
      var productID = $(this).siblings("[name='add-to-cart']").attr('value');
    
    }
    
    // Grab the quantity
    var quanTity = $('.summary .cart .qty').val();
    
    // Grab the product variation ID
    var variationID = $(this).parent().siblings("[name='variation_id']").attr('value');
    
    // Grab the attribute slug
    var attributeSlug = $('#pa_size').val();
    
    
    console.log('Product ID is ' + productID + ' quantity is ' + quanTity + ' variation is ' + variationID + ' and attribute is ' + attributeSlug );
    
    // Ajax function which loads the proper HTML to the cart
    // then opens the sidecart. We pass along the product ID
    // and the quantity.
    addToCart(productID, quanTity, variationID, attributeSlug);
    
    });
    
  };
  
  // Run the addButton function
  $(function () {
		$('.single_add_to_cart_button, .cart-icon').addButton();
	});
  
  // Send what was added to the cart via ajax & show the sidecart
  function addToCart(p_id, q_ty, p_var, a_slug) {
    
    console.log('The ajax request has started');
    
    var sideCart = $('.sidecart');
    
    var front = document.location.origin;

    
    $.ajax({
      url: front+'/ajax-cart/',
      context: document.body,
      dataType: 'html',
      type: 'POST',
      //data: 'add-to-cart=' + p_id + 'quantity=' + q_ty + 'variation_id=' + p_var,
      // http://fohm.test:8888/cart/?add-to-cart=1276&variation_id=1343&attribute_pa_size=full
      data: { "add-to-cart": p_id, "quantity": q_ty, "variation_id": p_var, "attribute_pa_size": a_slug },
      success:function(data) {
        //var div = $('.shop_table');
        //$('sidecart').html(div).addClass('open');
        $('.sidecart .inside').html(data);
        $('body').addClass('sidecart-open');
        
        // De-Animate the Add to Cart Button
        $('.atc-text').removeClass('animated zoomOut');
        $('.atc-icon').removeClass('animated zoomIn');
        
        // Remove disabled attribute
        $('.single_add_to_cart_button').removeAttr('disabled');
        
        //location.reload();
    
      },
      error: function (xhr, ajaxOptions, thrownError) {
        //alert(xhr.status);
        //alert(thrownError);
        console.log('An error occured with the ajax request');
      }
    }).done(function() {
      $( this ).addClass( 'done' );
    });
    
  }
  
  
  // Close the sidecart
  $('.close-toggle').on('click', function(e){
    e.preventDefault();
    $('body').removeClass('sidecart-open');
  });
  
  
  // Fitness Page
/*
  $('.quote-hero').one('inview', function(event, isInView){
    if(isInView){
      //$('.quote-hero').addClass('isinview')
      console.log($(this))
    }
  })
*/
  
  inView('.quote-hero')
    .on('enter', el => {
        $(el).addClass('isinview')
    });
  inView.offset(150);

  //////////////////////////////////////////
  
  // Mattress Page
  
  // Show the description for each mattress size:
  // Make sure the Body Class matches on the live site
  
  $(function (){
    
    if ($('body.postid-1276, body.postid-2726, body.postid-1522, body.postid-3845, body.postid-5001').length > 0){
    
      var getBackMyJSON = $('.variations_form').data('product_variations');
      
      var mattressList = [];
      
      $.each(getBackMyJSON, function(index, element) {
        
        mattressList.push({
            title: element.attributes.attribute_pa_size,
            id: element.variation_id
        });
        
      });
      
      console.log(mattressList)
      
      var radioList = [];
      
      $('input[type=radio]').each(function(){
        
        radioList.push($(this).attr('id'));
        
      });
      
      //console.log(radioList)
        
      for (var i = 0; i < mattressList.length; i++) {
        for (var j = 0; j < radioList.length; j++) {
          
          if(mattressList[i].title == radioList[j]){
            $('input#'+radioList[j]).attr('data-description', mattressList[i].desc )
          }
          
        }
      }
      
    
    }
  
  });
  
  
  //////////////////////////////////////////
  
  
  // Checkout
  
  // Check the required signature input on load
  //$('#my_field_name').prop('checked', true);
 
  /* Homepage Vertical Slider
  function cycleImages(){
    
    var $active = $('.left-side .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('.left-side div:first');
    //$next.css('z-index',2);//move the next image up the pile
    $next.removeClass('active bounceIn');
    
    $active.removeClass('active bounceIn');//reset the z-index and unhide the image
    
    $next.addClass('active bounceIn');//make the next image the top one
    
  }
  
  // run every 5s
  setInterval(function() {
        cycleImages();
  }, 5000);
  */
  
  
  /*// Get height of Image
  var pimg = document.getElementById('pslide1'); 
  var pheight = pimg.clientHeight;
  
  // Set the vslide to the height of the image
  $('.vslide').css('height', pheight);
  */
  
  // X-Slider (on shop page)
  $.fn.xslide = function ( selector ) {
    
    $(this).hover( function(){
      
      // Get data-img
      var xClass = $(this).children('.xtab').data('ximg');
      
      // Remove all active classes from tabs
      $('.xtab').removeClass('active');
      
      // Then add active class to just this tab
      $(this).children('.xtab').addClass('active');
      
      // Add active class to the pillow image
      $('.'+xClass).addClass('active').siblings('img').removeClass('active');
      
      // Remove active classes from the xslides
      $('.xslide').removeClass('active');
      
      // Add active class to the parent slide
      $(this).addClass('active');
      
      //alert(xClass);
      
    });
    
  };
  
  // Run the xslide function
  $(function () {
		$('.xslide').xslide();
	});
	
	
	// Swap Function for the pillow images at top of pillow page
	$.fn.pswap = function ( selector ) {
    
    $(this).on('click', function(e){
      
      e.preventDefault();
      
      // Get data-pillow-id
      var pillowID = $(this).data('pillow-id');
      
      // Get data-pillow-name
      var pillowName = $(this).data('pillow-name');
      
      // Remove all active classes from images
      $('.images img').removeClass('active');
      
      //Remove all active classes from other links
      $(this).siblings('a').removeClass('active');
      
      // Then add active class to this link
      $(this).addClass('active');
      
      // Add active class to the pillow image
      $('.'+pillowName).addClass('active').siblings('img').removeClass('active');
      
      //
      $('#off_page_at_top').attr('data-product-id', pillowID);
      
    });
    
  };
  
  // Run the pswap function
  $(function () {
		$('.pillow-toggle a').pswap();
	});
  
  
	// Single Pillow Pages
	// Add a container to the bottom portion of the page
	$('.product_cat-pillows .reviews-left, .product_cat-pillows #tab-yotpo_widget').wrapAll('<div class="medium-container cf"></div>');
  
  // Checkout Page
  $('#order_comments').keypress(function(e) {
    var tval = $('textarea').val(),
        tlength = tval.length,
        set = 35,
        remain = parseInt(set - tlength);
    //$('p').text(remain);
    if (remain <= 0 && e.which !== 0 && e.charCode !== 0) {
        $('textarea').val((tval).substring(0, tlength - 1))
    }
  });

  
  $('.flexslider').flexslider({
    animation: 'fade',
    manualControls: '.flex-control-nav li',
    useCSS: false, /* Chrome fix*/
    directionNav: false,
    slideshow: false,
    
    /*before: function(slider){
      var bgImg = $(slider).find(".flex-active-slide").attr("data-large");
      $(slider).find('.flex-active-slide').css('background-image', 'url('+bgImg+')' );
    },*/
    
  });
  
  // Only load the background images on the slider 
  // if the screen width is above 768px
  enquire.register("screen and (min-width: 768px)", {
    match : function() {
        
        var list = $('.with-pillows li.slide');

        for (var i = 0; i < list.length; i++) {
          var src = list[i].getAttribute('data-image-src');
          list[i].style.backgroundImage="url('" + src + "')";
        }
  
    },  
    unmatch : function() {
        // Hide the bg images?
    }
    
  });
  
  
/*
  function showReviews(){
    $('.product_cat-mattress #tab-yotpo_widget').toggleClass('shown');
  }
  
  // Mattress Page Temp Review Hide/Show
  $('#showyotpo').on('click', function(e){
    e.preventDefault();
    showReviews();
  });
  
  if(window.location.hash) {
    // # exists in URL
    showReviews();
  }
*/

    
  
  // FAQ Search Filter
  $(".post-100").sieve({ itemSelector: ".w-tabs-section, h3, .sort-title" });
  
  // Reviews Page
  $('#rev-help-show').on('click', function(e){
    e.preventDefault();
    $('.rev-help').addClass('shown');
  })
  
  
  // Financing with Affirm on Cart Page
  $('body.woocommerce-cart #learn-more').parent('td').prepend('<h3 id="affirm-desc" class="text-upper">Financing Available Through Affirm</h3>');
  
  // referrer
  //var reF = document.referrer.split('/')[2]
  //$('body').addClass(reF);
  
  
  // Referal Modal when user comes from link with query string
/*
  setTimeout(function() {
    $('.modal').fadeOut('fast');
  }, 10000);
*/

$('.show-simple-modal').on('click', function(e){
  e.preventDefault();
  $('.modal-mask').show().addClass('modal-enter').removeClass('modal-enter');
});

$('.modal-default-button').on('click', function(e){
  e.preventDefault();
  $('.modal-mask').hide();
});
  
  // Parallax
	$(function () {
      var e = $(window);
      e.width() > 640 && $(".full.parallax").each(function () {
          var t = $(this);
          $(window).scroll(function () {
              var n = 70,
                  r = e.scrollTop() / 8 - 170,
                  i = "50% " + r + "px";
              t.css({
                  backgroundPosition: i
              })
          })
      })
  });
  
  $(function () {
      var e = $(window);
      e.width() > 767 && $(".maxim-hero.parallax").each(function () {
          var t = $(this);
          $(window).scroll(function () {
              var n = 70,
                  r = e.scrollTop() / 10 - 170,
                  i = "left " + r + "px";
              t.css({
                  backgroundPosition: i
              })
          })
      })
  });
  
  
  // HIBR LITE Accordion
  // On load, add the background image
  var aBgimage = $('.accordion').data('background');
	$('.accordion').css('background-image', 'url('+aBgimage+')');
  
  
  $('.section').on('click', function(e){
    
    if( $(this).hasClass('open') ){
    
      e.stopPropagation();
      $('.accordion').removeClass('enabled')
      $('.section').removeClass('open')
    
    } else {
      
      $(this).parent('.accordion').addClass('enabled')
      $(this).addClass('open')
      $(this).siblings('.section').removeClass('open')
    
      var bGimage = $(this).data('background')
      $('.accordion').css('background-image', 'url('+bGimage+')');
      
    }
    
     
  })
  
  $('.close').on('click', function(e){
    e.stopPropagation();
    $('.accordion').removeClass('enabled')
    $('.section').removeClass('open')
  })
  
  // Main Menu Dropdown for Mattresses
/*
  $('#menu-item-2763 a').on('click', function(e){
    e.preventDefault()
    var matelem = $('.mega-menu')
    $(matelem).toggleClass('is-open')
  })
*/
  
  
  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    smartSpeed: 900,
    navText: ["<img width='24' src='/wp-content/themes/getfohm/library/img/nav-arrow.svg'>","<img width='24' src='/wp-content/themes/getfohm/library/img/nav-arrow.svg'>"],
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
    }
  })
  
  // WooCommerce Gallery - Disable it
  $('.woocommerce-product-gallery__image a').on('click', function(e){
	  e.preventDefault();
  })
  
  // Mattress pages - add sticky header on scroll
  
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $("div.product div.summary").addClass("stickky");
    } else {
        $("div.product div.summary").removeClass("stickky");
    }
    
    
	});
  
  
});

$( window ).load(function() {
  
  // Pay with Amazon Image Swap
  $(".amazon-payment-button-loaded").attr("src", "https://hibr.com/wp-content/uploads/2016/02/amazon-text.jpg");
  $("#OffAmazonPaymentsWidgets0").attr("src", "https://hibr.com/wp-content/uploads/2016/02/amazon-text.jpg");
  
  // Mattress Pages
  $('.img-n-summary .variations').before('<p class="border-top">Available in six sizes</p>');


});