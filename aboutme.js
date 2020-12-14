 
// Javascript for the tab buttons to work -->


    function openpage(Pagename,element, color) {
  
  // Declare all variables

  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them

 
  tabcontent = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";}

  tabcontent = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  
}
  tabcontent = document.getElementsByClassName("tabcontent3");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }


  // Get all elements with class="tablinks" and remove the class "active"


  tablinks = document.getElementsByClassName("tablinks");

  for (i = 0; i < tablinks.length; i++)
   {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab

  document.getElementById(Pagename).style.display = "block";
  evt.currentTarget.className += " active";
} 


  document.getElementById("defaultOpen").click();

  



// validate form by creating a function called ValidateForm in HTML, define and call the function in JS

// validating the email and ensuring all letters and special characters can be used, regex is used.

  // Defiine a function ValidateEmail, and create two variables which will be compared.

  // to make sure this is only focused on the email add field use the code below:





    function validateform(){  
     var fname=document.ContactForm.fname.value;  
     var lname=document.ContactForm.lname.value;
     var PhoneNumber=document.ContactForm.PhoneNumber.value;
      var Email=document.ContactForm.Email.value;

    if (fname==null || fname==""){  
      alert("Name can not be blank");  
      
      return false;  
    }
    else if(lname ==null||lname==""){
        alert("Last name can not be blank");
        
        return false;
    }
    else if(PhoneNumber ==null||PhoneNumber==""){
        alert("Pease enter a contact number");
      
        return false;
    }
    
   else if(Email ==null||Email==""){
    alert("Email can not be blank");
    document.ContactForm.Email.focus();
    return false;
}
    
   }
  
   function ValidateEmail() {

    var reg= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var address= document.ContactForm.Email.value;
    
    if(!reg.test(address)){
    alert("Invalid email, please enter a valid email address");
      return true;
    }

  
     }

     // to validate phone number, define a function ValidatePhone and create variables.
     // To ensure only digits are used and that digits doe not exceed 11 and in the right format, use regex /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
     
     function ValidatePhone()


      {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var number=document.ContactForm.PhoneNumber.value;

        if(!phoneno.test(number)){
          alert("Please enter a valid phone number");
            return false;

      
          
        }
      
      
      }
    
  




    



