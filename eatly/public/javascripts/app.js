// $(function () {
//   alert("The Page Has Loaded!");
// });



$(function () {
  $.get("/foods").
    done(function (data) {
      console.log("RECEIVING RESPONSE");
      console.log("DATA", data);
      $(data).each(function (index, food) {
        var $food = $("<div>" + food.name + "  --  " + food.yumminess + "</div>").addClass( "foodsList" );
        $("body").append($food);
      });
    });

    $("#newFood").on("submit", function (e) {
      var $this = $(this);
      var formData = $this.serialize();
      console.log(formData);
    $.post("/foods", formData).
        done(function (data) {
        console.log("Success!");
      });
  });
});