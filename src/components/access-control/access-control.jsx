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

const columns = [
  {
    name: "FIRST NAME",
    selector: (row) => [row.firstName],
    sortable: true,
  },
  {
    name: "LAST NAME",
    selector: (row) => [row.lastName],
    sortable: true,
  },

  {
    name: " PHONE NUMBER",
    selector: (row) => [row.phoneNumber],
    sortable: true,
  },
  {
    name: "EMAIL",
    selector: (row) => [row.email],
    sortable: true,
  },
  {
    name: "ROLE",
    selector: (row) => [row.roles[0].roleName],
    sortable: true,
  },
];

import {
  DataTabless,
  ExportCSV,
  ResponsiveDataTable,
} from "../tables/datatables/data/responsivedatatable";
import DataTable from "react-data-table-component";
function AccessControl() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();
  const [users_, setUsers_] = useState();
  const [roles, setRoles] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [show, setShow] = useState(false);

  const searchUser = (value) => {
    if (value === "") {
      fetchUsers(); // Reset to the original list of projects
    } else {
      const filteredUsers = users_.filter((user) => {
        const userNameLowercase = (user.names + user.email).toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return userNameLowercase.includes(searchTermLowercase);
      });

      setUsers(filteredUsers);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = {
      firstName: firstName, // modify body properties
      lastName: lastName,
      phoneNumber: phone,
      email: email,
      password: password,
      roleId: selectedRoles,
    };
    console.log(postObj);
    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`,
    };
    axios
      .post(`http://www.ubuzima.rw/rec/access/user`, postObj) //declare api Path
      .then((res) => {
        console.log(res.data)
        setShow(false);
        if (res.data.status === true) {
          alert("Department Added successfully");
          fetchUsers();
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

  const fetchUsers = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/access/users`,
        config
      );
      setUsers(response.data.response);
      console.log(response.data);
      setUsers_(response.data.response);
      fetchRoles();
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  const fetchRoles = async () => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/access/roles`, config)
      .then((res) => {
        const myRoles = res.data.response.map((el) => {
          return { label: el.roleName, value: el.id };
        }); //const that assign value to the property
        setRoles(myRoles);
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
              <Card.Title>Users</Card.Title>
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
                    Register New User
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body> 
              <DataTable columns={columns} data={users} pagination /> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Register New user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="example-text-input"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)} // value onChange on input is the third step
                    required
                  />
                </Form.Group>
              </Col>
              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control"
                    name="example-text-input"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    className="form-control"
                    name="example-text-input"
                    placeholder="Phone..."
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    className="form-control"
                    name="example-text-input"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    className="form-control "
                    name="example-text-input"
                    placeholder="Password..."
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group className="form-group">
                  <Form.Label>Roles</Form.Label>
                  <Select
                    // isMulti
                    options={roles}
                    onChange={(e) => setSelectedRoles(e.value)}

                    classNamePrefix="Select2"
                    className="multi-select"
                    placeholder="Select them"
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

export default AccessControl;
