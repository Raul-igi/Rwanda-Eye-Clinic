import React, { useEffect, useState } from "react";
import { Link, json } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Button,
  Form,
  Modal,
  InputGroup,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import { BasicProvince,BasicDistrict,BasicSectors,BasicCell,membershipTypes, Country, CustomisedSelector, Data, Daydata, GroupFilterOption, Groupoption, Hide, Multiple, MultipleGroup, Options, SingleGroup, Singlerow, Yeardata, animatedComponents, groupedOptions, groupfilter, multiDisable, option } from '../../data/elementsdata'
import DataTable from "react-data-table-component";




const columns = [
  {
    name: "Names",
    selector: (row) => [row.names],
    sortable: true,
  },
  // {
  //   name: "Insurance",
  //   selector: (row) => [row.insuranceId],
  //   sortable: true,
  // },
  {
    name: " Email",
    selector: (row) => [row.email],
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row) => [row.phoneNumber],
    sortable: true,
  },
  {
    name: "Gender",
    selector: (row) => [row.gender],
    sortable: true,
  },

  {
    name: "Date of Birth",
    selector: (row) => [row.dob],
    sortable: true,
  },

  // {
  //   name: "Contact Person",
  //   selector: (row) => [row.contactPerson],
  //   sortable: true,
  // },

  // {
  //   name: "Contact Person Phone Number",
  //   selector: (row) => [row.contactPersonPhoneNumber],
  //   sortable: true,
  // },

  // {
  //   name: "Affiliation Card Number",
  //   selector: (row) => [row.affiliationCardNumber],
  //   sortable: true,
  // },
  // {
  //   name: "Membership Type",
  //   selector: (row) => [row.membershipType],
  //   sortable: true,
  // },
  // {
  //   name: "Principal Names",
  //   selector: (row) => [row.principalNames],
  //   sortable: true,
  // },
  
  // {
  //   name: "Card Number",
  //   selector: (row) => [row.cardNumber],
  //   sortable: true,
  // },

  // {
  //   name: "Employee",
  //   selector: (row) => [row.employer],
  //   sortable: true,
  // },

  // {
  //   name: "Expiry Date",
  //   selector: (row) => [row.expiryDate],
  //   sortable: true,
  // },
  
];



const headers = [
  { label: "Task Name", key: "name" },
  { label: "Creator", key: "created_by" },
  { label: "assignees", key: "assignees" },
  { label: "projects", key: "projects" },
  { label: "start_date", key: "start_date" },
  { label: "end_date", key: "end_date" },
  { label: "gender", key: "gender" },
  { label: "description", key: "description" },
];



import { DataTabless,ExportCSV,ResponsiveDataTable } from "../tables/datatables/data/responsivedatatable";
function NewPatient() {  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [names, setName] = useState("");
  const [patients_,setPatients_] =useState("");
  const [patients,setPatients] =useState("");
  const [insuranceId, setInsuranceId] = useState("");
  const [insurances, setInsurances] = useState();
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const [contactPerson, setcontactPerson] = useState();
  const [contactPersonPhoneNumber, setcontactPersonPhoneNumber] = useState();
  const [locationId, setlocationId] = useState([]);
  const [patientId, setpatientId] = useState(false);
  const [affiliationCardNumber, setaffiliationCardNumber] = useState("");
  const [membershipType, setmembershipType] = useState("");
  const [principalNames, setprincipalNames] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [employer, setemployer] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [show, setShow] = useState(false);
  const [selectedAssignees, setSelectedAssignees] = useState([]);


  













  





  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit =async (e) => { //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = JSON.stringify({ //postObj
      names:names,// modify body properties
      email: email,
      phoneNumber: phoneNumber,
      gender:gender,
      dob: dob,
      contactPerson: contactPerson,
      contactPersonPhoneNumber: contactPersonPhoneNumber,
      locationId:null,
      status:"INDIGENT",
      patientInsuranceDto:{
        insuranceId: insuranceId,
        affiliationCardNumber: affiliationCardNumber,
        membershipType: membershipType,
        principalNames: principalNames,
        cardNumber: cardNumber,
        employer: employer,
        expiryDate: expiryDate,
        ticket:0
        
      },
    });
    console.log(postObj);
    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`,
    };
    axios
      .post(`http://www.ubuzima.rw/rec/patient`, postObj) //declare api Path
      .then((res) => {
       console.log(res.data)
        setShow(false);
        if (res.data.status === true) {
          alert("Department Added successfully");
          fetchPatients();
        } else {
          alert("something went wrong");
        }
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };

  const fetchPatients = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/patient`,
        config
      );
      setPatients_(response.data.response);
      setPatients(response.data.response);
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  // const fetchUsers = async () => {
  //   let my_token = localStorage.getItem("token");
  //   const config = { headers: { "Content-Type": "application/json","Authorization":`Bearer ${my_token}` } };
    
  //   try {
  //     const response = await axios.get(`http://www.ubuzima.rw/rec/access/users`,config);
  //     setUsers(response.data);
  //     console.log(response.data)
  //     setUsers_(response.data);
  //     fetchRoles();
  //   } catch (error) {
  //     console.error("Error fetching payrolls:", error);
  //   }
  // };

  const fetchInsurances = async () => {
    let my_token = await localStorage.getItem("token");
    const config = { headers: { "Content-Type": "application/json", "Authorization":`Bearer ${my_token}` } }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/patient/insurances`, config)
      .then((res) => {
        const insurances = res.data.response.map(el=>{return({label:el.name,value:el.id})}) //const that assign value to the property
        setInsurances(insurances)
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchPatients();
    fetchInsurances();
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>New Patient</Card.Title>
              <Row>
            <Col>
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
                onChange={(e)=>searchUser(e.target.value)}
              />
            </Col>
            <Col>
              <Button variant="primary" onClick={handleShow}>
                Create New Patient
              </Button>
            </Col>
          </Row>
              
            </Card.Header>
            <Card.Body>

            <Card.Body> 
              <DataTable columns={columns} data={patients} pagination /> 
            </Card.Body>
            
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Col lg={12} className="col-md-">
              <Card className="custom-card">
                <Card.Header>
                  <Card.Title>Create New Patient</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex flex-column">
                    <Row>
                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Names</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="names"
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>


                      <Col lg={6} >
                <Form.Group className="form-group">
                  <Form.Label>Insurance</Form.Label>
                  <Select
                    className="basic-single"
                    options={insurances}
                    onChange={(e) => setInsuranceId(e.value)}
                    classNamePrefix="Select2"
                    placeholder="Select them"
                    required
                  />
                </Form.Group>
              </Col>





                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>


                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="phone number"

                            onChange={(e) => setphoneNumber(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>




                   
                      <Col lg={6}>
                        <Form.Group className="form-group form-elements">
                          <div className="form-label">Gender</div>
                          <div className="custom-controls-stacked">
                            <Row>
                              <Col lg={2}>
                                <Form.Check
                                  type="radio"
                                  onChange={(e) => setGender(e.target.value)}
                                  checked={gender === "MALE"}
                                  name="gender"
                                  label="Male"
                                  value="MALE"
                                  required
                                />
                              </Col>
                              <Col lg={2}>
                                <Form.Check
                                  type="radio"
                                  onChange={(e) => setGender(e.target.value)}
                                  checked={gender === "FEMALE"}
                                  name="gender"
                                  label="Female"
                                  value="FEMALE"
                                  required
                                />
                              </Col>
                             
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>







                      <Col xl={6}>
                        <Form.Group>
                          <Form.Label>Date of Birth</Form.Label>
                          <Form.Control
                            type="date"
                            className="form-control"
                            name="start-date-input"
                            // placeholder="Start date.."
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>


                      
                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Contact Person</Form.Label>
                          <Form.Control
                            type="email"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="Contact Person"
                            onChange={(e) => setcontactPerson(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>


                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Contact Person Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="phone number"

                            onChange={(e) => setcontactPersonPhoneNumber(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>


                     

                      <Col xl={6} style={{ marginTop: 15 }}>
                        <Form.Group className="form-group">
                          <Form.Label>Province</Form.Label>
                          <Select
                            
                            options={BasicProvince}
                            onChange={(e) =>
                              setSelectedAssignees(e.value)
                            }
                            classNamePrefix="Select2"
                            className="multi-select"
                            // placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col>


{/* 
                      <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group className="form-group">
                  <Form.Label>Insurance</Form.Label>
                  <Select
                    className="basic-single"
                    options={insurances}
                    onChange={(e) => setInsuranceId(e.value)}
                    classNamePrefix="Select2"
                    placeholder="Select them"
                    required
                  />
                </Form.Group>
              </Col> */}





                      


                      



                              





                      <Col xl={6} style={{ marginTop: 15 }}>
                        <Form.Group className="form-group">
                          <Form.Label>District</Form.Label>
                          <Select
                            
                            options={BasicDistrict}
                            onChange={(e) =>
                              setSelectedAssignees(e.value)
                            }
                            classNamePrefix="Select2"
                            className="multi-select"
                            // placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col>




                      <Col xl={6} style={{ marginTop: 15 }}>
                        <Form.Group className="form-group">
                          <Form.Label>Sector</Form.Label>
                          <Select
                          
                            options={BasicSectors}
                            onChange={(e) =>
                              setSelectedAssignees(e.value)
                            }
                            classNamePrefix="Select2"
                            className="multi-select"
                            // placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col xl={6} style={{ marginTop: 15 }}>
                        <Form.Group className="form-group">
                          <Form.Label>Cell</Form.Label>
                          <Select
                            
                            options={BasicCell}
                            onChange={(e) =>
                              setSelectedAssignees(e.value)
                            }
                            classNamePrefix="Select2"
                            className="multi-select"
                            // placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col>

                      
    
              

                      <Col xl={6}>
                        <Form.Group className="form-group">
                        <Form.Label>Affiliation Card Number</Form.Label>
                          <Form.Control
                            type="number"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="Address"
                            onChange={(e) => setaffiliationCardNumber(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>

{/* 
                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Membership Type</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="Address"
                            onChange={(e) => setmembershipType(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col> */}





                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Membership Type</Form.Label>
                          <Select
                            
                            options={membershipTypes}
                            onChange={(e) =>
                              setmembershipType(e.value)
                            }
                            classNamePrefix="Select2"
                            className="multi-select"
                            // placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col>


                      


                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Principal Names</Form.Label>
                          <Form.Control
                            type="Text"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="Address"
                            onChange={(e) => setprincipalNames(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>



                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Card Number</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="Address"
                            onChange={(e) => setcardNumber(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Employee</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="Address"
                            onChange={(e) => setemployer(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>


                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Expiry Date</Form.Label>
                          <Form.Control
                            type="Date"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="Address"
                            onChange={(e) => setexpiryDate(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>





                      


                      

                     

                      {/* <Col lg={12} style={{ marginTop: 15 }}>
                        <Form.Group className="form-group">
                          <Form.Label>
                            Choose files (You can choose multiple at the same
                            time).
                          </Form.Label>
                          <Form.Control
                            type="file"
                            multiple
                            className="border-right-0 browse-file"
                            placeholder="Upload file"
                            onChange={(e) => setFiles(e.target.files)}
                          />
                        </Form.Group>
                      </Col> */}
                    </Row>
                    

                    {/* <Button
                      type="submit"
                      className="btn ripple btn-primary my-3"
                      style={{width:"40%", marginLeft:"320px"}}
                    >
                      Submit
                    </Button> */}

                    <Button type="submit"
                    className="btn ripple btn-primary my-3"
                    style={{width:"40%", marginLeft:"320px"}}
                    variant="primary" onClick={handleSubmit}>
                    Submit
                    </Button>


                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Modal.Body>
        </Form>
      </Modal>
    </div>
  );
}

export default NewPatient;
