let totalPrice = 0;

function AddProduct(event){
    event.preventDefault();
    // ProductPrice=event.target.price.value;
    // ProductName=event.target.nameofproduct.value;

    const productName = document.getElementById('nameofproduct').value;
    const sellingPrice = parseFloat(document.getElementById('price').value);
    totalPrice += sellingPrice

    // ;if (productName && !isNaN(sellingPrice)) {
    //     const product = { name: productName, price: sellingPrice };
    //     products.push(product);
     

// console.log(sellingPrice)
    
    
    

   
    const Productdetails={
        sellingPrice,
        productName 
    }
    localStorage.setItem('products', JSON.stringify(Productdetails));


   const list=document.createElement('li');
  const listofAllproducts=document.querySelector(".listofProduct");
  axios.post("https://crudcrud.com/api/4b849daab67d407aa5ebd153b50dd964/productdetails",Productdetails)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>console.log(err))


  const deletebutton=document.createElement('input');
  deletebutton.type='button';
  deletebutton.value="Delete Product";
  deletebutton.addEventListener('click',()=>{
    listofAllproducts.removeChild(list)
  })

//   const oldusers=localStorage.getItem('products')
//   const olduserbtn=document.createElement('input');
//   olduserbtn.type='button';
//   olduserbtn.value="Load Previous User";

// const loadBtn=document.querySelector('.olduser');
// loadBtn.addEventListener('click',()=>{
// //    localStorage.getItem('products')
// console.log("button clicked")

// })


  const Finalprice=document.querySelector('.finalprice');
  Finalprice.innerHTML=`In Rupees ${totalPrice}`;
   


  list.innerHTML=Productdetails.sellingPrice + ' - ' + Productdetails.productName;
  listofAllproducts.appendChild(list)
  list.appendChild(deletebutton)
   

  

}





window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/4b849daab67d407aa5ebd153b50dd964/productdetails')
    .then((res)=>{
        
        for(var i=0;i<res.data.length;i++){
            ShowUser(res.data[i])
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    
})


function ShowUser(Productdetails){

    //  Productdetails={
    //     _id:'',
    //     sellingPrice:'',
    //     productName:''

    //  }
    document.getElementById('nameofproduct').value='';
    document.getElementById('price').value='';

    const listofAllproducts=document.querySelector(".listofProduct");
    const list=document.createElement('li');
    list.classList.add('newlist');

    list.innerHTML=`  ${Productdetails.productName} - ${Productdetails.sellingPrice}  `
    const deletebutton=document.createElement('input');
    deletebutton.type='button';
    deletebutton.value="Delete Product";
    deletebutton.addEventListener('click',()=>{
      listofAllproducts.removeChild(list)
      axios.delete(`https://crudcrud.com/api/4b849daab67d407aa5ebd153b50dd964/productdetails/${Productdetails._id}`)
      .then(res=>removeUser(res))
      .catch(err=>console.log(err))
    })
    list.appendChild(deletebutton)
    listofAllproducts.appendChild(list);

}

function removeUser(){
    const listofAllproducts=document.querySelector(".listofProduct");
    const listofprdt=document.querySelector('.newlist');

    listofAllproducts.removeChild(listofprdt);


}



