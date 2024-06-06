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
import { lensType_, dip_, BasicTreatments } from "../../data/elementsdata";
import Visit from "./visit";

export default function VisitDetails() {
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
  const [visitId, setVisitId] = useState("");
  const [totalRows, setTotalRows] = useState("");
  const [billingDetails, setBillingDetails] = useState("");
  const [billingDetails_, setBillingDetails_] = useState("");
  const [insuranceId, setInsuranceId] = useState("");

  const [tab, setTab] = useState("tab1");
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  const billingDetailsColumn = [
    {
      name: "Act",
      selector: (row) => [row.act],
      sortable: true,
    },
    {
      name: "Unit Price",
      selector: (row) => [row.unitPrice],
      sortable: true,
    },
    {
      name: "Insurer Amount",
      selector: (row) => [row.insurerAmount],
      sortable: true,
    },
  ];

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
            setVisitId(row.id);
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
          value={row.sc}
          onChange={(e) => handleInputChange(e, row.name, "sc")}
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
          value={row.ac}
          onChange={(e) => handleInputChange(e, row.name, "ac")}
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
          value={row.ph}
          onChange={(e) => handleInputChange(e, row.name, "ph")}
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
          value={row.sphere}
          onChange={(e) => handleInputChange(e, row.name, "sphere")}
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
          value={row.cylinder}
          onChange={(e) => handleInputChange(e, row.name, "cylinder")}
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
          value={row.axis}
          onChange={(e) => handleInputChange(e, row.name, "axis")}
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
        patientVisitId: location.state?.data?.visitId,
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
      if (response.data.response.invoiceNumber) {
        fetchBillingDetails(response.data.response.invoiceNumber);
      }
      console.log(response.data);

      setInvoice(response.data.response);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchBillingDetails = async (invoiceNumber) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        invoiceNumber: invoiceNumber,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/invoice/patient-acts`,
        config
      );
      console.log(response.data);

      const totalAmount = response.data.response.reduce(
        (sum, item) => sum + parseInt(item.unitPrice),
        0
      );

      const totalInsurerAmount = response.data.response.reduce(
        (sum, item) => sum + parseInt(item.insurerAmount),
        0
      );

      const totalObj = {
        act: "Total",
        unitPrice: totalAmount,
        insurerAmount: totalInsurerAmount,
      };

      setBillingDetails([...response.data.response, totalObj]);
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
        patientVisitId: location.state?.data?.visitId,
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
    if (
      userRoles.includes("Nurse") &&
      location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
    ) {
      let my_token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
        },
      };
      const postObj = JSON.stringify({
        patientVisitId: location.state?.data?.visitId,
        medicalActId: acts_,
      });
      console.log(config);
      try {
        const response = await axios.post(
          `http://www.ubuzima.rw/rec/visit/nurse/patient/add-act-all`,
          postObj,
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
        patientVisitId: location.state?.data?.visitId,
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
    fetchActs();
    fetchVisualAcuity();
    fetchMedicalActs();
    fetchDiagnostic();
    fetchRefraction();
    fetchTreatment();
    fetchInvoice();
    fetchPreviousVisits();
    const roles_ = localStorage.getItem("role");
    const userRoles = JSON.parse(roles_);
    setRoles(userRoles);
  }, []);

  return (
    <Fragment>
      {roles.includes("Doctor") &&
        location.state?.data?.visitStatus === "TRANSFER_TO_DOCTOR" && (
          <>
            <Button onClick={() => setShow3(true)} style={{ marginRight: 10 }}>
              Add Dr.Note
            </Button>
          </>
        )}
      {roles.includes("Nurse") && savedTreatment && !savedDiagnostic && (
        <Button onClick={() => setShow4(true)} style={{ marginRight: 10 }}>
          Add diagnostic
        </Button>
      )}

      {visualAcuity.length > 0 &&
        // medicalActs.length > 0 &&
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
        roles.includes("Nurse") &&
        !savedTreatment && (
          <Button
            onClick={() => {
              if (window.confirm("Are you sure you want to save?")) {
                nurseSave();
              }
            }}
            style={{ marginRight: 10 }}
          >
            save and send
          </Button>
        )}
      <Row>
        {invoice && (
          <Col md={4} xl={4} style={{ marginTop: 20 }}>
            <Card style={{ minHeight: 250 }}>
              <Card.Header className=" d-flex justify-content-between align-items-center">
                <Card.Title>
                  Invoice Number: {invoice.invoiceNumber}
                  {invoice.paymentStatus == "NOT_PAID" &&
                    roles.includes("Receptionist") && (
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
                  Total Amount: Rwf {invoice?.totalAmount.toLocaleString()}{" "}
                </Card.Title>
                <Card.Title>
                  Insurer Amount: Rwf {invoice?.insurerAmount.toLocaleString()}
                </Card.Title>
                <Card.Title>
                  Patient Amount: Rwf {invoice?.patientAmount.toLocaleString()}
                </Card.Title>
                <Card.Title>
                  Remaining Amount: Rwf{" "}
                  {invoice?.remainingAmount.toLocaleString()}
                </Card.Title>
                <Card.Title
                  style={{
                    color:
                      invoice?.paymentStatus == "NOT_PAID" ? "red" : "green",
                  }}
                >
                  Status: {invoice?.paymentStatus}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        )}

        <Col lg={8} style={{ marginTop: 20 }}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Billing Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Body>
                <DataTable
                  columns={billingDetailsColumn}
                  data={billingDetails}
                />
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>

        <Row>
          <Col md={4} xl={4} style={{ marginTop: 20 }}>
            <Card style={{ minHeight: 250 }}>
              <Card.Header className=" d-flex justify-content-between align-items-center">
                <div className="">
                  <Card.Title>
                    {location.state?.data?.createdAt?.slice(0, 10)}
                  </Card.Title>
                  {/* <button type="button" className="btn btn-secondary btn-sm">Action 2</button> */}
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Title>
                  Names: {location.state?.data?.patient?.names}
                </Card.Title>

                <Card.Title>
                  Sex: {location.state?.data?.patient?.gender}
                </Card.Title>

                <Card.Title>
                  DOB: {location.state?.data?.patient?.dob}
                </Card.Title>

                <Card.Title style={{ fontSize: "15px" }}>
                  Doctor: Dr {location.state?.data?.doctor}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8} style={{ marginTop: 20 }}>
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <Card.Title>Last Visits</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Body>
                  <DataTable columns={columns2} data={previousVisits} />
                </Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {roles.includes("Nurse") && (
          <div class="tabs" style={{ display: "flex" }}>
            <div
              class="tab"
              onClick={() => {
                setTab("tab1");
              }}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderBottom:
                  tab === "tab1" ? "3px solid #467FCF" : "1px solid #ccc",
                backgroundColor: tab === "tab1" ? "white" : "#f1f1f1",
                fontWeight: tab === "tab1" ? "bold" : "normal",
              }}
              id="tab1"
            >
              Visual Acuity
            </div>

            <div
              class="tab"
              onClick={() => {
                setTab("tab2");
              }}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderBottom:
                  tab === "tab2" ? "3px solid #467FCF" : "1px solid #ccc",
                backgroundColor: tab === "tab2" ? "white" : "#f1f1f1",
                fontWeight: tab === "tab2" ? "bold" : "normal",
              }}
              id="tab2"
            >
              Medical Act
            </div>

            <div
              class="tab"
              onClick={() => {
                setTab("tab3");
              }}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderBottom:
                  tab === "tab3" ? "3px solid #467FCF" : "1px solid #ccc",
                backgroundColor: tab === "tab3" ? "white" : "#f1f1f1",
                fontWeight: tab === "tab3" ? "bold" : "normal",
              }}
              id="tab3"
            >
              Doctor's Refraction
            </div>

            <div
              class="tab"
              onClick={() => {
                setTab("tab4");
              }}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderBottom:
                  tab === "tab4" ? "3px solid #467FCF" : "1px solid #ccc",
                backgroundColor: tab === "tab4" ? "white" : "#f1f1f1",
                fontWeight: tab === "tab4" ? "bold" : "normal",
              }}
              id="tab4"
            >
              Treatments
            </div>

            <div
              class="tab"
              onClick={() => {
                setTab("tab5");
              }}
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                border: "1px solid #ccc",
                borderBottom:
                  tab === "tab5" ? "3px solid #467FCF" : "1px solid #ccc",
                backgroundColor: tab === "tab4" ? "white" : "#f1f1f1",
                fontWeight: tab === "tab5" ? "bold" : "normal",
              }}
              id="tab5"
            >
              Diagnostic
            </div>
          </div>
        )}

        {!roles.includes("Receptionist") && (
          <>
            <Row>
              {tab === "tab1" && (
                <Col md={6} xl={6} style={{ marginTop: 20, paddingRight: 0 }}>
                  <h1>Visual Acuity</h1>

                  <DataTable columns={vaColumns} data={visualAcuity} />

                  {roles.includes("Nurse") &&
                    location.state?.data?.visitStatus === "TRANSFER_TO_NURSE" &&
                    !isVaSaved && (
                      <>
                        <Button
                          onClick={() => addVisualAcuity()}
                          style={{ marginTop: 20 }}
                        >
                          Save
                        </Button>
                      </>
                    )}
                </Col>
              )}

              {(roles.includes("Doctor") || roles.includes("Nurse")) &&
                tab === "tab1" && (
                  <Col
                    md={6}
                    xl={6}
                    style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
                  >
                    <h1>Current Glasses</h1>
                    <DataTable columns={vaColumn} data={currentGlasses} />

                    {/* {roles.includes("Doctor") &&
                      location.state?.data?.visitStatus ===
                        "TRANSFER_TO_DOCTOR" &&
                      !isReSaved && (
                        <>
                          <Button
                            onClick={() => addRefraction()}
                            style={{ marginTop: 20 }}
                          >
                            Save
                          </Button>
                        </>
                      )} */}
                  </Col>
                )}

              {(roles.includes("Doctor") || roles.includes("Nurse")) &&
                tab === "tab1" && (
                  <Col
                    md={6}
                    xl={6}
                    style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
                  >
                    <h1>Optometrist Refraction</h1>
                    <DataTable columns={reColumns} data={refraction} />
                    {roles.includes("Doctor") &&
                      location.state?.data?.visitStatus ===
                        "TRANSFER_TO_DOCTOR" &&
                      !isReSaved && <></>}
                  </Col>
                )}

              {(roles.includes("Doctor") || roles.includes("Nurse")) &&
                tab === "tab3" && (
                  <Col
                    md={6}
                    xl={6}
                    style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
                  >
                    <h1>Doctor's Refraction</h1>
                    <DataTable columns={reColumns} data={refraction} />
                    {roles.includes("Doctor") &&
                      location.state?.data?.visitStatus ===
                        "TRANSFER_TO_NURSE" &&
                      !isReSaved && (
                        <>
                          <Button
                            onClick={() => addVisualAcuity()}
                            style={{ marginTop: 20 }}
                          >
                            Save
                          </Button>
                        </>
                      )}
                  </Col>
                )}

              {(roles.includes("Doctor") || roles.includes("Nurse")) &&
                tab === "tab4" && (
                  <Col
                    lg={6}
                    style={{ marginBottom: "200px", marginTop: "40px" }}
                  >
                    <Form.Group className="form-group">
                      <Form.Label>Select Treatment</Form.Label>
                      <Select
                        isMulti
                        className="basic-single"
                        options={BasicTreatments}
                        onChange={(e) => setInsuranceId(e)}
                        classNamePrefix="Select2"
                        placeholder="Select..."
                        required
                      />
                    </Form.Group>
                  </Col>
                )}

              {(roles.includes("Doctor") || roles.includes("Nurse")) &&
                tab === "tab1" && (
                  <Col
                    md={6}
                    xl={6}
                    style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
                  >
                    <h1>Comments</h1>
                    <DataTable columns={CommentsColumn} data={Comments} />
                    {roles.includes("Doctor") &&
                      location.state?.data?.visitStatus ===
                        "TRANSFER_TO_DOCTOR" &&
                      !isReSaved && <></>}
                  </Col>
                )}

              {(roles.includes("Doctor") || roles.includes("Nurse")) &&
                tab === "tab5" && (
                  <>
                    {/* <Col md={4} xl={4} style={{ marginTop: 20 }}>
              <Card style={{ minHeight: 250 }}>
                <Card.Header className=" d-flex justify-content-between align-items-center">
                  <div className="">
                    <Card.Title>Dr.Note</Card.Title>
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
            </Col> */}

                    <Col md={4} xl={4} style={{ marginTop: 20 }}>
                      <Card style={{ minHeight: 250 }}>
                        <Card.Header className=" d-flex justify-content-between align-items-center">
                          <div className="">
                            <Card.Title>Diagnostic</Card.Title>
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

            {/* {toggle ===1? "tab2" :"tab1"} */}
            {tab === "tab2" && (
              <Col md={6} xl={6} style={{ marginTop: 20 }}>
                <h1>Medical Acts</h1>
                {acts.length > 0 ? (
                  acts.map((act) => (
                    <Fragment key={act.id}>
                      <input
                        type="checkbox"
                        style={{ marginBottom: 15 }}
                        value={act.value}
                        checked={medicalActs.includes(act.value)}
                        onChange={handleCheckboxChange}
                      />{" "}
                      {act.label}
                      <br />
                    </Fragment>
                  ))
                ) : (
                  <p>No medical acts</p>
                )}
              </Col>
            )}
          </>
        )}
      </Row>

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

      <Modal show={show6} onHide={() => setShow6(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{visitId && <Visit visitId={visitId} />}</Modal.Body>
      </Modal>

      <Modal show={showModal} onHide={handleClose8}>
        <Modal.Header closeButton>
          <Modal.Title>
            Pay Invoice | Amount to pay: {invoice?.patientAmount} Rwf
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {invoice?.patientAmount > 0 ? (
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
                      <Form.Label>Insurance Percentage %</Form.Label>
                      <Form.Control
                        type="number"
                        value={insuranceAmount}
                        className="form-control"
                        name="example-text-input"
                        // placeholder="names"
                        onChange={(e) => {
                          let newValue = parseInt(e.target.value, 10);
                          // Ensure the value is between 0 and 20
                          newValue = Math.min(Math.max(newValue, 0), 100);

                          setInsuranceAmount(newValue);
                          setTopUpAmount(
                            invoice?.patientAmount -
                              (invoice?.patientAmount * newValue) / 100
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
                  <Col xl={12}>
                    <Form.Group className="form-group">
                      <Form.Label>Select payment mode</Form.Label>
                      <Select
                        options={[
                          { label: "Cash", value: "CASH" },
                          { label: "MoMo", value: "MOMO" },
                          { label: "POS", value: "POS" },
                        ]}
                        onChange={(e) => setPaymentMode(e.value)}
                        classNamePrefix="Select2"
                        className="multi-select"
                        // placeholder="Select them"
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
            {invoice?.patientAmount > 0 ? "Pay Now" : "Mark as paid"}
          </Button>
          <Button variant="danger" onClick={handleClose8}>
            Cancel
          </Button>
        </Modal.Footer>
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
    </Fragment>
  );
}
