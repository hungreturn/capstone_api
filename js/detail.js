window.onload =  function () {
    const urlParams =  new URLSearchParams(window.location.search);
    const myParams = urlParams.get('productid');
    console.log('myParams',myParams);
    showDetailProduct(myParams);
}

showDetailProduct = (id)=>{
    const promise = axios({
        method : 'GET',
        url : `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    });
    promise.
    then((result)=>{
        console.log(result.data.content);
        const dataDetail = result.data.content
        renderDetail(dataDetail);
    })
    .catch((error)=>
    {
        console.log(error);
    });
};

renderDetail = (dataDetail) => {
    let {image,name,price,size,shortDescription} = dataDetail;
    const content2 = 
    `
    <div class="detailProduct">
    <div class="img"><img src="${image}" alt=""></div>
    <div class="info">
      <h2 class="h2_name">${name}</h2>
      <p>${shortDescription}</p>
      <h3>Available size</h3>
      <ul>
        <li>${size[0]}</li>
        <li>${size[1]}</li>
        <li>${size[2]}</li>
        <li>${size[3]}</li>
        <li>${size[4]}</li>
        <li>${size[5]}</li>
        <li>${size[6]}</li>
        
      </ul>
      <h2 class="h2_price">${price}$</h2>
      
    </div>
  </div>
    `;
    console.log(content2);
    document.getElementById('detail').innerHTML = content2;
};



//  show all product
var arrProduct = [];
getDataProduct = () => {
    const promise = axios({
        method : 'GET',
        url : 'https://shop.cyberlearn.vn/api/Product',
    });
    promise.
    then((result)=>{
        arrProduct  = result.data.content;
        renderDisplay(arrProduct);
    })
    .catch((error)=>
    {
        console.log(error);
    });
}
getDataProduct();


renderDisplay = (arrProduct) => {
    let content = '';
    for(const product of arrProduct){
        let {image,name,price,id} = product;
        content += 
`
    <div class="item">
          <div>
            <div class="img">
              <img style="width: 200px;" src="${image}" alt="">
            </div>
            <div class="info">
              <h2>${name}</h2>
              <button class="btn btn-dark"><a href="detail.html?productid=${id}">Buy now</a></button>
              <button class="btn btn-danger">${price}</button>
            </div>
          </div>
        </div>`;

    }
    
    document.getElementById('product').innerHTML = content;
};


