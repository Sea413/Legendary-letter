$(document).ready(function() {

  $("button#cat").click(function() {
  $("img#catimg").show();
  $("ul#ctext").prepend("<li id='catsays'>Cats will rule!</li>");
  $("li#catsays:eq(1)" ).remove();
  });

  $("button#dog").click(function() {
  $("img#dogimg").show();
  $("ul#dtext").prepend("<li id='dogsays'>Dogs are awesome!</li>");
  $("li#dogsays:eq(1)" ).remove();
  });




  // $(function).click(){
  //
  // }



});
