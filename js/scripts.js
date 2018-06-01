$(document).ready(function(){
  $('#Track-Form').submit(function(event){
    event.preventDefault();

    // ASSIGN VARIABLES
    var inputQuestion1 = $("input:radio[name=size-company]:checked").val();
    var inputQuestion2 = $("input:radio[name=style-language]:checked").val();
    var inputQuestion3 = $("input:radio[name=discipline-preference]:checked").val();
    var inputQuestion4 = $("select#company-preference").val();
    var inputQuestion5 = $("input:radio[name=program-care]:checked").val();

    // CHOOSING TRACK
      // SMALL & FLEXIBLE
    if (inputQuestion1 === "small" && inputQuestion2 === "flexible") {
      if (inputQuestion5 === "logic") {
        alert("PHP");
      } else {
        alert("RUBY");
      }

      // LARGE & RULES
    } else if (inputQuestion1 === "large" && inputQuestion2 === "rules") {
      if (inputQuestion4 === "1") {
        alert("C#");
      } else {
        alert("JAVA");
      }

      // Q1 AND Q2 CONFLICTING
    } else {
        // PHP TEST
      if (inputQuestion3 === "scripts" && inputQuestion5 === "logic") {
        alert("PHP");
        //C# OR JAVA TEST
      } else if (inputQuestion3 === "no-preference" && inputQuestion1 === "large") {
        if (inputQuestion4 === "1") {
        alert("C#");
        } else {
        alert("JAVA");
        }

        //RUBY OR JAVA TEST
      } else if (inputQuestion3 === "app-creation") {
        if (inputQuestion5 === "design") {
          alert("RUBY");
        } else {
          alert("JAVA");
        }
        //OUTLIERS
      } else {
        if (inputQuestion4 === "1") {
          alert("C#");
        } else if (inputQuestion4 === "2") {
          alert("JAVA");
        } else if (inputQuestion4 === "3") {
          alert("PHP");
        } else {
          alert("RUBY");
        }
      }
    }
  });
});
