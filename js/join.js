
var Useremail = document.querySelector("#Useremail"); 
var Userpass = document.querySelector("#Userpass");
var btn = document.querySelector(".form-button");
btn.onclick = function(e) {
   login();   
   e.preventDefault();
}
var w = document.querySelector("#lin");
var y =document.querySelector("#login");
var r =document.querySelector("#reset");

w.onclick = function(){
    y.style .display = "none";
    r.style .display = "flex";
};

async function login() {
     var user = {
        email: Useremail.value,
        password: Userpass.value,
    }
 console.log(user)

    var response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
        method: "POST",
        headers: {'content-type': 'Application/json'},
        body: JSON.stringify(user)
    })

    var data = await response.json();
    if (data.message === "success") {
        window.location.href ='../index.html';
    }
    console.log(data);
console.log("API Response:", data);
alert(JSON.stringify(data));
}