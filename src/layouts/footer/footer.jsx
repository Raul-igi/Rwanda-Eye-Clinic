import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer () {
  return (
        <Fragment>
            <footer className="footer backgroundss" style={{backgroundColor:"#F4F5F7"}} >
                <div className="container">
                    <Row className="row align-items-center flex-row-reverse">
                        <Col lg={12} sm={12} className="text-center">
                            Copyright © 2024 Rwanda Eye Clinic
                        </Col>
                    </Row>
                </div>
            </footer>
        </Fragment>)
}
