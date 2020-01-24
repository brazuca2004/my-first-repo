function clearErrors() {    
    for (var loopCounter = 0; loopCounter < document.forms["contactUs"].elements.length; loopCounter++) {
        if (document.forms["contactUs"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            document.forms["contactUs"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}


function validateItems() {
    clearErrors();
    var name1 = document.forms["contactUs"]["name"].value;
    var email1 = document.forms["contactUs"]["email"].value;
    var additionalInfo1 = document.forms["contactUs"]["additionalInfo"].value;
    
    if (name1 == "") {
            alert("Please provide your name.");
            document.forms["contactUs"]["name"].parentElement.className = "form-group has-error";
            document.forms["contactUs"]["name"].focus();
            return false;
    } else if (email1 == "") {
            alert("Please provide your email address.");
            document.forms["contactUs"]["email"].parentElement.className = "form-group has-error";
            document.forms["contactUs"]["email"].focus();
            return false;
    } else if (additionalInfo1 == "") {
            alert("Please describe your inquiry in the Additional Information field.");
            document.forms["contactUs"]["additionalInfo"].parentElement.className = "form-group has-error";
            document.forms["contactUs"]["additionalInfo"].focus();
            return false;
    } else {
        document.getElementById("success").style.display = "block";
        return false;
        }
}