import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import {
  Card,
  Col,
  Row,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import { ECaseType, EVisitType } from "../../data/elementsdata";

const columns = [
  {
    name: "Patient's names",
    selector: (row) => [row.patient?.names],
    sortable: true,
  },
  {
    name: "Patient's phone ",
    selector: (row) => [row.patient?.phoneNumber],
    sortable: true,
  },
  {
    name: "Doctor's names",
    selector: (row) => [`${row.doctor?.firstName} ${row.doctor?.lastName}`],
    sortable: true,
  },
  {
    name: "Doctor's phone",
    selector: (row) => [row.doctor?.phoneNumber],
    sortable: true,
  },
  {
    name: "Insurance",
    selector: (row) => [row.patientInsurance?.insuranceName],
    sortable: true,
  },
  {
    name: "Case Type",
    selector: (row) => [row.caseType],
    sortable: true,
  },
  {
    name: "Case Type",
    selector: (row) => [row.visitType],
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <Link
        to="/visit-details"
        state={{
          data:{
            patient:row.patient,
            doctor:`${row.doctor.firstName} ${row.doctor.lastName}`,
            createdAt:row.createdAt,
            visitId:row.id,
            visitStatus:row.status
          }
        }}
      >
        View Details
      </Link>
    ),
  },
];

import DataTable from "react-data-table-component";
function Visits() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [department, setDepartment] = useState("");
  const [patientId, setPatientId] = useState("");
  const [patientsInsurances,setPatientsInsurances] =useState([]);

  const [patientInsuranceId, setPatientInsuranceId] = useState("");
  const [visitType, setVisitType] = useState("");
  const [caseType, setCaseType] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [visits, setVisits] = useState([]);
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = JSON.stringify({
      patientId: patientId, // modify body properties
      patientInsuranceId: patientInsuranceId || null,
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
          alert("Visit added successfully");
          fetchVisits();
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

    const fetchDoctors = async (departmentId) => {
      let my_token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${my_token}`,
          "departmentId": departmentId
        },
      };

      try {
        const response = await axios.get(
          `http://www.ubuzima.rw/rec/medical/doctors/department-id`,
          config
        );
        const doctors_=response.data.response.map(el=>{return({
          label:`${el.doctor?.firstName} ${el.doctor?.lastName}`,value:el.doctor?.id
        })})
        setDoctors(doctors_);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching payrolls:", error);
      }
    };

    const fetchVisits = async () => {
      let my_token = await localStorage.getItem("token");
      let roles = await localStorage.getItem("role");
      let userRoles = JSON.parse(roles);
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${my_token}`,
          "page":1,
          "size":20
        },
      }; //incase you have to deal with ID or Options
      axios
        .get(userRoles.includes('Nurse')?`http://www.ubuzima.rw/rec/visit/nurse`:`http://www.ubuzima.rw/rec/visit/doctor`, config)
        .then((res) => {
          // console.log(res.data);

          if(res.data.status){
            setVisits(res.data.response.patientVisits);
          }
        })
        .catch((error) => {
          setLoading(false);
          setShow(false);
          console.log(error.message);
        });
    };

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

  const fetchDepartments = async () => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/medical/departments`, config)
      .then((res) => {
        const departments_ = res.data.response.map((el) => {
          return { label: el.name, value: el.id };
        }); //const that assign value to the property
        setDepartments(departments_);
      })
      .catch((error) => {
        setLoading(false);
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
          return { label: `${el.insuranceName} - ${el.cardNumber}`, value: el.id };
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
    fetchDepartments();
    fetchVisits();
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

              <Col xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>Department</Form.Label>
                  <Select
                    options={departments}
                    onChange={(e) => {setDepartment(e.value);fetchDoctors(e.value)}}
                    EVisitType
                    classNamePrefix="Select2"
                    className="multi-select"
                    placeholder="Department"
                    required
                  />
                </Form.Group>
              </Col>

              

              <Col xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>Doctor Id</Form.Label>
                  <Select
                    options={doctors}
                    onChange={(e) => setDoctorId(e.value)}
                    EVisitType
                    classNamePrefix="Select2"
                    className="multi-select"
                    placeholder="Doctor Id"
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
