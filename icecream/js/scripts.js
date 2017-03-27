$(document).ready(function(){
  var icecreams = ["Coffee", "Vanilla", "Cherry Garcia", "Pistachio", "Any Tillamook Icecream"];
  var scoopsArray;
  icecreams.forEach(function(icecream){
     $(".icecreamList").append("<li>" + icecream + "</li>");
  });

  var scoopsArray = icecreams.slice(0,3);
  // "Coffee", "Vanilla", "Cherry Garcia"
  scoopsArray.shift("Coffee");
  scoopsArray.splice(1, 0, "Coffee");
  scoopsArray.forEach(function(icecream){
    $(".icecreamList2").append("<li>" + icecream + "</li>");
  });
  console.log(scoopsArray);
  console.log(icecreams);
});
