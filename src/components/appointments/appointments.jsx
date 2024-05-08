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


const columns = [
  {
    name: "Names",
    selector: (row) => [`${row.doctor?.firstName} ${row.doctor?.lastName}`],
    sortable: true,
  },
  {
    name: "Day ID",
    selector: (row) => [row.dayId],
    sortable: true,
  },
  {
    name: "Doctor ID",
    selector: (row) => [row.doctorId],
    sortable: true,
  },

  {
    name: " Starting Time",
    selector: (row) => [row.startingTime],
    sortable: true,
  },
  {
    name: "Patient ID",
    selector: (row) => [row.patientId],
    sortable: true,
  },
  {
    name: "Names",
    selector: (row) => [row.names],
    sortable: true,
  },
  {
    name: "Phone Number",
    selector: (row) => [row.phoneNumber],
    sortable: true,
  },
  
];

function Appointments() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);

  const [doctorId, setDoctorId] = useState([]);
  const [selectedDoctorId,setSelectedDoctorId] =useState();

  const [dayId, setDayId] = useState("");
  const [scheduleDayId,setscheduleDayId] =useState("");
  const [schedulesDayId,setschedulesDayId] =useState("");


  const [startingTime, setStartingTime] = useState("");
  const [patientId, setPatientId] = useState("");
  const [names, setNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [Appointments, setAppointments] = useState();
  const [Appointments_, setAppointments_] = useState();
  const [show, setShow] = useState(false);


  const [allDoctors, setAllDoctors] = useState([]);
  const [allDayId, setallDayId]= useState([]);
 

  const searchUser = (value) => {
    if (value === "") {
      fetchUsers(); // Reset to the original list of projects
    } else {
      const filteredUsers = Appointments_.filter((user) => {
        const userNameLowercase = (user.names + user.email).toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return userNameLowercase.includes(searchTermLowercase);
      });

      setAppointments(filteredUsers);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = JSON.stringify({
      dayId: dayId, // modify body properties
      doctorId: doctorId,
      startingTime: startingTime,
      patientId: patientId,
      names: names,
      phoneNumber:phoneNumber,
    });
    console.log(postObj);
    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${my_token}`,
    };
    axios
      .post(`http://www.ubuzima.rw/rec/schedule/booking`, postObj) //declare api Path
      .then((res) => {
        // console.log(res.data)
        setShow(false);
        if (res.data.status === true) {
          alert("User Added successfully");
          fetchAppointments();
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

  const fetchAppointments = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        // "doctorId":location.state.data.doctor.id
        doctorId : doctorId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/schedule/booking/doctor`,
        config
      );
      setAppointments(response.data.response);
      // console.log(response.data);
      setAppointments_(response.data.response);
      // fetchAppointments();
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };



  



  const fetchAllDoctors = async () => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
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

      console.log(response.data)
    }
  };



  // const fetchDayId = async () => {
  //   let my_token = localStorage.getItem("token");
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${my_token}`,
  //       doctorId : selectedDoctorId,    
  //       },
  //   };

  //   try {
  //     const response = await axios.get(
  //       `http://www.ubuzima.rw/rec/schedule`,
  //       config
  //     );
  //     console.log(response.data)
  //     setDayId(response.data.response);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // };




  const fetchDayId = async (id) => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        doctorId : selectedDoctorId, 
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/schedule`, config)
      .then((res) => {
        console.log(res.data);
        const schedulesDayId = res.data.response.schedulesDayId.map((el) => {
          return { label: `${el.dayId}`, value: el.doctorId };
        }); //const that assign value to the property
        setschedulesDayId(schedulesDayId);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };



  
  useEffect(() => {
    fetchAppointments();
    fetchAllDoctors();
    // fetchDayId();
   
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Appointments</Card.Title>
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
                    Book Appointments
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body> 
              <DataTable columns={columns} data={Appointments} pagination /> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Book Appointments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              

              {/* <Col xl={6} style={{ marginTop: 10 }}>
                        <Form.Group className="form-group">
                          <Form.Label>Doctor ID</Form.Label>
                          <Select
                            options={allDoctors}
                            onChange={(e) => setDoctorId(e.value)}
                            classNamePrefix="Select2"
                            className="multi-select"
                            placeholder="doctor id"
                            required
                          />
                        </Form.Group>
                      </Col> */}





                      {/* <Col xl={6} style={{ marginTop: 10 }}>
                        <Form.Group className="form-group">
                          <Form.Label>Doctor ID</Form.Label>
                          <Select
                            options={allDoctors}
                            onChange={(e) => {
                              setSelectedDoctorId(e.value);
                              fetchDayId(e.value);
                              // resetDayId();
                            }}
                            value={selectedDoctorId}
                            classNamePrefix="Select2"
                            className="multi-select"
                            // placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col> */}




                      <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Label>Doctor ID</Form.Label>
                  <Select
                    className="basic-single"
                    options={allDoctors}
                    onChange={(e) => {setSelectedDoctorId(e.value);fetchDayId(e.value)}} // value onChange on input is the third step
                    classNamePrefix="Select2"
                    placeholder="Select them"
                    required
                  />
                </Form.Group>
              </Col>


              
                {/* <Col xl={6} style={{ marginTop: 10 }}>
                        <Form.Group className="form-group">
                          <Form.Label>Day ID</Form.Label>
                          <Select
                            options={dayId}
                            onChange={(e) => {
                              setscheduleDayId(e);
                              fetchDayId(e.value);
                              resetDayId();
                            }}
                            value={scheduleDayId}
                            classNamePrefix="Select2"
                            className="multi-select"
                            // placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col>
                      */}



                      <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Label>Day ID</Form.Label>
                  <Select
                    className="basic-single"
                    options={schedulesDayId}
                    onChange={(e) =>  setscheduleDayId(e.value)} // value onChange on input is the third step
                    classNamePrefix="Select2"
                    placeholder="Select them"
                    required
                  />
                </Form.Group>
              </Col>
       


                      

              
              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>starting Time</Form.Label>
                  <Form.Control
                    type="time"
                    className="form-control"
                    name="example-text-input"
                    placeholder="starting time"
                    onChange={(e) => setStartingTime(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Patient ID</Form.Label>
                  <Form.Control
                    type="email"
                    className="form-control"
                    name="example-text-input"
                    placeholder="patient id"
                    onChange={(e) => setPatientId(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Names</Form.Label>
                  <Form.Control
                    type="text"
                    className="form-control "
                    name="example-text-input"
                    placeholder="names"
                    onChange={(e) => setNames(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col lg={6} style={{ marginTop: 10 }}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    className="form-control "
                    name="example-text-input"
                    placeholder="phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
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

export default Appointments;