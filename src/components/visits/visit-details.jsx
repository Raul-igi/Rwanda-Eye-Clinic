import React, { Fragment, useState, useEffect } from "react";
import { Button, Card, Col, Form, Modal, Row, Collapse } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import DataTable from "react-data-table-component";
import { debounce } from "lodash";
import { lensType_, dip_ } from "../../data/elementsdata";
export default function VisitDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  
  const [isVaSaved, setIsVaSaved] = useState(true);
  const [isReSaved, setIsReSaved] = useState(true);

  const [acts, setActs] = useState([]);
  const [roles, setRoles] = useState([]);
  const [act, setAct] = useState("");
  const [invoice, setInvoice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("INSURANCE");

  const [insuranceAmount, setInsuranceAmount] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState(0);

  const [treatment, setTreatment] = useState("");
  const [savedTreatment, setSavedTreatment] = useState("");
  const [diagnostic, setDiagnostic] = useState("");
  const [savedDiagnostic, setSavedDiagnostic] = useState("");
  const [refraction, setRefraction] = useState([
    {
      name: "Sphere Right Eye",
      right: "",
      left: "",
    },

    {
      name: "Cylindre Right Eye",
      right: "",
      left: "",
    },

    {
      name: "Axe Right Eye",
      right: "",
      left: "",
    },

    {
      name: "Lens Type",
      select:true,
      right: "",
    },

    {
      name: "DIP",
      select:true,
      right: "",
    },
  ]);

  const [savedRefraction, setSavedRefraction] = useState("");

  const [medicalActs, setMedicalActs] = useState([]);
  const [visualAcuity, setVisualAcuity] = useState([
    {
      name: "SC",
      right: "",
      left: "",
    },
    {
      name: "AC",
      right: "",
      left: "",
    },
    {
      name: "PH",
      right: "",
      left: "",
    },
    {
      name: "Glass Sphere",
      right: "",
      left: "",
    },
    {
      name: "Glass Cylindre",
      right: "",
      left: "",
    },
    {
      name: "Glass Axe",
      right: "",
      left: "",
    },
  ]);


  const [sphereRightEye, setSphereRightEye] = useState("");
  const [sphereLeftEye, setSphereLeftEye] = useState("");
  const [cylindreRightEye, setCylindreRightEye] = useState("");
  const [cylindreLeftEye, setCylindreLeftEye] = useState("");
  const [axeRightEye, setAxeRightEye] = useState("");
  const [axeLeftEye, setAxeLeftEye] = useState("");
  const [lensType, setLensType] = useState("");
  const [dip, setDip] = useState("");

  const [showModal, setShowModal] = useState(false);
  const handleClose8 = () => setShowModal(false);
  const handleShow8 = () => setShowModal(true);
  
  const [eight, setEight] = useState(false);

  const handleInputChange = (e, name, field) => {
    // Update the corresponding data item with the new value
    const newData = visualAcuity.map((item) => {
      if (item.name === name) {
        return { ...item, [field]: e.target.value };
      }
      return item;
    });
    setVisualAcuity(newData);
  };

  const handleInputChange2 = (e, name, field) => {
    // Update the corresponding data item with the new value
    const newData = refraction.map((item) => {
      if (item.name === name) {
        return { ...item, [field]: e };
      }
      return item;
    });
    setRefraction(newData);
  };

  const paymentMethods = [
    { value: "INSURANCE", label: "Insurance" },
    { value: "INSURANCE_AND_TOP_UP", label: "Insurance and Top Up" },
    { value: "CASH", label: "Cash" },
  ];

  const vaColumns = [
    {
      name: "Name",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "Right",
      sortable: true,
      cell: (row) => (
        <input
          className="form-control"
          type="text"
          readOnly={isVaSaved}
          value={row.right}
          onChange={(e) => handleInputChange(e, row.name, "right")}
        />
      ),
    },
    {
      name: "Left",
      sortable: true,
      cell: (row) => (
        <input
          className="form-control"
          type="text"
          readOnly={isVaSaved}
          value={row.left}
          onChange={(e) => handleInputChange(e, row.name, "left")}
        />
      ),
    },
  ];

  const maColumns = [
    {
      name: "Name",
      selector: (row) => [row.name],
      sortable: true,
    },

    {
      name: "Actions",
      cell: (row) => (
        <div
          onClick={() => {
            if (window.confirm(`Do you want to remove ${row.name}`)) {
              removeAct(row.id);
            }
          }}
          style={{ color: "red", cursor: "pointer" }}
        >
          Remove
        </div>
      ),
    },
  ];

  const reColumns = [
    {
      name: "Name",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "Right",
      sortable: true,
      cell: (row) => (
          !row.select?
         <input
          className="form-control"
          type="text"
          readOnly={isReSaved}
          value={row.right}
          onChange={(e) => handleInputChange2(e.target.value, row.name, "right")}
        />:
        <div style={{width:'100%'}}>
<Select
                          options={row.name==='Lens Type'?lensType_:dip_}
                          value={{label:row.right,value:row.right}}
                          style={{width:'100%'}}
                          onChange={(e) =>handleInputChange2(e.value, row.name, "right")}
                          classNamePrefix="Select2"
                          className="multi-select"
                          // placeholder="Select them"
                          required
                        />
        </div>
        
        
       
      ),
    },
    {
      name: "Left",
      sortable: true,
      cell: (row) => (
       (row.left!==undefined) &&  <input
       className="form-control"
       type="text"
       readOnly={isReSaved}
       value={row.left}
       onChange={(e) => handleInputChange2(e.target.value, row.name, "left")}
     />
      ),
    },
  ];

  const removeAct = async (actId) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
        medicalActId: actId,
      },
    };

    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/nurse/patient/remove-act`,
        {},
        config
      );
      if (response.data.status) {
        fetchMedicalActs();
      } else {
        alert("Enable to remove the medical act!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchActs = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/nurse/acts`,
        config
      );
      const acts_ = response.data.response.map((el) => {
        return { label: el.name, value: el.id };
      });
      setActs(acts_);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDiagnostic = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data?.visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/nurse/diagnostic/visit-id`,
        config
      );
      if (response.data.status) {
        setSavedDiagnostic(response.data.response?.diagnostic);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTreatment = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/doctor/treatment/visit-id`,
        config
      );
      if (response.data.status) {
        setSavedTreatment(response.data.response?.treatment);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMedicalActs = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/nurse/patient-acts`,
        config
      );
      setMedicalActs(response.data.response.map(el=>el.id));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchInvoice = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/invoice/patient/id`,
        config
      );
      setInvoice(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchVisualAcuity = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/nurse/va/visit-id`,
        config
      );
      if(response.data.response){
        setIsVaSaved(true)
         const visualAcuity_ = [
        {
          name: "SC",
          right: response.data.response.scRightEye,
          left: response.data.response.scLeftEye,
        },
        {
          name: "AC",
          right: response.data.response.acRightEye,
          left: response.data.response.acLeftEye,
        },
        {
          name: "PH",
          right: response.data.response.phRightEye,
          left: response.data.response.phLeftEye,
        },
        {
          name: "Glass Sphere",
          right: response.data.response.glassSphereRightEye,
          left: response.data.response.glassSphereLeftEye,
        },
        {
          name: "Glass Cylindre",
          right: response.data.response.glassCylindreRightEye,
          left: response.data.response.glassCylindreLeftEye,
        },
        {
          name: "Glass Axe",
          right: response.data.response.glassAxeRightEye,
          left: response.data.response.glassAxeLeftEye,
        },
      ];
      setVisualAcuity(visualAcuity_);
      }else{
        setIsVaSaved(false)
      }
     
    } catch (error) {
      console.error(error);
    }
  };

  const addVisualAcuity = async () => {
    if(
      !(visualAcuity[0].right && visualAcuity[0].left &&
      visualAcuity[1].right && visualAcuity[1].left &&
      visualAcuity[2].right && visualAcuity[2].left &&
      visualAcuity[3].right && visualAcuity[3].left &&
      visualAcuity[4].right && visualAcuity[4].left &&
      visualAcuity[5].right && visualAcuity[5].left)
      ){
        alert('Fill all the visual acuity fields')
      }else{
        let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state.data.visitId,
      scRightEye: visualAcuity[0].right,
      scLeftEye: visualAcuity[0].left,
      acRightEye: visualAcuity[1].right,
      acLeftEye: visualAcuity[1].left,
      phRightEye: visualAcuity[2].right,
      phLeftEye: visualAcuity[2].left,
      glassSphereRightEye: visualAcuity[3].left,
      glassSphereLeftEye: visualAcuity[3].left,
      glassCylindreRightEye: visualAcuity[4].right,
      glassCylindreLeftEye: visualAcuity[4].left,
      glassAxeRightEye: visualAcuity[5].right,
      glassAxeLeftEye: visualAcuity[5].left,
    });
    console.log(postObj);
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/nurse/va`,
        postObj,
        config
      );
      setShow(false);
      if (response.data.status) {
        alert("Visual acuity added successfully!");
        fetchVisualAcuity();
      }
    } catch (error) {
      setShow(false);
      console.error(error);
    }
      }
    
  };

  const pay = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    var paymentDto = {
      invoiceNumber: invoice.invoiceNumber,
      paymentMethod,
      amount: invoice.patientAmount,
    };
    if (topUpAmount > 0) {
      paymentDto.topUpAmount = topUpAmount;
    }
    console.log(paymentDto);
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/invoice/pay`,
        JSON.stringify(paymentDto),
        config
      );
      setShowModal(false);
      if (response.data.status) {
        alert("Paid successfully!");
      }
    } catch (error) {
      setShowModal(false);
      console.error(error);
    }
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setMedicalActs((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((act) => act !== value);
      }
    });
  };

  // Debounced function to be executed after changes
  const debouncedFunction = debounce((updatedMedicalActs) => {
    addAct(updatedMedicalActs);
  }, 3000);

  // Effect to handle changes to medicalActs state
  useEffect(() => {
    debouncedFunction(medicalActs);

    // Cleanup the debounce on unmount
    return () => debouncedFunction.cancel();
  }, [medicalActs, debouncedFunction]);

  const addAct = async (acts_) => {
    const roles_ = localStorage.getItem("role");
    const userRoles = JSON.parse(roles_);
    if(userRoles.includes('Nurse') && location.state.data.visitStatus === "TRANSFER_TO_NURSE"){
      let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
        medicalActId: acts_,
      },
    };
    console.log(config);
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/nurse/patient/add-act-all`,
        {},
        config
      );
      setShow2(false);
      if (response.data.status) {
        // alert("Medical acts added successfully!");
      }
    } catch (error) {
      setShow2(false);
      console.error(error);
    }
    }
    
  };

  const nurseSave = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
      },
    };
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/nurse/save`,
        {},
        config
      );
      if (response.data.status) {
        alert("Successfully saved!");
        navigate("/visits");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const doctorSave = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
      },
    };
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/doctor/save`,
        {},
        config
      );
      if (response.data.status) {
        alert("Successfully saved!");
        navigate("/visits");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addTreatment = async (e) => {
    e.preventDefault();
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state.data.visitId,
      treatment: treatment,
    });
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/doctor/treatment`,
        postObj,
        config
      );
      setShow3(false);
      if (response.data.status) {
        alert("Treatment added successfully!");
        fetchTreatment();
      }
    } catch (error) {
      setShow3(false);
      console.error(error);
    }
  };

  const addDiagnostic = async (e) => {
    e.preventDefault();
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state.data.visitId,
      diagnostic: diagnostic,
    });
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/nurse/diagnostic`,
        postObj,
        config
      );
      setShow4(false);
      if (response.data.status) {
        alert("Diagnostic added successfully!");
        fetchDiagnostic();
      }
    } catch (error) {
      setShow4(false);
      console.error(error);
    }
  };

  const addRefraction = async () => {
    if(!(
      refraction[0].right && refraction[0].left &&
      refraction[1].right && refraction[1].left &&
      refraction[2].right && refraction[2].left &&
      refraction[3].right && 
      refraction[4].right
    )){
      alert('Fill all the refraction fields')
    }else{
      let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state.data.visitId,
      sphereRightEye: refraction[0].right,
      sphereLeftEye: refraction[0].left,
      cylindreRightEye: refraction[1].right,
      cylindreLeftEye: refraction[1].left,
      axeRightEye: refraction[2].right,
      axeLeftEye: refraction[2].left,
      lensType: refraction[3].right,
      dip: refraction[4].right,
    });

    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/doctor/refraction`,
        postObj,
        config
      );
      setShow5(false);
      if (response.data.status) {
        alert("Refraction added successfully!");
        fetchRefraction();
      }
    } catch (error) {
      setShow5(false);
      console.error(error);
      console.log(res.data);
    }
    }
  };

  const fetchRefraction = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/doctor/refraction/visit-id`,
        config
      );
      if(response.data.status && response.data.response){
        setIsReSaved(true)
        const refraction_ = [
          {
            name: "Sphere Right Eye",
            right: response.data.response.sphereRightEye,
            left: response.data.response.sphereLeftEye,
          },
  
          {
            name: "Cylindre Right Eye",
            right: response.data.response.cylindreRightEye,
            left: response.data.response.cylindreLeftEye,
          },
  
          {
            name: "Axe Right Eye",
            right: response.data.response.axeRightEye,
            left: response.data.response.axeLeftEye,
          },
  
          {
            name: "Lens Type",
            select:true,
            right: response.data.response.lensType,
          },
  
          {
            name: "DIP",
            select:true,
            right: response.data.response.dip,
          },
        ];
        setRefraction(refraction_);
      }else{
        setIsReSaved(false)
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchActs();
    fetchVisualAcuity();
    fetchMedicalActs();
    fetchDiagnostic();
    fetchRefraction();
    fetchTreatment();
    fetchInvoice();
    const roles_ = localStorage.getItem("role");
    const userRoles = JSON.parse(roles_);
    setRoles(userRoles);
  }, []);

  return (
    <Fragment>
      {roles.includes("Doctor") &&
        location.state.data.visitStatus === "TRANSFER_TO_DOCTOR" && (
          <>
            <Button onClick={() => setShow3(true)} style={{ marginRight: 10 }}>
              Add Dr.Note
            </Button>
            <Button onClick={() => setShow5(true)} style={{ marginRight: 10 }}>
              Add Refraction
            </Button>
          </>
        )}
      {roles.includes("Nurse") &&
        savedTreatment && !savedDiagnostic && (
          <Button onClick={() => setShow4(true)} style={{ marginRight: 10 }}>
            Add diagnostic
          </Button>
        )}

      {visualAcuity.length > 0 &&
        medicalActs.length > 0 &&
        roles.includes("Doctor") && (
          <Button
            onClick={() => {
              if (window.confirm("Are you sure you want to save?")) {
                 doctorSave();
              }
            }}
            style={{ marginRight: 10 }}
          >
            save and send
          </Button>
        )}

{visualAcuity.length > 0 &&
        medicalActs.length > 0 &&
        roles.includes("Nurse") && !savedTreatment && (
          <Button
            onClick={() => {
              if (window.confirm("Are you sure you want to save?")) {
                nurseSave() 
              }
            }}
            style={{ marginRight: 10 }}
          >
            save and send
          </Button>
        )}
      {invoice && (
        <Row>
          <Col md={4} xl={4} style={{ marginTop: 20, margin: "auto" }}>
            <Card style={{ minHeight: 180 }}>
              <Card.Header className=" d-flex justify-content-between align-items-center">
                <Card.Title>
                  Invoice Number: {invoice.invoiceNumber}
                  {(invoice.paymentStatus == "NOT_PAID" && roles.includes('Receptionist')) && (
                    <Button
                      style={{ marginLeft: 50 }}
                      variant="green"
                      onClick={handleShow8}
                    >
                      Pay Invoice
                    </Button>
                  )}
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  {" "}
                  Total Amount: Rwf {invoice.totalAmount.toLocaleString()}{" "}
                </Card.Title>
                <Card.Title>
                  Insurer Amount: Rwf {invoice.insurerAmount.toLocaleString()}
                </Card.Title>
                <Card.Title>
                  Patient Amount: Rwf {invoice.patientAmount.toLocaleString()}
                </Card.Title>
                <Card.Title>
                  Remaining Amount: Rwf{" "}
                  {invoice.remainingAmount.toLocaleString()}
                </Card.Title>
                <Card.Title
                  style={{
                    color:
                      invoice.paymentStatus == "NOT_PAID" ? "red" : "green",
                  }}
                >
                  Status: {invoice.paymentStatus}
                </Card.Title>
              </Card.Body>
            </Card>

            <Col sm={12} md={12} lg={6} xl={4}>
              {/* <Card.Header>
            <Card.Title>Select2 Inside Modal</Card.Title>
            <Form.Check label="show code" type='switch' id="custom-switch" className="ms-auto" onClick={() => { setEight(!eight) }} />
          </Card.Header> */}
              <Card.Body>
                <Modal show={showModal} onHide={handleClose8}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Pay Invoice | Amount to pay: {invoice.patientAmount} Rwf
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {invoice.patientAmount > 0 ? (
                      <>
                        <Col xl={12}>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              Payment method
                              <br />
                              <Select
                                options={paymentMethods}
                                placeholder="Select method"
                                classNamePrefix="Select2"
                                onChange={(e) => setPaymentMethod(e.value)}
                              />
                            </Form.Group>
                          </Form>
                        </Col>

                        {paymentMethod === "INSURANCE_AND_TOP_UP" && (
                          <>
                            <Col xl={12}>
                              <Form.Group className="form-group">
                                <Form.Label>Insurance Amount</Form.Label>
                                <Form.Control
                                  type="number"
                                  value={insuranceAmount}
                                  className="form-control"
                                  name="example-text-input"
                                  // placeholder="names"
                                  onChange={(e) => {
                                    let newValue = parseInt(e.target.value, 10);
                                    // Ensure the value is between 0 and 20
                                    newValue = Math.min(
                                      Math.max(newValue, 0),
                                      invoice.patientAmount
                                    );

                                    setInsuranceAmount(newValue);
                                    setTopUpAmount(
                                      invoice.patientAmount - newValue
                                    );
                                  }}
                                  required
                                />
                              </Form.Group>
                            </Col>
                            <Col xl={12}>
                              <Form.Group className="form-group">
                                <Form.Label>Top Up Amount</Form.Label>
                                <Form.Control
                                  type="number"
                                  value={topUpAmount}
                                  className="form-control"
                                  name="example-text-input"
                                  // placeholder="names"
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </>
                        )}
                      </>
                    ) : (
                      <p>Mark Invoice as paid</p>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => pay()} variant="success">
                      {invoice.patientAmount > 0 ? "Pay Now" : "Mark as paid"}
                    </Button>
                    <Button variant="danger" onClick={handleClose8}>
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>{" "}
              </Card.Body>
            </Col>
          </Col>
        </Row>
      )}
      <Row>
        <Col md={4} xl={4} style={{ marginTop: 20 }}>
          <Card style={{ minHeight: 180 }}>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <div className="">
                <Card.Title>
                  {location.state.data?.createdAt?.slice(0, 10)}
                </Card.Title>
                {/* <button type="button" className="btn btn-secondary btn-sm">Action 2</button> */}
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                Sex: {location.state.data.patient?.gender}
              </Card.Title>
              <Card.Title>DOB: {location.state.data.patient?.dob}</Card.Title>
              <Card.Title style={{ fontSize: "15px" }}>
                Doctor: Dr {location.state.data.doctor}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {!roles.includes('Receptionist')&&(
          <>
          <Col md={4} xl={4} style={{ marginTop: 20 }}>
          <Card style={{ minHeight: 180 }}>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <div className="">
                <Card.Title>Dr.Note</Card.Title>
                {/* <button type="button" className="btn btn-secondary btn-sm">Action 2</button> */}
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {savedTreatment
                  ? `Dr.Note: ${savedTreatment}`
                  : "No treatment yet..."}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xl={4} style={{ marginTop: 20 }}>
          <Card style={{ minHeight: 180 }}>
            <Card.Header className=" d-flex justify-content-between align-items-center">
              <div className="">
                <Card.Title>Diagnostic</Card.Title>
                {/* <button type="button" className="btn btn-secondary btn-sm">Action 2</button> */}
              </div>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {savedDiagnostic
                  ? `Diagnostic: ${savedDiagnostic}`
                  : "No Diagnostic yet..."}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        </>
        )}
        
      </Row>

      {!roles.includes('Receptionist')&&(
        <Row>
        <Col md={6} xl={6} style={{ marginTop: 20 }}>
          <h1>Visual Acuity</h1>
          <DataTable columns={vaColumns} data={visualAcuity} />
          {(roles.includes("Nurse") &&
            location.state.data.visitStatus === "TRANSFER_TO_NURSE" && !isVaSaved) && (
              <>
                <Button
                  onClick={() => addVisualAcuity()}
                  style={{ marginTop:20 }}
                >
                  Save
                </Button>
              </>
            )}
        </Col>

        <Col md={6} xl={6} style={{ marginTop: 20 }}>
          <h1>Refraction</h1>
          <DataTable columns={reColumns} data={refraction} />
          {(roles.includes("Doctor") &&
            location.state.data.visitStatus === "TRANSFER_TO_DOCTOR" && !isReSaved) && (
              <>
                <Button
                  onClick={() => addRefraction()}
                  style={{ marginTop:20 }}
                >
                  Save
                </Button>
              </>
            )}
        </Col>

        <Col md={6} xl={6} style={{ marginTop: 20 }}>
          <h1>Medical Acts</h1>
          {acts.length>0?(
            acts.map(act=>
              <Fragment key={act.id}>
            <input
              type="checkbox"
              style={{ marginBottom: 15 }}
              value={act.value}
              checked={medicalActs.includes(act.value)}
              onChange={handleCheckboxChange}
            />{' '}
            {act.label}
            <br />
          </Fragment>
              )
          ):(
            <p>No medical acts</p>
          )}
        </Col>
      </Row>
      )}
        <Modal show={show2} onHide={() => setShow2(false)}>
          <Form onSubmit={addAct}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Col lg={12} className="col-md-">
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Add medical act</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-column">
                      <Row>
                        <Col xl={12}>
                          <Form.Group className="form-group">
                            <Form.Label>Select Act</Form.Label>
                            <Select
                              options={acts}
                              onChange={(e) => setAct(e.value)}
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

        <Modal show={show3} onHide={() => setShow3(false)}>
          <Form onSubmit={addTreatment}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Col lg={12} className="col-md-">
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Add Dr.Note</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-column">
                      <Form.Group as={Col} md="12" className="form-group">
                        <Form.Label>DR.Note</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter treatment"
                          onChange={(e) => setTreatment(e.target.value)}
                        />
                      </Form.Group>

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

        <Modal show={show4} onHide={() => setShow4(false)}>
          <Form onSubmit={addDiagnostic}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Col lg={12} className="col-md-">
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Add diagnostic</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-column">
                      <Form.Group as={Col} md="12" className="form-group">
                        <Form.Label>Diagnostic</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter diagnostic"
                          onChange={(e) => setDiagnostic(e.target.value)}
                        />
                      </Form.Group>

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

        <Modal show={show5} onHide={() => setShow5(false)}>
          <Form onSubmit={addRefraction}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <Col lg={12} className="col-md-">
                <Card className="custom-card">
                  <Card.Header>
                    <Card.Title>Add Refraction</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-col">
                      <Form.Group as={Col} md="6" className="form-group">
                        <Form.Label>Sphere Right Eye</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Sphere Right Eye"
                          onChange={(e) => setSphereRightEye(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group as={Col} md="6" className="form-group">
                        <Form.Label>Sphere Left Eye</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Sphere Right Eye"
                          onChange={(e) => setSphereLeftEye(e.target.value)}
                        />
                      </Form.Group>
                    </div>

                    <div className="d-flex flex-col">
                      <Form.Group as={Col} md="6" className="form-group">
                        <Form.Label>Cylindre Right Eye</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Cylindre Right Eye"
                          onChange={(e) => setCylindreRightEye(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group as={Col} md="6" className="form-group">
                        <Form.Label>Cylindre Left Eye</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Cylindre Felt Eye"
                          onChange={(e) => setCylindreLeftEye(e.target.value)}
                        />
                      </Form.Group>
                    </div>

                    <div className="d-flex flex-col">
                      <Form.Group as={Col} md="6" className="form-group">
                        <Form.Label>Axe Right Eye</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Axe Right Eye"
                          onChange={(e) => setAxeRightEye(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group as={Col} md="6" className="form-group">
                        <Form.Label>Axe Left Eye</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Axe Felt Eye"
                          onChange={(e) => setAxeLeftEye(e.target.value)}
                        />
                      </Form.Group>
                    </div>

                    <div className="d-flex flex-col">
                      <Form.Group as={Col} md="6" className="form-group">
                        <Form.Label>Lens Type</Form.Label>
                        <Select
                          options={lensType_}
                          onChange={(e) => setLensType(e.value)}
                          classNamePrefix="Select2"
                          className="multi-select"
                          // placeholder="Select them"
                          required
                        />
                      </Form.Group>

                      <Form.Group as={Col} md="6" className="form-group">
                        <Form.Label>Dip</Form.Label>
                        <Select
                          options={dip_}
                          onChange={(e) => setDip(e.value)}
                          classNamePrefix="Select2"
                          className="multi-select"
                          // placeholder="Select them"
                          required
                        />
                      </Form.Group>
                    </div>

                    <Button
                      type="submit"
                      className="btn ripple btn-primary my-3"
                      style={{ width: "40%", marginLeft: "320px" }}
                      variant="primary"
                    >
                      Submit
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Modal.Body>
          </Form>
        </Modal>
      
    </Fragment>
  );
}
