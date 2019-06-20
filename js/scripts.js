// business logic
// var palindrome = function(string) {
//
// }


// user interface logic
$(document).ready(function() {
  $("form#translate").submit(function(event) {
    event.preventDefault();

    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var strings = $("input#strings").val();
    var array1 = strings.split(" ");

    array1.forEach(function(array) {

      if (array == numbers) {
        $(".pigLatin").text(array);
      } else if (array == "a" || array == "i") {
        $(".pigLatin").text(array + 'way');
      } else {
        $(".pigLatin").text(array);
      }

    });


    $("#result").show();

    console.log();
    debugger;
  });
});
