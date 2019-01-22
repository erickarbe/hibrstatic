jQuery(document).ready(function($){function a(){$(i).removeClass("visible"),$(o).removeClass("open"),$(n).removeClass("mask-visible"),$(s).removeClass("disable-scroll")}function t(a,t,e,i){console.log("The ajax request has started");var o=$(".sidecart"),n=document.location.origin;$.ajax({url:n+"/ajax-cart/",context:document.body,dataType:"html",type:"POST",data:{"add-to-cart":a,quantity:t,variation_id:e,attribute_pa_size:i},success:function(a){$(".sidecart .inside").html(a),$("body").addClass("sidecart-open"),$(".atc-text").removeClass("animated zoomOut"),$(".atc-icon").removeClass("animated zoomIn"),$(".single_add_to_cart_button").removeAttr("disabled")},error:function(a,t,e){console.log("An error occured with the ajax request")}}).done(function(){$(this).addClass("done")})}function e(){$(this).addClass("isinview")}$.fn.dropdown=function(t){return this.each(function(){$(this).delegate(t||i,"click",function(t){var e=$(this),i=$("html").hasClass("disable-scroll"),o=$(".offcanvas"),n=$(".mask-overlay"),s=$("html");return a(),!i&&e.toggleClass("open")&&o.toggleClass("visible")&&n.toggleClass("mask-visible")&&s.toggleClass("disable-scroll"),!1})})};var i=".offcanvas",o=".menu-toggle",n=".mask-overlay",s="html";$(function(){$("html").bind("click",a),$("body").dropdown(".menu-toggle")}),$(".w-tabs").wTabs(),$("#billing_phone").mask("(999) 999-9999"),$(".pillow-deck").one("inview",function(a,t,e,i){t&&(window.setInterval(function(){$(".pane1 .hider").addClass("down")},1e3),window.setInterval(function(){$(".pane2 .hider").addClass("down")},2e3),window.setInterval(function(){$(".pane3 .hider").addClass("down")},3e3))});var r=new Blazy({breakpoints:[{width:800,src:"data-src-medium"}]});0==$("body").hasClass("woocommerce-page")&&$("body").one().addClass("woocommerce-page woocommerce"),$(".shopping-cart a").on("click",function(a){if(a.preventDefault(),$(".sidecart .ajax-cart").length>0)$("body").toggleClass("sidecart-open");else{var t=document.location.origin;$.ajax({url:t+"/ajax-cart/",context:document.body,dataType:"html",type:"GET",success:function(a){$(".sidecart .inside").html(a),$("body").addClass("sidecart-open")},error:function(a,t,e){console.log("An error occured with the ajax request")}}).done(function(){})}}),$.fn.addButton=function(a){$(this).on("click",function(a){if(a.preventDefault(),$(".atc-icon").addClass("animated zoomIn"),$(this).attr("disabled",!0),$(this).is(".variable_add_to_cart"))var e=$(this).parent().siblings("[name='add-to-cart']").attr("value");else if($(this).is(".off_page"))var e=$(this).attr("data-product-id");else var e=$(this).siblings("[name='add-to-cart']").attr("value");var i=$(".summary .cart .qty").val(),o=$(this).parent().siblings("[name='variation_id']").attr("value"),n=$(".radioactive").children("input").attr("value");console.log("Product ID is "+e+" quantity is "+i+" variation is "+o+" and attribute is "+n),t(e,i,o,n)})},$(function(){$(".single_add_to_cart_button").addButton()}),$(".close-toggle").on("click",function(a){a.preventDefault(),$("body").removeClass("sidecart-open")}),inView(".quote-hero").once("enter",e()),$(function(){if($("body.postid-1276, body.postid-2726, body.postid-1522, body.postid-3845, body.postid-5001").length>0){var a=$(".variations_form").data("product_variations"),t=[];$.each(a,function(a,e){t.push({title:e.attributes.attribute_pa_size,desc:e.variation_description})});var e=[];$("input[type=radio]").each(function(){e.push($(this).attr("id"))});for(var i=0;i<t.length;i++)for(var o=0;o<e.length;o++)t[i].title==e[o]&&$("input#"+e[o]).attr("data-description",t[i].desc);$(".variations input").click(function(){$("input:not(:checked)").parent().removeClass("radioactive"),$("input:checked").parent().addClass("radioactive"),$(".m-size").html($(this).data("description"))}),$("input:radio[name=attribute_pa_size]").filter("[value=queen]").prop("checked",!0).parent().addClass("radioactive");var n=$(".radioactive input").data("description");$(".m-size").html(n)}}),$("span label").each(function(){var a=$(this).text();"Twin XL"==a&&$(this).text(a.replace("Twin XL","XL")),"Cal King"==a&&$(this).text(a.replace("Cal King","Cal"))}),$("#my_field_name").prop("checked",!0),$.fn.xslide=function(a){$(this).hover(function(){var a=$(this).children(".xtab").data("ximg");$(".xtab").removeClass("active"),$(this).children(".xtab").addClass("active"),$("."+a).addClass("active").siblings("img").removeClass("active"),$(".xslide").removeClass("active"),$(this).addClass("active")})},$(function(){$(".xslide").xslide()}),$.fn.pswap=function(a){$(this).on("click",function(a){a.preventDefault();var t=$(this).data("pillow-id"),e=$(this).data("pillow-name");$(".images img").removeClass("active"),$(this).siblings("a").removeClass("active"),$(this).addClass("active"),$("."+e).addClass("active").siblings("img").removeClass("active"),$("#off_page_at_top").attr("data-product-id",t)})},$(function(){$(".pillow-toggle a").pswap()}),$(".product_cat-pillows .reviews-left, .product_cat-pillows #tab-yotpo_widget").wrapAll('<div class="medium-container cf"></div>'),$("#order_comments").keypress(function(a){var t=$("textarea").val(),e=t.length,i=35;parseInt(35-e)<=0&&0!==a.which&&0!==a.charCode&&$("textarea").val(t.substring(0,e-1))}),$(".flexslider").flexslider({animation:"fade",manualControls:".flex-control-nav li",useCSS:!1,directionNav:!1,slideshow:!1}),enquire.register("screen and (min-width: 768px)",{match:function(){for(var a=$(".with-pillows li.slide"),t=0;t<a.length;t++){var e=a[t].getAttribute("data-image-src");a[t].style.backgroundImage="url('"+e+"')"}},unmatch:function(){}}),$(".post-100").sieve({itemSelector:".w-tabs-section, h3, .sort-title"}),$("#rev-help-show").on("click",function(a){a.preventDefault(),$(".rev-help").addClass("shown")}),$("body.woocommerce-cart #learn-more").parent("td").prepend('<h3 id="affirm-desc" class="text-upper">Financing Available Through Affirm</h3>'),$(".show-simple-modal").on("click",function(a){a.preventDefault(),$(".modal-mask").show().addClass("modal-enter").removeClass("modal-enter")}),$(".modal-default-button").on("click",function(a){a.preventDefault(),$(".modal-mask").hide()}),$(function(){var a=$(window);a.width()>640&&$(".full.parallax").each(function(){var t=$(this);$(window).scroll(function(){var e=70,i=a.scrollTop()/8-170,o="50% "+i+"px";t.css({backgroundPosition:o})})})}),$(function(){var a=$(window);a.width()>767&&$(".maxim-hero.parallax").each(function(){var t=$(this);$(window).scroll(function(){var e=70,i=a.scrollTop()/10-170,o="left "+i+"px";t.css({backgroundPosition:o})})})}),svg4everybody();var l=$(".accordion").data("background");$(".accordion").css("background-image","url("+l+")"),$(".section").on("click",function(a){if($(this).hasClass("open"))a.stopPropagation(),$(".accordion").removeClass("enabled"),$(".section").removeClass("open");else{$(this).parent(".accordion").addClass("enabled"),$(this).addClass("open"),$(this).siblings(".section").removeClass("open");var t=$(this).data("background");$(".accordion").css("background-image","url("+t+")")}}),$(".close").on("click",function(a){a.stopPropagation(),$(".accordion").removeClass("enabled"),$(".section").removeClass("open")}),$("#menu-item-2763 a").on("click",function(a){a.preventDefault();var t=$(".mega-menu");$(t).toggleClass("is-open")}),$(".owl-carousel").owlCarousel({items:1,nav:!0,loop:!0,dots:!1,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,smartSpeed:900,navText:["<img width='30' src='/wp-content/themes/getfohm/library/img/nav-arrow.svg'>","<img width='30' src='/wp-content/themes/getfohm/library/img/nav-arrow.svg'>"],responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})}),$(window).load(function(){$(".amazon-payment-button-loaded").attr("src","https://hibr.com/wp-content/uploads/2016/02/amazon-text.jpg"),$("#OffAmazonPaymentsWidgets0").attr("src","https://hibr.com/wp-content/uploads/2016/02/amazon-text.jpg"),$(".img-n-summary .variations").before('<p class="border-top">Available in six sizes</p>')});