$(document).ready(function(){
  $('#Track-Form').submit(function(event){
    event.preventDefault();

    var inputQuestion1 = $("input:radio[name=size-company]:checked").val();
    var inputQuestion2 = $("input:radio[name=style-language]:checked").val();
    var inputQuestion3 = $("input:radio[name=discipline-preference]:checked").val();
    var inputQuestion4 = ("select#company-preference").val();
    var inputQuestion5 = $("input:radio[name=program-care]:checked").val();

    
  });
});
