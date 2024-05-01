import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
import {
  BasicProvince,
  BasicDistrict,
  BasicSectors,
  BasicCell,
  membershipTypes,
  Country,
  CustomisedSelector,
  Data,
  Daydata,
  GroupFilterOption,
  Groupoption,
  Hide,
  Multiple,
  MultipleGroup,
  Options,
  SingleGroup,
  Singlerow,
  Yeardata,
  animatedComponents,
  groupedOptions,
  groupfilter,
  multiDisable,
  option,
} from "../../data/elementsdata";
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

import {
  DataTabless,
  ExportCSV,
  ResponsiveDataTable,
} from "../tables/datatables/data/responsivedatatable";
function Specialists() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [names, setName] = useState("");
  const [patients_, setDoctors_] = useState("");
  const [patients, setDoctors] = useState("");
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
      locationId: null,
      status: "INDIGENT",
      patientInsuranceDto: {
        insuranceId: insuranceId,
        affiliationCardNumber: affiliationCardNumber,
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
        console.log(res.data);
        setShow(false);
        if (res.data.status === true) {
          alert("Department Added successfully");
          fetchDoctors();
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

  const fetchDoctors = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        departmentId: location.state.data.id,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/medical/doctors/appointment-id`,
        config
      );
      setDoctors_(response.data.response);
      setDoctors(response.data.response);
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Doctors</Card.Title>
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
                    Add New Doctor
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
                  <Card.Title>Create New Doctor</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex flex-column">
                    <Row>

                     
                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Doctor's Name</Form.Label>
                          <Select
                            options={""}
                            onChange={(e) => setmembershipType(e.value)}
                            classNamePrefix="Select2"
                            className="multi-select"
                            // placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col>
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
    </div>
  );
}

export default Specialists;
