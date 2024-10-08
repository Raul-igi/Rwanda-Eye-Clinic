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

import {
  DataTabless,
  ExportCSV,
  ResponsiveDataTable,
} from "../tables/datatables/data/responsivedatatable";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "NAME",
    selector: (row) => [row.name],
    sortable: true,
  },
];

function Insurance() {
  //useState must be declared between the function and  return   //creating useState is the first step

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);
  const [insurances, setInsurances] = useState();
  const [insurances_, setInsurances_] = useState();
  // const [roles, setRoles] = useState([]);

  const searchInsurances = (value) => {
    if (value === "") {
      fetchInsurances(); // Reset to the original list of projects
    } else {
      const filteredinsurances = insurances_.filter((user) => {
        const userNameLowercase = (user.name).toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return userNameLowercase.includes(searchTermLowercase);
      });

      setInsurances(filteredinsurances);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);

    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`,
      name: name,
    };
    axios
      .post(`http://www.ubuzima.rw/rec/patient/insurance`) //declare api Path
      .then((res) => {
        setShow(false);
        if( res.data.status  === true){
            alert("Department Added successfully");
        fetchInsurances()
        }else{
            alert(res.data.message)
        }
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };

  const fetchInsurances = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/patient/insurances`,
        config
      );
      setInsurances(response.data.response);
      console.log(response.data);
      setInsurances_(response.data.response);
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  // const fetchRoles = async () => {
  //   let my_token = await localStorage.getItem("token");
  //   const config = { headers: { "Content-Type": "application/json", "Authorization":`Bearer ${my_token}` } }; //incase you have to deal with ID or Options
  //   axios
  //     .get(`http://www.ubuzima.rw/rec/access/roles`, config)
  //     .then((res) => {
  //       const myRoles = res.data.response.map(el=>{return({label:el.roleName,value:el.id})}) //const that assign value to the property
  //       setRoles(myRoles)
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       setShow(false);
  //       console.log(error.message);
  //     });
  // };

  useEffect(() => {
    fetchInsurances();
    // fetchRoles();
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Insurance</Card.Title>
              <Row>
                <Col>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    onChange={(e) => searchInsurances(e.target.value)}
                  />
                </Col>
                <Col>
                  <Button variant="primary" onClick={handleShow}>
                    Register New Insurance
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <DataTable columns={columns} data={insurances} pagination />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Register New Insurance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="example-text-input"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)} // value onChange on input is the third step
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

export default Insurance;