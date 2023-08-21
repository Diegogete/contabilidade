/*
$(document).ready(function () {
  $(document).on('click','.btoMenu', function(event) {
    event.preventDefault();
    event.stopPropagation();
    var target = "#" + this.getAttribute('data-target');
    $('html, body').animate({
        scrollTop: ($(target).offset().top-100)
    }, 2000);

    $(".btoMenu").each(function (ev){
          var id = "#"+$(this).attr("data-target");
          var posAtual = ($("#" + $(this).attr("data-target")).offset().top-120);
          var winPosAtual = $(window).scrollTop();
          
          if(posAtual < winPosAtual)
          {
            $(".btoMenu").removeClass("active");
            $(this).addClass("active");
          }
    });


  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
}



//marca o cabecalho do accordion ativo
$('.panel-heading a').click(function() {
  $('.panel-heading').removeClass('active');
  $(this).parents('.panel-heading').addClass('active');
});

//oculta a .tab-pane quando clicar na aba ativa 
$('#abas li a').click(function (e) {
  var tab = $(this);
  if(tab.parent('li').hasClass('active')){
    window.setTimeout(function(){
      $(".tab-pane").removeClass('active');
      tab.parent('li').removeClass('active');
    },1);
  }
});

*/


//subir pagina ao expandir um painel
$('.collapse').on('shown.bs.collapse', function () {               
  $('html, body').animate({scrollTop:$(this).offset().top-120},500);
});



// Animação de scrolling
window.addEventListener('load', function(){
  console.log('iniciando no load')
})

// animação scroll no menu
$('.indiceLista a').on('click', function() {
  $("html, body").animate({scrollTop: $('#'+$(this).data('section')).offset().top-80}, 800);
});

var alturas = {};
$('.ancora').each(function () {
  alturas[$(this).prop('id')] = $(this).offset().top; 
});

$(window).on('scroll', function() {
  for(var seccao in alturas) {
    if($(window).scrollTop() >= alturas[seccao]) {
      $('.indiceLista a').removeClass('active'); 
      $('.indiceLista a[data-section="' +seccao+ '"]').addClass('active'); 
    }
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
      $('#scrollSpyNav').css({'top' : 100});
    }               
  });
});