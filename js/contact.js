function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://lmrcos56vk.execute-api.us-east-2.amazonaws.com/prod/realtysitecontact";

    // Update these lines to match the new input IDs
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var budget = document.getElementById("budget").value;
    var locations = document.getElementById("locations").value;
    var message = document.getElementById("message").value;
    var recaptchaResponse = document.getElementById('recaptcha-response').value;

    // Update this condition to match the new input fields
    if (name=="" || phone=="" || email=="" || budget=="" || locations=="" || message=="") {
        alert("Please fill all required fields");
        return false;
    }

    // Update this object to include the new input data
    var data = {
        name : name,
        phone : phone,
        email : email,
        budget : budget,
        locations : locations,
        message : message,
        receiver : "contact@jacquesrealtygroup.com",
        recaptchaResponse : recaptchaResponse
    };

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", URL);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            var response = JSON.parse(xmlhttp.responseText);
            if (xmlhttp.status === 200 ) {
                console.log('successful');
                document.getElementById("cs-form-401").innerHTML = "<h1 style='color: white;'>Thank you for your message/feedback.<br>Our team will get back to you soon!</h1>";
            } else {
                console.log('failed');
            }
        }
    }

    // Reset the form
    document.getElementById('cs-form-401').reset();
}
