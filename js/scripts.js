$(document).ready(function(){
  $('#Track-Form').submit(function(event){
    event.preventDefault();

    // ASSIGN VARIABLES
    var userName = $("input#User-Name").val();
    var userNameAgain = $("input#User-Name-Again").val();
    var inputQuestion1 = $("input:radio[name=size-company]:checked").val();
    var inputQuestion2 = $("input:radio[name=style-language]:checked").val();
    var inputQuestion3 = $("input:radio[name=discipline-preference]:checked").val();
    var inputQuestion4 = $("select#company-preference").val();
    var inputQuestion5 = $("input:radio[name=program-care]:checked").val();

    // CHECK NAME
    if (userName === "" && userNameAgain === "") {
      $(".no-error").hide();
      $(".has-error").fadeIn();
    } else {
      // INSERT NAME
      $(".Input-Name").text(userName + userNameAgain);
      // CHOOSING TRACK
        // SMALL & FLEXIBLE
      if (inputQuestion1 === "small" && inputQuestion2 === "flexible") {
        if (inputQuestion5 === "logic") {
          $("#CSharp-Info").hide();
          $("#JAVA-Info").hide();
          $("#PHP-Info").fadeIn();
          $("#RUBY-Info").hide();
        } else {
          $("#CSharp-Info").hide();
          $("#JAVA-Info").hide();
          $("#PHP-Info").hide();
          $("#RUBY-Info").fadeIn();
        }

        // LARGE & RULES
      } else if (inputQuestion1 === "large" && inputQuestion2 === "rules") {
        if (inputQuestion4 === "1") {
          $("#CSharp-Info").fadeIn();
          $("#JAVA-Info").hide();
          $("#PHP-Info").hide();
          $("#RUBY-Info").hide();
        } else {
          $("#CSharp-Info").hide();
          $("#JAVA-Info").fadeIn();
          $("#PHP-Info").hide();
          $("#RUBY-Info").hide();
        }

        // Q1 AND Q2 CONFLICTING
      } else {
          // PHP TEST
        if (inputQuestion3 === "scripts" && inputQuestion5 === "logic") {
          $("#CSharp-Info").hide();
          $("#JAVA-Info").hide();
          $("#PHP-Info").fadeIn();
          $("#RUBY-Info").hide();
          //C# OR JAVA TEST
        } else if (inputQuestion3 === "no-preference" && inputQuestion1 === "large") {
          if (inputQuestion4 === "1") {
            $("#CSharp-Info").fadeIn();
            $("#JAVA-Info").hide();
            $("#PHP-Info").hide();
            $("#RUBY-Info").hide();
          } else {
            $("#CSharp-Info").hide();
            $("#JAVA-Info").fadeIn();
            $("#PHP-Info").hide();
            $("#RUBY-Info").hide();
          }

          //RUBY OR JAVA TEST
        } else if (inputQuestion3 === "app-creation") {
          if (inputQuestion5 === "design") {
            $("#CSharp-Info").hide();
            $("#JAVA-Info").hide();
            $("#PHP-Info").hide();
            $("#RUBY-Info").fadeIn();
          } else {
            $("#CSharp-Info").hide();
            $("#JAVA-Info").fadeIn();
            $("#PHP-Info").hide();
            $("#RUBY-Info").hide();
          }
          //OUTLIERS
        } else {
          if (inputQuestion4 === "1") {
            $("#CSharp-Info").fadeIn();
            $("#JAVA-Info").hide();
            $("#PHP-Info").hide();
            $("#RUBY-Info").hide();
          } else if (inputQuestion4 === "2") {
            $("#CSharp-Info").hide();
            $("#JAVA-Info").fadeIn();
            $("#PHP-Info").hide();
            $("#RUBY-Info").hide();
          } else if (inputQuestion4 === "3") {
            $("#CSharp-Info").hide();
            $("#JAVA-Info").hide();
            $("#PHP-Info").fadeIn();
            $("#RUBY-Info").hide();
          } else {
            $("#CSharp-Info").hide();
            $("#JAVA-Info").hide();
            $("#PHP-Info").hide();
            $("#RUBY-Info").fadeIn();
          }
        }
      }
    }
  });
});
