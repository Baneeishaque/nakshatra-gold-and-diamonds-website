$(function(){
            var menuwidth  = 240; // pixel value for sliding menu width
            var menuspeed  = 400; // milliseconds for sliding menu animation time
        
            var $bdy       = $('body');
            var $container = $('body');
            var $burger    = $('#side-panel-menu');
          var negwidth   = "-"+menuwidth+"px";
            var poswidth   = menuwidth+"px";
        
            $('#mob-menu').on('click',function(e){
            if($bdy.hasClass('openmenu')) {
              jsAnimateMenu('close');
            } else {
              jsAnimateMenu('open');
            }
           });
        
         $('.overlay').on('click', function(e){
              if($bdy.hasClass('openmenu')) {
              jsAnimateMenu('close');
              }
           });
        
           $('a[href$="#"]').on('click', function(e){
              e.preventDefault();
           });
        
           function jsAnimateMenu(tog) {
            if(tog == 'open') {
                $bdy.addClass('openmenu');
            
                $container.animate({marginRight: negwidth, marginLeft: poswidth}, menuspeed);
              $burger.animate({width: poswidth}, menuspeed);
                $('.overlay').animate({left: poswidth}, menuspeed);
              }
          
           if(tog == 'close') {
                $bdy.removeClass('openmenu');
            
              $container.animate({marginRight: "0", marginLeft: "0"}, menuspeed);
                $burger.animate({width: "0"}, menuspeed);
                $('.overlay').animate({left: "0"}, menuspeed);
             }
            }
         });


// Dropdown Toggle 
//------------------------------------------------------------------------------------------
$(".toggle-menu").click(function(){
      $(".toggle-menuShow").toggle();
  });


// mapframe 
//------------------------------------------------------------------------------------------
$('.mapframe')
  .click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});


// Scroll Up 
//------------------------------------------------------------------------------------------

  $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
  });

  $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
  });


$(function(){

          var $searchlink = $('#searchtoggl i');
          var $searchbar  = $('#searchbar');
          
          $('#searchIcon a, #searchIconMobile a').on('click', function(e){
            e.preventDefault();
            
            if($(this).attr('id') == 'searchtoggl') {
              if(!$searchbar.is(":visible")) { 
                // if invisible we switch the icon to appear collapsable
                $searchlink.removeClass('fa-search').addClass('fa-search-minus');
              } else {
                // if visible we switch the icon to appear as a toggle
                $searchlink.removeClass('fa-search-minus').addClass('fa-search');
              }
              
              $searchbar.slideToggle(300, function(){
                // callback after search bar animation
              });
            }
          });
          
          $('#searchform').submit(function(e){
            e.preventDefault(); // stop form submission
          });

          $('.pro-slider').bxSlider({
            controls:false,
            auto:true,
          });

          $('.bf-slider').bxSlider({
                controls:true,
                pager:false,
                auto:true,
                pause:5000,
                nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
            });

            $('.bf-slider-two').bxSlider({
                
                pager:false,
                auto:true,
                pause:5000,
                controls:true,
                nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
            });
             $('.client-slider').bxSlider({
                
                pager:false,
                auto:true,
                pause:5000,
                controls:true,
                nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
            });
            $('.testi-slide').bxSlider({
                
                pager:false,
                auto:true,
                pause:5000,
                controls:true,
                nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>'
            });


            //jwellery gallery script begins
            var selectedClass = "";
            $(".fil-cat").click(function(){
              $(this).addClass('active');
              $(this).siblings().removeClass('active');
              selectedClass = $(this).attr("data-rel"); 
               $("#portfolio").fadeTo(100, 0.1);
              $("#portfolio div.tile").not("."+selectedClass).fadeOut().removeClass('scale-anm');
              setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('scale-anm');
                $("#portfolio").fadeTo(300, 1);
              }, 300); 
          });


          //for mobile view
          $("select#jwelleryFilter").change(function(){
              selectedClass = $(this).val();
              $("#portfolio").fadeTo(100, 0.1);
              $("#portfolio div.tile").not("."+selectedClass).fadeOut().removeClass('scale-anm');
              setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('scale-anm');
                $("#portfolio").fadeTo(300, 1);
              }, 300); 
          });
          //jwellery gallery script ends

          //product zoom

          /*CloudZoom.quickStart();
            
            // Initialize the slider.
            $(function(){
                $('#slider1').Thumbelina({
                    $bwdBut:$('#slider1 .left'), 
                    $fwdBut:$('#slider1 .right')
                });
            });*/
          //product zoom
});


