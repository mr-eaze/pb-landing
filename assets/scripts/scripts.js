$(document).ready(function() {
    // var leafOffset  =   $('#leaf').offset(),
    //     small       =   true,
    //     resize      =   false,
    //     resizeOffest=   '';   

    // $('#leaf').css({'top': leafOffset.top})

    // $('#pbase').fullpage({
    //     menu: '#navbar',
    //     onLeave: function(index, nextIndex){
    //         if ((nextIndex === 1) && resize){
    //             windowHeight    =   $(window).height();   
    //             leafOffset      =   $('#leaf').offset();
    //             resizeOffset    =   windowHeight - 80;
    //             console.log(resizeOffset);
    //             console.log(windowHeight);
    //             // $('#leaf').css({
    //             //     'top': resizeOffset,
                    
    //             // })

    //             small = true;
    //             resize  =   false;
    //             $( "#leaf" ).animate({
    //                 height: "+=20",
    //                 top: resizeOffset,
    //                 width: "+=20"
    //               }, 600, function() {
    //                 $(this).appendTo('#above-fold');
    //                 leafOffset  =   $('#leaf').offset();

    //               });
    //             $('#navbar')
    //             .delay(50)
    //             .queue(function(next){
    //                 $(this).css('background-color', 'transparent');
    //                 next();
    //             });
    //         } else if (nextIndex === 1){
    //             small = true;
    //             $( "#leaf" ).animate({
    //                 height: "+=20",
    //                 top: leafOffset.top,
    //                 width: "+=20"
    //               }, 600, function() {
    //                 $(this).appendTo('#above-fold');

    //               });
    //             $('#navbar')
    //             .delay(50)
    //             .queue(function(next){
    //                 $(this).css('background-color', 'transparent');
    //                 next();
    //             });
    //         } else if ((nextIndex === 2) && small) {
    //             small = false;
    //             $('#navbar').css('background-color', '#2abb9b');
    //             $('#leaf').appendTo('#navbar .container-fluid');
    //             $( "#leaf" ).animate({
    //                 height: "-=20",
    //                 top: "5",
    //                 width: "-=20"
    //               }, 400, function() {

    //               });
                
    //         }
    //     },
    //     afterResize: function(){
    //         var pluginContainer = $(this);
    //         if (small) {
    //             leafOffset  =   $('#leaf').offset();
    //             $('#leaf').css({
    //                 'top': 'auto',
    //                 'bottom' : '20'
                    
    //             })

    //             leafOffset  =   $('#leaf').offset();
    //             $('#leaf').css({
    //                 'top': leafOffset.top,
                    
    //             })

    //         } else {
    //             resize  =   true;
    //         }
    //     }
    // })
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
        if ($(this).hasClass('open')){
            $('.nav-side').animate({
                right: '0'
            }, 500);
            $('#navbar').css('overflow', 'visible');
        } else{
            $('.nav-side').animate({
                right: '-100vw'
            }, 500);
            $('#navbar').css('overflow', 'hidden');
        }
    });

(function() {

    var spans = $("#above-fold h1 span span"),
        quoteIndex = -1;

    
    function showNextQuote() {
        var size    =   window.innerWidth;
        console.log(size);
        ++quoteIndex;
        if( size >= 992 ){
            if ((quoteIndex % spans.length) == 0){
                $('#above-fold h1').animate({
                    'padding-left': '115px'
                });
            } else if ((quoteIndex % spans.length) == 1){
                $('#above-fold h1').animate({
                    'padding-left': '105px'
                });
            } else if ((quoteIndex % spans.length) == 2){
                $('#above-fold h1').animate({
                    'padding-left': '150px'
                });
            } else if ((quoteIndex % spans.length) == 3){
                $('#above-fold h1').animate({
                    'padding-left': '95px'
                });
            }
        } else if (size < 992){
            if ((quoteIndex % spans.length) == 0){
                $('#above-fold h1').animate({
                    'padding-left': '90px'
                });
            } else if ((quoteIndex % spans.length) == 1){
                $('#above-fold h1').animate({
                    'padding-left': '80px'
                });
            } else if ((quoteIndex % spans.length) == 2){
                $('#above-fold h1').animate({
                    'padding-left': '110px'
                });
            } else if ((quoteIndex % spans.length) == 3){
                $('#above-fold h1').animate({
                    'padding-left': '75px'
                });
            }
        }
        spans.eq(quoteIndex % spans.length)
            .fadeIn(400)
            .delay(2000)
            .fadeOut(400, showNextQuote);
    }
    
    showNextQuote();
    
})();
$('.phone-1, .phone-2, .phone-3, .phone-4').on('click', function(){
    if (this.className == "phone-1"){
        $("#hero").animate({
            backgroundColor: "#66cc99"
        }, 500 );
        $('#pbase').removeClass().addClass('body-snb');
    } else if (this.className == "phone-2"){
        $("#hero").animate({
            backgroundColor: "#55cbe7"
        }, 500 );
        $('#pbase').removeClass().addClass('body-cne');
    } else if (this.className == "phone-3"){
        $("#hero").animate({
            backgroundColor: "#666c99"
        }, 500 );
        $('#pbase').removeClass().addClass('body-bng');
    } else if (this.className == "phone-4"){
        $("#hero").animate({
            backgroundColor: "#f1cf5a"
        }, 500 );
        $('#pbase').removeClass().addClass('body-enf');
    }
})

var $form = $('form.email-form'),
    url = 'https://script.google.com/macros/s/AKfycbw8ZxUvbGf2vK3yWHlhfYh8IJtwyCAJGdqquFSqL9iAp56YbuA/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject(),
    success: function(){
        console.log($form.serializeObject());
    }
  });
})
});
