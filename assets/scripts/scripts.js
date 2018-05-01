$(document).ready(function() {
    var leafOffset  =   $('#leaf').offset(),
        small       =   true,
        resize      =   false,
        resizeOffest=   '';   

    $('#leaf').css({'top': leafOffset.top})

    $('#pbase').fullpage({
        menu: '#navbar',
        onLeave: function(index, nextIndex){
            if ((nextIndex === 1) && resize){
                windowHeight    =   $(window).height();   
                leafOffset      =   $('#leaf').offset();
                resizeOffset    =   windowHeight - 80;
                console.log(resizeOffset);
                console.log(windowHeight);
                // $('#leaf').css({
                //     'top': resizeOffset,
                    
                // })

                small = true;
                resize  =   false;
                $( "#leaf" ).animate({
                    height: "+=20",
                    top: resizeOffset,
                    width: "+=20"
                  }, 600, function() {
                    $(this).appendTo('#above-fold');
                    leafOffset  =   $('#leaf').offset();

                  });
                $('#navbar')
                .delay(50)
                .queue(function(next){
                    $(this).css('background-color', 'transparent');
                    next();
                });
            } else if (nextIndex === 1){
                small = true;
                $( "#leaf" ).animate({
                    height: "+=20",
                    top: leafOffset.top,
                    width: "+=20"
                  }, 600, function() {
                    $(this).appendTo('#above-fold');

                  });
                $('#navbar')
                .delay(50)
                .queue(function(next){
                    $(this).css('background-color', 'transparent');
                    next();
                });
            } else if ((nextIndex === 2) && small) {
                small = false;
                $('#navbar').css('background-color', '#2abb9b');
                $('#leaf').appendTo('#navbar .container-fluid');
                $( "#leaf" ).animate({
                    height: "-=20",
                    top: "5",
                    width: "-=20"
                  }, 400, function() {

                  });
                
            }
        },
        afterResize: function(){
            var pluginContainer = $(this);
            if (small) {
                leafOffset  =   $('#leaf').offset();
                $('#leaf').css({
                    'top': 'auto',
                    'bottom' : '20'
                    
                })

                leafOffset  =   $('#leaf').offset();
                $('#leaf').css({
                    'top': leafOffset.top,
                    
                })

            } else {
                resize  =   true;
            }
        }
    })


});
