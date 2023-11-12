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

