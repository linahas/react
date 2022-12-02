import React from 'react'
import { Card, CardBody } from 'reactstrap'

const ProductDetails = ({product}) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
        <CardBody >
        <h3> {product.nomProd} </h3>
        <h5 style={{ color: "green" }}> {product.prix} TND </h5>
        <h5 style={{ fontWeight: "600",color: "rgb(96 244 194)" }}> {product.quantite} </h5>
        </CardBody>
    </Card>
  )
}

export default ProductDetails