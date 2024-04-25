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
import { BasicProvince,BasicDistrict,BasicSectors,BasicCell, Country, CustomisedSelector, Data, Daydata, GroupFilterOption, Groupoption, Hide, Multiple, MultipleGroup, Options, SingleGroup, Singlerow, Yeardata, animatedComponents, groupedOptions, groupfilter, multiDisable, option } from '../../data/elementsdata'



const headers = [
  { label: "Task Name", key: "name" },
  { label: "Creator", key: "created_by" },
  { label: "assignees", key: "assignees" },
  { label: "projects", key: "projects" },
  { label: "start_date", key: "start_date" },
  { label: "end_date", key: "end_date" },
  { label: "priority", key: "priority" },
  { label: "description", key: "description" },
];



import { DataTabless,ExportCSV,ResponsiveDataTable } from "../tables/datatables/data/responsivedatatable";
function NewPatient() {  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [names, setName] = useState("");
  const [patientInsuranceDto, setpatientInsuranceDto] = useState([]);
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [contactPerson, setcontactPerson] = useState();
  const [contactPersonPhoneNumber, setcontactPersonPhoneNumber] = useState();
  const [locationId, setlocationId] = useState([]);
  const [patientId, setpatientId] = useState(false);
  const [insuranceId, setinsuranceId] = useState("");
  const [affiliationCardNumber, setaffiliationCardNumber] = useState("");
  const [membershipType, setmembershipType] = useState("");
  const [principalNames, setprincipalNames] = useState("");
  const [cardNumbe, setcardNumbe] = useState("");
  const [employer, setemployer] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [show, setShow] = useState(false);
  const [priority, setPriority] = useState("");
  

  const searchUser = (value) => {

    if (value === '') {
      fetchUsers(); // Reset to the original list of projects
    } else {
      const filteredUsers = users_.filter((user) => {
        const userNameLowercase = (user.names+user.email).toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return userNameLowercase.includes(searchTermLowercase)
      });

      setUsers(filteredUsers);
    }
  };




  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit =async (e) => { //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = {
      firstName:firstName,// modify body properties
      lastName:lastName,
      phoneNumber: phone,
      email: email,
      password: password,
      roleId: selectedRoles
    };
    console.log(postObj)
    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      
      "Content-Type": "application/json","Authorization":`Bearer ${my_token}`
    };
    axios 
      .post(`http://www.ubuzima.rw/rec/access/user`, postObj) //declare api Path
      .then((res) => {
        alert(JSON.stringify(res.data))
          // fetchUsers()
          // setLoading(false);
          // setShow(false);
          // alert(res.data.message)
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };

  const fetchUsers = async () => {
    let my_token = localStorage.getItem("token");
    const config = { headers: { "Content-Type": "application/json","Authorization":`Bearer ${my_token}` } };
    
    try {
      const response = await axios.get(`http://www.ubuzima.rw/rec/access/users`,config);
      setUsers(response.data);
      console.log(response.data)
      setUsers_(response.data);
      fetchRoles();
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  const fetchRoles = async () => {
    let my_token = await localStorage.getItem("token");
    const config = { headers: { "Content-Type": "application/json", "Authorization":`Bearer ${my_token}` } }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/access/roles`, config)
      .then((res) => {
        const myRoles = res.data.response.map(el=>{return({label:el.roleName,value:el.id})}) //const that assign value to the property
        setRoles(myRoles)
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();
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


                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>patient Insurance</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="patient Insurance"
                            onChange={(e) => setpatientInsuranceDto(e.target.value)}
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
                                  onChange={(e) => setPriority(e.target.value)}
                                  checked={priority === "Low"}
                                  name="priority"
                                  label="Male"
                                  value="Low"
                                  required
                                />
                              </Col>
                              <Col lg={2}>
                                <Form.Check
                                  type="radio"
                                  onChange={(e) => setPriority(e.target.value)}
                                  checked={priority === "Normal"}
                                  name="priority"
                                  label="Female"
                                  value="Normal"
                                  required
                                />
                              </Col>
                              <Col lg={2}>
                                <Form.Check
                                  type="radio"
                                  onChange={(e) => setPriority(e.target.value)}
                                  checked={priority === "High"}
                                  name="priority"
                                  label="Other"
                                  value="High"
                                  required
                                />
                              </Col>
                            </Row>
                          </div>
                        </Form.Group>
                      </Col>







                      <Col xl={6}>
                        <Form.Group>
                          <Form.Label>Birth Date</Form.Label>
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
                            isMulti
                            options={BasicProvince}
                            onChange={(e) =>
                              setSelectedAssignees(e.map((emp) => emp.value))
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
                          <Form.Label>District</Form.Label>
                          <Select
                            isMulti
                            options={BasicDistrict}
                            onChange={(e) =>
                              setSelectedProjects(e.map((pr) => pr.value))
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
                            isMulti
                            options={BasicSectors}
                            onChange={(e) =>
                              setSelectedAssignees(e.map((emp) => emp.value))
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
                            isMulti
                            options={BasicCell}
                            onChange={(e) =>
                              setSelectedProjects(e.map((pr) => pr.value))
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
                          <Form.Label>Address</Form.Label>
                          <Form.Control
                            type="text"
                            className="form-control"
                            name="example-text-input"
                            // placeholder="Address"
                            onChange={(e) => setTask(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>


                      <Form.Group className="form-group form-elements m-0">
                <div className='form-label'>Checkboxes</div>
                <div className="custom-controls-stacked">
                  <Form.Check type="checkbox" label="Vulnerable" defaultChecked />
                  <Form.Check type="checkbox" label="Indigent" />
                  <Form.Check type="checkbox" label="Macade chronique" />
                  <Form.Check type="checkbox" label="Handcare" />
                </div>
              </Form.Group>




                      

                     

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
                    

                    <Button
                      type="submit"
                      className="btn ripple btn-primary my-3"
                      style={{width:"40%", marginLeft:"320px"}}
                    >
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
