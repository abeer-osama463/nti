var btnRig = document.querySelector('#btn');
var UserName = document.querySelector('#UserName');
var UserEmail = document.querySelector('#UserEmail');
var UserPass = document.querySelector('#UserPass');
var UserRePass = document.querySelector('#UserRePass');
var UserPhone = document.querySelector('#UserPhone');

async function Rigster() {
  var data = {
    name: UserName.value,
    email: UserEmail.value,
    password: UserPass.value,
    rePassword: UserRePass.value,
    phone: UserPhone.value,
  };

  var res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(data),
  });

  var finalRes = await res.json();
  console.log(finalRes);
  if(finalRes.message =="success"){
    window.location.href = '../login1.html'
  }
}


btnRig.addEventListener('click',function(e){
   Rigster();
   e.preventDefault();
})