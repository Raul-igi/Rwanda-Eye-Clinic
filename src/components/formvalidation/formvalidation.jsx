import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pageheader from '../../layouts/pageheader/pageheader'
import Select from 'react-select'
import { Formik } from 'formik'
// import styles from './FormValidation.module.scss'
import * as Yup from 'yup'
// // Server side
// const { Formik } = formik

const schema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  username: Yup.string().required(),
  city: Yup.string().required(),
  state: Yup.string().required(),
  zip: Yup.string().required(),
  file: Yup.mixed().required(),
  terms: Yup.bool().required().oneOf([true], 'terms must be accepted')
})

const FormValid = [
  { value: 'One', label: 'One' },
  { value: 'Two', label: 'Two' },
  { value: 'Three', label: 'Three' },
  { value: 'Four', label: 'Four' }
]

export default function FormValidation () {

  const breadcrumbs = [""];
  
  const [validated, setValidated] = useState(false)
  const state = [
    { value: 'Choose....', label: 'Choose...' },
    { value: 'USA', label: 'USA' }
  ]

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  // select

  const Options = [

    { value: 'Choose...', label: 'Choose...' },
    { value: 'USA', label: 'USA' },
    { value: 'Berlin', label: 'Berlin' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Flynn', label: 'Flynn' }
  ]

  // server
  const stateValue = [
    { value: 'Choose....', label: 'Choose...' },
    { value: 'USA', label: 'USA' }
  ]

  return (
    <Fragment>

            <Pageheader items={breadcrumbs} />
         
            <Row>
              <Col lg={12} md={12}>
                <Card>
                  <Card.Header>
                    <Card.Title>Visual Acuity</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Row className="">
                        <Form.Group as={Col} md="4" controlId="validationCustom01" className='form-group'>
                          <Form.Label>Patient Name</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                          />

                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02" className='form-group'>
                          <Form.Label>Right Eye</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            defaultValue="%"
                            placeholder="%"
                          />


                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02" className='form-group'>
                          <Form.Label>Left Eye</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            defaultValue="%"
                            placeholder="%"
                          />

                          
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02" className='form-group'>
                          <Form.Label></Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Name "
                          />


                          
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02" className='form-group'>
                          <Form.Label></Form.Label>
                          <Form.Control
                            required
                            type="text"
                            defaultValue="%"
                            placeholder="%"
                          />

                          
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername" className='form-group'>
                          <Form.Label></Form.Label>
                            <Form.Control
                              required
                              type="text"
                              defaultValue="%"
                              placeholder="%"
                            />


                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02" className='form-group'>
                          <Form.Label></Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                          />


                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02" className='form-group'>
                          <Form.Label></Form.Label>
                          <Form.Control
                            required
                            type="text"
                            defaultValue="%"
                            placeholder="%"
                          />


                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02" className='form-group'>
                          <Form.Label></Form.Label>
                          <Form.Control
                            required
                            type="text"
                            defaultValue="%"
                            placeholder="%"
                          />

                            


                            <Form.Control.Feedback type="invalid">
                              Please Enter the Patient Name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        

                      



                      </Row>
                      
                      {/* <Form.Group className="mb-3 form-group">
                        <Form.Check
                          required
                          label="Agree to terms and conditions"
                          feedback="You must agree before submitting."
                          feedbackType="invalid"
                        />
                      </Form.Group> */}
                      <Button type="submit">Send Results</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
         

         

    </Fragment>
  )
}
