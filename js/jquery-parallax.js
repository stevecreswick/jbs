(function($) {




    $.fn.parallax = function(options) {




        var windowWidth = $(window).width();




        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);




        // Iterate over each object in collection
        return this.each( function() {




        // Save a reference to the element
        var $this = $(this);




        // Set up Scroll Handler
        $(document).scroll(function(){




    var scrollLeft = $(window).scrollLeft();
            var offset = $this.offset().left;
            var width = $this.outerWidth();




    // Check if above or below viewport
if (offset + height <= scrollLeft || offset >= scrollLeft + windowWidth) {
return;
}




var xBgPosition = Math.round((offset - scrollLeft) * settings.speed);




                // Apply the X Background Position to Set the Parallax Effect
    $this.css('background-position', 'center ' + xBgPosition + 'px');

        });
        });
    }
}(jQuery));
