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
import DataTable from "react-data-table-component";
import "./ordonance.css";

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
    selector: (row) => [
      row.roles.map((role) => role.roleName).join(", ") || "-",
    ],
    sortable: true,
  },
];

function Ordonance() {
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
        const userNameLowercase = (
          user.firstName +
          user.lastName +
          user.email +
          user.phoneNumber +
          user.roles
        ).toLowerCase();
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
    const postObj = JSON.stringify({
      firstName: firstName, // modify body properties
      lastName: lastName,
      phoneNumber: phone,
      email: email,
      password: password,
      roleId: [selectedRoles],
    });
    console.log(postObj);
    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`,
    };
    axios
      .post(`http://www.ubuzima.rw/rec/access/user`, postObj) //declare api Path
      .then((res) => {
        console.log(res.data);
        setShow(false);
        if (res.data.status === true) {
          alert("User Added successfully");
          fetchUsers();
        } else {
          alert("something went wrong");
        }
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        alert(error.message);
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
      <div className="main-header">
        <p>REC</p>
      </div>

      <div className="main-page-info">
        <h2>RWANDA EYE CLINIC</h2>
        <p>Tel:0783405711/3460</p>
        <p>Email:rwandaeyeclinic@gmail.com</p>
        <p>KN 29, Street N1</p>
      </div>

      <div className="front-header">
        <h3>ORDONANCE LUNETTES</h3>
      </div>

      <div className="input">
        {/* <Col lg={6} style={{ marginTop: 10 }}>
          <div className="form-group">
            <label style={{ fontSize: 15, marginRight: 10 }}>Names:</label>
            <Form.Group style={{ flex: 1,marginBottom:12 }}>
              <Form.Label></Form.Label>
              <Form.Control
                style={{
                  backgroundColor: "#F4F5F7",
                  border: "0px solid #F4F5F7",
                }}
                type="text"
                className="form-control"
                name="example-text-input"
                placeholder=" Shema Albin"
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled
              />
            </Form.Group>
          </div>
        </Col> */}

        <div className="input">
          <p>Names: Shema Albin</p>
        </div>
      </div>

      <div className="main-table">
        <table class="table tabletable-bordered">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Sph.</th>
              <th scope="col">Cyl.</th>
              <th scope="col">Axe</th>
              <th scope="col">Sph.</th>
              <th scope="col">Cyl.</th>
              <th scope="col">Axe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Loin </td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>12</p>
              </td>
            </tr>
            <tr>
              <td>Pres</td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>12</p>
              </td>
              <td>
                <p>12</p>
              </td>

              <td>
                <p>12</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="checkbox-input">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            BIFOCALS
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label class="form-check-label" for="flexCheckChecked">
            PROGRESSIVE
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label class="form-check-label" for="flexCheckChecked">
            PHOTOCHROMIC
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label class="form-check-label" for="flexCheckChecked">
            CLEAR
          </label>
        </div>
      </div>

      <div className="last-input">
        {/* <Col lg={6} style={{ marginTop: 10 }}>
          <div className="form-group">
            <label style={{ fontSize: 15, marginRight: 10 }}>Date:</label>
            <form className="date-form">
              <div className="row">
                <div className="col">
                  <input
                    type="year"
                    className="form-control"
                    placeholder="2024"
                    disabled
                  />
                </div>
                /
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="06"
                    disabled
                  />
                </div>
                /
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="28"
                    disabled
                  />
                </div>
              </div>
            </form>
          </div>

        </Col> */}
        <p>Date: 2024/06/21</p>
      </div>
    </div>
  );
}

export default Ordonance;
