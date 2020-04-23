/*!
    * Start Bootstrap - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
    */
  (function($) {
       console.log('--------------------->Ejecutado')
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            console.log('--------------------->Ejecutado1')
            if (this.href === path) {
                console.log('--------------------->Ejecutado2')
                $(this).addClass("active");
            }
        });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
		 console.log('--------------------->Ejecutado3')
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);

$(()=>{
	 console.log('--------------------->Ejecutado4')
    $('[data-toggle="tooltip"]').tooltip();
})
 
