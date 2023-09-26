function validation(){

var name = document.getElementById('inputname').value;
var contact = document.getElementById('inputcontact').value;
var city = document.getElementById('inputCity').value;
var zip = document.getElementById('inputZip').value;




var namecheck = /^[A-Za-z]{2,}$/;
var contactcheck = /^[6789][0-9]{9}$/;
var citycheck = /^[A-Za-z]{2,}$/;
var zipcheck = /^[0-9]{6}$/;


if(namecheck.test(name)){
    document.getElementById('error-name').innerHTML = "";

}
else{
    document.getElementById('error-name').innerHTML = "Use only Alphabets"
    return false;
}

if(contactcheck.test(contact)){
    document.getElementById('error-contactnumber').innerHTML = "";

}
else{
    document.getElementById('error-contactnumber').innerHTML = "Enter a valid number"
    return false;
}

if(citycheck.test(city)){
    document.getElementById('error-inputcity').innerHTML = "";

}
else{
    document.getElementById('error-inputcity').innerHTML = "Use only alphabets"
    return false;
}

if(zipcheck.test(zip)){
    document.getElementById('error-inputzip').innerHTML = "";

}
else{
    document.getElementById('error-inputzip').innerHTML = "Enter correct pincode"
    return false;
}
}

function registration(){

var name1 = document.getElementById('inputname1').value;
var email = document.getElementById('inputemail').value;
var number = document.getElementById('inputnumber').value;
var pass = document.getElementById('inputpass').value;
var cp = document.getElementById('inputcp').value;

var name1check = /^[A-Za-z]{2,}$/;
var emailcheck = /^[A-Za-z0-9._]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z]{2,6}$/;
var numbercheck = /^[6789][0-9]{9}$/;
var passcheck =  /^[A-Za-z0-9!@#$%^&*_]{8,16}$/;

if(name1check.test(name1)){
    document.getElementById('error-name1').innerHTML = "";

}
else{
    document.getElementById('error-name1').innerHTML = "Use only Alphabets"
    return false;
}
if(emailcheck.test(email)){
    document.getElementById('error-email').innerHTML = "";

}
else{
    document.getElementById('error-email').innerHTML = "Invali email syntax. Ex abc@xyz.com"
    return false;
}
if(numbercheck.test(number)){
    document.getElementById('error-number').innerHTML = "";

}
else{
    document.getElementById('error-number').innerHTML = "Enter a valid Number"
    return false;
}
if(passcheck.test(pass)){
    document.getElementById('error-pass').innerHTML = "";

}
else{
    document.getElementById('error-pass').innerHTML = "Use alphabets, numbers $ special character. Min:8, Max:16"
    return false;
}

if(cp.match(pass)){
    document.getElementById('error-cp').innerHTML = "";
}
else{
    document.getElementById('error-cp').innerHTML = "Password doesn't match"
    return false;
}
}