import React, { Fragment, useEffect, useState } from 'react'
import { Button, Container,Modal,ModalBody,Spinner } from "reactstrap"
import axios from "axios"
import ProductDetails from './ProductDetails'
import AddProduct from './AddProduct'
const Users = () => {
    const [product, setproduct] = useState(null);
    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false)
    const [open, setopen] = useState(false);

    const toggleModal = () => {
        setopen(!open)
    }

    useEffect(() => {
        const fetchProducts = async () => {
            setloading(true)
            let prods = await axios.get("http://127.0.0.1:9900/api/products/")
            setproducts(prods.data.Products)
        }
        fetchProducts()
    }, [])
    
    useEffect(() => {
        const fetchProducts = async () => {
            setloading(true)
            let prods = await axios.get("http://127.0.0.1:9900/api/products/")
            setproducts(prods.data.Products)
        }
        fetchProducts()
    }, [product])
    

    useEffect(() => {
        if (products.length > 0) {
            setloading(false)
        }
    }, [products])
    

  return (
    <Container>
    <AddProduct 
        open={open}
        product={product} 
        toggle={toggleModal}
        setproduct={setproduct} 
    />
    <div>Users</div>
    {loading ? 
        <Spinner />
    :
    <Fragment>
    { products !== undefined && products !== null && products.length > 0 ?
        products.map((item) => {
            return (
                <ProductDetails product={item}/>
            )
        })
    :
        <p> no products found.</p>
    }
    </Fragment>
    }
    <Button onClick={toggleModal} className='btn btn-success'> Add Product </Button>
    </Container>
  )
}

export default Users