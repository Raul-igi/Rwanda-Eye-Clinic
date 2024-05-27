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
import Select from "react-select";
import axios from "axios";
import DataTable from "react-data-table-component";
import { debounce } from "lodash";
import { lensType_, dip_ } from "../../data/elementsdata";
export default function Visit({visitId}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);

  const [isVaSaved, setIsVaSaved] = useState(true);
  const [isReSaved, setIsReSaved] = useState(true);

  const [acts, setActs] = useState([]);
  const [roles, setRoles] = useState([]);
  const [act, setAct] = useState("");
  const [invoice, setInvoice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("INSURANCE");
  const [paymentMode, setPaymentMode] = useState(null);

  const [insuranceAmount, setInsuranceAmount] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState(0);

  const [treatment, setTreatment] = useState("");
  const [savedTreatment, setSavedTreatment] = useState("");
  const [diagnostic, setDiagnostic] = useState("");
  const [savedDiagnostic, setSavedDiagnostic] = useState("");

  const [previousVisits, setPreviousVisits] = useState("");
  const [previousVisits_, setPreviousVisits_] = useState("");
  const [patientId, setPatientId] = useState(false);
  const [totalRows, setTotalRows] = useState("");

  const [tab, setTab] = useState("tab1");
  const [toggle, setToggle] = useState(1);
  const [sphereRightEye, setSphereRightEye] = useState("");
  const [sphereLeftEye, setSphereLeftEye] = useState("");
  const [cylindreRightEye, setCylindreRightEye] = useState("");
  const [cylindreLeftEye, setCylindreLeftEye] = useState("");
  const [axeRightEye, setAxeRightEye] = useState("");
  const [axeLeftEye, setAxeLeftEye] = useState("");
  const [lensType, setLensType] = useState("");
  const [dip, setDip] = useState("");

  const [refraction_,setRefraction_]= useState("")

  const [showModal, setShowModal] = useState(false);
  const handleClose8 = () => setShowModal(false);
  const handleShow8 = () => setShowModal(true);

  const [eight, setEight] = useState(false);

  function updateToggle(id) {
    setToggle(id);
  }

  const columns2 = [
    {
      name: "Patient's names",
      selector: (row) => [row.patient?.names],
      sortable: true,
    },
    {
      name: "Patient's phone ",
      selector: (row) => [row.patient?.phoneNumber],
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
      name: "Visit Type",
      selector: (row) => [row.visitType],
      sortable: true,
    },

    {
      name: "Records",
      cell: (row) => (
        <div
          onClick={() => {
            setShow6(true);
            fetchPreviousVisits(row.id);
            setPatientId(row.id);
          }}
          style={{ color: "#2D6CC5", cursor: "pointer" }}
        >
          Previous Visits
        </div>
      ),
    },
  ];

  const [Comments, setSetComments] = useState([
    {
      name: "RIght Eye",
      right: "",
      left: "",
    },
  ]);

  const [refraction, setRefraction] = useState([
    {
      name: "RIght Eye",
      right: "",
      left: "",
    },

    {
      name: "Left Eye",
      right: "",
      left: "",
    },

    // {
    //   name: "Lens Type",
    //   select: true,
    //   right: "",
    // },

    // {
    //   name: "DIP",
    //   select: true,
    //   right: "",
    // },
  ]);

  const [savedRefraction, setSavedRefraction] = useState("");

  const [medicalActs, setMedicalActs] = useState([]);
  const [visualAcuity, setVisualAcuity] = useState([
    {
      name: "Right Eye",
      right: "",
      left: "",
    },
    {
      name: "Left Eye",
      right: "",
      left: "",
    },
    // {
    //   name: "PH",
    //   right: "",
    //   left: "",
    // },
    // {
    //   name: "Glass Sphere",
    //   right: "",
    //   left: "",
    // },
    // {
    //   name: "Glass Cylindre",
    //   right: "",
    //   left: "",
    // },
    // {
    //   name: "Glass Axe",
    //   right: "",
    //   left: "",
    // },
  ]);

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
      name: "",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "SC",
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
      name: "AC",
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

    {
      name: "PH",
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

  const vaColumn = [
    {
      name: "",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "Sphere",
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
      name: "Cylinder",
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

    {
      name: "Axis",
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
      name: "",
      selector: (row) => [row.name],
      sortable: true,
    },
    {
      name: "Sphere",
      sortable: true,
      cell: (row) =>
        !row.select ? (
          <input
            className="form-control"
            type="text"
            readOnly={isReSaved}
            value={row.right}
            onChange={(e) =>
              handleInputChange2(e.target.value, row.name, "right")
            }
          />
        ) : (
          <div style={{ width: "100%" }}>
            <Select
              options={row.name === "Lens Type" ? lensType_ : dip_}
              value={{ label: row.right, value: row.right }}
              style={{ width: "100%" }}
              onChange={(e) => handleInputChange2(e.value, row.name, "right")}
              classNamePrefix="Select2"
              className="multi-select"
              // placeholder="Select them"
              required
            />
          </div>
        ),
    },
    {
      name: "Cylinder",
      sortable: true,
      cell: (row) =>
        row.left !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={isReSaved}
            value={row.left}
            onChange={(e) =>
              handleInputChange2(e.target.value, row.name, "left")
            }
          />
        ),
    },
    {
      name: "Axis",
      sortable: true,
      cell: (row) =>
        row.left !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={isReSaved}
            value={row.left}
            onChange={(e) =>
              handleInputChange2(e.target.value, row.name, "left")
            }
          />
        ),
    },

    {
      name: "Addition",
      sortable: true,
      cell: (row) =>
        row.left !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={isReSaved}
            value={row.left}
            onChange={(e) =>
              handleInputChange2(e.target.value, row.name, "left")
            }
          />
        ),
    },
  ];

  const CommentsColumn = [
    {
      name: "",
      sortable: true,
      cell: (row) =>
        row.left !== undefined && (
          <textarea className="form-control"></textarea>
        ),
    },
  ];

  const removeAct = async (actId) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state?.data?.visitId,
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

  const fetchTreatment = async () => {
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
        id: location.state?.data?.visitId,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/id`,
        config
      );
      setMedicalActs(response.data.response.medicalAct.map((el) => el.id));
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
        patientVisitId: location.state?.data?.visitId,
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
        patientVisitId:visitId
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/nurse/va/visit-id`,
        config
      );
      if (response.data.response) {
        setIsVaSaved(true);
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
      } else {
        setIsVaSaved(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addVisualAcuity = async () => {
    if (
      !(
        visualAcuity[0].right &&
        visualAcuity[0].left &&
        visualAcuity[1].right &&
        visualAcuity[1].left &&
        visualAcuity[2].right &&
        visualAcuity[2].left &&
        visualAcuity[3].right &&
        visualAcuity[3].left &&
        visualAcuity[4].right &&
        visualAcuity[4].left &&
        visualAcuity[5].right &&
        visualAcuity[5].left
      )
    ) {
      alert("Fill all the visual acuity fields");
    } else {
      let my_token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
        },
      };
      const postObj = JSON.stringify({
        patientVisitId: location.state?.data?.visitId,
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
      amount: invoice?.patientAmount,
      paymentMode: paymentMode,
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
        fetchInvoice();
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

  // Effect to handle changes to medicalActs state
 



  const nurseSave = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state?.data?.visitId,
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
        patientVisitId: location.state?.data?.visitId,
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
      patientVisitId: location.state?.data?.visitId,
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
      patientVisitId: location.state?.data?.visitId,
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
    if (
      !(
        refraction[0].right &&
        refraction[0].left &&
        refraction[1].right &&
        refraction[1].left &&
        refraction[2].right &&
        refraction[2].left &&
        refraction[3].right &&
        refraction[4].right
      )
    ) {
      alert("Fill all the refraction fields");
    } else {
      let my_token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
        },
      };
      const postObj = JSON.stringify({
        patientVisitId: location.state?.data?.visitId,
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
        patientVisitId:visitId
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/doctor/refraction/visit-id`,
        config
      );
      if (response.data.status && response.data.response) {
        setIsReSaved(true);
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
            select: true,
            right: response.data.response.lensType,
          },

          {
            name: "DIP",
            select: true,
            right: response.data.response.dip,
          },
        ];
        setRefraction(refraction_);
      } else {
        setIsReSaved(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPreviousVisits = async (id) => {
    setPreviousVisits_([]);
    setPreviousVisits([]);
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        size: 5,
        page: 1,
        patientId: location.state?.data?.patient?.id,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/patient/id`,
        config
      );
      setPreviousVisits_(response.data.response.patientVisits);
      setPreviousVisits(response.data.response.patientVisits);
      if (response.data.response.totalElements) {
        setTotalRows(response.data.response.totalElements);
      }
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  useEffect(() => {
    
    fetchVisualAcuity();
    fetchMedicalActs();
    fetchDiagnostic();
    fetchRefraction();
    fetchTreatment();
    
   
    const roles_ = localStorage.getItem("role");
    const userRoles = JSON.parse(roles_);
    setRoles(userRoles);
  }, []);

  return (
    <Fragment>
      <Row>
        <Col md={6} xl={6} style={{ marginTop: 20, paddingRight: 0 }}>
          <h1>Visual Acuity</h1>

          <DataTable columns={vaColumns} data={visualAcuity} />
        </Col>

        <Col
          md={6}
          xl={6}
          style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
        >
          <h1>Current Glasses</h1>
          <DataTable columns={vaColumn} data={visualAcuity} />
        </Col>

        <Col
          md={6}
          xl={6}
          style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
        >
          <h1>Doctor's Refraction</h1>
          <DataTable columns={reColumns} data={refraction} />
        </Col>
      </Row>
    </Fragment>
  );
}
