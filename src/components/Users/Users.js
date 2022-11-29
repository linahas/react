import React, { Fragment, useEffect, useState } from 'react'
import { Container,Modal,ModalBody } from "reactstrap"
import UserDetails from './UserDetails'
const Users = () => {
    const [changed, setchanged] = useState(false)
    const [modal, setmodal] = useState(false)
    const toggledModal = () => {
        setmodal(!modal)
    }
    useEffect(() => {
    }, [])
    
    const [users, setusers] = useState([
        {
            id: 1,
            name: "ibrahim",
            classe: "MDW3.1",
            avatar: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQTBIkxproxJHBsj2ZOkeFr3CYyVJjrfW8qcovw9whTrkRjsqYnBRlprpmyAknfOsug43oiT9iqS9cJe6s"
        },
        {
            id: 1,
            name: "samir",
            classe: "MDW3.1",
            avatar: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQTBIkxproxJHBsj2ZOkeFr3CYyVJjrfW8qcovw9whTrkRjsqYnBRlprpmyAknfOsug43oiT9iqS9cJe6s"
        },
        {
            id: 1,
            name: "mohsen",
            classe: "MDW3.1",
            avatar: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQTBIkxproxJHBsj2ZOkeFr3CYyVJjrfW8qcovw9whTrkRjsqYnBRlprpmyAknfOsug43oiT9iqS9cJe6s"
        },
        {
            id: 1,
            name: "salah",
            classe: "MDW3.1",
            avatar: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQTBIkxproxJHBsj2ZOkeFr3CYyVJjrfW8qcovw9whTrkRjsqYnBRlprpmyAknfOsug43oiT9iqS9cJe6s"
        }
    ])
  return (
    <Container>
    <div>Users</div>
    <Fragment>
    <Modal isOpen={modal} toggle={toggledModal} >
        <ModalBody> aaaaaaaaaaaaaaaaaaaa </ModalBody>
    </Modal>
    { users.map((user) => {
        return(
            <UserDetails user={user} changed={changed}/>
        )
    })}
    </Fragment>
    <button onClick={toggledModal} > Changed </button>
    </Container>
  )
}

export default Users