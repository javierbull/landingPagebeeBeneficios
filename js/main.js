$(document).ready(function () {
  // var image = document.getElementsByClassName('parallax');
  // new simpleParallax(image, {
  // 	scale: 1.5

  // Show hide select tipo persona
  $("#selectTipoPersona").change(function () {
    $(this).find("option:selected").each(function () {
      var optionValue = $(this).attr("value");
      if (optionValue) {
        $(".form-box").not("." + optionValue).hide();
        $("." + optionValue).show();
      } else {
        $(".form-box").hide();
      }
    });
  }).change();
  // End Show hide select tipo persona

});
