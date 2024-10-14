import React, { Fragment, useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Modal,
  Row,
  Collapse,
  Table,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import DataTable from "react-data-table-component";

const customStyles = {
  header: {
    style: {
      padding: "2px",
    },
  },
  rows: {
    style: {
      height: "20px", // override the row height
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        borderBottomColor: "#ccc",
      },
    },
  },
};

export default function Visit({ visitId, visit }) {
  const location = useLocation();

  const [savedTreatment, setSavedTreatment] = useState([]);
  const [rightExams, setRightExams] = useState([]);
  const [labs, setLabs] = useState([]);
  const [procedures, setProcedures] = useState([]);

  const [refraction, setRefraction] = useState([
    {
      name: "Right Eye",
      sphere: "",
      cylinder: "",
      axis: "",
      addition: "",
    },

    {
      name: "Left Eye",
      sphere: "",
      cylinder: "",
      axis: "",
      addition: "",
    },
  ]);

  const [optRefraction, setOptRefraction] = useState([
    {
      name: "Right Eye",
      sphere: "",
      cylinder: "",
      axis: "",
      addition: "",
    },

    {
      name: "Left Eye",
      sphere: "",
      cylinder: "",
      axis: "",
      addition: "",
    },
  ]);

  const [medicalActs, setMedicalActs] = useState([]);
  const [visualAcuity, setVisualAcuity] = useState([
    {
      name: "Right Eye",
      sc: "",
      ac: "",
      ph: "",
    },
    {
      name: "Left Eye",
      sc: "",
      ac: "",
      ph: "",
    },
  ]);

  const [currentGlasses, setCurrentGlasses] = useState([
    {
      name: "Right Eye",
      sphere: "",
      cylinder: "",
      axis: "",
    },
    {
      name: "Left Eye",
      sphere: "",
      cylinder: "",
      axis: "",
    },
  ]);

  const vaColumns = [
    {
      name: "",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "SC",
      sortable: true,
      selector: (row) => [row.sc],
    },
    {
      name: "AC",
      sortable: true,
      selector: (row) => [row.ac],
    },

    {
      name: "PH",
      sortable: true,
      selector: (row) => [row.ph],
    },
  ];

  const [comment, setComment] = useState([
    {
      name: "",
      comment: "",
    },
  ]);

  const CommentsColumn = [
    {
      name: "",
      sortable: true,
      cell: (row) => (
        <textarea
          readOnly={true}
          rows={3}
          value={row.comment}
          onChange={(e) => setComment([{ name: "", comment: e.target.value }])}
          className="form-control"
        />
      ),
    },
  ];

  const vaColumn = [
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
  ];

  const optReColumns = [
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

  const fetchOptRefraction = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state?.data?.visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/optometrist/refraction/visit-id`,
        config
      );
      if (response.data.status && response.data.response?.length > 0) {
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
        const comment_ = response.data.response[0].comments;
        setComment([{ name: "", comment: comment_ }]);
        setOptRefraction(refraction_);
      }
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
        patientVisitId: "081926e7-5a73-4c75-abb3-b27a94986e20",
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

  const fetchMedicalActs = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        id: location.state?.data?.visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/id`,
        config
      );
      setMedicalActs(response.data.response.medicalAct);
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
        patientVisitId: visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/nurse/va/visit-id`,
        config
      );
      if (response.data.response) {
        const visualAcuity_ = [
          {
            name: "Right Eye",
            sc: response.data.response.scRightEye,
            ac: response.data.response.acRightEye,
            ph: response.data.response.phRightEye,
          },
          {
            name: "Left Eye",
            sc: response.data.response.scLeftEye,
            ac: response.data.response.acLeftEye,
            ph: response.data.response.phLeftEye,
          },
        ];
        const currentGlasses_ = [
          {
            name: "Right Eye",
            sphere: response.data.response.glassSphereRightEye,
            cylinder: response.data.response.glassCylindreRightEye,
            axis: response.data.response.glassAxeRightEye,
          },
          {
            name: "Left Eye",
            sphere: response.data.response.glassSphereLeftEye,
            cylinder: response.data.response.glassCylindreLeftEye,
            axis: response.data.response.glassAxeLeftEye,
          },
        ];
        setVisualAcuity(visualAcuity_);
        setCurrentGlasses(currentGlasses_);
      }
    } catch (error) {
      console.error(error);
    }
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
        setRefraction(refraction_);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (visitId) {
      fetchVisualAcuity();
      fetchMedicalActs();
      fetchDiagnostic();
      fetchRefraction();
      fetchTreatment();
    } else {
      console.log(visit);
      const visualAcuity_ = [
        {
          name: "Right Eye",
          sc: visit.scRightEye,
          ac: visit.acRightEye,
          ph: visit.phRightEye,
        },
        {
          name: "Left Eye",
          sc: visit.scLeftEye,
          ac: visit.acLeftEye,
          ph: visit.phLeftEye,
        },
      ];
      const currentGlasses_ = [
        {
          name: "Right Eye",
          sphere: visit.glassSphereRightEye,
          cylinder: visit.glassCylindreRightEye,
          axis: visit.glassAxeRightEye,
        },
        {
          name: "Left Eye",
          sphere: visit.glassSphereLeftEye,
          cylinder: visit.glassCylindreLeftEye,
          axis: visit.glassAxeLeftEye,
        },
      ];
      const refraction_ = [
        {
          name: "Right Eye",
          sphere: visit.sphereRightEye || "",
          cylinder: visit.cylindreRightEye || "",
          axis: visit.axeRightEye || "",
          addition: visit.additionRightEye || "",
        },
        {
          name: "Left Eye",
          sphere: visit.sphereLeftEye || "",
          cylinder: visit.cylindreLeftEye || "",
          axis: visit.axeLeftEye || "",
          addition: visit.additionLeftEye || "",
        },
      ];
      setRefraction(refraction_);
      setVisualAcuity(visualAcuity_);
      setCurrentGlasses(currentGlasses_);
      setMedicalActs(visit.medicalAct || []);
      setRightExams(visit.exams || []);
      setProcedures(visit.procedures || []);
      setLabs(visit.labs || []);
      setSavedTreatment(visit.treatments?.map(t=>t.name))
    }
  }, []);

  return (
    <Fragment>
      <h1>{visit?.createdAt?.slice(0, 10)}</h1>
      <Row>
        <Col md={6} xl={6} style={{ marginTop: 20, paddingRight: 0 }}>
          <h1>Visual Acuity</h1>

          <DataTable
            columns={vaColumns}
            data={visualAcuity}
            customStyles={customStyles}
          />
        </Col>

        <Col
          md={6}
          xl={6}
          style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
        >
          <h1>Current Glasses</h1>
          <DataTable
            columns={vaColumn}
            data={currentGlasses}
            customStyles={customStyles}
          />
        </Col>

        <Col
          md={6}
          xl={6}
          style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
        >
          <h1 style={{ marginBottom: 0 }}>Optometrist Refraction</h1>
          <DataTable
            columns={optReColumns}
            data={optRefraction}
            customStyles={customStyles}
          />
        </Col>

        <Col md={6} xl={6} style={{ marginTop: 20, paddingLeft: 2 }}>
          <h1 style={{ marginBottom: 0 }}>Comments</h1>
          <DataTable
            columns={CommentsColumn}
            data={comment}
            customStyles={{ rows: { style: { height: 95 } } }}
          />
        </Col>

        <Col
          md={6}
          xl={6}
          style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
        >
          <h1>Doctor's Refraction</h1>
          <DataTable
            columns={reColumns}
            data={refraction}
            customStyles={customStyles}
          />
        </Col>

        <Col
          md={6}
          xl={6}
          style={{ marginTop: 20, paddingRight: 0, paddingLeft: 20 }}
        >
          <h1>Medical Acts</h1>
          {medicalActs.length > 0 ? (
            medicalActs.map((act, index) => {
              return (
                <p>
                  {index + 1}. {act.name}
                </p>
              );
            })
          ) : (
            <p>No act...</p>
          )}
        </Col>

        <div style={{ marginTop: 40 }}>
          <h1 style={{ marginBottom: 0 }}>Dr Exams</h1>
          <Card style={{ padding: 0 }}>
            <Card.Body style={{ margin: 0, padding: 0 }}>
              <Row style={{ paddingRight: 20 }}>
              <Col
                  lg={6}
                  style={{
                    marginBottom: 50,
                    marginTop: 20,
                    paddingLeft: 18,
                  }}
                >
                  <h1>Right eye (OD)</h1>
                  <p>{rightExams.join(', ') || 'No exam yet...'}</p>
                </Col>

                <Col
                  lg={6}
                  style={{
                    marginBottom: 50,
                    marginTop: 20,
                    paddingLeft: 18,
                  }}
                >
                  <h1>Left eye (OS)</h1>
                  <p>{rightExams.join(', ') || 'No exam yet...'}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        <div style={{ marginTop: 40 }}>
          <h1 style={{ marginBottom: 0 }}>Dr Procedures</h1>
          <Card style={{ padding: 0 }}>
            <Card.Body style={{ margin: 0, padding: 0 }}>
              <Row style={{ paddingRight: 20 }}>
              <Col
                  lg={6}
                  style={{
                    marginBottom: 50,
                    marginTop: 20,
                    paddingLeft: 18,
                  }}
                >
                  <h1>Procedures</h1>
                  <p>{procedures.join(', ') || 'No procedure yet...'}</p>
                </Col>

                <Col
                  lg={6}
                  style={{
                    marginBottom: 50,
                    marginTop: 20,
                    paddingLeft: 18,
                  }}
                >
                  <h1>Labs</h1>
                  <p>{labs.join(', ') || 'No labs yet...'}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>

        <div style={{ marginTop: 40 }}>
          <h1 style={{ marginBottom: 0 }}>Dr Treatments/Notes</h1>
          <Card style={{ padding: 0 }}>
            <Card.Body style={{ margin: 0, padding: 0 }}>
              <Row style={{ paddingRight: 20 }}>
              <Col
                  lg={6}
                  style={{
                    marginBottom: 50,
                    marginTop: 20,
                    paddingLeft: 18,
                  }}
                >
                  <h1>Treatments</h1>
                  <p>{savedTreatment?.join(', ') || 'No treatment yet...'}</p>
                </Col>

                <Col
                  lg={6}
                  style={{
                    marginBottom: 50,
                    marginTop: 20,
                    paddingLeft: 18,
                  }}
                >
                  <h1>Notes</h1>
                  <p>Not added yet...</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Fragment>
  );
}
