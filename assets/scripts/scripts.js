$(document).ready(function() {
    var leafOffset = $('#leaf').offset(),
        small   =   true;
    $('#leaf').css({
        'top': leafOffset.top,
        'left': leafOffset.left

    })
    console.log(leafOffset);
    $('#pbase').fullpage({
        menu: '#navbar',
        onLeave: function(index, nextIndex){
            if (nextIndex === 1){
                small = true;
                $( "#leaf" ).animate({
                    left: leafOffset.left,
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
                    left: leafOffset.left,
                    top: "5",
                    width: "-=20"
                  }, 400, function() {
                  });
                
            }
        }
    });
});