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
import Visit from "../visits/visit";

import { ECaseType, EVisitType } from "../../data/elementsdata";
import { Link } from "react-router-dom";


function Patients() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [contactPerson, setcontactPerson] = useState();
  const [contactPersonPhoneNumber, setcontactPersonPhoneNumber] = useState();
  const [patientId, setPatientId] = useState(false);
  const [insuranceId, setInsuranceId] = useState("");
  const [membershipType, setmembershipType] = useState("");
  const [principalNames, setprincipalNames] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [employer, setemployer] = useState("");
  const [expiryDate, setexpiryDate] = useState("");

  
  const [patients_, setPatients_] = useState([]);
  const [patients, setPatients] = useState([]);
  const [appPatients, setAppPatients] = useState([]);
  const [locationId, setlocationId] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [cells, setCells] = useState([]);
  const [villages, setVillages] = useState([]);
  const [schedulesDayId, setSchedulesDayId] = useState([]);
  const [insurances, setInsurances] = useState();
  const [startingTime, setStartingTime] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedCell, setSelectedCell] = useState("");
  const [selectedVillage, setSelectedVillage] = useState(null);

  const [ticket,setTicket] = useState(0);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6,setShow6]  =useState(false);
  const [show7,setShow7]  =useState(false);
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
  const[previousVisits,setPreviousVisits] =useState([]);
  const[previousVisits_,setPreviousVisits_] =useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [scheduleDayId,setscheduleDayId] =useState("");

  const [action,setAction] =useState("");

  const [visitId,setVisitId] =useState("");

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  useEffect(() => {
    // Set up a timer to update the debounced term after 7 seconds
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 3000); // 7 seconds

    // Clean up the timer if the component unmounts or if searchTerm changes
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
      fetchPatients();
  }, [debouncedTerm]);






  const handleSubmit3 = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = JSON.stringify({
      day: scheduleDayId, // modify body properties
      doctorId: doctorId,
      startingTime: startingTime+":00",
      patientId: patientId.value || patientId,
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
        setShow5(false);
        if (res.data.status === true) {
          alert("Appointment Added successfully");
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        setShow5(false);
        alert(error.message);
      });
  };


  const columns = [
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
      name: "Add visit",
      cell: (row) => (
        <div
          onClick={() => {
            setPatientsInsurances([])
            setShow2(true);
            fetchPatientsInsuranceID(row.id);
            setPatientId(row.id);
          }}
          style={{ color: "#2D6CC5", cursor: "pointer" }}
        >
          Add visit
        </div>
      ),
    },

    {
      name: "Previous visits",
      cell: (row) => (
        <div
          onClick={() => {
            setShow3(true);
            fetchPreviousVisits(row.id);
            setPatientId(row.id);
          }}
          style={{ color: "#2D6CC5", cursor: "pointer" }}
        >
          Previous Visits
        </div>
      ),
    },

    {
      name: "Update",
      cell: (row) => (
        <div
          onClick={() => {
            setShow(true);
            setAction("update");
            fetchPatientsInsuranceID(row.id,true);
            setPatientId(row.id);
          }}
          style={{ color: "#2D6CC5", cursor: "pointer" }}
        >
          Update
        </div>
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
      name: "Doctor's names",
      selector: (row) => [`${row.doctor?.firstName} ${row.doctor?.lastName}`],
      sortable: true,
    },
    {
      name: "Doctor's phone",
      selector: (row) => [row.doctor?.phoneNumber],
      sortable: true,
    },
    {
      name: "Insurance",
      selector: (row) => [row.patientInsurance?.insuranceName || '-'],
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => [row.createdAt?.slice(0,10) || '-'],
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
        <div style={{cursor:'pointer',color:'blue'}} onClick={()=>{setShow3(false);setShow7(true);setVisitId(row.id)}}>
          View Details
        </div>
      ),
    },
  ];

  const handleClose = () => {setShow(false);setAction("")};
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
      locationId: selectedVillage?.value,
      status: "INDIGENT",
      patientInsuranceDto: insuranceId?.label?.toLowerCase()==='private'?null:
      {
        insuranceId: insuranceId?.value,
        membershipType: membershipType?.value,
        principalNames: principalNames,
        cardNumber: cardNumber,
        employer: employer,
        expiryDate: expiryDate,
        ticket: ticket,
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
          setShow4(true);
          fetchPatientsInsuranceID(res.data.response.id);
          setPatientId({label:res.data.response.names,value:res.data.response.id});
          fetchPatients();
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

  const updatePatient = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = JSON.stringify({
      //postObj
      id: patientId,
      names: names, // modify body properties
      email: email,
      phoneNumber: phoneNumber,
      gender: gender,
      dob: dob,
      contactPerson: contactPerson,
      contactPersonPhoneNumber: contactPersonPhoneNumber,
      status: "INDIGENT",
      patientInsuranceDto: insuranceId?.label?.toLowerCase()==='private'?null:
      {
        insuranceId: insuranceId?.value,
        membershipType: membershipType?.value,
        principalNames: principalNames,
        cardNumber: cardNumber,
        employer: employer,
        expiryDate: expiryDate,
        ticket: ticket,
      },
    });
    console.log(postObj);
    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`,
    };
    axios
      .post(`http://www.ubuzima.rw/rec/patient/update`, postObj) //declare api Path
      .then((res) => {
        setAction("")
        setShow(false)
        if (res.data.status === true) {
          alert('Patient successfully updated')
          fetchPatients();
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        setAction("")
        setShow(false)
        setLoading(false);
        console.log(error.message);
      });
  };
















  const addInsurance = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = JSON.stringify({
      //postObj
      patientId: patientId,
      insuranceId: insuranceId?.value,
      membershipType: membershipType?.value,
      cardNumber: cardNumber,
      employer: employer,
      expiryDate: expiryDate,
      ticket: ticket, 
      
     
    });
    console.log(postObj);
    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`,
    };
    axios
      .post(`http://www.ubuzima.rw/rec/patient/patient-insurance`, postObj) //declare api Path
      .then((res) => {
        setAction("")
        setShow6(false)
        if (res.data.status === true) {
          alert('Patient successfully updated')
          fetchInsurances();
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        setAction("")
        setShow6(false)
        setLoading(false);
        console.log(error.message);
      });
  };





















  const fetchPatients = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "query":searchTerm,
        "page": currentPage2,
        "size":10
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/patient/search`,
        config
      );
      const p_ = response.data.response.patients.map((el) => {
        return { label: el.names, value: el.code };
      });
      setAppPatients(p_)
      setPatients_(response.data.response.patients);
      setPatients(response.data.response.patients);
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
      patientId: patientId.value || patientId, // modify body properties
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
        setShow2(false);
        if (res.data.status === true) {
          alert("Visit added successfully");
          fetchVisits();
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        setShow2(false);
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

  const fetchPatientsInsuranceID = async (id,prepopulate=false) => {
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
        if(prepopulate){
          setEmail(res.data.response.email);
          setNames(res.data.response.names);
          setPhoneNumber(res.data.response.phoneNumber);
          setcontactPerson(res.data.response.contactPerson);
          setcontactPersonPhoneNumber(res.data.response.contactPersonPhoneNumber);
          setDob(res.data.response.dob);
          setGender(res.data.response.gender);
          if(res.data.response?.patientInsurances?.length>0){
          var insurance_ = {value:res.data.response.patientInsurances[0].id,label:res.data.response.patientInsurances[0].insuranceName}
          setInsuranceId(insurance_)
          setTicket(res.data.response.patientInsurances[0].ticket)
          setexpiryDate(res.data.response.patientInsurances[0].expiryDate)
          setemployer(res.data.response.patientInsurances[0].employer)
          setcardNumber(res.data.response.patientInsurances[0].cardNumber)
          setprincipalNames(res.data.response.patientInsurances[0].principalNames)
          var type = res.data.response.patientInsurances[0].membershipType
          setmembershipType({label:type,value:type})
          }
        }
        const patientsInsurances = res.data.response.patientInsurances?.map(
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
        setSchedulesDayId(schedulesDayId);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };




  



  const fetchPreviousVisits = async (id,cPage=null) => {
    setPreviousVisits_([]);
      setPreviousVisits([]);
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "size":10,
        "page":cPage  || currentPage,
        patientId:id
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/patient/id`,
        config
      );
      setPreviousVisits_(response.data.response.patientVisits);
      setPreviousVisits(response.data.response.patientVisits);
      if(response.data.response.totalElements){
        setTotalRows(response.data.response.totalElements)
      }
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
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
    fetchAllDoctors();
    
  }, []);

  useEffect(() => {
    fetchPatients();
  }, [currentPage2]); 


  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Patients {action}</Card.Title>
              <Row>
                <Col>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
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
                <DataTable columns={columns} data={patients} paginationTotalRows={totalRows?totalRows:patients.length} paginationPerPage={10} paginationRowsPerPageOptions={[10]}  onChangePage={page=>setCurrentPage2(page)} pagination paginationServer/>
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Modal show={show} onHide={handleClose}>
        <Form 
        onSubmit={(e)=>{
          if(action==="update"){
            updatePatient(e)
          }else{
            handleSubmit(e)
          }
        }}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Col lg={12} className="col-md-">
              <Card className="custom-card">
                <Card.Header style={{justifyContent:'space-between'}}>
                  <Card.Title>{action==='update'?"Update":"Create new"} patient</Card.Title>
                  {action==='update'&&(
                    <Card.Title>
                    <p 
                      style={{cursor:'pointer',color:'#219ebc'}}
                      onClick={()=>{
                        setShow6(true);
                        setShow(false);
                        setAction("addInsurance")
                        // fetchPatientsInsuranceID(row.id,true);
                      }}
                    >
                      Add Insurance
                    </p>
                  </Card.Title>
                  )}
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
                            value={names}
                            // placeholder="names"
                            onChange={(e) => setNames(e.target.value)}
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
                            value={insuranceId}
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
                            value={email}
                            // placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={phoneNumber}
                            // placeholder="phone number"

                            onChange={(e) => setPhoneNumber(e.target.value)}
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
                            type="text"
                            className="form-control"
                            name="example-text-input"
                            value={contactPerson}
                            // placeholder="Contact Person"
                            onChange={(e) => setcontactPerson(e.target.value)}
                          />
                        </Form.Group>
                      </Col>

                      <Col xl={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Contact Person Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            className="form-control"
                            value={contactPersonPhoneNumber}
                            name="example-text-input"
                            // placeholder="phone number"

                            onChange={(e) =>
                              setcontactPersonPhoneNumber(e.target.value)
                            }
                          />
                        </Form.Group>
                      </Col>

                      {action!=="update"&&(
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
                          />
                        </Form.Group>
                      </Col>
                      )}

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
                              onChange={(e) => setmembershipType(e)}
                              classNamePrefix="Select2"
                              value={membershipType}
                              className="multi-select"
                              // placeholder="Select them"
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}

                      {insuranceId?.label?.toLowerCase() !==  "private" && membershipType?.label?.toLowerCase() !=="principal" && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>Principal Names</Form.Label>
                            <Form.Control
                              type="Text"
                              className="form-control"
                              value={principalNames}
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
                              value={cardNumber}
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
                            <Form.Label>Employer</Form.Label>
                            <Form.Control
                              type="text"
                              className="form-control"
                              name="example-text-input"
                              value={employer}
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
                              value={expiryDate}
                              // placeholder="Address"
                              onChange={(e) => setexpiryDate(e.target.value)}
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}


                      
                      {insuranceId?.label?.toLowerCase() !== "private" && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>Ticket</Form.Label>
                            <Form.Control  
                              type="number"
                              className="form-control"
                              name="example-text-input"
                              value={ticket}
                              // placeholder="Address"
                              onChange={(e) => setTicket(e.target.value)}
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
                  <Form.Label>Doctor</Form.Label>
                  <Select
                    options={doctors}
                    onChange={(e) => setDoctorId(e.value)}
                    classNamePrefix="Select2"
                    className="multi-select"
                    placeholder="Doctor"
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






      <Modal show={show3} onHide={() => setShow3(false)}>
        <Form onSubmit={handleSubmit2}>
          <Modal.Header closeButton>
            <Modal.Title>Previous Visits</Modal.Title>
          </Modal.Header>
          <Card.Body>
              <Card.Body>
                <DataTable columns={columns2} data={previousVisits} paginationTotalRows={totalRows?totalRows:previousVisits.length} paginationPerPage={10} paginationRowsPerPageOptions={[10]} onChangePage={page=>{fetchPreviousVisits(patientId,page);setCurrentPage(page)}} pagination paginationServer/>
              </Card.Body>
            </Card.Body>
          <Modal.Footer>
            
            <Button variant="secondary" onClick={() => setShow3(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>



      <Modal show={show4} onHide={() => setShow4(false)}>
        <Form onSubmit={handleSubmit2}>
          <Modal.Header closeButton>
            <Modal.Title>Choose Action</Modal.Title>
          </Modal.Header>
          <Modal.Footer>

          <Button  variant="primary"  onClick={() => {
            setShow2(true);
            setShow4(false)
          }} >
              Add Visits
            </Button>

            <Button  variant="primary"  onClick={() => {
            setShow5(true);
            setShow4(false)

          }} >
              Add Appointment
            </Button>
            </Modal.Footer>
        </Form>
      </Modal>




      <Modal show={show5} onHide={() => setShow5(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Book Appointments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>



                      <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Label>Doctor</Form.Label>
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
                  <Form.Label>Day</Form.Label>
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
                    options={appPatients}
                    value={patientId}
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
            <Button variant="primary" onClick={handleSubmit3}>
              Submit
            </Button>
            <Button variant="secondary" onClick={()=>{setShow5(false)}}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>






      <Modal show={show6} onHide={()=>setShow6(false)}>
        <Form>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Col lg={12} className="col-md-">
              <Card className="custom-card">
                <Card.Header>
                <Card.Title>{action==='addInsurance'?"Add":"Create new"} Insurance</Card.Title>

                </Card.Header>
                <Card.Body>
                  <div className="d-flex flex-column">
                    <Row>
                     
                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Label>Insurance</Form.Label>
                          <Select
                            className="basic-single"
                            options={insurances}
                            value={insuranceId}
                            onChange={(e) => setInsuranceId(e)}
                            classNamePrefix="Select2"
                            placeholder="Select them"
                            required
                          />
                        </Form.Group>
                      </Col>

                   

                      {insuranceId?.label?.toLowerCase() !==  "private" && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>Membership Type</Form.Label>
                            <Select
                              options={membershipTypes}
                              onChange={(e) => setmembershipType(e)}
                              classNamePrefix="Select2"
                              value={membershipType}
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
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control
                              type="text"
                              value={cardNumber}
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
                            <Form.Label>Employer</Form.Label>
                            <Form.Control
                              type="text"
                              className="form-control"
                              name="example-text-input"
                              value={employer}
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
                              value={expiryDate}
                              // placeholder="Address"
                              onChange={(e) => setexpiryDate(e.target.value)}
                              required
                            />
                          </Form.Group>
                        </Col>
                      )}


                      
                      {insuranceId?.label?.toLowerCase() !== "private" && (
                        <Col xl={6}>
                          <Form.Group className="form-group">
                            <Form.Label>Ticket</Form.Label>
                            <Form.Control  
                              type="number"
                              className="form-control"
                              name="example-text-input"
                              value={ticket}
                              // placeholder="Address"
                              onChange={(e) => setTicket(e.target.value)}
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
                      onClick={(e)=>{
                        if(action==="addInsurance"){
                          addInsurance(e)
                        }else{
                          handleSubmit(e)
                        }
                      }}
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

      <Modal show={show7} onHide={() => setShow7(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{visitId && <Visit visitId={visitId} />}</Modal.Body>
      </Modal>



    </div>
  );
}

export default Patients;