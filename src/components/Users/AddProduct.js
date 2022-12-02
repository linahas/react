import React, { useState,useEffect } from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter,Spinner } from "reactstrap"
import axios from "axios";
const AddProduct = ({open, toggle,product,setproduct}) => {
    const [nom, setnom] = useState("");
    const [price, setprice] = useState("");
    const [quantite, setquantite] = useState("");
    const [loading, setloading] = useState(false)
    const handleNom = (e) => {
        setnom(e.target.value);
    }
    const handlePrice = (e) => {
        setprice(e.target.value);
    }
    const handleQtty = (e) => {
        setquantite(e.target.value)
    }

    const handleAddProduct = async () => {
        let data = {
            nomProd: nom,
            quantite: quantite,
            prix: price,
            categorie: "6389ef65dd760e9b2a6c29f1"
        }
        setloading(true)
        let newproduct = await axios.post("http://127.0.0.1:9900/api/products/new",data,{
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(newproduct)
        setproduct(newproduct.data)
    }

    useEffect(() => {
        if (product !== null) {
            setloading(false)
            toggle();
        }
    }, [product])
    

    return (
        <Modal isOpen={open}>
            <ModalBody>
                <Input
                    style={{ marginBottom: "1rem" }}
                    onChange={handleNom}
                    placeholder='Nom du produit'
                    value={nom}
                />
                <Input 
                    style={{ marginBottom: "1rem" }}
                    type='number' 
                    onChange={handlePrice} 
                    placeholder='Price du produit' 
                    value={price} 
                />
                <Input 
                    style={{ marginBottom: "1rem" }}
                    type='number' 
                    onChange={handleQtty} 
                    placeholder='Quantité du produit' 
                    value={quantite} 
                />
            </ModalBody>
            <ModalFooter>
                <Button 
                    onClick={handleAddProduct}
                > { loading ? <Spinner /> : "Add" } 
                </Button>
            </ModalFooter>
        </Modal>

    )
}

export default AddProduct