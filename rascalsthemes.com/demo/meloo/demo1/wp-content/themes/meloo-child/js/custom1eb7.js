var childTheme = (function($) {

    "use strict";



    /* Run scripts
     -------------------------------- */

    /* Ajax: Enabled */
    if ( $( 'body' ).hasClass('WPAjaxLoader') && window.location.href.indexOf('kc_action=live-editor') <= 0 ) {
        $( document ).on('AjaxLoadEnd', function() {
            childTheme.init();
        });

    /* Ajax: Disabled */
    } else {
        $( document ).ready(function($){
            childTheme.init($);
        });
    }

    return {
        loaded : false,

       
        /* Init
         -------------------------------- */
        init : function(){
            
            /* First load */
            if ( ! childTheme.loaded ) {

                this.Lazy();
          

            /* Reloaded */
            } else {
                this.Lazy();
               

            }

            childTheme.loaded = true;

        },

        Lazy : function(){
    	 	setTimeout(function() {
                $('.lazy').Lazy({

                    // your configuration goes here
                    scrollDirection: 'vertical',
                    visibleOnly: true,
                    threshold: 0,
                    afterLoad: function(element) {

                        $(element).addClass('lazy-done');
                    },
                });
            }, 100);

        }
    }
}( jQuery ));