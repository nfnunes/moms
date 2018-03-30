$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    $("a").removeClass("active");
    $(this).addClass("active");

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if


  });
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if(scroll >= $('#QuemSomos').offset().top-150){
        $("a").removeClass("active");
        $("#linkQuem").addClass("active");
    }

    if(scroll >= $('#Precos').offset().top -150){
        $("a").removeClass("active");
        $("#linkPrecos").addClass("active");
    }

    if(scroll >= $('#Servicos').offset().top -150){
        $("a").removeClass("active");
        $("#linkServicos").addClass("active");
    }

    if(scroll >= $('#Empresas').offset().top -150){
        $("a").removeClass("active");
        $("#linkEmpresas").addClass("active");
    }

    if ((scroll + $(window).height()) > $(document).height()-100){
        $("a").removeClass("active");
        $("#linkConctatos").addClass("active");
    }
});

$(window).scroll();