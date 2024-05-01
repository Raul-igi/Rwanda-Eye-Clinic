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
import { ECaseType, EVisitType } from "../../data/elementsdata";

const columns = [
  {
    name: "Names",
    selector: (row) => [row.names],
    sortable: true,
  },
];

// const columns = [
//   {
//     name: "FIRST NAME",
//     selector: (row) => [row.firstName],
//     sortable: true,
//   },
//   {
//     name: "LAST NAME",
//     selector: (row) => [row.lastName],
//     sortable: true,
//   },

//   {
//     name: " PHONE NUMBER",
//     selector: (row) => [row.phoneNumber],
//     sortable: true,
//   },
//   {
//     name: "EMAIL",
//     selector: (row) => [row.email],
//     sortable: true,
//   },
// ];

import {
  DataTabless,
  ExportCSV,
  ResponsiveDataTable,
} from "../tables/datatables/data/responsivedatatable";
import DataTable from "react-data-table-component";
function Visits() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientsInsurances,setPatientsInsurances] =useState("");
  const [patientsInsuranceId, setpatientsInsuranceId] = useState("");

  const [patientInsuranceId, setPatientInsuranceId] = useState("");
  const [visitType, setVisitType] = useState("");
  const [caseType, setCaseType] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [visits, setVisits] = useState();
  const [visits_, setVisits_] = useState();
  const [show, setShow] = useState(false);

  const searchUser = (value) => {
    if (value === "") {
      fetchvisits(); // Reset to the original list of projects
    } else {
      const filteredvisits = visits_.filter((user) => {
        const userNameLowercase = (user.names + user.email).toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return userNameLowercase.includes(searchTermLowercase);
      });

      setvisits(filteredvisits);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = JSON.stringify({
      patientId: patientId, // modify body properties
      patientInsuranceId: patientInsuranceId,
      visitType: visitType,
      caseType: caseType,
      doctorId: doctorId,
    });
    console.log(postObj);
    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`,
    };
    axios
      .post(`http://www.ubuzima.rw/rec/visit`, postObj) //declare api Path
      .then((res) => {
        console.log(res.data);
        setShow(false);
        if (res.data.status === true) {
          alert("Department Added successfully");
          fetchvisits();
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

  //   const fetchvisits = async () => {
  //     let my_token = localStorage.getItem("token");
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${my_token}`,
  //       },
  //     };

  //     try {
  //       const response = await axios.get(
  //         `http://www.ubuzima.rw/rec/access/visit`,
  //         config
  //       );
  //       setvisits(response.data.response);
  //       console.log(response.data);
  //       setvisits_(response.data.response);
  //       //   fetchRoles();
  //     } catch (error) {
  //       console.error("Error fetching payrolls:", error);
  //     }
  //   };

  const fetchPatients = async () => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/patient`, config)
      .then((res) => {
        // console.log(res.data);
        const patients = res.data.response.map((el) => {
          return { label: el.names, value: el.id };
        }); //const that assign value to the property
        setPatients(patients);
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };



  const fetchPatientsInsuranceID = async (id) => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        "id":id
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/patient/id`, config)
      .then((res) => {
        console.log(res.data);
        const patientsInsurances = res.data.response.patientInsurances.map((el) => {
          return { label: el.cardNumber, value: el.id };
        }); //const that assign value to the property
        setPatientsInsurances(patientsInsurances);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };







  useEffect(() => {
    fetchPatients();
    // fetchvisits();
    // fetchRoles();
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Visits</Card.Title>
              <Row>
                <Col>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    onChange={(e) => searchUser(e.target.value)}
                  />
                </Col>
                <Col>
                  <Button variant="primary" onClick={handleShow}>
                    Register New Visitor
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <DataTable columns={columns} data={visits} pagination />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Register New Visitor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              {/* <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Patient ID</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="example-text-input"
                    placeholder="Patient ID"
                    onChange={(e) => setPatientId(e.target.value)} // value onChange on input is the third step
                    required
                  />
                </Form.Group>
              </Col> */}

              <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Label>Patient ID</Form.Label>
                  <Select
                    className="basic-single"
                    options={patients}
                    onChange={(e) => {setPatientId(e.value);fetchPatientsInsuranceID(e.value)}} // value onChange on input is the third step
                    classNamePrefix="Select2"
                    placeholder="Select them"
                    required
                  />
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Label>Patient Insurance Id</Form.Label>
                  <Select
                    className="basic-single"
                    options={patientsInsurances}
                    onChange={(e) => setPatientInsuranceId(e.value)} // value onChange on input is the third step
                    classNamePrefix="Select2"
                    placeholder="Select them"
                    required
                  />
                </Form.Group>
              </Col>

              <Col xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>Visit Type</Form.Label>
                  <Select
                    options={EVisitType}
                    onChange={(e) => setVisitType(e.value)}
                    classNamePrefix="Select2"
                    className="multi-select"
                    placeholder="Case Type"
                    required
                  />
                </Form.Group>
              </Col>

              <Col xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>Case Type</Form.Label>
                  <Select
                    options={ECaseType}
                    onChange={(e) => setCaseType(e.value)}
                    EVisitType
                    classNamePrefix="Select2"
                    className="multi-select"
                    placeholder="Case Type"
                    required
                  />
                </Form.Group>
              </Col>

              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Doctor Id</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control "
                    name="example-text-input"
                    placeholder="Doctor Id"
                    onChange={(e) => setDoctorId(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Visits;
