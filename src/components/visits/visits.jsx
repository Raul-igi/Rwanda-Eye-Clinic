import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Button, Form, Modal } from "react-bootstrap";
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
    name: "Patient's phone",
    selector: (row) => [row.patient?.phoneNumber],
    sortable: true,
  },
  {
    name: "Gender",
    selector: (row) => [row.patient?.gender],
    sortable: true,
  },
  {
    name: "DoB",
    selector: (row) => [row.patient?.dob || '-'],
    sortable: true,
  },
  {
    name: "Doctor's names",
    selector: (row) => [`${row.doctor?.firstName} ${row.doctor?.lastName}`],
    sortable: true,
  },
  {
    name: "Insurance",
    selector: (row) => [row.patientInsurance?.insuranceName || "-"],
    sortable: true,
  },
  {
    name: "Case Type",
    selector: (row) => [row.caseType],
    sortable: true,
  },
  {
    name: "Visit Type",
    selector: (row) => [row.visitType],
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <Link
        to="/visit-details"
        state={{
          data: {
            patient: row.patient,
            doctor: `${row.doctor?.firstName} ${row.doctor?.lastName}`,
            insurance: row.patientInsurance,
            createdAt: row.createdAt,
            visitId: row.id,
            visitStatus: row.status,
          },
        }}
      >
        View Details
      </Link>
    ),
  },
];

const columns2 = [
  {
    name: "Patient's names",
    selector: (row) => [row.patient?.names],
    sortable: true,
  },

  {
    name: "Gender",
    selector: (row) => [row.patient?.gender],
    sortable: true,
  },
  {
    name: "DoB",
    selector: (row) => [row.patient?.dob  || '-'],
    sortable: true,
  },
  {
    name: "Insurance",
    selector: (row) => [row.patientInsurance?.insuranceName || "-"],
    sortable: true,
  },
  {
    name: "Patient status",
    selector: (row) => [row.patientStatus || "-"],
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <Link
        to="/visit-details"
        state={{
          data: {
            patient: row.patient,
            doctor: `${row.doctor?.firstName} ${row.doctor?.lastName}`,
            insurance: row.patientInsurance,
            createdAt: row.createdAt,
            visitId: row.id,
            visitStatus: row.status,
          },
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
  const [voucherNumber, setVoucherNumber] = useState("");
  const [patientsInsurances, setPatientsInsurances] = useState([]);
  const [status, setStatus] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [tab, setTab] = useState('tab1');
  const [totalRows, setTotalRows] = useState(0);

  const [patientInsuranceId, setPatientInsuranceId] = useState("");
  const [visitType, setVisitType] = useState("");
  const [caseType, setCaseType] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [visits, setVisits] = useState([]);
  const [roles, setRoles] = useState([]);
  const [visits_, setVisits_] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [isMounted, setIsMounted] = useState(false); // Track if component has mounted

  useEffect(() => {
    // Set up a timer to update the debounced term after 7 seconds
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 7000); // 7 seconds

    // Clean up the timer if the component unmounts or if searchTerm changes
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    // Perform the search only if the component has mounted and the debounced term is not empty
    if (isMounted && debouncedTerm && tab == 'tab2') {
      fetchVisitsDiagnostics();
    } else {
      setIsMounted(true); // Set the flag after the first mount
    }
  }, [debouncedTerm, isMounted]);

  const [show, setShow] = useState(false);

  const searchVisits = (value) => {
    if (value === "") {
      fetchVisits(); // Reset to the original list of projects
    } else {
      const filteredVisits = setVisits_.filter((user) => {
        const userNameLowercase = (
          user.patient?.names +
          user.patient?.phoneNumber +
          user.doctor?.firstName +
          user.doctor?.lastName +
          user.doctor?.phoneNumber +
          user.patientInsurance?.insuranceName
        ).toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return userNameLowercase.includes(searchTermLowercase);
      });

      setVisits(filteredVisits);
    }
  };

  const statuses = [
    {label:"No paid private",value:"NO_PAID_PRIVATE"},
    {label:"No paid with insurance",value:"NO_PAID_WITH_INSURANCE"},
    {label:"Follow up private",value:"FOLLOW_UP_PRIVATE"},
    {label:"Follow up result",value:"FOLLOW_UP_RESULT"},
    {label:"Follow up private act",value:"FOLLOW_UP_PRIVATE_ACT"},
    {label:"Follow up medicine",value:"FOLLOW_UP_MEDECINE"},
    {label:"Follow up glasses",value:"FOLLOW_UP_GLASSES"}
  ]

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
      voucherNumber: voucherNumber,
      caseType: caseType,
      doctorId: doctorId,
      patientStatus: status
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
          alert(res.data.message);
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
        Authorization: `Bearer ${my_token}`,
        departmentId: departmentId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/medical/doctors/department-id`,
        config
      );
      const doctors_ = response.data.response.map((el) => {
        return {
          label: `${el.doctor?.firstName} ${el.doctor?.lastName}`,
          value: el.doctor?.id,
        };
      });
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
        Authorization: `Bearer ${my_token}`,
        page: currentPage,
        size: 10,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(
        userRoles.includes("Nurse")||userRoles.includes("Optometrist")
          ? `http://www.ubuzima.rw/rec/visit/nurse`
          : userRoles.includes("Doctor")
          ? `http://www.ubuzima.rw/rec/visit/doctor`
          : userRoles.includes("Administrator")
          ? `http://www.ubuzima.rw/rec/visit/all`
          : `http://www.ubuzima.rw/rec/visit/receptionist`,
        config
      )
      .then((res) => {
        // console.log(res.data);

        if (res.data.status) {
          setVisits(res.data.response.patientVisits);
          setVisits_(res.data.response.patientVisits);
          if (res.data.response.totalElements) {
            setTotalRows(res.data.response.totalElements);
          }
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
        const patients = res.data?.response?.patients?.map((el) => {
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
        Authorization: `Bearer ${my_token}`,
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
        id: id,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/patient/id`, config)
      .then((res) => {
        console.log(res.data);
        const patientsInsurances = res.data.response.patientInsurances.map(
          (el) => {
            return {
              label: `${el.insuranceName} - ${el.cardNumber}`,
              value: el.id,
            };
          }
        ); //const that assign value to the property
        setPatientsInsurances(patientsInsurances);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  const fetchVisitsDiagnostics = async (id) => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "query": searchTerm,
        "page": currentPage,
        "size": 10,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/visit/nurse/diagnostics/search`, config)
      .then((res) => {
        console.log(res.data);
        setVisits(res.data.response.patientVisits);
        setVisits_(res.data.response.patientVisits);
        if (res.data.response.totalElements) {
          setTotalRows(res.data.response.totalElements);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  const fetchTodaysVisits = async (id) => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "selectedDate": new Date().toISOString().slice(0, 10),
        "page": currentPage,
        "size": 10,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/visit/by-day`, config)
      .then((res) => {
        console.log(res.data);
        setVisits(res.data.response.patientVisits);
        setVisits_(res.data.response.patientVisits);
        if (res.data.response.totalElements) {
          setTotalRows(res.data.response.totalElements);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  useEffect(() => {
    if(tab === 'tab1'){
      fetchVisits();
    }else{
      fetchVisitsDiagnostics();
    }
  }, [currentPage]);

  useEffect(() => {
    fetchPatients();
    fetchDepartments();
    const roles_ = localStorage.getItem("role");
    const userRoles = JSON.parse(roles_);
    setRoles(userRoles);
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Visits</Card.Title>

              {(roles.includes('Nurse') || roles.includes('Receptionist') || roles.includes('Administrator'))&&(
                <div
                class="tabs"
                style={{ display: "flex", borderBottom: " 1px solid #ccc" }}
              >
                <div
                  class="tab"
                  onClick={()=>{setVisits([]); setTotalRows(0); setTab('tab1');fetchVisits()}}
                  style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    border: "1px solid #ccc",
                    borderBottom: tab === 'tab1'?"3px solid #467FCF":"none",
                    backgroundColor: tab === 'tab1'?'white':"#f1f1f1",
                    fontWeight: tab === 'tab1'?'bold':"normal",
                  }}
                  id="tab1"
                >
                  
                  All Visits
                </div>

                {roles.includes('Nurse') && (
                  <div
                    class="tab"
                    onClick={()=>{setVisits([]);  setTotalRows(0); setTab('tab2');fetchVisitsDiagnostics()}}
                    style={{
                      padding: "10px 20px",
                      cursor: "pointer",
                      border: "1px solid #ccc",
                      borderBottom: tab === 'tab2'?"3px solid #467FCF":"none",
                      backgroundColor: tab === 'tab2'?'white':"#f1f1f1",
                      fontWeight: tab === 'tab2'?'bold':"normal",
                    }}
                    id="tab2"
                  >
                  Visits without diagnostics
                  </div>
                )}

                {!roles.includes('Nurse') && (

                <div
                  class="tab"
                  onClick={()=>{setVisits([]); setTotalRows(0) ;setTab('tab3');fetchTodaysVisits()}}
                  style={{
                    padding: "10px 20px",
                    cursor: "pointer",
                    border: "1px solid #ccc",
                    borderBottom: tab === 'tab3'?"3px solid #467FCF":"none",
                    backgroundColor: tab === 'tab3'?'white':"#f1f1f1",
                    fontWeight: tab === 'tab3'?'bold':"normal",
                  }}
                  id="tab3"
                >
                 {roles.includes('Receptionist')?'Processed visits':`Today's visits`}
                </div>
                )}

              </div>
              )}

              {/* <Button variant="primary" onClick={fetchVisitsDiagnostics}>
                Visit Without Diagnostics
              </Button>

              <Button
                variant="primary"
                onClick={fetchVisits}
                
              >
                All visits
              </Button> */}

              <Row>
                <Col>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    onChange={(e) => setSearchTerm(e.target.value)}
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
              {tab==='tab3'&&(
                <p>Today's visits: {totalRows || visits.length} </p>
              )}
              <DataTable
                columns={roles.includes('Doctor')?columns2:columns}
                paginationPerPage={10}
                paginationRowsPerPageOptions={[10]}
                paginationTotalRows={totalRows ? totalRows : visits.length}
                onChangePage={(page) => setCurrentPage(page)}
                data={visits}
                pagination
                paginationServer
              />
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
                    onChange={(e) => {
                      setPatientId(e.value);
                      fetchPatientsInsuranceID(e.value);
                    }} // value onChange on input is the third step
                    classNamePrefix="Select2"
                    placeholder="Select them"
                    required
                  />
                </Form.Group>
              </Col>

              <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Label>Patient Insurance</Form.Label>
                  <Select
                    className="basic-single"
                    options={patientsInsurances}
                    onChange={(e) => setPatientInsuranceId(e.value)} // value onChange on input is the third step
                    classNamePrefix="Select2"
                    placeholder="Select patient insurance"
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
                  <Form.Label>Voucher ID</Form.Label>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    onChange={(e) => setVoucherNumber(e.target.value)}
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
                    onChange={(e) => {
                      setDepartment(e.value);
                      fetchDoctors(e.value);
                    }}
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
                  <Form.Label>Doctor</Form.Label>
                  <Select
                    options={doctors}
                    onChange={(e) => setDoctorId(e.value)}
                    EVisitType
                    classNamePrefix="Select2"
                    className="multi-select"
                    placeholder="Select Doctor"
                    required
                  />
                </Form.Group>
              </Col>

              <Col xl={6}>
                <Form.Group className="form-group">
                  <Form.Label>Patient status</Form.Label>
                  <Select
                    options={statuses}
                    onChange={(e) => setStatus(e.value)}
                    EVisitType
                    classNamePrefix="Select2"
                    className="multi-select"
                    placeholder="Select Doctor"
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
