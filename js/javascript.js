$(document).ready(function() {
$("form#letter1").submit(function(event) {
    var americainput = $("input#america").val();

     $(".america").text(americainput);

    event.preventDefault();

    $("#letter").show();
  });
  });
