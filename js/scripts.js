// $(document).ready(function() {
//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });

$(document).ready(function(){
  var elements = ["h1", "p", "img"];
  elements.forEach(function(element){
    $(element).click(function(){
    alert("This is a(n) " + element + " tag");
    });//click function end
  });//for each end
});//doc ready function
