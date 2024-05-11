import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import DataTable from "react-data-table-component";




function Appointments() {
  const location = useLocation()
  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [doctorId, setDoctorId] = useState([]);
  const [scheduleDayId,setscheduleDayId] =useState("");
  const [schedulesDayId,setschedulesDayId] =useState("");
  const [startingTime, setStartingTime] = useState("");
  const [patientId, setPatientId] = useState("");
  const [names, setNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Appointments, setAppointments] = useState([]);
  const [Appointments_, setAppointments_] = useState();
  const [show, setShow] = useState(false);
  const [allDoctors, setAllDoctors] = useState([]);
  const [patients, setPatients] = useState("");


  const columns = [
    {
      name: "Doctor names",
      selector: (row) => [`${row.doctor?.firstName} ${row.doctor?.lastName}`],
      sortable: true,
    },
    {
      name: "Patient names",
      selector: (row) => [row.names],
      sortable: true,
    },
    {
      name: "Day",
      selector: (row) => [row.day],
      sortable: true,
    },
    {
      name: " Starting Time",
      selector: (row) => [row.startingTime],
      sortable: true,
    },
    {
      name: " End Time",
      selector: (row) => [row.endingTime],
      sortable: true,
    },
    {
      name: "Patient's number",
      selector: (row) => [row.patientNumber || '-'],
      sortable: true,
    },
    {
      name: "Doctor's number",
      selector: (row) => [row.phoneNumber],
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => [row.state],
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        row.state==='ACTIVE'?
          <div onClick={()=>{if(window.confirm('Do you really want to cancel this appointment?')){cancelAppointment(row.id)}}} style={{color:'red',cursor:'pointer'}}>
          Cancel
        </div>:'-'
      ),
    },
    
  ];
 

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
      day: scheduleDayId, // modify body properties
      doctorId: doctorId,
      startingTime: startingTime+":00",
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
          alert(res.data.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        alert(error.message);
      });
  };

  const cancelAppointment = async (id) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "bookingId": id
      },
    };

    try {
        
        const response = await axios.post(
          `http://www.ubuzima.rw/rec/schedule/cancel-booking`,
          {},
          config
        );
        if(response.data.status){
          alert('Appointment cancelled!')
        }
        else{
          alert('Something wrong!')
        }
      
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  const fetchAppointments = async () => {
    let my_token = localStorage.getItem("token");
    

    try {
      if(location.state?.data?.page==='doctor'){
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${my_token}`,
            "doctorId":location.state.data.doctorId
          },
        };
        const response = await axios.get(
          `http://www.ubuzima.rw/rec/schedule/booking/doctor`,
          config
        );
        if(response.data.status){
          setAppointments(response.data.response);
        setAppointments_(response.data.response);
        }else{
          console.log(response.data.message)
        }
        
      }else{
        const config = {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${my_token}`,
          },
        };
        const response = await axios.get(
          `http://www.ubuzima.rw/rec/schedule/booking/all`,
          config
        );
        if(response.data.status){
          setAppointments(response.data.response);
        setAppointments_(response.data.response);
        }else{
          console.log(response.data.message)
        }
      }
      
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





  const fetchDayId = async (id) => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        doctorId : id, 
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/schedule`, config)
      .then((res) => {
        console.log(res.data);
        const schedulesDayId = res.data.response.map((el) => {
          return ({ label: `${el.day}`, value: el.day });
        }); //const that assign value to the property
        setschedulesDayId(schedulesDayId);
      })
      .catch((error) => {
        setLoading(false);
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
        const patients = res.data.response.map((el) => {
          return { label: el.names, value: el.id};
        }); //const that assign value to the property
        setPatients(patients);
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };



  
  useEffect(() => {
    fetchAppointments();
    fetchAllDoctors();
    fetchPatients();
   
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>{location.state?.data?.doctorNames&&`${location.state?.data?.doctorNames}'s`} Appointments</Card.Title>
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



                      <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Label>Doctor ID</Form.Label>
                  <Select
                    className="basic-single"
                    options={allDoctors}
                    onChange={(e) => {setDoctorId(e.value);fetchDayId(e.value)}} // value onChange on input is the third step
                    classNamePrefix="Select2"
                    placeholder="Select them"
                    required
                  />
                </Form.Group>
              </Col>

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
                    type="datetime-local"
                    className="form-control"
                    name="example-text-input"
                    placeholder="starting time"
                    onChange={(e) => setStartingTime(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>


              <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Label>Patient ID</Form.Label>
                  <Select
                    className="basic-single"
                    options={patients}
                    onChange={(e) =>  setPatientId(e.value)} // value onChange on input is the third step
                    classNamePrefix="Select2"
                    placeholder="Select them"
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
