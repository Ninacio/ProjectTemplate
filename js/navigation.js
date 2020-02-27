
// This is preparation done on the page startup to setup the initial page start
  $().ready(function(){

    hideErrorAlerts();

    $("#personalLink a").click(function(){
      showPersonalDetails(); 
      return false;
    });

    $("#carLink a").click(function(){
      showCarDetails(); 
      return false;
    });

    $("#quoteLink a").click(function(){
      showQuoteDetails(); 
      return false;
    });
  });

  function showCarDetails() {
    
    
    // Hide the personal details section (dvPersonalDetails)
    $('#dvPersonalDetails').hide();
    // Hide the quote section (dvQuoteDetails)
    $('#dvQuoteDetails').hide();
    // Show the car details section (dvCarDetails)
    $('#dvCarDetails').show();
    
    if ($("#txtName").val() != "" && $("#txtNum").val() != "" && $("#Male").val() != "" && $("#Female").val() != "" && $("#txtTown").val() != "" && $("#txtAddress").val() != "" && $("#Select").val() != "")
    {
     $('#dvPersonalDetails').hide();
     $('#dvCarDetails').show(); 
    }
    else
    {
     $('#dvPersonalDetailsAlert').show();
    
      
      
      
    }

    
  }

  function showPersonalDetails() {
      // Hide the car details section (dvCarDetails)
      $('#dvCarDetails').hide();
      // Hide the quote section (dvQuoteDetails)
      $('#dvQuoteDetails').hide();
      // Show the personal details section (dvPersonalDetails)
      $('#dvPersonalDetails').show();
  }

  function showQuoteDetails() {
      // Hide the car details section (dvCarDetails)
      $('#dvCarDetails').hide();
      // Hide the personal details section (dvQuoteDetails)
      $('#dvPersonalDetails').hide();
      // Show the quote section (dvPersonalDetails)
      $('#dvQuoteDetails').show();

      if ($("#txtName").val() != "" && $("#txtNum").val() != "" && $("#Male").val() != "" && $("#Female").val() != "" && $("#txtTown").val() != "" && $("#txtAddress").val() != "" && $("#Select").val() != "")
      {
        getQuote()
        $('#dvCarDetails').hide();
        $('#dvQuoteDetails').show(); 
       }
       else
       {
        $('#dvCarDetailsAlert').show();
       }

  function getQuote() {

    // Perform validation to test that all data has been entered

    if (true /* Page is Valid */)
    {

      // Get the values from the page elements that you need to create your JSON
      var JSON = { age : ""+$('age')+"", gender : ""+$('male')+""} 

      $.ajax({
          type: "POST",
          url: "http://localhost:53753/api/CalculateRates",
          data: JSON
        }).done(function(msg) {
          // Put the return value into Label created on quote details
          $('#txtQuote').text(msg.result)
          alert(msg.result)
          // Hide the Car Details section
          // Display the quote details page
      });
  }
  }
}
//################################# Helper Functions - look at these when validating and changing section #########################################

  // Use this function to "Reset" the form and hide all 3 error sections whenever you make a section transition
  function hideErrorAlerts()
  {
    $("#dvPersonalDetailsAlert").hide();
    $("#dvCarDetailsAlert").hide();
    $("#dvQuoteDetailsAlert").hide();
  }

  // This function will control the top navigation and set the active tab when you make a section transition
  // You will need to call it and pass in the tab that needs to be made active
  function setActiveNavigation(activeTab) {
    $(".nav li").removeClass("active");

    $("#" + activeTab).addClass("active");
    }
   
