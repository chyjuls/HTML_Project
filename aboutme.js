 
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

 // Only one function is used to validate the fields, to make the code easy to read
 // and to ensure web page security.



    function validateform()
    {  
     var fname=document.ContactForm.fname.value;  
     var lname=document.ContactForm.lname.value;
     var PhoneNumber=document.ContactForm.PhoneNumber.value;
    var Email=document.ContactForm.Email.value;
    var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

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
    return false;
}
 else if(!reg.test(Email)){
  alert("Invalid email, please enter a valid email address");
    return false;
  }
  else if(!phoneno.test(PhoneNumber)){
    alert("Please enter a valid phone number");
      return false;

    
   }
  
   return true;
    
  }

  
     

    
     
     


      
        
        

        
      
          
        
      
      
      
    
  




    



