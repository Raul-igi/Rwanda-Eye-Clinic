import React, { Fragment, useState, useEffect } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import DataTable from "react-data-table-component";
import { debounce } from "lodash";
import {
  lensType_,
  dip_,
  BasicTreatments,
  AdditionsTwo,
  prescriptionCheckBox,
} from "../../data/elementsdata";
import Visit from "./visit";
import Pagination from "./components/Pagination";

export default function VisitDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);

  const [button,setButton] = useState(false);

  const [firstButtonValues, setFirstButtonValues] = useState({
    sphere: '',
    cylinder: '',
    axis: '',
    addition: '',
  });

  const [secondButtonValues, setSecondButtonValues] = useState({
    sphere: '',
    cylinder: '',
    axis: '',
    addition: '',
  });

  const [isNoteSaved, setIsNoteSaved] = useState(false);
  const [isVaSaved, setIsVaSaved] = useState(true);
  const [isReSaved, setIsReSaved] = useState(true);
  const [isOptReSaved, setIsOptReSaved] = useState(true);

  const [treatments, setTreatments] = useState([]);
  const [acts, setActs] = useState([]);
  const [lensType, setLensType] = useState("");
  const [lensAttribute, setLensAttribute] = useState([]);
  const [additions2, setAdditions2] = useState([]);
  const [roles, setRoles] = useState([]);
  const [invoice, setInvoice] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentMode, setPaymentMode] = useState(null);

  const [insuranceAmount, setInsuranceAmount] = useState(0);
  const [topUpAmount, setTopUpAmount] = useState(0);

  const [treatment, setTreatment] = useState([]);
  const [savedTreatment, setSavedTreatment] = useState([]);
  const [notes, setNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState("");
  const [diagnostic, setDiagnostic] = useState("");
  const [savedDiagnostic, setSavedDiagnostic] = useState("");

  const [previousVisits, setPreviousVisits] = useState([]);
  const [previousVisits_, setPreviousVisits_] = useState([]);
  const [previousVisits2, setPreviousVisits2] = useState([]);
  const [previousVisits_2, setPreviousVisits_2] = useState([]);
  const [visitId, setVisitId] = useState("");
  const [totalRows, setTotalRows] = useState("");
  const [totalRows2, setTotalRows2] = useState("");
  const [billingDetails, setBillingDetails] = useState("");
  const [insuranceId, setInsuranceId] = useState("");

  const [generatePrescription, setGeneratePrescription] = useState(false);

  const [tab, setTab] = useState("tab1");
  const [toggle, setToggle] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage2(page);
    console.log(`Page changed to ${page}`); // You can use this to detect page changes
  };

  const billingDetailsColumn = [
    {
      name: "Act",
      selector: (row) => [row.act],
      sortable: true,
    },
    {
      name: "Total Amount",
      selector: (row) => [row.unitPrice],
      sortable: true,
    },
    {
      name: "Copay",
      selector: (row) => [row.patientAmount],
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
      name: "Date",
      selector: (row) => [row.createdAt?.slice(0, 10) || "-"],
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
          Records
        </div>
      ),
    },
  ];

  const [comment, setComment] = useState([
    {
      name: "",
      comment: "",
    },
  ]);

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

  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(1);
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

  const handleInputChange3 = (e, name, field) => {
    // Update the corresponding data item with the new value
    const newData = optRefraction.map((item) => {
      if (item.name === name) {
        return { ...item, [field]: e };
      }
      return item;
    });
    setOptRefraction(newData);
  };

  const handleInputChange4 = (e, name, field) => {
    // Update the corresponding data item with the new value
    const newData = currentGlasses.map((item) => {
      if (item.name === name) {
        return { ...item, [field]: e.target.value };
      }
      return item;
    });
    setCurrentGlasses(newData);
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

  const currentGlassesColumns = [
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
          onChange={(e) => handleInputChange4(e, row.name, "sphere")}
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
          onChange={(e) => handleInputChange4(e, row.name, "cylinder")}
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
          onChange={(e) => handleInputChange4(e, row.name, "axis")}
        />
      ),
    },

    {
      name: "Addition",
      sortable: true,
      cell: (row) => (
        <input
          className="form-control"
          type="text"
          readOnly={isVaSaved}
          value={row.addition}
          onChange={(e) => handleInputChange4(e, row.name, "addition")}
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
            value={row.sphere}
            onClick={()=>{setShow7(true);setButton(row.name==='Right Eye'?'first':'second')}}
            onChange={(e) =>
              handleInputChange2(e.target.value, row.name, "sphere")
            }
          />
        ) : (
          <div style={{ width: "100%" }}>
            <Select
              options={row.name === "Lens Type" ? lensType_ : dip_}
              value={{ label: row.sphere, value: row.sphere }}
              style={{ width: "100%" }}
              onClick={()=>{setShow7(true);setButton(row.name==='Right Eye'?'first':'second')}}
              onChange={(e) => handleInputChange2(e.value, row.name, "sphere")}
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
        row.cylinder !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={isReSaved}
            onClick={()=>{setShow7(true);setButton(row.name==='Right Eye'?'first':'second')}}
            value={row.cylinder}
            onChange={(e) =>
              handleInputChange2(e.target.value, row.name, "cylinder")
            }
          />
        ),
    },
    {
      name: "Axis",
      sortable: true,
      cell: (row) =>
        row.axis !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={isReSaved}
            onClick={()=>{setShow7(true);setButton(row.name==='Right Eye'?'first':'second')}}
            value={row.axis}
            onChange={(e) =>
              handleInputChange2(e.target.value, row.name, "axis")
            }
          />
        ),
    },

    {
      name: "Addition",
      sortable: true,
      cell: (row) =>
        row.addition !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={isReSaved}
            value={row.addition}
            onClick={()=>{setShow7(true);setButton(row.name==='Right Eye'?'first':'second')}}
            onChange={(e) =>
              handleInputChange2(e.target.value, row.name, "addition")
            }
          />
        ),
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
      cell: (row) => (
        <input
          className="form-control"
          type="text"
          readOnly={isOptReSaved}
          value={row.sphere}
          onChange={(e) =>
            handleInputChange3(e.target.value, row.name, "sphere")
          }
        />
      ),
    },
    {
      name: "Cylinder",
      sortable: true,
      cell: (row) =>
        row.cylinder !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={isOptReSaved}
            value={row.cylinder}
            onChange={(e) =>
              handleInputChange3(e.target.value, row.name, "cylinder")
            }
          />
        ),
    },
    {
      name: "Axis",
      sortable: true,
      cell: (row) =>
        row.axis !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={isOptReSaved}
            value={row.axis}
            onChange={(e) =>
              handleInputChange3(e.target.value, row.name, "axis")
            }
          />
        ),
    },

    {
      name: "Addition",
      sortable: true,
      cell: (row) =>
        row.addition !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={isReSaved}
            value={row.addition}
            onChange={(e) =>
              handleInputChange3(e.target.value, row.name, "addition")
            }
          />
        ),
    },
  ];

  const CommentsColumn = [
    {
      name: "",
      sortable: true,
      cell: (row) => (
        <textarea
          readOnly={isOptReSaved}
          rows={3}
          value={row.comment}
          onChange={(e) => setComment([{ name: "", comment: e.target.value }])}
          className="form-control"
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

  const fetchAllTreatments = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/doctor/treatments`,
        config
      );
      if (response.data.status) {
        const treatments_ = response.data.response.map((el) => {
          return { label: el.name, value: el.id };
        });
        setTreatments(treatments_);
        fetchTreatment(treatments_);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTreatment = async (treats) => {
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
        const treats_ = await Promise.all(
          response.data.response.map(async (el) => {
            const treat = await treats.find((t) => t.value === el.treatmentId);
            return { label: treat.label, value: el.treatmentId };
          })
        );
        setSavedTreatment(treats_);
        setTreatment(treats_);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNotes = async () => {
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
        `http://www.ubuzima.rw/rec/visit/doctor/note/visit-id`,
        config
      );
      if (response.data.status && response.data.response?.notes) {
        setIsNoteSaved(true);
        setSavedNotes(response.data.response?.notes);
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
      setMedicalActs(
        response.data.response.medicalAct.map((el) => ({
          value: el.id,
          label: el.name,
        }))
      );
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

      const patientAmount = response.data.response.reduce(
        (sum, item) => sum + parseInt(item.patientAmount),
        0
      );

      const totalInsurerAmount = response.data.response.reduce(
        (sum, item) => sum + parseInt(item.insurerAmount),
        0
      );

      const totalObj = {
        act: "Total",
        unitPrice: totalAmount,
        patientAmount: patientAmount,
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
            addition: response.data.response.glassAdditionRightEye,
          },
          {
            name: "Left Eye",
            sphere: response.data.response.glassSphereLeftEye,
            cylinder: response.data.response.glassCylindreLeftEye,
            axis: response.data.response.glassAxeLeftEye,
            addition: response.data.response.glassAdditionLeftEye,
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

  const handleChange = (column, value, buttonType) => {
    const setValues = buttonType === 'first' ? setFirstButtonValues : setSecondButtonValues;
    const currentValues = buttonType === 'first' ? firstButtonValues : secondButtonValues;

    if (buttonType === 'first') {
      var data = { ...firstButtonValues, [column]: firstButtonValues[column] === value ? '' : value }
      setRefraction([{...refraction[0],cylinder:data.cylinder,sphere:data.sphere,axis:data.axis,addition:data.addition},refraction[1]])
    } else {
      var data = { ...secondButtonValues, [column]: secondButtonValues[column] === value ? '' : value }
      setRefraction([refraction[0],{...refraction[1],cylinder:data.cylinder,sphere:data.sphere,axis:data.axis,addition:data.addition}])
    }

    setValues((prev) => ({
      ...prev,
      [column]: prev[column] === value ? '' : value, // Toggle the value
    }));
  };


  const addVisualAcuity = async () => {
      let my_token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
        },
      };
      const postObj = JSON.stringify({
        patientVisitId: location.state?.data?.visitId,
        scRightEye: visualAcuity[0].sc,
        scLeftEye: visualAcuity[1].sc,
        acRightEye: visualAcuity[0].ac,
        acLeftEye: visualAcuity[1].ac,
        phRightEye: visualAcuity[0].ph,
        phLeftEye: visualAcuity[1].ph,
        glassSphereRightEye: currentGlasses[0].sphere,
        glassSphereLeftEye: currentGlasses[1].sphere,
        glassCylindreRightEye: currentGlasses[0].cylinder,
        glassCylindreLeftEye: currentGlasses[1].cylinder,
        glassAxeRightEye: currentGlasses[0].axis,
        glassAxeLeftEye: currentGlasses[1].axis,
        glassAdditionRightEye: currentGlasses[0].addition,
        glassAdditionLeftEye: currentGlasses[1].addition,
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
      paymentMethod: paymentMethod ? paymentMethod : "INSURANCE",
      amount:
        parseFloat(invoice?.totalAmount) -
        parseFloat(insuranceAmount) +
        parseFloat((insuranceAmount * parseInt(invoice?.ticket)) / 100),
      paymentMode: paymentMode,
      insuranceAmount: insuranceAmount,
    };
    if (topUpAmount > 0) {
      paymentDto.topUpAmount = topUpAmount;
    }
    // console.log(paymentDto);
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

  const handleCheckboxChange2 = (event) => {
    const { value, checked } = event.target;
    setLensAttribute((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((act) => act !== value);
      }
    });
  };

  const handleCheckboxChange3 = (event) => {
    const { value, checked } = event.target;
    setAdditions2((prev) => {
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
    debouncedFunction(medicalActs.map((act) => act.value));

    // Cleanup the debounce on unmount
    return () => debouncedFunction.cancel();
  }, [medicalActs, debouncedFunction]);

  const addAct = async (acts_) => {
    const roles_ = localStorage.getItem("role");
    const userRoles = JSON.parse(roles_);
    if (
      (userRoles.includes("Nurse") &&
        location.state?.data?.visitStatus === "TRANSFER_TO_NURSE") ||
      (userRoles.includes("Doctor") &&
        location.state?.data?.visitStatus === "TRANSFER_TO_DOCTOR")
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

  const doctorSave = async (e) => {
    e.preventDefault();
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        patientVisitId: location.state?.data?.visitId,
        isPrescriptionAdded: `${generatePrescription}`,
      },
    };
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/doctor/save`,
        {},
        config
      );
      setShow5(false);
      if (response.data.status) {
        alert("Successfully saved!");
        navigate("/visits");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      setShow5(false);
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
      treatmentId: treatment.map((el) => el.value),
    });
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/nurse/patient/add-treatment`,
        postObj,
        config
      );
      setShow3(false);
      if (response.data.status) {
        alert("Treatment added successfully!");
        fetchTreatment(treatments);
      }
    } catch (error) {
      setShow3(false);
      console.error(error);
    }
  };

  const addNotes = async (e) => {
    if(notes){
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
      notes: notes,
    });
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/doctor/note`,
        postObj,
        config
      );
      if (response.data.status) {
        alert("Notes added successfully!");
        fetchNotes();
      }
    } catch (error) {
      console.error(error);
    }
    }else{
      alert('Add notes before submitting...')
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
      let my_token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
        },
      };
      const postObj = JSON.stringify({
        patientVisitId: location.state?.data?.visitId,
        sphereRightEye: refraction[0].sphere,
        sphereLeftEye: refraction[1].sphere,
        cylindreRightEye: refraction[0].cylinder,
        cylindreLeftEye: refraction[1].cylinder,
        axeRightEye: refraction[0].axis,
        axeLeftEye: refraction[1].axis,
        lensType: lensType,
        dip: "DIP_ON_DISTANCE",
        lensAttribute: lensAttribute,
        additionRightEye: refraction[0].addition,
        additionLeftEye: refraction[1].addition,
        comments: "",
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
  };

  const addOptRefraction = async () => {
      let my_token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
        },
      };
      const postObj = JSON.stringify({
        patientVisitId: location.state?.data?.visitId,
        sphereRightEye: optRefraction[0].sphere,
        sphereLeftEye: optRefraction[1].sphere,
        cylindreRightEye: optRefraction[0].cylinder,
        cylindreLeftEye: optRefraction[1].cylinder,
        axeRightEye: optRefraction[0].axis,
        axeLeftEye: optRefraction[1].axis,
        lensType: "BIFOCAL",
        dip: "DIP_ON_DISTANCE",
        lensAttribute: [],
        additionRightEye: optRefraction[0].addition,
        additionLeftEye: optRefraction[1].addition,
        comments: comment[0].comment,
      });

      try {
        const response = await axios.post(
          `http://www.ubuzima.rw/rec/visit/optometrist/refraction`,
          postObj,
          config
        );
        setShow5(false);
        if (response.data.status) {
          alert("Refraction added successfully!");
          fetchOptRefraction();
        }
      } catch (error) {
        setShow5(false);
        console.error(error);
        console.log(res.data);
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
      if (response.data.status && response.data.response?.length > 0) {
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
        setLensType(response.data.response[0].lensType);
        setLensAttribute(response.data.response[0].lensAttribute);
        setRefraction(refraction_);
      } else {
        setIsReSaved(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
        setIsOptReSaved(true);
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
      } else {
        setIsOptReSaved(false);
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
        page: currentPage,
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

  const fetchPreviousVisits2 = async (id) => {
    setPreviousVisits_2([]);
    setPreviousVisits2([]);
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        size: 5,
        page: currentPage2,
        patientId: location.state?.data?.patient?.id,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/patient/id`,
        config
      );
      setPreviousVisits_2(response.data.response.patientVisits);
      setPreviousVisits2(response.data.response.patientVisits);
      if (response.data.response.totalElements) {
        setTotalRows2(response.data.response.totalElements);
      }
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  useEffect(() => {
    const roles_ = localStorage.getItem("role");
    const userRoles = JSON.parse(roles_);
    setRoles(userRoles);
    if (userRoles.includes("Receptionist")) {
      fetchInvoice();
    } else {
      fetchActs();
      fetchVisualAcuity();
      fetchMedicalActs();
      fetchDiagnostic();
      fetchRefraction();
      fetchOptRefraction();
      fetchAllTreatments();
      fetchNotes();
    }
  }, []);

  useEffect(() => {
      fetchPreviousVisits();
  }, [currentPage]);

  useEffect(() => {
    fetchPreviousVisits2();
}, [currentPage2]);




  return (
    <Fragment>
      {visualAcuity.length > 0 &&
        // medicalActs.length > 0 &&
        roles.includes("Doctor") && (
          <Button
            onClick={() => {
              setShow5(true);
              // if (window.confirm("Are you sure you want to save?")) {
              //   doctorSave();
              // }
            }}
            style={{ marginRight: 10 }}
          >
            save and send
          </Button>
        )}

      {visualAcuity.length > 0 &&
        medicalActs.length > 0 &&
        roles.includes("Nurse") &&
        location.state?.data?.visitStatus === "TRANSFER_TO_NURSE" && (
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
        {invoice && (roles.includes("Receptionist") || roles.includes("Administrator")) && (
          <Col lg={12} style={{ marginTop: 20 }}>
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
        )}

        {invoice && (roles.includes("Receptionist") || roles.includes("Administrator")) && (
          <>
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
                    Insurer Amount: Rwf{" "}
                    {invoice?.insurerAmount.toLocaleString()}
                  </Card.Title>
                  <Card.Title>
                    Patient Amount: Rwf{" "}
                    {invoice?.patientAmount.toLocaleString()}
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

                  <Card.Title style={{ fontSize: "15px" }}>
                    Insurance: {location.state?.data?.insurance?.insuranceName}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </>
        )}

        {!roles.includes("Receptionist") && (
          <>
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

                    <Card.Title style={{ fontSize: "15px" }}>
                      Insurance:{" "}
                      {location.state?.data?.insurance?.insuranceName}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={8} style={{ marginTop: 20 }}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title>Last Visits</Card.Title>
                    {previousVisits.length>0 && (
                      <Card.Title onClick={()=>setShow8(true)}>View all</Card.Title>
                    )}
                  </Card.Header>
                  <Card.Body>
                    <Card.Body>
                      <DataTable 
                      columns={columns2} 
                      data={previousVisits}
                      paginationPerPage={5}
                      paginationRowsPerPageOptions={[5]}
                      paginationTotalRows={totalRows ? totalRows : previousVisits.length}
                      onChangePage={(page) => setCurrentPage(page)}
                      pagination
                      paginationServer
                      />
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <div class="tabs" style={{ display: "flex" }}>
              {(roles.includes("Nurse") ||
                roles.includes("Doctor") ||
                roles.includes("Optometrist") ||
                roles.includes("Administrator")
                ) && (
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
              )}
              {(roles.includes("Doctor") || roles.includes("Administrator")) && (
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
              )}
              {(roles.includes("Doctor") || roles.includes("Administrator")) && (
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
              )}
              {(roles.includes("Doctor") || roles.includes("Administrator")) && (
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
                    fontWeight: tab === "tab49" ? "bold" : "normal",
                  }}
                  id="tab3"
                >
                  Dr treatments / Note
                </div>
              )}
              {(roles.includes("Nurse") || roles.includes("Administrator")) && (
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
                    backgroundColor: tab === "tab5" ? "white" : "#f1f1f1",
                    fontWeight: tab === "tab5" ? "bold" : "normal",
                  }}
                  id="tab5"
                >
                  Diagnostic
                </div>
              )}
            </div>
          </>
        )}

        {!roles.includes("Receptionist") && (
          <>
            <Row>
              {tab === "tab1" &&
                (roles.includes("Nurse") || roles.includes("Doctor")) && (
                  <Col md={6} xl={6} style={{ marginTop: 20, paddingRight: 0 }}>
                    <h1>Visual Acuity</h1>

                    <DataTable columns={vaColumns} data={visualAcuity} />

                    {roles.includes("Nurse") &&
                      location.state?.data?.visitStatus ===
                        "TRANSFER_TO_NURSE" &&
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

              {(roles.includes("Doctor") || roles.includes("Nurse") || roles.includes("Administrator")) &&
                tab === "tab1" && (
                  <Col
                    md={6}
                    xl={6}
                    style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
                  >
                    <h1>Current Glasses</h1>
                    <DataTable
                      columns={currentGlassesColumns}
                      data={currentGlasses}
                    />
                  </Col>
                )}

              {(roles.includes("Nurse")||  roles.includes("Administrator")) && tab === "tab1" &&(
                <Col md={12} xl={12} style={{ marginTop: 20, height: 150 }}>
                <h1>Medical Acts</h1>
                <Select
                  isMulti
                  className="basic-single"
                  options={acts}
                  value={medicalActs}
                  onChange={(e) => setMedicalActs(e)}
                  classNamePrefix="Select2"
                  placeholder="Select..."
                  required
                />
              </Col>
              )}

              {(roles.includes("Doctor") ||
                roles.includes("Nurse") ||
                roles.includes("Administrator") ||
                roles.includes("Optometrist")) &&
                tab === "tab1" && (
                  <Col
                    md={6}
                    xl={6}
                    style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
                  >
                    <h1>Optometrist Refraction</h1>
                    <DataTable columns={optReColumns} data={optRefraction} />
                  </Col>
                )}

              {(roles.includes("Doctor") || roles.includes("Nurse") || roles.includes("Administrator")) &&
                tab === "tab3" && (
                  <>
                    <Row>
                      <Col
                        md={6}
                        xl={6}
                        style={{
                          marginTop: 20,
                          paddingRight: 0,
                          paddingLeft: 0,
                        }}
                      >
                        <h1>Doctor's Refraction</h1>
                        <DataTable columns={reColumns} data={refraction} />
                      </Col>
                      <Col md={6} xl={6} style={{ marginTop: 20 }}>
                        <Row>
                          <Col
                            md={6}
                            xl={6}
                            style={{ marginTop: 20, height: 20 }}
                          >
                            <h1>Lens Type</h1>
                            {lensType_.map((act) => (
                              <Fragment key={act.id}>
                                <input
                                  type="checkbox"
                                  style={{ marginBottom: 15 }}
                                  value={act.value}
                                  checked={lensType === act.value}
                                  onChange={(e) => setLensType(e.target.value)}
                                />{" "}
                                {act.label}
                                <br />
                              </Fragment>
                            ))}
                          </Col>
                          <Col md={6} xl={6} style={{ marginTop: 20 }}>
                            <h1>Lens Attribute</h1>
                            {AdditionsTwo.map((act) => (
                              <Fragment key={act.id}>
                                <input
                                  type="checkbox"
                                  style={{ marginBottom: 15 }}
                                  value={act.value}
                                  checked={lensAttribute?.includes(act.value)}
                                  onChange={handleCheckboxChange2}
                                />{" "}
                                {act.label}
                                <br />
                              </Fragment>
                            ))}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3} xl={3} style={{ marginTop: 20 }}>
                        <h1></h1>
                        {prescriptionCheckBox.map((act) => (
                          <Fragment key={act.id}>
                            <input
                              type="checkbox"
                              style={{ marginBottom: 15 }}
                              value={act.value}
                              readOnly={!roles.includes("Doctor")}
                              checked={generatePrescription}
                              onChange={() => {
                                if (roles.includes("Doctor")) {
                                  setGeneratePrescription(
                                    !generatePrescription
                                  );
                                }
                              }}
                            />{" "}
                            {act.label}
                            <br />
                          </Fragment>
                        ))}
                      </Col>
                    </Row>
                    {roles.includes("Doctor") && !isReSaved && (
                      <Button
                        onClick={() => addRefraction()}
                        style={{ marginTop: 20, width: 100 }}
                      >
                        Save
                      </Button>
                    )}
                  </>
                )}

              {(roles.includes("Doctor") || roles.includes("Nurse") || roles.includes("Administrator")) &&
                tab === "tab4" && (
                  <div>
                    {!isNoteSaved?(
                    <Col md={4} xl={4} style={{ marginTop: 20 }}>
                      <Form.Group className="form-group">
                        <Form.Label>Add Dr notes</Form.Label>
                        <textarea
                          className="form-control"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Enter notes here..."
                          required
                        />
                      </Form.Group>

                      <Button
                        onClick={(e) => addNotes(e)}
                        style={{ marginTop: 20, width: 100 }}
                      >
                        Save
                      </Button>
                    </Col>
                    ):(
                      <Col md={4} xl={4} style={{ marginTop: 20 }}>
                      <Card>
                        <Card.Header className=" d-flex justify-content-between align-items-center">
                          <div className="">
                            <Card.Title>Dr Notes</Card.Title>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <Card.Title>
                            {savedNotes
                              ? `Dr notes: ${savedNotes}`
                              : "There are currently no notes available. The doctor has not added any notes yet."}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                    )}
                    <Row>
                      <Col
                        lg={6}
                        style={{ marginBottom: "100px", marginTop: "40px",marginLeft: 18 }}
                      >
                        {(roles.includes("Doctor") || roles.includes("Administrator")) && (
                          <>
                            <Form.Group className="form-group">
                              <Form.Label>Select Treatment</Form.Label>
                              <Select
                                isMulti
                                className="basic-single"
                                options={treatments}
                                value={treatment}
                                onChange={(e) => setTreatment(e)}
                                classNamePrefix="Select2"
                                placeholder="Select..."
                                required
                              />
                            </Form.Group>

                            <Button
                              onClick={(e) => addTreatment(e)}
                              style={{ marginTop: 20, width: 100 }}
                            >
                              Save
                            </Button>
                          </>
                        )}
                      </Col>
                      <Col
                        lg={5}
                        style={{ marginBottom: "200px", marginTop: "40px" }}
                      >
                        {savedTreatment?.length > 0 && treatments ? (
                          <>
                            <h1>Saved Treatments</h1>
                            {savedTreatment.map((el, index) => {
                              return (
                                <h5>
                                  {index + 1}. {el.label}
                                </h5>
                              );
                            })}
                          </>
                        ) : (
                          <p>No Treatment yet...</p>
                        )}
                      </Col>
                    </Row>
                  </div>
                )}

              {(roles.includes("Doctor") ||
                roles.includes("Nurse") ||
                roles.includes("Administrator") ||
                roles.includes("Optometrist")) &&
                tab === "tab1" && (
                  <>
                    <>
                      <Col md={3} xl={6} style={{ marginTop: 20 }}>
                        <h1>Comments</h1>
                        <DataTable columns={CommentsColumn} data={comment} />
                        {roles.includes("Doctor") &&
                          location.state?.data?.visitStatus ===
                            "TRANSFER_TO_DOCTOR" &&
                          !isReSaved && <></>}
                      </Col>
                    </>

                    <Col xl={4}>
                      {(roles.includes("Nurse") ||
                        roles.includes("Optometrist")) &&
                        location.state?.data?.visitStatus ===
                          "TRANSFER_TO_NURSE" &&
                        !isOptReSaved && (
                          <>
                            <Button
                              onClick={() => addOptRefraction()}
                              style={{ marginTop: 20 }}
                            >
                              Save
                            </Button>
                          </>
                        )}
                    </Col>
                  </>
                )}

              {(roles.includes("Doctor") || roles.includes("Nurse") || roles.includes("Administrator")) &&
                tab === "tab5" && (
                  <>
                    <Row>
                      <Col style={{ marginTop: 10 }}>
                        {roles.includes("Nurse") && !savedDiagnostic && (
                          <Button
                            onClick={() => setShow4(true)}
                            style={{ marginRight: 10 }}
                          >
                            Add diagnostic
                          </Button>
                        )}
                      </Col>
                    </Row>

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
              <Col md={12} xl={12} style={{ marginTop: 20, height: 400 }}>
                <h1>Medical Acts</h1>
                <Select
                  isMulti
                  className="basic-single"
                  options={acts}
                  value={medicalActs}
                  onChange={(e) => setMedicalActs(e)}
                  classNamePrefix="Select2"
                  placeholder="Select..."
                  required
                />
              </Col>
            )}
          </>
        )}
      </Row>

      <Modal show={show6} onHide={() => setShow6(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>{visitId && <Visit visitId={visitId} />}</Modal.Body>
      </Modal>

      <Modal show={showModal} onHide={handleClose8}>
        <Modal.Header closeButton>
          <Modal.Title>
            Pay Invoice | Total Amount: {invoice?.totalAmount} Rwf
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
                      onChange={(e) => {
                        setPaymentMethod(e.value);
                        if (e.value === "INSURANCE_AND_TOP_UP") {
                          let newValue = parseFloat(0, 10);
                          // Ensure the value is between 0 and 20
                          newValue = Math.min(
                            Math.max(newValue, 0),
                            invoice.insurerAmount
                          );

                          setInsuranceAmount(newValue);
                          setTopUpAmount(
                            (invoice?.insurerAmount - newValue).toFixed(1)
                          );
                        } else if (e.value === "INSURANCE") {
                          setInsuranceAmount(invoice?.totalAmount);
                          setTopUpAmount(0);
                        }
                      }}
                    />
                  </Form.Group>
                </Form>
              </Col>

              {(paymentMethod === "INSURANCE_AND_TOP_UP" ||
                paymentMethod === "INSURANCE") && (
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
                          if (paymentMethod === "INSURANCE_AND_TOP_UP") {
                            let newValue = parseFloat(e.target.value, 10);
                            // Ensure the value is between 0 and 20
                            newValue = Math.min(
                              Math.max(newValue, 0),
                              invoice.insurerAmount
                            );

                            setInsuranceAmount(newValue);
                            setTopUpAmount(
                              (invoice?.totalAmount - newValue).toFixed(1)
                            );
                          }
                        }}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xl={12}>
                    <Form.Group className="form-group">
                      <Form.Label>Copay</Form.Label>
                      <Form.Control
                        type="number"
                        value={
                          (insuranceAmount * parseInt(invoice?.ticket)) / 100
                        }
                        className="form-control"
                        name="example-text-input"
                        // placeholder="names"
                        required
                      />
                    </Form.Group>
                  </Col>
                  {topUpAmount > 0 && (
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
                  )}
                  <Col xl={12}>
                    <Form.Group className="form-group">
                      <Form.Label>Amount to pay</Form.Label>
                      <Form.Control
                        type="number"
                        value={
                          parseFloat(invoice?.totalAmount) -
                          parseFloat(insuranceAmount) +
                          parseFloat(
                            (insuranceAmount * parseInt(invoice?.ticket)) / 100
                          )
                        }
                        className="form-control"
                        name="example-text-input"
                        // placeholder="names"
                        required
                      />
                    </Form.Group>
                  </Col>
                </>
              )}
              {invoice?.patientAmount > 0 && (
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

      <Modal show={show5} onHide={() => setShow5(false)}>
        <Form>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Col lg={12} className="col-md-">
              <Card className="custom-card">
                <Card.Header>
                  <Card.Title>Submit refraction</Card.Title>
                </Card.Header>
                <Card.Body>
                  <>
                    <Row>
                      <Col
                        md={6}
                        xl={6}
                        style={{
                          marginTop: 20,
                          paddingRight: 0,
                          paddingLeft: 0,
                        }}
                      >
                        <h1>Doctor's Refraction</h1>
                        <DataTable columns={reColumns} data={refraction} />
                      </Col>
                      <Col md={6} xl={6} style={{ marginTop: 20 }}>
                        <Row>
                          <Col
                            md={6}
                            xl={6}
                            style={{ marginTop: 20, height: 20 }}
                          >
                            <h1>Lens Type</h1>
                            {lensType_.map((act) => (
                              <Fragment key={act.id}>
                                <input
                                  type="checkbox"
                                  style={{ marginBottom: 15 }}
                                  value={act.value}
                                  checked={lensType === act.value}
                                  onChange={(e) => setLensType(e.target.value)}
                                />{" "}
                                {act.label}
                                <br />
                              </Fragment>
                            ))}
                          </Col>
                          <Col md={6} xl={6} style={{ marginTop: 20 }}>
                            <h1>Lens Attribute</h1>
                            {AdditionsTwo.map((act) => (
                              <Fragment key={act.id}>
                                <input
                                  type="checkbox"
                                  style={{ marginBottom: 15 }}
                                  value={act.value}
                                  checked={lensAttribute?.includes(act.value)}
                                  onChange={handleCheckboxChange2}
                                />{" "}
                                {act.label}
                                <br />
                              </Fragment>
                            ))}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3} xl={3} style={{ marginTop: 20 }}>
                        <h1></h1>
                        {prescriptionCheckBox.map((act) => (
                          <Fragment key={act.id}>
                            <input
                              type="checkbox"
                              style={{ marginBottom: 15 }}
                              value={act.value}
                              readOnly={!roles.includes("Doctor")}
                              checked={generatePrescription}
                              onChange={() => {
                                if (roles.includes("Doctor")) {
                                  setGeneratePrescription(
                                    !generatePrescription
                                  );
                                }
                              }}
                            />{" "}
                            {act.label}
                            <br />
                          </Fragment>
                        ))}
                      </Col>
                    </Row>
                    <Button
                      type="submit"
                      className="btn ripple btn-primary my-3"
                      style={{ width: "40%", marginLeft: "320px" }}
                      variant="primary"
                      onClick={(e) => {
                        doctorSave(e);
                      }}
                    >
                      Submit
                    </Button>
                  </>
                </Card.Body>
              </Card>
            </Col>
          </Modal.Body>
        </Form>
      </Modal>

      <Modal show={show7} onHide={()=>setShow7(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={2}>
                <h5>Sphere</h5>
                {['-20.00', '-19.75', '-19.50', '-19.25', '-19.00', '-18.75', '-18.50', '-18.25', '-18.00', '-17.75', '-17.50', '-17.25', 
                  '-17.00', '-16.75', '-16.50', '-16.25', '-16.00', '-15.75', '-15.50', '-15.25', '-15.00', '-14.75', '-14.50', '-14.25', 
                  '-14.00', '-13.75', '-13.50', '-13.25', '-13.00', '-12.75', '-12.50', '-12.25', '-12.00', '-11.75', '-11.50', '-11.25', 
                  '-11.00', '-10.75', '-10.50', '-10.25', '-10.00', '-9.75', '-9.50', '-9.25', '-9.00', '-8.75', '-8.50', '-8.25', '-8.00', 
                  '-7.75', '-7.50', '-7.25', '-7.00', '-6.75', '-6.50', '-6.25', '-6.00', '-5.75', '-5.50', '-5.25', '-5.00', '-4.75', 
                  '-4.50', '-4.25', '-4.00', '-3.75', '-3.50', '-3.25', '-3.00', '-2.75', '-2.50', '-2.25', '-2.00', '-1.75', '-1.50', 
                  '-1.25', '-1.00', '-0.75', '-0.50', '-0.25', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25', '1.50', '1.75', '2.00', 
                  '2.25', '2.50', '2.75', '3.00', '3.25', '3.50', '3.75', '4.00', '4.25', '4.50', '4.75', '5.00', '5.25', '5.50', 
                  '5.75', '6.00', '6.25', '6.50', '6.75', '7.00', '7.25', '7.50', '7.75', '8.00', '8.25', '8.50', '8.75', '9.00', 
                  '9.25', '9.50', '9.75', '10.00', '10.25', '10.50', '10.75', '11.00', '11.25', '11.50', '11.75', '12.00', '12.25', 
                  '12.50', '12.75', '13.00', '13.25', '13.50', '13.75', '14.00', '14.25', '14.50', '14.75', '15.00', '15.25', '15.50', 
                  '15.75', '16.00', '16.25', '16.50', '16.75', '17.00', '17.25', '17.50', '17.75', '18.00', '18.25', '18.50', '18.75', 
                  '19.00', '19.25', '19.50', '19.75', '20.00']
                  .map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    label={value}
                    onChange={() => handleChange('sphere', value, button)}
                    checked={(button === 'first' ? firstButtonValues:secondButtonValues).sphere === value}
                  />
                ))}
              </Col>

              <Col md={1} className="border-right"></Col> {/* Vertical line */}

              <Col md={2}>
                <h5>Cylinder</h5>
                {['-20.00', '-19.75', '-19.50', '-19.25', '-19.00', '-18.75', '-18.50', '-18.25', '-18.00', '-17.75', '-17.50', '-17.25', 
                  '-17.00', '-16.75', '-16.50', '-16.25', '-16.00', '-15.75', '-15.50', '-15.25', '-15.00', '-14.75', '-14.50', '-14.25', 
                  '-14.00', '-13.75', '-13.50', '-13.25', '-13.00', '-12.75', '-12.50', '-12.25', '-12.00', '-11.75', '-11.50', '-11.25', 
                  '-11.00', '-10.75', '-10.50', '-10.25', '-10.00', '-9.75', '-9.50', '-9.25', '-9.00', '-8.75', '-8.50', '-8.25', '-8.00', 
                  '-7.75', '-7.50', '-7.25', '-7.00', '-6.75', '-6.50', '-6.25', '-6.00', '-5.75', '-5.50', '-5.25', '-5.00', '-4.75', 
                  '-4.50', '-4.25', '-4.00', '-3.75', '-3.50', '-3.25', '-3.00', '-2.75', '-2.50', '-2.25', '-2.00', '-1.75', '-1.50', 
                  '-1.25', '-1.00', '-0.75', '-0.50', '-0.25', '0.00', '0.25', '0.50', '0.75', '1.00', '1.25', '1.50', '1.75', '2.00', 
                  '2.25', '2.50', '2.75', '3.00', '3.25', '3.50', '3.75', '4.00', '4.25', '4.50', '4.75', '5.00', '5.25', '5.50', 
                  '5.75', '6.00', '6.25', '6.50', '6.75', '7.00', '7.25', '7.50', '7.75', '8.00', '8.25', '8.50', '8.75', '9.00', 
                  '9.25', '9.50', '9.75', '10.00', '10.25', '10.50', '10.75', '11.00', '11.25', '11.50', '11.75', '12.00', '12.25', 
                  '12.50', '12.75', '13.00', '13.25', '13.50', '13.75', '14.00', '14.25', '14.50', '14.75', '15.00', '15.25', '15.50', 
                  '15.75', '16.00', '16.25', '16.50', '16.75', '17.00', '17.25', '17.50', '17.75', '18.00', '18.25', '18.50', '18.75', 
                  '19.00', '19.25', '19.50', '19.75', '20.00']
                  .map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    label={value}
                    onChange={() => handleChange('cylinder', value, button)}
                    checked={(button === 'first' ? firstButtonValues:secondButtonValues).cylinder === value}
                  />
                ))}
              </Col>

              <Col md={1} className="border-right"></Col> {/* Vertical line */}

              <Col md={2}>
                <h5>Axis</h5>
                {['0', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100', '110', '120', '130', '140', '150', '160', '170', '180'].map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    label={value}
                    onChange={() => handleChange('axis', value, button)}
                    checked={(button === 'first' ? firstButtonValues:secondButtonValues).axis === value}
                  />
                ))}
              </Col>

              <Col md={1} className="border-right"></Col> {/* Vertical line */}

              <Col md={2}>
                <h5>Addition</h5>
                {['0.00', '0.25', '0.50', '0.75', '1.00', '1.25', '1.50', '1.75', '2.00', 
                  '2.25', '2.50', '2.75', '3.00', '3.25', '3.50', '3.75', '4.00', '4.25', '4.50', '4.75', '5.00', '5.25', '5.50', 
                  '5.75', '6.00', '6.25', '6.50', '6.75', '7.00', '7.25', '7.50', '7.75', '8.00', '8.25', '8.50', '8.75', '9.00', 
                  '9.25', '9.50', '9.75', '10.00', '10.25', '10.50', '10.75', '11.00', '11.25', '11.50', '11.75', '12.00', '12.25', 
                  '12.50', '12.75', '13.00', '13.25', '13.50', '13.75', '14.00', '14.25', '14.50', '14.75', '15.00', '15.25', '15.50', 
                  '15.75', '16.00', '16.25', '16.50', '16.75', '17.00', '17.25', '17.50', '17.75', '18.00', '18.25', '18.50', '18.75', 
                  '19.00', '19.25', '19.50', '19.75', '20.00'].map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    label={value}
                    onChange={() => handleChange('addition', value, button)}
                    checked={(button === 'first' ? firstButtonValues:secondButtonValues).addition === value}
                  />
                ))}
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow7(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show8} onHide={() => setShow8(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            All previous visits
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {previousVisits2.length>0 && previousVisits2.map(visit=><Visit visitId={null} visit={visit} />)}
          <Pagination
          currentPage={currentPage2}
          totalItems={totalRows2 ? totalRows2 : previousVisits2.length}
          itemsPerPage={5}
          onPageChange={handlePageChange}
        />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
}
