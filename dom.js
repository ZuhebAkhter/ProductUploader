let totalPrice = 0;
//url=https://crudcrud.com/api/7d9859101e83483ebf3fb5c1302d8c21

function AddProduct(event){
    event.preventDefault();
    const productName = document.getElementById('nameofproduct').value;
    const sellingPrice = parseFloat(document.getElementById('price').value);
    let priceoflocal=parseFloat(localStorage.getItem('productprice'));
    if(priceoflocal!=0){
        totalPrice=sellingPrice+priceoflocal;
    }
        else{
    totalPrice += sellingPrice
        }
// }
    const Productdetails={
        sellingPrice,
        productName 
    }


   
    Posttocrud();

    async function Posttocrud(){
        try{const res= await axios.post("https://crudcrud.com/api/ccc84a868c04426e807420d8284266d5/productdetails",Productdetails)
    }
        catch{
            (err)=>console.log(err)
            
        }
    }
    // ShowUser(Productdetails);
    const listofAllproducts=document.querySelector("#listofProduct");
    const list=document.createElement('li');
    // list.classList.add('newlist');

    list.innerHTML=`  ${Productdetails.productName} - ${Productdetails.sellingPrice}  `
    const deletebutton=document.createElement('input');
    deletebutton.type="button";
    deletebutton.value="Delete Product";
    deletebutton.addEventListener('click',async()=>{

    //   axios.delete(`https://crudcrud.com/api/31df43141d8b4bfa8524091127f39de9/productdetails/${Productdetails._id}`)
    //   .then(res=>removeUser(res))
    //   .catch(err=>console.log(err))
    try{
         await axios.delete(`https://crudcrud.com/api/ccc84a868c04426e807420d8284266d5/productdetails/${Productdetails._id}`)

    }catch{
        (err)=>console.log(err)
    }
    // listofAllproducts.removeChild(list)
    // listofAllproducts.removeChild(list)
    listofAllproducts.removeChild(list);
    totalPrice=totalPrice-sellingPrice;
    const Finalprice=document.querySelector('.finalprice');
    Finalprice.innerHTML=`In Rupees ${totalPrice}`;
   
    })
    const Finalprice=document.querySelector('.finalprice');
    Finalprice.innerHTML=`In Rupees ${totalPrice}`;
    
    
    list.appendChild(deletebutton)
    listofAllproducts.appendChild(list);
  

}

function ShowUser(Productdetails){
    

    document.getElementById('nameofproduct').value='';
    document.getElementById('price').value='';

    const listofAllproducts=document.querySelector("#listofProduct");
    const list=document.createElement('li');
    // list.classList.add('newlist');

    list.innerHTML=`  ${Productdetails.productName} - ${Productdetails.sellingPrice}  `
    const deletebutton=document.createElement('input');
    deletebutton.type="button";
    deletebutton.value="Delete Product";
    deletebutton.addEventListener('click',async()=>{
        var productId = list.getAttribute("data-id");
        console.log(productId)

    //   axios.delete(`https://crudcrud.com/api/31df43141d8b4bfa8524091127f39de9/productdetails/${Productdetails._id}`)
    //   .then(res=>removeUser(res))
    //   .catch(err=>console.log(err))
    try{
         await axios.delete(`https://crudcrud.com/api/ccc84a868c04426e807420d8284266d5/productdetails/${Productdetails._id}`)

    }catch{
        (err)=>console.log(err)
    }
    // listofAllproducts.removeChild(list)
    // listofAllproducts.removeChild(list)
    listofAllproducts.removeChild(list);
    
    let localstotal=localStorage.getItem('productprice')
    
    // totalPrice=localstotal-sellingPrice;
    totalPrice=localstotal-Productdetails.sellingPrice;
    if(totalPrice<0){
        totalPrice=0;
    }
    // console.log(totalPrice)

    const Finalprice=document.querySelector('.finalprice');
    Finalprice.innerHTML=`In Rupees ${totalPrice}`;
    // deleteUser();
    localStorage.setItem("productprice", totalPrice);

    
    
    })
    list.appendChild(deletebutton)
    listofAllproducts.appendChild(list);
    



}

function removeUser(){
    const listofAllproducts=document.querySelector(".listofProduct");
    // const listofprdt=document.querySelector('.newlist');
    listofAllproducts.removeChild(list);

    // listofAllproducts.removeChild(listofprdt);



}



        window.addEventListener('DOMContentLoaded',async ()=>{
            // axios.get('https://crudcrud.com/api/31df43141d8b4bfa8524091127f39de9/productdetails1')
            // .then((res)=>{
                
            //     for(var i=0;i<res.data.length;i++){
            //         ShowUser(res.data[i])
            //     }
            // })
            // .catch((err)=>{
            //     console.log(err)
            // })
            // let price=localStorage.getItem('productprice');
            let price=0;
            const Finalprice=document.querySelector('.finalprice');
        
        
                try{ const res= await axios.get('https://crudcrud.com/api/ccc84a868c04426e807420d8284266d5/productdetails')
                for(var i=0;i<res.data.length;i++){
                            ShowUser(res.data[i])
                            price=price+(res.data[i].sellingPrice);
                        }
            }catch{
                (err)=>console.log(err)
            }
            
            Finalprice.textContent=`In Rupees ${price}`;
            localStorage.setItem("productprice",price)
        
            
            
        })









