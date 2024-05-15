import React, { useEffect, useState } from "react";
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
import {membershipTypes} from "../../data/elementsdata";
import DataTable from "react-data-table-component";

import { ECaseType, EVisitType } from "../../data/elementsdata";


function Patients() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [names, setName] = useState("");
  const [patients_, setPatients_] = useState("");
  const [patients, setPatients] = useState("");
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [cells, setCells] = useState([]);
  const [villages, setVillages] = useState([]);
  const [insuranceId, setInsuranceId] = useState("");
  const [insurances, setInsurances] = useState();
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCell, setSelectedCell] = useState("");
  const [selectedVillage, setSelectedVillage] = useState(null);

  const [contactPerson, setcontactPerson] = useState();
  const [contactPersonPhoneNumber, setcontactPersonPhoneNumber] = useState();
  const [locationId, setlocationId] = useState([]);
  const [patientId, setpatientId] = useState(false);
  const [membershipType, setmembershipType] = useState("");
  const [principalNames, setprincipalNames] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [employer, setemployer] = useState("");
  const [expiryDate, setexpiryDate] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [selectedAssignees, setSelectedAssignees] = useState([]);

  const [totalRows, setTotalRows] = useState(0);

  const [patientsInsurances, setPatientsInsurances] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState([]);
  const [caseType, setCaseType] = useState("");
  const [patientInsuranceId, setPatientInsuranceId] = useState("");
  const [visitType, setVisitType] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");

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

    {
      name: "Actions",
      cell: (row) => (
        <div
          onClick={() => {
            setShow2(true);
            fetchPatientsInsuranceID(row.id);
            setpatientId(row.id);
          }}
          style={{ color: "#2D6CC5", cursor: "pointer" }}
        >
          Add visit
        </div>
      ),
    },
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchPatients = (value) => {
    if (value === "") {
      fetchPatients(); // Reset to the original list of projects
    } else {
      const filteredPatients = patients_.filter((user) => {
        const userNameLowercase = (
          user.names +
          user.email +
          user.gender +
          user.phoneNumber +
          user.dob
        ).toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return userNameLowercase.includes(searchTermLowercase);
      });

      setPatients(filteredPatients);
    }
  };

  const handleSubmit = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = JSON.stringify({
      //postObj
      names: names, // modify body properties
      email: email,
      phoneNumber: phoneNumber,
      gender: gender,
      dob: dob,
      contactPerson: contactPerson,
      contactPersonPhoneNumber: contactPersonPhoneNumber,
      locationId: selectedVillage.value,
      status: "INDIGENT",
      patientInsuranceDto: insuranceId?.label?.toLowerCase()==='private'?null:
      {
        insuranceId: insuranceId?.value,
        membershipType: membershipType,
        principalNames: principalNames,
        cardNumber: cardNumber,
        employer: employer,
        expiryDate: expiryDate,
        ticket: 0,
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
        // console.log(res.data);
        setShow(false);
        if (res.data.status === true) {
          alert("Patient added successfully");
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
        "Authorization": `Bearer ${my_token}`,
        "size":10,
        "page":currentPage
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/patient`,
        config
      );
      setPatients_(response.data.response);
      setPatients(response.data.response);
      if(response.data.response.totalElements){
        setTotalRows(response.data.response.totalElements)
      }
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  const fetchProvinces = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    axios
      .get(`http://www.ubuzima.rw/rec/locations/provinces`, config)
      .then((res) => {
        // console.log(res.data);
        const provinces_ = res.data.response.map((el) => {
          return { label: el.name, value: el.code };
        });
        setProvinces(provinces_);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fetchDistricts = async (code) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        code: code,
      },
    };

    axios
      .get(`http://www.ubuzima.rw/rec/locations/districts/province`, config)
      .then((res) => {
        console.log(res.data);
        const districts_ = res.data.response.map((el) => {
          return { label: el.name, value: el.code };
        });
        setDistricts(districts_);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fetchSectors = async (code) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        code: code,
      },
    };

    axios
      .get(`http://www.ubuzima.rw/rec/locations/sectors/district`, config)
      .then((res) => {
        console.log(res.data);
        const sectors_ = res.data.response.map((el) => {
          return { label: el.name, value: el.code };
        });
        setSectors(sectors_);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fetchCells = async (code) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        code: code,
      },
    };

    axios
      .get(`http://www.ubuzima.rw/rec/locations/cells/sector`, config)
      .then((res) => {
        console.log(res.data);
        const cells_ = res.data.response.map((el) => {
          return { label: el.name, value: el.code };
        });
        setCells(cells_);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fetchVillages = async (code) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        code: code,
      },
    };

    axios
      .get(`http://www.ubuzima.rw/rec/locations/villages/cell`, config)
      .then((res) => {
        console.log(res.data);
        const villages_ = res.data.response.map((el) => {
          return { label: el.name, value: el.code };
        });
        setVillages(villages_);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit2 = async (e) => {
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
        page: 1,
        size: 20,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(
        userRoles.includes("Nurse")
          ? `http://www.ubuzima.rw/rec/visit/nurse`
          : userRoles.includes("Doctor")
          ? `http://www.ubuzima.rw/rec/visit/doctor`
          : `http://www.ubuzima.rw/rec/visit/receptionist`,
        config
      )
      .then((res) => {
        // console.log(res.data);

        if (res.data.status) {
          setVisits(res.data.response.patientVisits);
          setVisits_(res.data.response.patientVisits);
        }
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

  const fetchInsurances = async () => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/patient/insurances`, config)
      .then((res) => {
        const insurances = res.data.response.map((el) => {
          return { label: el.name, value: el.id };
        }); //const that assign value to the property
        setInsurances(insurances);
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };


  const resetDistricts = () => {
    setSelectedDistrict("");
    setDistricts([]);
    setSelectedSector("");
    setSectors([]);
    setSelectedCell("");
    setCells([]);
    setSelectedVillage("");
    setVillages([]);
  };

  const resetSectors = () => {
    setSelectedSector("");
    setSectors([]);
    setSelectedCell("");
    setCells([]);
    setSelectedVillage("");
    setVillages([]);
  };

  const resetCells = () => {
    setSelectedCell("");
    setCells([]);
    setSelectedVillage("");
    setVillages([]);
  };

  const resetVillages = () => {
    setSelectedVillage("");
    setVillages([]);
  };

  
  useEffect(() => {
    fetchInsurances();
    fetchProvinces();
    fetchDepartments();
  }, []);
  useEffect(()=>{
    fetchPatients();
  },[currentPage])

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Patients</Card.Title>
              <Row>
                <Col>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    onChange={(e) => searchPatients(e.target.value)}
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
                <DataTable columns={columns} data={patients} paginationTotalRows={totalRows?totalRows:patients.length} paginationPerPage={10} paginationRowsPerPageOptions={[10]} onChangePage={page=>setCurrentPage(page)} pagination paginationServer/>
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

                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Insurance</Form.Label>
                          <Select
                            className="basic-single"
                            options={insurances}
                            onChange={(e) => setInsuranceId(e)}
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

                            onChange={(e) =>
                              setcontactPersonPhoneNumber(e.target.value)
                            }
                            required
                          />
                        </Form.Group>
                      </Col>

                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Province</Form.Label>
                          <Select
                            options={provinces}
                            onChange={(e) => {
                              setSelectedProvince(e);
                              fetchDistricts(e.value);
                              resetDistricts();
                            }}
                            value={selectedProvince}
                            classNamePrefix="Select2"
                            className="multi-select"
                            // placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col>

                      {selectedProvince && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>District</Form.Label>
                            <Select
                              options={districts}
                              onChange={(e) => {
                                setSelectedDistrict(e);
                                fetchSectors(e.value);
                                resetSectors();
                              }}
                              value={selectedDistrict}
                              classNamePrefix="Select2"
                              className="multi-select"
                              // placeholder="Select them"
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}

                      {selectedDistrict && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>Sector</Form.Label>
                            <Select
                              options={sectors}
                              value={selectedSector}
                              onChange={(e) => {
                                setSelectedSector(e);
                                fetchCells(e.value);
                                resetCells();
                              }}
                              classNamePrefix="Select2"
                              className="multi-select"
                              // placeholder="Select them"
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}
                      {selectedSector && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>Cell</Form.Label>
                            <Select
                              options={cells}
                              value={selectedCell}
                              onChange={(e) => {
                                setSelectedCell(e);
                                fetchVillages(e.value);
                                resetVillages();
                              }}
                              classNamePrefix="Select2"
                              className="multi-select"
                              // placeholder="Select them"
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}

                      {selectedCell && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>Village</Form.Label>
                            <Select
                              options={villages}
                              value={selectedVillage}
                              onChange={(e) => setSelectedVillage(e)}
                              classNamePrefix="Select2"
                              className="multi-select"
                              // placeholder="Select them"
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}


                      

                      {insuranceId?.label?.toLowerCase() !==  "private" && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>Membership Type</Form.Label>
                            <Select
                              options={membershipTypes}
                              onChange={(e) => setmembershipType(e.value)}
                              classNamePrefix="Select2"
                              className="multi-select"
                              // placeholder="Select them"
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}

                      {insuranceId?.label?.toLowerCase() !==  "private" && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>Principal Names</Form.Label>
                            <Form.Control
                              type="Text"
                              className="form-control"
                              name="example-text-input"
                              // placeholder="Address"
                              onChange={(e) =>
                                setprincipalNames(e.target.value)
                              }
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}

                      {insuranceId?.label?.toLowerCase() !==  "private" && (
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
                      )}

                      {insuranceId?.label?.toLowerCase() !==  "private" && (
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
                      )}

                      {insuranceId?.label?.toLowerCase() !== "private" && (
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
                      )}
                    </Row>



                    <Button
                      type="submit"
                      className="btn ripple btn-primary my-3"
                      style={{ width: "40%", marginLeft: "320px" }}
                      variant="primary"
                      onClick={handleSubmit}
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

      <Modal show={show2} onHide={() => setShow2(false)}>
        <Form onSubmit={handleSubmit2}>
          <Modal.Header closeButton>
            <Modal.Title>Register New Visitor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Label>Patient Insurance ID</Form.Label>
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
            <Button type="submit" variant="primary" onClick={handleSubmit2}>
              Submit
            </Button>
            <Button variant="secondary" onClick={() => setShow2(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Patients;