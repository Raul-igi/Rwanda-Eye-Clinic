import React, { Fragment, useState, useEffect } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import DataTable from "react-data-table-component";

export default function VisitDetails() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [acts, setActs] = useState([]);
  const [act, setAct] = useState("");

  const [diagnostic, setDiagnostic] = useState("");
  const [savedDiagnostic, setSavedDiagnostic] = useState("");
  const [treatment, setTreatment] = useState("");
  const [savedTreatment, setSavedTreatment] = useState("");

  const [medicalActs, setMedicalActs] = useState([]);
  const [visualAcuity, setVisualAcuity] = useState([]);

  const [scRightEye, setScRightEye] = useState("");
  const [scLeftEye, setScLeftEye] = useState("");
  const [acRightEye, setAcRightEye] = useState("");
  const [acLeftEye, setAcLeftEye] = useState("");
  const [phRightEye, setPhRightEye] = useState("");
  const [phLeftEye, setPhLeftEye] = useState("");
  const [glassSphereRightEye, setGlassSphereRightEye] = useState("");
  const [glassSphereLeftEye, setGlassSphereLeftEye] = useState("");
  const [glassCylindreRightEye, setGlassCylindreRightEye] = useState("");
  const [glassCylindreLeftEye, setGlassCylindreLeftEye] = useState("");
  const [glassAxeRightEye, setGlassAxeRightEye] = useState("");
  const [glassAxeLeftEye, setGlassAxeLeftEye] = useState("");

  const vaColumns = [
    {
      name: "Name",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "Right",
      selector: (row) => [row.right],
      sortable: true,
    },
    {
      name: "Left",
      selector: (row) => [row.left],
      sortable: true,
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

  const removeAct = async (actId) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "patientVisitId": location.state.data.visitId,
        "medicalActId": actId,
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
        "Authorization": `Bearer ${my_token}`,
        "patientVisitId": location.state.data.visitId
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/nurse/diagnostic/visit-id`,
        config
      );
      if(response.data.status){
          setSavedDiagnostic(response.data.response.diagnostic)
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
        "Authorization": `Bearer ${my_token}`,
        "patientVisitId": location.state.data.visitId
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/doctor/treatment/visit-id`,
        config
      );
      if(response.data.status){
          setSavedTreatment(response.data.response.treatment)
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
      setMedicalActs(response.data.response);
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
    } catch (error) {
      console.error(error);
    }
  };

  const addVisualAcuity = async (e) => {
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
      scRightEye: scRightEye,
      scLeftEye: scLeftEye,
      acRightEye: acRightEye,
      acLeftEye: acLeftEye,
      phRightEye: phRightEye,
      phLeftEye: phLeftEye,
      glassSphereRightEye: glassSphereRightEye,
      glassSphereLeftEye: glassSphereLeftEye,
      glassCylindreRightEye: glassCylindreRightEye,
      glassCylindreLeftEye: glassCylindreLeftEye,
      glassAxeRightEye: glassAxeRightEye,
      glassAxeLeftEye: glassAxeLeftEye,
    });
    console.log(postObj);
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/nurse/va`,
        postObj,
        config
      );
      setShow2(false);
      if (response.data.status) {
        alert("Visual acuity added successfully!");
      }
    } catch (error) {
      setShow2(false);
      console.error(error);
    }
  };

  const addAct = async (e) => {
    e.preventDefault();
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state.data.visitId,
        medicalActId: act,
      },
    };
    console.log(config);
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/nurse/patient/add-act`,
        {},
        config
      );
      setShow2(false);
      if (response.data.status) {
        alert("Medical act added successfully!");
      }
    } catch (error) {
      setShow2(false);
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

  useEffect(() => {
    fetchActs();
    fetchVisualAcuity();
    fetchMedicalActs();
    fetchDiagnostic();
    fetchTreatment();
  }, []);

  return (
    <Fragment>
      <Button
        onClick={() => setShow(true)}
        style={{ marginRight: 10, marginLeft: 20 }}
      >
        Add Visual Acuity
      </Button>
      <Button onClick={() => setShow2(true)} style={{ marginRight: 10 }}>
        Add medical act
      </Button>
      <Button onClick={() => setShow3(true)} style={{ marginRight: 10 }}>
        Add treatment
      </Button>
      <Button onClick={() => setShow4(true)} style={{ marginRight: 10 }}>
        Add diagnostic
      </Button>

      <Row>
      <Col md={4} xl={4} style={{ marginTop: 20 }}>
      <Card style={{minHeight:180}}>
          <Card.Header className=" d-flex justify-content-between align-items-center">
            <div className="">
              <Card.Title>
                {location.state.data?.createdAt?.slice(0, 10)}
              </Card.Title>
              {/* <button type="button" className="btn btn-secondary btn-sm">Action 2</button> */}
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>Sex: {location.state.data.patient?.gender}</Card.Title>
            <Card.Title>DOB: {location.state.data.patient?.dob}</Card.Title>
            <Card.Title style={{ fontSize: "15px" }}>
              Doctor: Dr {location.state.data.doctor}
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} xl={4} style={{ marginTop: 20 }}>
        <Card style={{minHeight:180}}>
          <Card.Header className=" d-flex justify-content-between align-items-center">
            <div className="">
              <Card.Title>
                Treatment
              </Card.Title>
              {/* <button type="button" className="btn btn-secondary btn-sm">Action 2</button> */}
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{savedTreatment?`Treatment: ${savedTreatment}`:'No treatment yet...'}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} xl={4} style={{ marginTop: 20 }}>
      <Card style={{minHeight:180}}>
          <Card.Header className=" d-flex justify-content-between align-items-center">
            <div className="">
              <Card.Title>
                Diagnostic
              </Card.Title>
              {/* <button type="button" className="btn btn-secondary btn-sm">Action 2</button> */}
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Title>{savedDiagnostic?`Diagnostic: ${savedDiagnostic}`:'No Diagnostic yet...'}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      </Row>
      
      <Row>
        <Col md={6} xl={6} style={{ marginTop: 20 }}>
          <h1>Visual Acuity</h1>
          <DataTable columns={vaColumns} data={visualAcuity} />
        </Col>
        <Col md={6} xl={6} style={{ marginTop: 20 }}>
          <h1>Medical Acts</h1>
          <DataTable columns={maColumns} data={medicalActs} />
        </Col>
        <Modal show={show} onHide={() => setShow(false)}>
          <Col lg={12} md={12} style={{ padding: 30 }}>
            <h1>Visual Acuity</h1>

            <Form onSubmit={addVisualAcuity}>
              <Row className="">
                <Col
                  md={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: 16, fontWeight: "bold" }}>SC</p>
                </Col>
                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label>Right Eye</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setScRightEye(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label>Left Eye</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setScLeftEye(e.target.value)}
                  />
                </Form.Group>

                <Col
                  md={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: 16, fontWeight: "bold" }}>AC</p>
                </Col>

                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setAcRightEye(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                  className="form-group"
                >
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setAcLeftEye(e.target.value)}
                  />
                </Form.Group>

                <Col
                  md={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: 16, fontWeight: "bold" }}>PH</p>
                </Col>

                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setPhRightEye(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setPhLeftEye(e.target.value)}
                  />
                </Form.Group>

                <Col
                  md={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: 16, fontWeight: "bold" }}>
                    Glass Sphere
                  </p>
                </Col>

                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setGlassSphereRightEye(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setGlassSphereLeftEye(e.target.value)}
                  />
                </Form.Group>

                <Col
                  md={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: 16, fontWeight: "bold" }}>
                    Glass Cylindre
                  </p>
                </Col>

                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setGlassCylindreRightEye(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setGlassCylindreLeftEye(e.target.value)}
                  />
                </Form.Group>

                <Col
                  md={4}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <p style={{ fontSize: 16, fontWeight: "bold" }}>Glass Axe</p>
                </Col>

                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setGlassAxeRightEye(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="4" className="form-group">
                  <Form.Label></Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="%"
                    onChange={(e) => setGlassAxeLeftEye(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Button className="btn btn-danger" onClick={() => setShow(false)}>
                Cancel
              </Button>
              <Button type="submit" style={{ marginLeft: 10 }}>
                Send Results
              </Button>
            </Form>
          </Col>
        </Modal>

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
                    <Card.Title>Add treatment</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-column">
                      <Form.Group as={Col} md="12" className="form-group">
                        <Form.Label>Treatment</Form.Label>
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
      </Row>
    </Fragment>
  );
}
