import React, { useState, useEffect } from 'react'
import { getProduct } from '../../service/api'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await getProduct()
            setProducts(response.data);
        }

        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (

        <div className='main'>
            <Navbar/>
            {products.map((product) => (

                <div key={product.pid} className='card-cli'>
                    <img src={product.productimage} className='product-cli-img'/>
                    <h2 className='product-cli-text'>{product.productname}</h2>
                    
                    <h1 className='product-cli-price'> ₹ {product.productprice} </h1>
                    <button className='product-btn'>Add to cart</button>
                </div>
            ))}


            <Footer/>
        </div>
    )
}
export default Products;
