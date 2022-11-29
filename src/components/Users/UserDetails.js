import React from 'react'
import { Card,CardBody,Row,Col } from "reactstrap"
const UserDetails = (props) => {
  return (
    <Card style={{ marginBottom: "2rem" }}>
        <CardBody>
            <Row>
                <Col md={5}>
                    <img style={{
                        width: "85px",
                        height: "80px",
                        borderRadius: "50%"
                    }} src={props.user.avatar} alt={props.user.name} />
                </Col>
                <Col md={7}>
                    <h3 style={{ color: `${props.changed === true ? "red" : "black"}` }}>{props.user.name}</h3>
                    <p>{props.user.classe}</p>
                </Col>
            </Row>
        </CardBody>
    </Card>
  )
}

export default UserDetails