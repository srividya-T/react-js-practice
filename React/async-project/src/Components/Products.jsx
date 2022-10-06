import React from 'react'

const Products = () => {
    const getAllproducts = async () =>{
        var productInfo = await fetch("https://fakestoreapi.com/users");
        var users = await productInfo.json()
        console.log(users)
    }
  return (
    <div>
        <button onClick={getAllproducts}>Get All Products</button>
    </div>
  )
}

export default Products