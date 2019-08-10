jQuery(document).ready(function( $ ) {
 


  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Logo fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header #logo img').addClass('addLogoWidth',);
      $('#header #logo img').fadeIn(1200);
      
    } else {
      $('#header #logo img').removeClass('addLogoWidth');
      $('#header #logo img').addClass('removeLogoWidth');
      $('#header #logo img').fadeIn(1200);
    }
  });

   if ($(window).scrollTop() < 100) {
    $('#header #logo img').removeClass('addLogoWidth');
    $('#header #logo img').addClass('removeLogoWidth');
     
     $('#header #logo img').fadeIn(1200);
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({ height: $(window).height() });
  }

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });






 function fncWebMenu()
 {

  var strMenu = ''; 
  strMenu += '<ul class="nav-menu">';
  strMenu += '<li ><a href="index.html">Anasayfa</a></li>';
  strMenu += '<li><a href="#hakkimizda">Hakkımızda</a></li>';
  strMenu += '<li><a href="#referanslar">Referanslar</a></li>';
  strMenu += '<li >';
  strMenu += '<a href="">Ürünler</a>';
  strMenu += '<ul>';
  strMenu += ' <li>';
  strMenu += '  <a href="kunefe.html">';
  strMenu += '     <i class="fa fa-star"></i> Künefe';
  strMenu += '     </a>';
  strMenu += '  <ul>';
  strMenu += '     <li>';
  strMenu += '       <a href="kunefe-porsiyon.html"><i class="fa fa-angle-double-right"style="font-weight: 900;"></i>';
  strMenu += '         Künefe Porsiyon';
  strMenu += '         </a>';
  strMenu += '     </li>';
  strMenu += '     <li>';
  strMenu += '       <a href="kunefe-tepsi.html">';
  strMenu += '       <i class="fa fa-angle-double-right" style="font-weight: 900;" ></i>';
  strMenu += '          Künefe Tepsi';
  strMenu += '       </a>';
  strMenu += '      </li>';
  strMenu += '    </ul>';
  strMenu += '  </li>';
  strMenu += '  <li>';
  strMenu += '    <a href="katmer.html">';
  strMenu += '     <i class="fa fa-star"></i> Katmer'; 
  strMenu += '     </a>'; 
  strMenu += '  </li>';
  strMenu += '  <li>';
  strMenu += '    <a href="sufle.html">';
  strMenu += '     <i class="fa fa-star"></i> Sufle'; 
  strMenu += '     </a>'; 
  strMenu += '  </li>';
  strMenu += '  <li>';
  strMenu += '    <a href="icli-kofte.html">';
  strMenu += '     <i class="fa fa-star"></i> İçli Köfte'; 
  strMenu += '     </a>'; 
  strMenu += '  </li>';
  strMenu += '  <li>';
  strMenu += '    <a href="kabak-tatlisi.html">';
  strMenu += '     <i class="fa fa-star"></i> Kabak Tatlısı'; 
  strMenu += '     </a>'; 
  strMenu += '  </li>';
  strMenu += '  <li>';
  strMenu += '    <a href="toz-fistik.html">';
  strMenu += '     <i class="fa fa-star"></i> Toz Fıstık'; 
  strMenu += '     </a>'; 
  strMenu += '   </li>';
  strMenu += ' </ul>';
  strMenu += '</li>';
  strMenu += '<li><a href="#sube">Şubeler</a></li>';
  strMenu += '<li><a href="#galeri">Galeri</a></li>';
  strMenu += '<li><a href="medya.html">Medya</a></li>';
  strMenu += '<li><a href="#iletisim">İletişim</a></li>';
  strMenu += '<li class="buy-tickets">';
  strMenu += '  <a href="dagitim-agi.html">Dağıtım Ağı</a>';
  strMenu += '</li>'; 
  strMenu += '</ul>'; 
  $("#nav-menu-container").append(strMenu);
 }


function fncMobileMenu()
{

 var strMenu = ''; 
 strMenu += ' <ul class="" style="touch-action: pan-y;" id="">';
 strMenu += ' <li><a href="index.html">Anasayfa</a></li>';
 strMenu += ' <li><a href="index.html#hakkimizda">Hakkımızda</a></li>';
 strMenu += ' <li><a href="index.html#referanslar">Referanslar</a></li>';
 strMenu += ' <li><a href="#"  id="li-urunler" class="sf-with-ul mobile-nav-menu menu-has-children">Ürünler</a>';
 strMenu += '   <ul style="display: none;" id="li-urunler-ul" > ';
 strMenu += '       <li class="p-l-10"><a href="#" id="li-kunefe" class="sf-with-ul mobile-nav-menu menu-has-children"><i class="fa fa-star"></i> Künefe</a>';
 strMenu += '         <ul style="display: none;" id="li-kunefe-ul"> ';
 strMenu += '           <li class="p-l-10"><a href="kunefe.html"><i class="fa fa-angle-double-right" style="font-weight: 900;"></i> Künefe-Genel </a></li>';
 strMenu += '           <li class="p-l-10"><a href="kunefe-porsiyon.html"><i class="fa fa-angle-double-right" style="font-weight: 900;"></i> Künefe Porsiyon</a></li>';
 strMenu += '           <li class="p-l-10"><a href="kunefe-tepsi.html"><i class="fa fa-angle-double-right" style="font-weight: 900;"></i> Künefe Tepsi</a></li>';
 strMenu += '         </ul>';
 strMenu += '       </li>';
 strMenu += '       <li class="p-l-10"><a href="katmer.html"><i class="fa fa-star"></i> Katmer</a></li>';
 strMenu += '       <li class="p-l-10"><a href="sufle.html"><i class="fa fa-star"></i> Sufle</a></li>';
 strMenu += '      <li class="p-l-10"><a href="icli-kofte.html"><i class="fa fa-star"></i> İçli Köfte</a></li>';
 strMenu += '       <li class="p-l-10"><a href="kabak-tatlisi.html"><i class="fa fa-star"></i> Kabak Tatlısı</a></li>';
 strMenu += '       <li class="p-l-10"  ><a href="toz-fistik.html"><i class="fa fa-star"></i> Toz Fıstık</a></li>';
 strMenu += '   </ul>';
 strMenu += ' </li>';
 strMenu += ' <li><a href="index.html#sube">Şubeler</a></li>';
 strMenu += ' <li><a href="index.html#galeri">Galeri</a></li>';
 strMenu += ' <li><a href="medya.html">Medya</a></li>';
 strMenu += ' <li><a href="index.html#iletisim">İletişim</a></li>';
 strMenu += ' <li class="buy-tickets menu-active"><a href="dagitim-agi.html">Dağıtım Ağı</a></li>';
 strMenu += ' </ul>'; 
 $("#mobile-nav").append(strMenu);
}

  // Mobile Navigation
  if ($('#nav-menu-container').length) {

    fncWebMenu();
    fncMobileMenu();
    // var $mobile_nav = $('#nav-menu-container').clone().prop({
    //   id: 'mobile-nav'
    // });
    // $mobile_nav.find('> ul').attr({
    //   'class': '',
    //   'id': ''
    // });
    // $('body').append($mobile_nav);
     $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    // $('body').append('<div id="mobile-body-overly"></div>');
     $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

   

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });
   
    $(document).on('click', '.mobile-nav-menu', function(e) { 
      $("#"+$(this)[0].id+"-ul").toggle();  
      console.log( $("#"+$(this)[0].id+"-ul"));
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
  });

  // Buy tickets select the ticket type on click
  $('#buy-ticket-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var ticketType = button.data('ticket-type');
    var modal = $(this);
    modal.find('#ticket-type').val(ticketType);
  })

// custom code
let nvm=document.getElementsByClassName("nav-menu");
nvm.click=addClass("menu-active");
});
