$(document).ready()
  $("form#input-form").submit(function(event) {
    event.preventDefault();
    const side1 = $("input#side-1").val();
    const side2 = $("input#side-2").val();
    const side3 = $("input#side-3").val();

    if(side1 === side2 === side3) {
      $("span#triangle-id").text("An Equilateral triangle!");
     } else if(side1 === side2 || side2 === side3 || side3 === side1) {
      $("span#triangle-id").text("An Isosceles triangle");
      } else if(side1 != side2 && side2 != side3 && side3 != side1) {
        $("span#triangle-id").text("A Scalene triangle!");
      } else {
        $("span#triangle-id").text("Not a triangle!");
      }
});
