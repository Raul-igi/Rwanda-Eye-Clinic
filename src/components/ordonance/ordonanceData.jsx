import React, { useEffect, useState } from "react";
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
import axios from "axios";
import DataTable from "react-data-table-component";
import "./ordonanceData.css";

const reColumns = [
  {
    name: "",
    selector: (row) => [row.name],
    sortable: true,
  },
  {
    name: "Sphere",
    sortable: true,
    selector: (row) => [row.sphere],
  },
  {
    name: "Cylinder",
    sortable: true,
    selector: (row) => [row.cylinder],
  },
  {
    name: "Axis",
    sortable: true,
    selector: (row) => [row.axis],
  },

  {
    name: "Addition",
    sortable: true,
    selector: (row) => [row.addition],
  },
];

function OrdonanceData({ visitId, names, date }) {
  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState();
  const [users_, setUsers_] = useState();
  const [roles, setRoles] = useState([]);
  const [lensType, setLensType] = useState("");
  const [lensAttribute, setLensAttribute] = useState([]);
  const [show, setShow] = useState(false);
  const [refraction, setRefraction] = useState("");

  const formatString = (input) => {
    // Split the input string by underscores
    const words = input.toLowerCase().split('_');
  
    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    // Join the capitalized words with spaces
    return capitalizedWords.join(' ');
  }

  const save = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "patientVisitId": visitId
      },
    };
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/optic/save`,
        {},
        config
      );
      if (response.data.status) {
        alert("Successfully processed!");
        window.location.reload()
      }
    } catch (error) {
      console.error(error);
    }
  };
  

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

  const fetchRefraction = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/doctor/refraction/visit-id`,
        config
      );
      if (response.data.status && response.data.response) {
        const refraction_ = [
          {
            name: "Right Eye",
            sphere: response.data.response[0].sphereRightEye || "",
            cylinder: response.data.response[0].cylindreRightEye || "",
            axis: response.data.response[0].axeRightEye || "",
            addition: response.data.response[0].additionRightEye || "",
          },
          {
            name: "Left Eye",
            sphere: response.data.response[0].sphereLeftEye || "",
            cylinder: response.data.response[0].cylindreLeftEye || "",
            axis: response.data.response[0].axeLeftEye || "",
            addition: response.data.response[0].additionLeftEye || "",
          },
        ];
        setLensType(response.data.response[0].lensType);
        setLensAttribute(response.data.response[0].lensAttribute);
        setRefraction(refraction_);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRefraction();
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
        <div className="input">
          <p>Names: {names}</p>
        </div>
      </div>

      <DataTable columns={reColumns} data={refraction} />

      <Row>
        {lensType && (
          <Col lg={4} className="checkbox-input">
            <h1>Lens Type</h1>
            <h5>{formatString(lensType)}</h5>
          </Col>
        )}

        <Col lg={4}>
          <div className="checkbox-input">
            {lensAttribute.length > 0 && <h1>LensAttribute</h1>}

            {lensAttribute.map((type) => {
              return (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    checked={true}
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                  {formatString(type)}
                  </label>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>

      <div className="last-input">
        <p>Date: {date.slice(0,10)}</p>
      </div>

      <Button variant="primary" onClick={() => save()}>
        Mark as processed
      </Button>
    </div>
  );
}

export default OrdonanceData;
