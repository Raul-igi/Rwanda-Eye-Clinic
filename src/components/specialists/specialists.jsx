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

import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Names",
    selector: (row) => [`${row.doctor?.firstName} ${row.doctor?.lastName}`],
    sortable: true,
  },

  {
    name: " Email",
    selector: (row) => [row.doctor?.email],
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row) => [row.doctor?.phoneNumber],
    sortable: true,
  },


];


function Specialists() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);

    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${my_token}`,
      "departmentId": location.state.data.id,
      "doctorId": doctorId
    };
    axios
      .post(`http://www.ubuzima.rw/rec/medical/doctor-department`) //declare api Path
      .then((res) => {
        console.log(res.data);
        setShow(false);
        if (res.data.status === true) {
          alert("Doctor added successfully");
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

  

  const fetchAllDoctors = async () => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "departmentId": location.state.data.id,
      },
    };
    
    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/medical/doctors`,
        config
      );
      const allDoctors_ = response.data.response.map((el) => {
        return { label: `${el.firstName} ${el.lastName}`, value: el.id };
      });
      setAllDoctors(allDoctors_);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDoctors = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "departmentId": location.state.data.id,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/medical/doctors/department-id`,
        config
      );
      console.log(response.data)
      setDoctors(response.data.response);
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
    fetchAllDoctors();
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Doctors in {location.state.data.department}</Card.Title>
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
                <DataTable columns={columns} data={doctors} pagination />
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
                            options={allDoctors}
                            onChange={(e) => setDoctorId(e.value)}
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
