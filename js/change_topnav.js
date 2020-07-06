//changing the color of the topnav buttons

var top1 = $("#home").offset().top;
var top2 = $("#about").offset().top;
var top3 = $("#contact").offset().top;

$(document).scroll(function () {
  var scrollPos = $(document).scrollTop();

  var hoverHome = $(".topnav #topnav-home").hover(
    function isHover() {
      $(this).css("color", "purple");
    },
    function notHover() {
      $(this).css("color", "var(--color-txt)");
    }
  );
  
  var hoverAbout = $("#topnav-about").hover(
    function () {/* hover ativado */
      $(this).css("color", "purple");
    },
    function () {/* hover desativado */
      $(this).css("color", "var(--color-txt)");
    }
  );
  
  var hoverContact = $("#topnav-contact").hover(
    function () {
      $(this).css("color", "purple");
    },
    function () {
      $(this).css("color", "var(--color-txt)");
    }
  );

  if (scrollPos >= top1 && scrollPos < top2) {
    $("#topnav-about").css("color", "var(--color-txt)");
    $("#topnav-contact").css("color", "var(--color-txt)");
    $(".topnav #topnav-home").css("color", "purple");
    $(".topnav #topnav-home").css("border-color", "purple");
    $("#topnav-about").css("border-color", "var(--bg-topnav)");
    $("#topnav-contact").css("border-color", "var(--bg-topnav)");
    
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $("#topnav-about").css("color", "purple");
    $("#topnav-contact").css("color", "var(--color-txt)");
    $("#topnav-home").css("color", "var(--color-txt)");
    $(".topnav #topnav-home").css("border-color", "var(--bg-topnav)");
    $("#topnav-about").css("border-color", "purple");
    $("#topnav-contact").css("border-color", "var(--bg-topnav)");

  } else if (scrollPos >= top3) {
    $("#topnav-about").css("color", "var(--color-txt)");
    $("#topnav-contact").css("color", "purple");
    $("#topnav-home").css("color", "var(--color-txt)");
    $("#topnav-contact").css("border-color", "purple");
    $(".topnav #topnav-home").css("border-color", "var(--bg-topnav)");
    $("#topnav-about").css("border-color", "var(--bg-topnav)");
    
  }
});
