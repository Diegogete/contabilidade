  // fadeOut do loader
  $(window).on("load", function() {
    $(".loader-container").fadeOut("slow");
    $("body").removeClass("loading");
});

  // Animação de scrolling
  window.addEventListener('load', function(){
    console.log('iniciando no load')
  })

  // animação scroll no menu
  $('.menu a').on('click', function() {
    $("html, body").animate({scrollTop: $('#'+$(this).data('section')).offset().top-120}, 500);
  });

  var alturas = {};
  $('.container-fluid').each(function () {
    alturas[$(this).prop('id')] = $(this).offset().top; 
  });

  $(window).on('scroll', function() {
    for(var seccao in alturas) {
      if($(window).scrollTop() >= alturas[seccao]) {
        $('.menu a').removeClass('ativo'); 
        $('.menu a[data-section="' +seccao+ '"]').addClass('ativo'); 
      }
    }
  });

	//inicializa popover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	});
	//inicializa tooltip
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
  });


      //Menu Mobile
      $(".menu-bt").click(function(){
        if($(".menu-aberto").hasClass("ativo")){
          $(".menu-aberto").removeClass("ativo");
        }
        else{
          $(".menu-aberto").addClass("ativo");
        }
      });


  $(function() {
    $(window).scroll(function(){
      var topo = $('#topo').height(); // altura do topo
      var scrollTop = $(window).scrollTop(); // qto foi rolado a barra
      var tamPagina = $(document).height(); // altura da página
        
      if(scrollTop > topo){
        $('#scrollSpyNav').css({'top' : 0});
      }else{
        $('#scrollSpyNav').css({'top' : 80});
      }               
    });
  });
   

  // botao toTop

    // declare variable
    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
      // declare variable
      var topPos = $(this).scrollTop();

      // if user scrolls down - show scroll to top button
      if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

      } else {
        $(scrollTop).css("opacity", "0");
      }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;

    }); // click() scroll top END