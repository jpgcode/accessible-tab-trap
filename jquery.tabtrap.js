/*--
Tab overlay iterator
Author: Jose Pablo Granados
Email: jpgcodecr@gmail.com
Avoid tab focus to go outside your overlay
Version: 1.0
Last Modification: October 2015
--*/

(function($){ 
   $.fn.tabTrap = function(options) {

        var anchors = $(this).find('a');
        
        anchors.last().on('blur', function(){
            anchors[0].focus();
        });
   } 
})(jQuery);