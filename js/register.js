getValueCustomer = () => {
    event.preventDefault();
    let customer = new Customer();
    let arrField =  document.querySelectorAll('form input, form select');
    for (let field of arrField){
        let{id,value} = field;
        customer[id] = value;
    }
    console.log(customer);
    updateDataCustomer(customer);
    document.querySelector('form').reset();
}

updateDataCustomer =  (customer) =>{
    let promise = axios({
        method:'POST',
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        type: 'JSON',
        data: customer,
    });

    promise.
    then(function(result){
        console.log(result.data);
    })
    .catch(function(error){
        console.log(error);
    });
};