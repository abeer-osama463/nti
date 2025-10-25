
  function toggleDiv() {
    var div = document.getElementById("myDiv");
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }

  
  var header = document.querySelector('#contact');
  var ul = document.querySelector('#contact-info'); 
  var header1 = document.querySelector('#store');
   var ul1 = document.querySelector('#store-policy');
  var header2= document.querySelector('#quick');
  var ul2 = document.querySelector('#quick-links');
  var header3 = document.querySelector('#collection');
  var ul3= document.querySelector('#collection-list');
  var header4 = document.querySelector('#app');
  var ul4 = document.querySelector('#our-app');

  header.addEventListener('click', function() {
    if (ul.style.display === 'none') {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
  })
  header1.addEventListener('click', function() {
    if (ul1.style.display === 'none') {
        ul1.style.display = 'block';
    } else {
        ul1.style.display = 'none';
    }
  })
  header2.addEventListener('click', function() {
    if (ul2.style.display === 'none') {
        ul2.style.display = 'block';
    } else {
        ul2.style.display = 'none';
    }
  })
  header3.addEventListener('click', function() {
    if (ul3.style.display === 'none') {
        ul3.style.display = 'block';
    } else {
        ul3.style.display = 'none';
    }
  })
  header4.addEventListener('click', function() {
    if (ul4.style.display === 'none') {
        ul4.style.display = 'block';
    } else {
        ul4.style.display = 'none';
    }
  })

var products = [];

async function getData(data) {
  var res = await fetch(`https://ecommerce.routemisr.com/api/v1/${data}`);
  var finalRes = await res.json();
  console.log(data, finalRes.data);
}

