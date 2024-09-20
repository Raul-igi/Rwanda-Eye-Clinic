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

  const [toggle, setToggle] = useState(1);


  const [refraction_,setRefraction_]= useState("")

  const [showModal, setShowModal] = useState(false);
  const handleClose8 = () => setShowModal(false);
  const handleShow8 = () => setShowModal(true);

  const [eight, setEight] = useState(false);

  function updateToggle(id) {
    setToggle(id);
  }





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

  const [savedRefraction, setSavedRefraction] = useState("");

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
          }
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
          
        ]
        setVisualAcuity(visualAcuity_);
        setCurrentGlasses(currentGlasses_);
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
          <DataTable columns={vaColumn} data={currentGlasses} />
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
