
var products = [];
function getData() {
  var myhttp = new XMLHttpRequest();
  myhttp.open("GET", "https://ecommerce.routemisr.com/api/v1/products");
  myhttp.send();

  myhttp.addEventListener("readystatechange", function () {
    if (myhttp.readyState == 4 && myhttp.status == 200) {
      products = JSON.parse(myhttp.response).data;
      console.log(products);
      // disData()
    }
  });
}

function disData() {
  var Pro = ``;
  for (var i = 0; i < products.length; i++) {
    Pro += `
        <div class="card-collection">
            <div class="card-img">
               <img src="${products[i].imageCover}" alt="">
            </div>
            <div class="card-info">
              <span>${products[i].category.name}</span><br>
              <br>
              <a href=""> ${products[i].tittle}</a><br>
              <div class="pro-rate">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star" ></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>(0)</span>
               
              </div>
              <br>
              <p> $ ${products[i].price}</p>
            </div>
            <div class="pro-controls">
              <div class="pro-con-cont">
                <img src="imag/download (28).svg" alt="">
              </div>
            <div class="pro-con-cont">
               <img src="imag/download (31).svg" alt="">
              </div>
              <div class="pro-con-cont">
              <img src="imag/download (30).svg" alt="">
            </div>
              <div class="pro-con-cont">
               <img src="imag/download (27).svg" alt=""> 
              </div>
            </div>
          </div>
        `;
  }
  document.querySelector(".Collection").innerHTML = Pro;
}
 getData();