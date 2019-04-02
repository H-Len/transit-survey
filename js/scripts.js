$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});


//Other uses for Checkbox Data:
// Do note that you can do far more than simply display a user's responses back to them. The important part here is learning how to target currently-checked checkboxes with jQuery. Once you're able to do this, you could do anything with this information.
//
// For instance, we could set the values of checked boxes aside in an array:
//
// ...
//   var userResponses = [];
//   $("input:checkbox[name=work-transportation]:checked").each(function(){
//       var workTransportationMode = $(this).val();
//       userResponses.push(workTransportationMode);
//     });
// ...
// Or we could manipulate this data in whatever fashion we please:
//
// ...
//   $("input:checkbox[name=work-transportation]:checked").each(function(){
//       var workTransportationMode = $(this).val();
//       var capitalWorkTransportationMode = workTransportationMode.toUpperCase();
//       ...
//     });
// ...
