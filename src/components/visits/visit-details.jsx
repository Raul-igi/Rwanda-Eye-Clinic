import React, { Fragment, useState, useEffect, useRef } from "react";
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import DataTable from "react-data-table-component";
import CreatableSelect from "react-select/creatable";
import { add, debounce, set } from "lodash";
import {
  lensType_,
  dip_,
  BasicTreatments,
  AdditionsTwo,
  prescriptionCheckBox,
} from "../../data/elementsdata";
import Visit from "./visit";
import Pagination from "./components/Pagination";

const vaArray = [
  "NLP",
  "LP",
  "HM",
  "CF",
  "1/10",
  "2/10",
  "3/10",
  "4/10",
  "5/10",
  "6/10",
  "7/10",
  "8/10",
  "9/10",
  "10/10",
];

const sphereArray = [
  "-0.25",
  "-0.50",
  "-0.75",
  "-1.00",
  "-1.25",
  "-1.50",
  "-1.75",
  "-2.00",
  "-2.25",
  "-2.50",
  "-2.75",
  "-3.00",
  "-3.25",
  "-3.50",
  "-3.75",
  "-4.00",
  "-4.25",
  "-4.50",
  "-4.75",
  "-5.00",
  "-5.25",
  "-5.50",
  "-5.75",
  "-6.00",
  "-6.25",
  "-6.50",
  "-6.75",
  "-7.00",
  "-7.25",
  "-7.50",
  "-7.75",
  "-8.00",
  "-8.25",
  "-8.50",
  "-8.75",
  "-9.00",
  "-9.25",
  "-9.50",
  "-9.75",
  "-10.00",
  "-10.25",
  "-10.50",
  "-10.75",
  "-11.00",
  "-11.25",
  "-11.50",
  "-11.75",
  "-12.00",
  "-12.25",
  "-12.50",
  "-12.75",
  "-13.00",
  "-13.25",
  "-13.50",
  "-13.75",
  "-14.00",
  "-14.25",
  "-14.50",
  "-14.75",
  "-15.00",
  "-15.25",
  "-15.50",
  "-15.75",
  "-16.00",
  "-16.25",
  "-16.50",
  "-16.75",
  "-17.00",
  "-17.25",
  "-17.50",
  "-17.75",
  "-18.00",
  "-18.25",
  "-18.50",
  "-18.75",
  "-19.00",
  "-19.25",
  "-19.50",
  "-19.75",
  "-20.00",
  "+0.25",
  "+0.50",
  "+0.75",
  "+1.00",
  "+1.25",
  "+1.50",
  "+1.75",
  "+2.00",
  "+2.25",
  "+2.50",
  "+2.75",
  "+3.00",
  "+3.25",
  "+3.50",
  "+3.75",
  "+4.00",
  "+4.25",
  "+4.50",
  "+4.75",
  "+5.00",
  "+5.25",
  "+5.50",
  "+5.75",
  "+6.00",
  "+6.25",
  "+6.50",
  "+6.75",
  "+7.00",
  "+7.25",
  "+7.50",
  "+7.75",
  "+8.00",
  "+8.25",
  "+8.50",
  "+8.75",
  "+9.00",
  "+9.25",
  "+9.50",
  "+9.75",
  "+10.00",
  "+10.25",
  "+10.50",
  "+10.75",
  "+11.00",
  "+11.25",
  "+11.50",
  "+11.75",
  "+12.00",
  "+12.25",
  "+12.50",
  "+12.75",
  "+13.00",
  "+13.25",
  "+13.50",
  "+13.75",
  "+14.00",
  "+14.25",
  "+14.50",
  "+14.75",
  "+15.00",
  "+15.25",
  "+15.50",
  "+15.75",
  "+16.00",
  "+16.25",
  "+16.50",
  "+16.75",
  "+17.00",
  "+17.25",
  "+17.50",
  "+17.75",
  "+18.00",
  "+18.25",
  "+18.50",
  "+18.75",
  "+19.00",
  "+19.25",
  "+19.50",
  "+19.75",
  "+20.00",
];

const cylinderArray = [
  "Plano",
  "-0.25",
  "-0.50",
  "-0.75",
  "-1.00",
  "-1.25",
  "-1.50",
  "-1.75",
  "-2.00",
  "-2.25",
  "-2.50",
  "-2.75",
  "-3.00",
  "-3.25",
  "-3.50",
  "-3.75",
  "-4.00",
  "-4.25",
  "-4.50",
  "-4.75",
  "-5.00",
  "-5.25",
  "-5.50",
  "-5.75",
  "-6.00",
];

const axisArray = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "100",
  "101",
  "102",
  "103",
  "104",
  "105",
  "106",
  "107",
  "108",
  "109",
  "110",
  "111",
  "112",
  "113",
  "114",
  "115",
  "116",
  "117",
  "118",
  "119",
  "120",
  "121",
  "122",
  "123",
  "124",
  "125",
  "126",
  "127",
  "128",
  "129",
  "130",
  "131",
  "132",
  "133",
  "134",
  "135",
  "136",
  "137",
  "138",
  "139",
  "140",
  "141",
  "142",
  "143",
  "144",
  "145",
  "146",
  "147",
  "148",
  "149",
  "150",
  "151",
  "152",
  "153",
  "154",
  "155",
  "156",
  "157",
  "158",
  "159",
  "160",
  "161",
  "162",
  "163",
  "164",
  "165",
  "166",
  "167",
  "168",
  "169",
  "170",
  "171",
  "172",
  "173",
  "174",
  "175",
  "176",
  "177",
  "178",
  "179",
  "180",
];

const additionsArray = [
  "1.00",
  "1.25",
  "1.50",
  "1.75",
  "2.00",
  "2.25",
  "2.50",
  "2.75",
  "3.00",
];

const selectStyles = {
  menu: (provided) => ({
    ...provided,
    height: 180, // Custom height for the dropdown menu
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: 180, // Max height of the dropdown menu list
  }),
};

const customStyles = {
  header: {
    style: {
      padding: "2px",
    },
  },
  rows: {
    style: {
      height: "30px", // override the row height
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        borderBottomColor: "#ccc",
      },
    },
  },
};

const customStyles2 = {
  header: {
    style: {
      padding: "2px",
    },
  },
  headCells: {
    style: {
      backgroundColor: "#c7f9cc", // Set header background color
    },
  },
  rows: {
    style: {
      backgroundColor: "#c7f9cc",
      height: "30px", // override the row height
      "&:not(:last-of-type)": {
        borderBottomStyle: "solid",
        borderBottomWidth: "2px",
        borderBottomColor: "#ccc",
      },
    },
  },
};

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
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [show12, setShow12] = useState(false);

  const [refType, setRefType] = useState("");
  const [vaEye, setVaEye] = useState("");
  const [vaType, setVaType] = useState("");

  const [button, setButton] = useState(false);

  const [optFirstButtonValues, setOptFirstButtonValues] = useState({
    sphere: "",
    cylinder: "",
    axis: "",
    va: "",
  });

  const [optSecondButtonValues, setOptSecondButtonValues] = useState({
    sphere: "",
    cylinder: "",
    axis: "",
    va: "",
  });

  const [curFirstButtonValues, setCurFirstButtonValues] = useState({
    sphere: "",
    cylinder: "",
    axis: "",
    addition: "",
  });

  const [curSecondButtonValues, setCurSecondButtonValues] = useState({
    sphere: "",
    cylinder: "",
    axis: "",
    addition: "",
  });

  const [firstButtonValues, setFirstButtonValues] = useState({
    sphere: "",
    cylinder: "",
    axis: "",
    va: "",
  });

  const [secondButtonValues, setSecondButtonValues] = useState({
    sphere: "",
    cylinder: "",
    axis: "",
    va: "",
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
  const [paymentMode, setPaymentMode] = useState([]);

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

  const [amounts, setAmounts] = useState({});

  const [generatePrescription, setGeneratePrescription] = useState(false);

  const [tab, setTab] = useState("tab1");
  const [toggle, setToggle] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage2(page);
    console.log(`Page changed to ${page}`); // You can use this to detect page changes
  };

  const handlePaymentModeChange = (selectedOptions) => {
    setPaymentMode(selectedOptions || []);
    // Reset amounts for any deselected options
    const selectedValues = selectedOptions
      ? selectedOptions.map((opt) => opt.value)
      : [];
    setAmounts((prevAmounts) =>
      Object.keys(prevAmounts)
        .filter((key) => selectedValues.includes(key))
        .reduce((obj, key) => {
          obj[key] = prevAmounts[key];
          return obj;
        }, {})
    );
  };

  const handleAmountChange = (e, mode) => {
    const value = e.target.value;
    setAmounts((prevAmounts) => ({
      ...prevAmounts,
      [mode]: value,
    }));
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
      va: "",
    },

    {
      name: "Left Eye",
      sphere: "",
      cylinder: "",
      axis: "",
      va: "",
    },

    {
      name: "Addition",
      addition: "",
    },
  ]);

  const [optRefraction, setOptRefraction] = useState([
    {
      name: "Right Eye",
      sphere: "",
      cylinder: "",
      axis: "",
      va: "",
    },

    {
      name: "Left Eye",
      sphere: "",
      cylinder: "",
      axis: "",
      va: "",
    },

    {
      name: "Addition",
      addition: "",
    },
  ]);

  const [rightOptions, setRightOptions] = useState([]);
  const [leftOptions, setLeftOptions] = useState([]);

  const [rightValues, setRightValues] = useState([]);
  const [leftValues, setLeftValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const [proceduresOptions, setProceduresOptions] = useState([]);
  const [labsOptions, setLabsOptions] = useState([]);

  const [proceduresValues, setProceduresValues] = useState([]);
  const [labsValues, setLabsValues] = useState([]);

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
  const debounceTimeout = useRef(null);

  const handleCommentChange = (e) => {
    const value = e.target.value;
    setComment([{ name: "", comment: value }]);

    // Clear the previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new timeout
    debounceTimeout.current = setTimeout(() => {
      addOptRefraction(optRefraction, [{ name: "", comment: value }]);
    }, 3000);
  };
  const handleClose8 = () => setShowModal(false);
  const handleShow8 = () => setShowModal(true);

  const [eight, setEight] = useState(false);

  const handleInputChange = (e, name, field) => {
    // Update the corresponding data item with the new value
    const newData = visualAcuity.map((item) => {
      if (item.name === name) {
        return { ...item, [field]: e };
      }
      return item;
    });
    setVisualAcuity(newData);
    addVisualAcuity(newData, currentGlasses);
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
          onClick={() => {
            if (
              roles.includes("Nurse") &&
              location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
            ) {
              setShow12(true);
              setVaEye(row.name);
              setVaType("sc");
            }
          }}
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
          onClick={() => {
            if (
              roles.includes("Nurse") &&
              location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
            ) {
              setShow12(true);
              setVaEye(row.name);
              setVaType("ac");
            }
          }}
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
          onClick={() => {
            if (
              roles.includes("Nurse") &&
              location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
            ) {
              setShow12(true);
              setVaEye(row.name);
              setVaType("ph");
            }
          }}
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
          onClick={() => {
            if (
              roles.includes("Nurse") &&
              location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
            ) {
              setShow10(true);
              setButton(row.name === "Right Eye" ? "first" : "second");
            }
          }}
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
          onClick={() => {
            if (
              roles.includes("Nurse") &&
              location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
            ) {
              setShow10(true);
              setButton(row.name === "Right Eye" ? "first" : "second");
            }
          }}
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
          onClick={() => {
            if (
              roles.includes("Nurse") &&
              location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
            ) {
              setShow10(true);
              setButton(row.name === "Right Eye" ? "first" : "second");
            }
          }}
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
          onClick={() => {
            if (
              roles.includes("Nurse") &&
              location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
            ) {
              setShow10(true);
              setButton(row.name === "Right Eye" ? "first" : "second");
            }
          }}
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
        row.sphere !== undefined ? (
          <input
            className="form-control"
            type="text"
            readOnly={!roles.includes("Doctor")}
            value={row.sphere}
            onClick={() => {
              if (roles.includes("Doctor")) {
                setShow7(true);
                setButton(row.name === "Right Eye" ? "first" : "second");
              }
            }}
          />
        ) : (
          <input
            className="form-control"
            type="text"
            readOnly={!roles.includes("Doctor")}
            value={row.addition}
            onClick={() => {
              if (roles.includes("Doctor")) {
                setShow11(true);
                setRefType("doctor");
              }
            }}
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
            readOnly={!roles.includes("Doctor")}
            onClick={() => {
              if (roles.includes("Doctor")) {
                setShow7(true);
                setButton(row.name === "Right Eye" ? "first" : "second");
              }
            }}
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
            readOnly={!roles.includes("Doctor")}
            onClick={() => {
              if (roles.includes("Doctor")) {
                setShow7(true);
                setButton(row.name === "Right Eye" ? "first" : "second");
              }
            }}
            value={row.axis}
            onChange={(e) =>
              handleInputChange2(e.target.value, row.name, "axis")
            }
          />
        ),
    },

    {
      name: "VA",
      sortable: true,
      cell: (row) =>
        row.va !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={!roles.includes("Doctor")}
            value={row.va}
            onClick={() => {
              if (roles.includes("Doctor")) {
                setShow7(true);
                setButton(row.name === "Right Eye" ? "first" : "second");
              }
            }}
            onChange={(e) => handleInputChange2(e.target.value, row.name, "va")}
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
      cell: (row) =>
        row.sphere !== undefined ? (
          <input
            className="form-control"
            type="text"
            readOnly={
              isOptReSaved ||
              (!roles.includes("Nurse") && !roles.includes("Optometrist")) ||
              location.state?.data?.visitStatus !== "TRANSFER_TO_NURSE"
            }
            value={row.sphere}
            onClick={() => {
              if (
                (roles.includes("Nurse") || roles.includes("Optometrist")) &&
                location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
              ) {
                setShow9(true);
                setButton(row.name === "Right Eye" ? "first" : "second");
              }
            }}
          />
        ) : (
          <input
            className="form-control"
            type="text"
            readOnly={
              isOptReSaved ||
              (!roles.includes("Nurse") && !roles.includes("Optometrist")) ||
              location.state?.data?.visitStatus !== "TRANSFER_TO_NURSE"
            }
            value={row.addition}
            onClick={() => {
              if (
                (roles.includes("Nurse") || roles.includes("Optometrist")) &&
                location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
              ) {
                setShow11(true);
                setRefType("optometrist");
              }
            }}
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
            readOnly={
              isOptReSaved ||
              (!roles.includes("Nurse") && !roles.includes("Optometrist")) ||
              location.state?.data?.visitStatus !== "TRANSFER_TO_NURSE"
            }
            onClick={() => {
              if (
                (roles.includes("Nurse") || roles.includes("Optometrist")) &&
                location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
              ) {
                setShow9(true);
                setButton(row.name === "Right Eye" ? "first" : "second");
              }
            }}
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
            readOnly={
              isOptReSaved ||
              (!roles.includes("Nurse") && !roles.includes("Optometrist")) ||
              location.state?.data?.visitStatus !== "TRANSFER_TO_NURSE"
            }
            onClick={() => {
              if (
                (roles.includes("Nurse") || roles.includes("Optometrist")) &&
                location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
              ) {
                setShow9(true);
                setButton(row.name === "Right Eye" ? "first" : "second");
              }
            }}
            value={row.axis}
            onChange={(e) =>
              handleInputChange3(e.target.value, row.name, "axis")
            }
          />
        ),
    },

    {
      name: "VA",
      sortable: true,
      cell: (row) =>
        row.va !== undefined && (
          <input
            className="form-control"
            type="text"
            readOnly={
              isOptReSaved ||
              (!roles.includes("Nurse") && !roles.includes("Optometrist")) ||
              location.state?.data?.visitStatus !== "TRANSFER_TO_NURSE"
            }
            value={row.va}
            onClick={() => {
              if (
                (roles.includes("Nurse") || roles.includes("Optometrist")) &&
                location.state?.data?.visitStatus === "TRANSFER_TO_NURSE"
              ) {
                setShow7(true);
                setButton(row.name === "Right Eye" ? "first" : "second");
              }
            }}
            onChange={(e) => handleInputChange3(e.target.value, row.name, "va")}
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
          readOnly={
            (!roles.includes("Nurse") && !roles.includes("Optometrist")) ||
            location.state?.data?.visitStatus !== "TRANSFER_TO_NURSE"
          }
          rows={3}
          value={comment[0].comment}
          onChange={handleCommentChange}
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
    const roles_ = localStorage.getItem("role");
    const userRoles = JSON.parse(roles_);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        userRoles.includes("Nurse")
          ? `http://www.ubuzima.rw/rec/visit/nurse/acts`
          : `http://www.ubuzima.rw/rec/visit/doctor/acts`,
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

  const fetchExams = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/doctor/exams`,
        config
      );
      if (response.data.status) {
        const exams_ = response.data.response.map((el) => {
          return { label: el.name, value: el.name };
        });
        setRightOptions(exams_);
        setLeftOptions(exams_);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProcedures = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/doctor/procedures`,
        config
      );
      if (response.data.status) {
        const procedures_ = response.data.response.map((el) => {
          return { label: el.name, value: el.name };
        });
        setProceduresOptions(procedures_);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLabs = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/doctor/labs`,
        config
      );
      if (response.data.status) {
        const labs_ = response.data.response.map((el) => {
          return { label: el.name, value: el.name };
        });
        setLabsOptions(labs_);
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
      setRightValues(
        response.data.response.exams
          .filter((e) => e.eyeSide === "RIGHT")
          .map((el) => ({
            value: el.exam,
            label: el.exam,
          }))
      );
      setLeftValues(
        response.data.response.exams
          .filter((e) => e.eyeSide === "LEFT")
          .map((el) => ({
            value: el.exam,
            label: el.exam,
          }))
      );
      setProceduresValues(
        response.data.response.procedures.map((el) => ({
          value: el,
          label: el,
        }))
      );
      setLabsValues(
        response.data.response.labs.map((el) => ({
          value: el,
          label: el,
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
    const setValues =
      buttonType === "first" ? setFirstButtonValues : setSecondButtonValues;
    const currentValues =
      buttonType === "first" ? firstButtonValues : secondButtonValues;

    if (buttonType === "first") {
      var data = {
        ...firstButtonValues,
        [column]: firstButtonValues[column] === value ? "" : value,
      };
      setRefraction([
        {
          ...refraction[0],
          cylinder: data.cylinder,
          sphere: data.sphere,
          axis: data.axis,
          va: data.va,
        },
        refraction[1],
        refraction[2],
      ]);
      addRefraction(
        [
          {
            ...refraction[0],
            cylinder: data.cylinder,
            sphere: data.sphere,
            axis: data.axis,
            va: data.va,
          },
          refraction[1],
          refraction[2],
        ],
        lensType,
        lensAttribute
      );
    } else {
      var data = {
        ...secondButtonValues,
        [column]: secondButtonValues[column] === value ? "" : value,
      };
      setRefraction([
        refraction[0],
        {
          ...refraction[1],
          cylinder: data.cylinder,
          sphere: data.sphere,
          axis: data.axis,
          va: data.va,
        },
        refraction[2],
      ]);
      addRefraction(
        [
          refraction[0],
          {
            ...refraction[1],
            cylinder: data.cylinder,
            sphere: data.sphere,
            axis: data.axis,
            va: data.va,
          },
          refraction[2],
        ],
        lensType,
        lensAttribute
      );
    }

    setValues((prev) => ({
      ...prev,
      [column]: prev[column] === value ? "" : value, // Toggle the value
    }));
  };

  const handleChange2 = (column, value, buttonType) => {
    const setValues =
      buttonType === "first"
        ? setOptFirstButtonValues
        : setOptSecondButtonValues;
    const currentValues =
      buttonType === "first" ? optFirstButtonValues : optSecondButtonValues;

    if (buttonType === "first") {
      var data = {
        ...optFirstButtonValues,
        [column]: optFirstButtonValues[column] === value ? "" : value,
      };
      setOptRefraction([
        {
          ...optRefraction[0],
          cylinder: data.cylinder,
          sphere: data.sphere,
          axis: data.axis,
          va: data.va,
        },
        optRefraction[1],
        optRefraction[2],
      ]);
      addOptRefraction(
        [
          {
            ...optRefraction[0],
            cylinder: data.cylinder,
            sphere: data.sphere,
            axis: data.axis,
            va: data.va,
          },
          optRefraction[1],
          optRefraction[2],
        ],
        comment
      );
    } else {
      var data = {
        ...optSecondButtonValues,
        [column]: optSecondButtonValues[column] === value ? "" : value,
      };
      setOptRefraction([
        optRefraction[0],
        {
          ...optRefraction[1],
          cylinder: data.cylinder,
          sphere: data.sphere,
          axis: data.axis,
          va: data.va,
        },
        optRefraction[2],
      ]);
      addOptRefraction(
        [
          optRefraction[0],
          {
            ...optRefraction[1],
            cylinder: data.cylinder,
            sphere: data.sphere,
            axis: data.axis,
            va: data.va,
          },
          optRefraction[2],
        ],
        comment
      );
    }

    setValues((prev) => ({
      ...prev,
      [column]: prev[column] === value ? "" : value, // Toggle the value
    }));
  };

  const handleChange3 = (column, value, buttonType) => {
    const setValues =
      buttonType === "first"
        ? setCurFirstButtonValues
        : setCurSecondButtonValues;
    const currentValues =
      buttonType === "first" ? curFirstButtonValues : curSecondButtonValues;

    if (buttonType === "first") {
      var data = {
        ...curFirstButtonValues,
        [column]: curFirstButtonValues[column] === value ? "" : value,
      };
      setCurrentGlasses([
        {
          ...currentGlasses[0],
          cylinder: data.cylinder,
          sphere: data.sphere,
          axis: data.axis,
          addition: data.addition,
        },
        currentGlasses[1],
      ]);
      addVisualAcuity(visualAcuity, [
        {
          ...currentGlasses[0],
          cylinder: data.cylinder,
          sphere: data.sphere,
          axis: data.axis,
          addition: data.addition,
        },
        currentGlasses[1],
      ]);
    } else {
      var data = {
        ...curSecondButtonValues,
        [column]: curSecondButtonValues[column] === value ? "" : value,
      };
      setCurrentGlasses([
        currentGlasses[0],
        {
          ...currentGlasses[1],
          cylinder: data.cylinder,
          sphere: data.sphere,
          axis: data.axis,
          addition: data.addition,
        },
      ]);
      addVisualAcuity(visualAcuity, [
        currentGlasses[0],
        {
          ...currentGlasses[1],
          cylinder: data.cylinder,
          sphere: data.sphere,
          axis: data.axis,
          addition: data.addition,
        },
      ]);
    }

    setValues((prev) => ({
      ...prev,
      [column]: prev[column] === value ? "" : value, // Toggle the value
    }));
  };

  const addVisualAcuity = async (visualAcuity_, currentGlasses_) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state?.data?.visitId,
      scRightEye: visualAcuity_[0].sc,
      scLeftEye: visualAcuity_[1].sc,
      acRightEye: visualAcuity_[0].ac,
      acLeftEye: visualAcuity_[1].ac,
      phRightEye: visualAcuity_[0].ph,
      phLeftEye: visualAcuity_[1].ph,
      glassSphereRightEye: currentGlasses_[0].sphere,
      glassSphereLeftEye: currentGlasses_[1].sphere,
      glassCylindreRightEye: currentGlasses_[0].cylinder,
      glassCylindreLeftEye: currentGlasses_[1].cylinder,
      glassAxeRightEye: currentGlasses_[0].axis,
      glassAxeLeftEye: currentGlasses_[1].axis,
      glassAdditionRightEye: currentGlasses_[0].addition,
      glassAdditionLeftEye: currentGlasses_[1].addition,
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
    var amountToPay =
      parseFloat(invoice?.totalAmount) -
      parseFloat(insuranceAmount) +
      parseFloat((insuranceAmount * parseInt(invoice?.ticket)) / 100);
    const amountsSum = Object.values(amounts).reduce(
      (acc, val) => acc + parseFloat(val),
      0
    );
    console.log(amountsSum);
    console.log(amountToPay);
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    var paymentDtos = paymentMode.map((m) => {
      var dto = {
        invoiceNumber: invoice.invoiceNumber,
        paymentMethod: paymentMethod ? paymentMethod : "INSURANCE",
        amount: amounts[m.value],
        paymentMode: m.value,
        insuranceAmount: insuranceAmount,
      };
      if (topUpAmount > 0) {
        dto.topUpAmount = topUpAmount;
      }
      return dto;
    });

    var paymentDto = {
      invoiceNumber: invoice.invoiceNumber,
      paymentMethod: paymentMethod ? paymentMethod : "INSURANCE",
      amount: amountToPay,
      paymentMode: paymentMode[0]?.value,
      insuranceAmount: insuranceAmount,
    };
    if (topUpAmount > 0) {
      paymentDto.topUpAmount = topUpAmount;
    }
    console.log(JSON.stringify(paymentDtos));
    if (
      paymentMode.length < 2 ||
      (paymentMode.length > 1 && ( (amountToPay - amountsSum) >= -1 || (amountToPay - amountsSum) <= 1 ))
    ) {
      try {
        const response = await axios.post(
          `http://www.ubuzima.rw/rec/invoice/pay`,
          JSON.stringify(paymentMode.length > 1 ? paymentDtos : [paymentDto]),
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
    } else {
      alert(
        "The sum of the amounts of each payment method should be equal to the amount to pay!"
      );
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
    if (checked) {
      setLensAttribute((prev) => {
        return [...prev, value];
      });
      addRefraction(refraction, lensType, [...lensAttribute, value]);
    } else {
      setLensAttribute((prev) => {
        return prev.filter((act) => act !== value);
      });
      addRefraction(
        refraction,
        lensType,
        lensAttribute.filter((act) => act !== value)
      );
    }
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
      userRoles.includes("Doctor")
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

  const addTreatment = async (treatment_) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state?.data?.visitId,
      treatmentId: treatment_.map((el) => el.value),
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

  const addOsSymptoms = async (values_) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state?.data?.visitId,
      eyeSide: "LEFT",
      exams: [...values_.map((el) => el.value)],
    });
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/doctor/add-exams`,
        postObj,
        config
      );
      // setShow3(false);
      if (response.data.status) {
        alert("Exams added successfully!");
        // fetchOd(treatments);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addOdSymptoms = async (values_) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state?.data?.visitId,
      eyeSide: "RIGHT",
      exams: [...values_.map((el) => el.value)],
    });
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/doctor/add-exams`,
        postObj,
        config
      );
      // setShow3(false);
      if (response.data.status) {
        alert("Exams added successfully!");
        // fetchOd(treatments);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addProcedures = async (procedures_) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state?.data?.visitId,
      labProcedures: procedures_.map((el) => el.value),
    });
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/doctor/add-procedures`,
        postObj,
        config
      );
    } catch (error) {
      console.error(error);
    }
  };

  const addLabs = async (labs_) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state?.data?.visitId,
      labProcedures: labs_.map((el) => el.value),
    });
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit/doctor/add-labs`,
        postObj,
        config
      );
    } catch (error) {
      console.error(error);
    }
  };

  const addProcedure = async (procedure) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        procedureName: procedure,
      },
    };
    try {
      const response = await axios.post(
        `http://www.ubuzima.rw/rec/visit//add-procedure`,
        {},
        config
      );
      if (response.data.status) {
        fetchProcedures();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const addNotes = async (e) => {
    if (notes) {
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
    } else {
      alert("Add notes before submitting...");
    }
  };

  const handleCreate = (inputValue) => {
    const newOption = { value: inputValue.toLowerCase(), label: inputValue };
    setRightOptions([...rightOptions, newOption]);
    setRightValues([...values, newOption]);
  };

  const handleCreateProcedure = (inputValue) => {
    addProcedure(inputValue);
  };

  const handleCreateLab = (inputValue) => {
    const newOption = { value: inputValue.toLowerCase(), label: inputValue };
    setLabsOptions([...labsOptions, newOption]);
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

  const addRefraction = async (refraction_, lensType_, lensAttribute_) => {
    console.log(refraction_)
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state?.data?.visitId,
      sphereRightEye: refraction_[0].sphere,
      sphereLeftEye: refraction_[1].sphere,
      cylindreRightEye: refraction_[0].cylinder,
      cylindreLeftEye: refraction_[1].cylinder,
      axeRightEye: refraction_[0].axis,
      axeLeftEye: refraction_[1].axis,
      lensType: lensType_ || null,
      dip: "DIP_ON_DISTANCE",
      lensAttribute: lensAttribute_,
      vaRightEye: refraction_[0].va,
      vaLeftEye: refraction_[1].va,
      additionRightEye: refraction_[2].addition,
      additionLeftEye: refraction_[2].addition,
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
        // fetchRefraction();
      }
    } catch (error) {
      setShow5(false);
      console.error(error);
      console.log(res.data);
    }
  };

  const addOptRefraction = async (refraction_, comment_) => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };
    const postObj = JSON.stringify({
      patientVisitId: location.state?.data?.visitId,
      sphereRightEye: refraction_[0].sphere,
      sphereLeftEye: refraction_[1].sphere,
      cylindreRightEye: refraction_[0].cylinder,
      cylindreLeftEye: refraction_[1].cylinder,
      axeRightEye: refraction_[0].axis,
      axeLeftEye: refraction_[1].axis,
      lensType: "BIFOCAL",
      dip: "DIP_ON_DISTANCE",
      lensAttribute: [],
      vaRightEye: refraction_[0].va,
      vaLeftEye: refraction_[1].va,
      additionRightEye: refraction_[2].addition,
      additionLeftEye: refraction_[2].addition,
      comments: comment_[0].comment,
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
            va: response.data.response[0].vaRightEye || "",
          },
          {
            name: "Left Eye",
            sphere: response.data.response[0].sphereLeftEye || "",
            cylinder: response.data.response[0].cylindreLeftEye || "",
            axis: response.data.response[0].axeLeftEye || "",
            va: response.data.response[0].vaLeftEye || "",
          },
          {
            name: "Addition",
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
            va: response.data.response[0].vaRightEye || "",
          },
          {
            name: "Left Eye",
            sphere: response.data.response[0].sphereLeftEye || "",
            cylinder: response.data.response[0].cylindreLeftEye || "",
            axis: response.data.response[0].axeLeftEye || "",
            va: response.data.response[0].vaLeftEye || "",
          },
          {
            name: "Addition",
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
        size: 2,
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
        size: 1,
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
      fetchLabs();
      fetchProcedures();
      fetchExams();
    }
  }, []);

  useEffect(() => {
    fetchPreviousVisits();
  }, [currentPage]);

  useEffect(() => {
    fetchPreviousVisits2();
  }, [currentPage2]);

  useEffect(() => {
    addVisualAcuity();
  }, [visualAcuity, currentGlasses]);

  return (
    <Fragment>
      {visualAcuity.length > 0 &&
        location.state?.data?.visitStatus === "TRANSFER_TO_DOCTOR" &&
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
        {invoice &&
          (roles.includes("Receptionist") ||
            roles.includes("Administrator")) && (
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

        {invoice &&
          (roles.includes("Receptionist") ||
            roles.includes("Administrator")) && (
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
                          invoice?.paymentStatus == "NOT_PAID"
                            ? "red"
                            : "green",
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
                  <Card.Body style={{ margin: 0, padding: 0 }}>
                    <p style={{ margin: 0, padding: 0 }}>
                      Names: {location.state?.data?.patient?.names}
                    </p>
                    <p>Sex: {location.state?.data?.patient?.gender}</p>
                    <p>
                      DOB: {location.state?.data?.patient?.dob?.slice(0, 4)}
                    </p>
                    <p style={{ fontSize: "15px" }}>
                      Doctor: Dr {location.state?.data?.doctor}
                    </p>
                    <p style={{ fontSize: "15px" }}>
                      Insurance:{" "}
                      {location.state?.data?.insurance?.insuranceName}
                    </p>
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
                  <Card.Body
                    style={{ margin: 0, padding: "5px 5px 15px 20px" }}
                  >
                    <p style={{ marginBottom: 5 }}>
                      Names: {location.state?.data?.patient?.names}
                    </p>
                    <p style={{ marginBottom: 5 }}>
                      phone: {location.state?.data?.patient?.phoneNumber}
                    </p>
                    <p style={{ marginBottom: 5 }}>
                      Sex: {location.state?.data?.patient?.gender}
                    </p>
                    <p style={{ marginBottom: 5 }}>
                      DOB: {location.state?.data?.patient?.dob?.slice(0, 4)}
                    </p>
                    <p style={{ fontSize: "15px", marginBottom: 5 }}>
                      Doctor: Dr {location.state?.data?.doctor}
                    </p>
                    <p style={{ fontSize: "15px", marginBottom: 5 }}>
                      Insurance:{" "}
                      {location.state?.data?.insurance?.insuranceName}
                    </p>
                    <p style={{ fontSize: "15px", marginBottom: 5 }}>
                      Ticket: {location.state?.data?.insurance?.ticket}
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col lg={8} style={{ marginTop: 20 }}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title>Last Visits</Card.Title>
                    {previousVisits.length > 0 && (
                      <Card.Title onClick={() => setShow8(true)}>
                        View all
                      </Card.Title>
                    )}
                  </Card.Header>
                  <Card.Body style={{ margin: 0, padding: "0px 8px" }}>
                    <DataTable
                      columns={columns2}
                      data={previousVisits}
                      paginationPerPage={2}
                      paginationRowsPerPageOptions={[2]}
                      paginationTotalRows={
                        totalRows ? totalRows : previousVisits.length
                      }
                      onChangePage={(page) => setCurrentPage(page)}
                      pagination
                      paginationServer
                      customStyles={customStyles}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {!roles.includes("Doctor") && (
              <div class="tabs" style={{ display: "flex" }}>
                {(roles.includes("Nurse") ||
                  roles.includes("Optometrist") ||
                  roles.includes("Administrator")) && (
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

                {(roles.includes("Nurse") ||
                  roles.includes("Administrator")) && (
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
            )}
          </>
        )}

        {!roles.includes("Receptionist") && (
          <>
            <Row>
              {tab === "tab1" &&
                (roles.includes("Nurse") || roles.includes("Doctor")) && (
                  <Col md={6} xl={6} style={{ marginTop: 20, paddingRight: 0 }}>
                    <h1 style={{ marginBottom: 0 }}>Visual Acuity</h1>

                    <DataTable
                      columns={vaColumns}
                      data={visualAcuity}
                      customStyles={customStyles}
                    />

                    {/* {roles.includes("Nurse") &&
                      location.state?.data?.visitStatus ===
                        "TRANSFER_TO_NURSE" &&
                      !isVaSaved && (
                        <>
                          <Button
                            onClick={() => addVisualAcuity()}
                            style={{ marginTop: 6 }}
                          >
                            Save
                          </Button>
                        </>
                      )} */}
                  </Col>
                )}

              {(roles.includes("Doctor") ||
                roles.includes("Nurse") ||
                roles.includes("Administrator")) &&
                tab === "tab1" && (
                  <Col
                    md={6}
                    xl={6}
                    style={{ marginTop: 20, paddingRight: 0, paddingLeft: 0 }}
                  >
                    <h1 style={{ marginBottom: 0 }}>Current Glasses</h1>
                    <DataTable
                      columns={currentGlassesColumns}
                      data={currentGlasses}
                      customStyles={customStyles}
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
                    <h1 style={{ marginBottom: 0 }}>Optometrist Refraction</h1>
                    <DataTable
                      columns={optReColumns}
                      data={optRefraction}
                      customStyles={customStyles}
                    />
                  </Col>
                )}

              {(roles.includes("Doctor") ||
                roles.includes("Nurse") ||
                roles.includes("Administrator") ||
                roles.includes("Optometrist")) &&
                tab === "tab1" && (
                  <>
                    <>
                      <Col
                        md={6}
                        xl={6}
                        style={{ marginTop: 20, paddingLeft: 2 }}
                      >
                        <h1 style={{ marginBottom: 0 }}>Comments</h1>
                        <DataTable
                          columns={CommentsColumn}
                          data={comment}
                          customStyles={{ rows: { style: { height: 95 } } }}
                        />
                        {roles.includes("Doctor") &&
                          location.state?.data?.visitStatus ===
                            "TRANSFER_TO_DOCTOR" &&
                          !isReSaved && <></>}
                      </Col>
                    </>
                  </>
                )}

              {roles.includes("Doctor") && (
                <div style={{ marginTop: 40 }}>
                  <h1 style={{ marginBottom: 0 }}>
                    Patient's symptoms and signs
                  </h1>
                  <Card style={{ padding: 0 }}>
                    <Card.Body style={{ margin: 0, padding: 0 }}>
                      <Row style={{ paddingRight: 20 }}>
                        <Col
                          lg={4}
                          style={{
                            marginBottom: "100px",
                            marginTop: 20,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <h2>Selected OD</h2>
                          {rightValues.length > 0 ? (
                            rightValues.map((v, index) => (
                              <div style={{ display: "flex" }}>
                                <p>
                                  &#9679;
                                  {v.value}
                                  {/* <input
                                  value={v.value}
                                  onChange={(e) => {
                                    setRightValues((prevData) =>
                                      prevData.map((item, i) =>
                                        i === index
                                          ? {
                                              ...item,
                                              ...{
                                                label: e.target.value,
                                                value: e.target.value,
                                              },
                                            }
                                          : item
                                      )
                                    );
                                  }}
                                  style={{
                                    width: "50%",
                                    border: "none",
                                    outline: "none",
                                  }}
                                /> */}
                                </p>
                                <i
                                  className="fa fa-trash"
                                  title="Delete"
                                  onClick={() => {
                                    const newValues = rightValues.filter(
                                      (val) => val.value !== v.value
                                    );
                                    setRightValues(newValues);
                                    addOdSymptoms(newValues);
                                  }}
                                  style={{
                                    color: "red",
                                    fontSize: 15,
                                    marginLeft: 10,
                                    marginTop: 3,
                                  }}
                                ></i>
                              </div>
                            ))
                          ) : (
                            <p>No symptoms yet...</p>
                          )}
                        </Col>
                        <Col
                          lg={4}
                          style={{
                            marginBottom: "100px",
                            marginTop: 20,
                            display: "flex",
                            flexDirection: "column",
                            borderRightColor: "gray",
                            borderRightWidth: 0.2,
                            borderRightStyle: "solid",
                            borderLeftColor: "gray",
                            borderLeftWidth: 0.2,
                            borderLeftStyle: "solid",
                            // alignItems:'center'
                          }}
                        >
                          <h2 style={{ textAlign: "center" }}>
                            Symptoms/Signs
                          </h2>
                          {(roles.includes("Doctor") ||
                            roles.includes("Administrator")) && (
                            <>
                              <Form.Group className="form-group">
                                <Select
                                  isMulti
                                  options={rightOptions}
                                  value={[]}
                                  onChange={(e) => setSelectedValue(e)}
                                  placeholder="Select"
                                />
                              </Form.Group>
                              {selectedValue.length > 0 && (
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <div>
                                    <button
                                      onClick={() => {
                                        const value_ = rightValues.find(
                                          (v) =>
                                            v.value === selectedValue[0].value
                                        );
                                        if (!value_) {
                                          setRightValues([
                                            ...rightValues,
                                            ...selectedValue,
                                          ]);
                                          addOdSymptoms([
                                            ...rightValues,
                                            ...selectedValue,
                                          ]);
                                        }
                                      }}
                                      className="btn btn-primary"
                                    >
                                      <i className="fa fa-arrow-left"></i>
                                    </button>
                                  </div>
                                  <div>
                                    <div
                                      style={{
                                        background: "#f5f5f5",
                                        paddingRight: 20,
                                        paddingLeft: 20,
                                        height: 35,
                                        borderRadius: 5,
                                        display: "flex",
                                        flexDirection: "row", // Changed to 'row' for horizontal alignment
                                        justifyContent: "center", // Centers horizontally
                                        alignItems: "center", // Centers vertically
                                      }}
                                    >
                                      <p style={{ margin: 0 }}>
                                        {selectedValue[0].value}
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <button
                                      onClick={() => {
                                        const value_ = leftValues.find(
                                          (v) =>
                                            v.value === selectedValue[0].value
                                        );
                                        if (!value_) {
                                          setLeftValues([
                                            ...leftValues,
                                            ...selectedValue,
                                          ]);
                                          addOsSymptoms([
                                            ...leftValues,
                                            ...selectedValue,
                                          ]);
                                        }
                                      }}
                                      className="btn btn-primary"
                                    >
                                      <i className="fa fa-arrow-right"></i>
                                    </button>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </Col>
                        <Col
                          lg={4}
                          style={{
                            marginBottom: "100px",
                            marginTop: 20,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          <h2>Selected OS</h2>
                          {leftValues.length > 0 ? (
                            leftValues.map((v, index) => (
                              <div style={{ display: "flex" }}>
                                <p>
                                  &#9679;
                                  {v.value}
                                  {/* <input
                                  value={v.value}
                                  onChange={(e) => {
                                    setLeftValues((prevData) =>
                                      prevData.map((item, i) =>
                                        i === index
                                          ? {
                                              ...item,
                                              ...{
                                                label: e.target.value,
                                                value: e.target.value,
                                              },
                                            }
                                          : item
                                      )
                                    );
                                  }}
                                  style={{
                                    width: "50%",
                                    border: "none",
                                    outline: "none",
                                  }}
                                /> */}
                                </p>
                                <i
                                  className="fa fa-trash"
                                  title="Delete"
                                  onClick={() => {
                                    const newValues = leftValues.filter(
                                      (val) => val.value !== v.value
                                    );
                                    setLeftValues(newValues);
                                    addOsSymptoms(newValues);
                                  }}
                                  style={{
                                    color: "red",
                                    fontSize: 15,
                                    marginLeft: 10,
                                    marginTop: 3,
                                  }}
                                ></i>
                              </div>
                            ))
                          ) : (
                            <p>No symptoms yet...</p>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              )}

              {roles.includes("Doctor") && (
                <div style={{ marginTop: 40 }}>
                  <Card style={{ padding: 0 }}>
                    <Card.Body style={{ margin: 0, padding: 0 }}>
                      <Row style={{ paddingRight: 20 }}>
                        <Col
                          lg={6}
                          style={{
                            marginBottom: "100px",
                            marginTop: 20,
                            paddingLeft: 18,
                          }}
                        >
                          {(roles.includes("Doctor") ||
                            roles.includes("Administrator")) && (
                            <>
                              <h1 style={{ marginBottom: 0 }}>Dr Procedures</h1>
                              <Form.Group className="form-group">
                                <Form.Label>Select procedure</Form.Label>
                                <CreatableSelect
                                  isMulti
                                  options={proceduresOptions}
                                  value={proceduresValues}
                                  onChange={(e) => setProceduresValues(e)}
                                  onCreateOption={handleCreateProcedure}
                                  placeholder="Select or create"
                                />
                              </Form.Group>

                              <Row>
                                {proceduresOptions.length > 0 ? (
                                  proceduresOptions.map((s) => (
                                    <Col lg={3}>
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <input
                                          type="checkbox"
                                          style={{ marginRight: "8px" }}
                                          value={s.value}
                                          onChange={(e) => {
                                            const index =
                                              proceduresValues.findIndex(
                                                (item) => item.value === s.value
                                              );

                                            if (index !== -1) {
                                              setProceduresValues(
                                                proceduresValues.filter(
                                                  (v) => v.value !== s.value
                                                )
                                              );
                                              if (
                                                proceduresValues.filter(
                                                  (v) => v.value !== s.value
                                                ).length > 0
                                              ) {
                                                addProcedures(
                                                  proceduresValues.filter(
                                                    (v) => v.value !== s.value
                                                  )
                                                );
                                              }
                                            } else {
                                              setProceduresValues([
                                                ...proceduresValues,
                                                s,
                                              ]);
                                              addProcedures([
                                                ...proceduresValues,
                                                s,
                                              ]);
                                            }
                                          }}
                                          checked={proceduresValues.some(
                                            (item) => item.value === s.value
                                          )}
                                        />
                                        <p style={{ margin: 0 }}>{s.label}</p>
                                      </div>
                                    </Col>
                                  ))
                                ) : (
                                  <p>No procedure yet...</p>
                                )}
                              </Row>
                            </>
                          )}
                        </Col>

                        <Col
                          lg={6}
                          style={{
                            marginBottom: "100px",
                            marginTop: 20,
                            paddingLeft: 18,
                          }}
                        >
                          {(roles.includes("Doctor") ||
                            roles.includes("Administrator")) && (
                            <>
                              <h1 style={{ marginBottom: 0 }}>Lab tests</h1>
                              <Form.Group className="form-group">
                                <Form.Label>Select labs</Form.Label>
                                <CreatableSelect
                                  isMulti
                                  options={labsOptions}
                                  value={labsValues}
                                  onChange={(e) => {
                                    setLabsValues(e);
                                    if (
                                      e.length > 0 &&
                                      roles.includes("Doctor")
                                    ) {
                                      addLabs(e);
                                    }
                                  }}
                                  onCreateOption={handleCreateLab}
                                  placeholder="Select or create"
                                />
                              </Form.Group>

                              {labsValues.length > 0 ? (
                                labsValues.map((s) => <p>&#9679; {s.label}</p>)
                              ) : (
                                <p>No lab test yet...</p>
                              )}
                            </>
                          )}
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              )}

              {(roles.includes("Doctor") ||
                roles.includes("Administrator")) && (
                <>
                  <Row>
                    <Col
                      md={6}
                      xl={6}
                      style={{
                        paddingRight: 0,
                        paddingLeft: 0,
                        margin: "10px 0 0 0",
                      }}
                    >
                      <h1>Doctor's Refraction</h1>
                      <DataTable
                        columns={reColumns}
                        data={refraction}
                        customStyles={customStyles2}
                      />
                    </Col>
                    <Col md={6} xl={6} style={{ marginTop: 20 }}>
                      <Row>
                        <Col md={6} xl={6} style={{ height: 20 }}>
                          <h1>Lens Type</h1>
                          {lensType_.map((act) => (
                            <Fragment key={act.id}>
                              <input
                                type="checkbox"
                                style={{ marginBottom: 15 }}
                                value={act.value}
                                checked={lensType === act.value}
                                onChange={(e) => {
                                  setLensType(e.target.value);
                                  addRefraction(
                                    refraction,
                                    e.target.value,
                                    lensAttribute
                                  );
                                }}
                              />{" "}
                              {act.label}
                              <br />
                            </Fragment>
                          ))}
                        </Col>
                        <Col md={6} xl={6}>
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
                    <Col md={3} xl={3}>
                      {prescriptionCheckBox.map((act) => (
                        <Fragment key={act.id}>
                          <input
                            type="checkbox"
                            value={act.value}
                            readOnly={!roles.includes("Doctor")}
                            checked={generatePrescription}
                            onChange={() => {
                              if (roles.includes("Doctor")) {
                                setGeneratePrescription(!generatePrescription);
                              }
                            }}
                          />{" "}
                          {act.label}
                          <br />
                        </Fragment>
                      ))}
                    </Col>
                  </Row>
                </>
              )}

              {roles.includes("Doctor") && (
                <div style={{ marginTop: 40 }}>
                  <h1 style={{ marginBottom: 0 }}>Dr treatments</h1>
                  <Card style={{ padding: 0 }}>
                    <Card.Body style={{ margin: 0, padding: 0 }}>
                      <Row style={{ paddingRight: 20 }}>
                        <Col
                          lg={12}
                          style={{
                            marginBottom: "100px",
                            marginTop: 20,
                            paddingLeft: 18,
                          }}
                        >
                          {(roles.includes("Doctor") ||
                            roles.includes("Administrator")) && (
                            <>
                              <Form.Group className="form-group">
                                <Form.Label>Select Treatment</Form.Label>
                                <Select
                                  isMulti
                                  className="basic-single"
                                  styles={selectStyles}
                                  options={treatments}
                                  value={treatment}
                                  onChange={(e) => {
                                    setTreatment(e);
                                    addTreatment(e);
                                  }}
                                  classNamePrefix="Select2"
                                  placeholder="Select..."
                                  required
                                />
                              </Form.Group>

                              {treatment.length > 0 ? (
                                treatment.map((s) => <p>&#9679; {s.label}</p>)
                              ) : (
                                <p>No treatment yet...</p>
                              )}
                            </>
                          )}
                        </Col>

                        {/* {!isNoteSaved ? (
                          <Col md={6} xl={6} style={{ marginTop: 20 }}>
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
                        ) : (
                          <Col md={6} xl={6} style={{ marginTop: 20 }}>
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
                        )} */}
                      </Row>
                    </Card.Body>
                  </Card>
                </div>
              )}

              {(roles.includes("Nurse") ||
                roles.includes("Doctor") ||
                roles.includes("Administrator")) &&
                tab === "tab1" && (
                  <Col
                    md={12}
                    xl={12}
                    style={{ marginTop: 40, minHeight: 150 }}
                  >
                    <h1 style={{ marginBottom: 0 }}>Medical Acts</h1>
                    <Select
                      isMulti
                      className="basic-single"
                      options={acts}
                      value={medicalActs}
                      onChange={(e) => setMedicalActs(e)}
                      classNamePrefix="Select2"
                      placeholder="Select..."
                      menuPortalTarget={document.body} // Ensures the menu is rendered outside of its container
                      required
                    />

                    {medicalActs.length > 0 ? (
                      medicalActs.map((s) => <p>&#9679; {s.label}</p>)
                    ) : (
                      <p>No act yet...</p>
                    )}
                  </Col>
                )}

              {(roles.includes("Doctor") ||
                roles.includes("Nurse") ||
                roles.includes("Administrator")) &&
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
                        value={Math.round(
                          (insuranceAmount * parseInt(invoice?.ticket)) / 100
                        )}
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
                          value={Math.round(topUpAmount)}
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
                        value={Math.round(
                          parseFloat(invoice?.totalAmount) -
                            parseFloat(insuranceAmount) +
                            parseFloat(
                              (insuranceAmount * parseInt(invoice?.ticket)) /
                                100
                            )
                        )}
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
                      onChange={(e) => handlePaymentModeChange(e)}
                      classNamePrefix="Select2"
                      isMulti
                      className="multi-select"
                      required
                    />
                  </Form.Group>
                  {paymentMode.length > 1 && (
                    <div>
                      {paymentMode.map((mode) => (
                        <Form.Group className="form-group" key={mode.value}>
                          <Form.Label>{mode.label} Amount</Form.Label>
                          <Form.Control
                            type="number"
                            value={amounts[mode.value] || ""}
                            onChange={(e) => handleAmountChange(e, mode.value)}
                            placeholder={`Enter ${mode.label} amount`}
                          />
                        </Form.Group>
                      ))}
                    </div>
                  )}
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

      <Modal show={show7} onHide={() => setShow7(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter refraction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Sphere</h2>
                <Form.Check
                  key={"Plano"}
                  type="checkbox"
                  style={{ textAlign: "center" }}
                  label={"Plano"}
                  onChange={() => handleChange("sphere", "Plano", button)}
                  checked={
                    (button === "first"
                      ? firstButtonValues
                      : secondButtonValues
                    ).sphere === "Plano"
                  }
                />
                <Row>
                  <Col
                    style={{
                      borderRightColor: "black",
                      borderRightWidth: 0.3,
                      borderRightStyle: "solid",
                    }}
                  >
                    {sphereArray.slice(0, 80).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "right" }}
                        label={value}
                        onChange={() => handleChange("sphere", value, button)}
                        checked={
                          (button === "first"
                            ? firstButtonValues
                            : secondButtonValues
                          ).sphere === value
                        }
                      />
                    ))}
                  </Col>
                  <Col
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {sphereArray.slice(80, 180).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "left" }}
                        label={value}
                        onChange={() => handleChange("sphere", value, button)}
                        checked={
                          (button === "first"
                            ? firstButtonValues
                            : secondButtonValues
                          ).sphere === value
                        }
                      />
                    ))}
                  </Col>
                </Row>
              </Col>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Cylinder</h2>
                {cylinderArray.map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    style={{ textAlign: "center" }}
                    label={value}
                    onChange={() => handleChange("cylinder", value, button)}
                    checked={
                      (button === "first"
                        ? firstButtonValues
                        : secondButtonValues
                      ).cylinder === value
                    }
                  />
                ))}
              </Col>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Axis</h2>
                <Row>
                  <Col
                    style={{
                      borderRightColor: "black",
                      borderRightWidth: 0.3,
                      borderRightStyle: "solid",
                    }}
                  >
                    {axisArray.slice(0, 91).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "right" }}
                        label={value}
                        onChange={() => handleChange("axis", value, button)}
                        checked={
                          (button === "first"
                            ? firstButtonValues
                            : secondButtonValues
                          ).axis === value
                        }
                      />
                    ))}
                  </Col>
                  <Col>
                    {axisArray.slice(91, 181).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "left" }}
                        label={value}
                        onChange={() => handleChange("axis", value, button)}
                        checked={
                          (button === "first"
                            ? firstButtonValues
                            : secondButtonValues
                          ).axis === value
                        }
                      />
                    ))}
                  </Col>
                </Row>
              </Col>

              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>VA</h2>
                {vaArray.map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    label={value}
                    style={{ textAlign: "center" }}
                    onChange={() => handleChange("va", value, button)}
                    checked={
                      (button === "first"
                        ? firstButtonValues
                        : secondButtonValues
                      ).va === value
                    }
                  />
                ))}
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow7(false)}>
            Validate
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show8} onHide={() => setShow8(false)}>
        <Modal.Header closeButton>
          <Modal.Title>All previous visits</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {previousVisits2.length > 0 &&
            previousVisits2.map((visit) => (
              <Visit visitId={null} visit={visit} />
            ))}
          <Pagination
            currentPage={currentPage2}
            totalItems={totalRows2 ? totalRows2 : previousVisits2.length}
            itemsPerPage={1}
            onPageChange={handlePageChange}
          />
        </Modal.Body>
      </Modal>

      <Modal show={show9} onHide={() => setShow9(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter optometrist refraction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Sphere</h2>
                <Form.Check
                  key={"Plano"}
                  type="checkbox"
                  style={{ textAlign: "center" }}
                  label={"Plano"}
                  onChange={() => handleChange2("sphere", "Plano", button)}
                  checked={
                    (button === "first"
                      ? optFirstButtonValues
                      : optSecondButtonValues
                    ).sphere === "Plano"
                  }
                />
                <Row>
                  <Col
                    style={{
                      borderRightColor: "black",
                      borderRightWidth: 0.3,
                      borderRightStyle: "solid",
                    }}
                  >
                    {sphereArray.slice(0, 80).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "right" }}
                        label={value}
                        onChange={() => handleChange2("sphere", value, button)}
                        checked={
                          (button === "first"
                            ? optFirstButtonValues
                            : optSecondButtonValues
                          ).sphere === value
                        }
                      />
                    ))}
                  </Col>
                  <Col
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {sphereArray.slice(80, 180).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "left" }}
                        label={value}
                        onChange={() => handleChange2("sphere", value, button)}
                        checked={
                          (button === "first"
                            ? optFirstButtonValues
                            : optSecondButtonValues
                          ).sphere === value
                        }
                      />
                    ))}
                  </Col>
                </Row>
              </Col>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Cylinder</h2>
                {cylinderArray.map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    style={{ textAlign: "center" }}
                    label={value}
                    onChange={() => handleChange2("cylinder", value, button)}
                    checked={
                      (button === "first"
                        ? optFirstButtonValues
                        : optSecondButtonValues
                      ).cylinder === value
                    }
                  />
                ))}
              </Col>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Axis</h2>
                <Row>
                  <Col
                    style={{
                      borderRightColor: "black",
                      borderRightWidth: 0.3,
                      borderRightStyle: "solid",
                    }}
                  >
                    {axisArray.slice(0, 91).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "right" }}
                        label={value}
                        onChange={() => handleChange2("axis", value, button)}
                        checked={
                          (button === "first"
                            ? optFirstButtonValues
                            : optSecondButtonValues
                          ).axis === value
                        }
                      />
                    ))}
                  </Col>
                  <Col>
                    {axisArray.slice(91, 181).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "left" }}
                        label={value}
                        onChange={() => handleChange2("axis", value, button)}
                        checked={
                          (button === "first"
                            ? optFirstButtonValues
                            : optSecondButtonValues
                          ).axis === value
                        }
                      />
                    ))}
                  </Col>
                </Row>
              </Col>

              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>VA</h2>
                {vaArray.map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    label={value}
                    style={{ textAlign: "center" }}
                    onChange={() => handleChange2("va", value, button)}
                    checked={
                      (button === "first"
                        ? optFirstButtonValues
                        : optSecondButtonValues
                      ).va === value
                    }
                  />
                ))}
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow9(false)}>
            Validate
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show10} onHide={() => setShow10(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter current glasses info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Sphere</h2>
                <Form.Check
                  key={"Plano"}
                  type="checkbox"
                  style={{ textAlign: "center" }}
                  label={"Plano"}
                  onChange={() => handleChange3("sphere", "Plano", button)}
                  checked={
                    (button === "first"
                      ? curFirstButtonValues
                      : curSecondButtonValues
                    ).sphere === "Plano"
                  }
                />
                <Row>
                  <Col
                    style={{
                      borderRightColor: "black",
                      borderRightWidth: 0.3,
                      borderRightStyle: "solid",
                    }}
                  >
                    {sphereArray.slice(0, 80).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "right" }}
                        label={value}
                        onChange={() => handleChange3("sphere", value, button)}
                        checked={
                          (button === "first"
                            ? curFirstButtonValues
                            : curSecondButtonValues
                          ).sphere === value
                        }
                      />
                    ))}
                  </Col>
                  <Col
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {sphereArray.slice(80, 180).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "left" }}
                        label={value}
                        onChange={() => handleChange3("sphere", value, button)}
                        checked={
                          (button === "first"
                            ? curFirstButtonValues
                            : curSecondButtonValues
                          ).sphere === value
                        }
                      />
                    ))}
                  </Col>
                </Row>
              </Col>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Cylinder</h2>
                {cylinderArray.map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    style={{ textAlign: "center" }}
                    label={value}
                    onChange={() => handleChange3("cylinder", value, button)}
                    checked={
                      (button === "first"
                        ? curFirstButtonValues
                        : curSecondButtonValues
                      ).cylinder === value
                    }
                  />
                ))}
              </Col>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Axis</h2>
                <Row>
                  <Col
                    style={{
                      borderRightColor: "black",
                      borderRightWidth: 0.3,
                      borderRightStyle: "solid",
                    }}
                  >
                    {axisArray.slice(0, 91).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "right" }}
                        label={value}
                        onChange={() => handleChange3("axis", value, button)}
                        checked={
                          (button === "first"
                            ? curFirstButtonValues
                            : curSecondButtonValues
                          ).axis === value
                        }
                      />
                    ))}
                  </Col>
                  <Col>
                    {axisArray.slice(91, 181).map((value) => (
                      <Form.Check
                        key={value}
                        type="checkbox"
                        style={{ textAlign: "left" }}
                        label={value}
                        onChange={() => handleChange3("axis", value, button)}
                        checked={
                          (button === "first"
                            ? curFirstButtonValues
                            : curSecondButtonValues
                          ).axis === value
                        }
                      />
                    ))}
                  </Col>
                </Row>
              </Col>
              <Col md={3}>
                <h2 style={{ textAlign: "center" }}>Addition</h2>
                {additionsArray.map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    label={value}
                    style={{ textAlign: "center" }}
                    onChange={() => handleChange3("addition", value, button)}
                    checked={
                      (button === "first"
                        ? curFirstButtonValues
                        : curSecondButtonValues
                      ).addition === value
                    }
                  />
                ))}
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow10(false)}>
            Validate
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show11} onHide={() => setShow11(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select addition</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Col>
              <Col md={12}>
                <h2 style={{ textAlign: "center" }}>Addition</h2>
                {additionsArray.map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    label={value}
                    style={{ textAlign: "center" }}
                    onChange={() => {
                      if (refType === "doctor") {
                        handleInputChange2(value, "Addition", "addition");
                      } else {
                        handleInputChange3(value, "Addition", "addition");
                      }
                    }}
                    // checked={}
                  />
                ))}
              </Col>
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow11(false)}>
            Validate
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show12} onHide={() => setShow12(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Select Visual Acuity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Col>
              <Col md={12}>
                <h2 style={{ textAlign: "center" }}>VA</h2>
                {vaArray.map((value) => (
                  <Form.Check
                    key={value}
                    type="checkbox"
                    label={value}
                    style={{ textAlign: "center" }}
                    onChange={() => {
                      if (vaEye === "Right Eye") {
                        handleInputChange(value, vaEye, vaType);
                      } else {
                        handleInputChange(value, vaEye, vaType);
                      }
                    }}
                    checked={
                      vaEye === "Right Eye"
                        ? visualAcuity[0][vaType] === value
                        : visualAcuity[1][vaType] === value
                    }
                  />
                ))}
              </Col>
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow12(false)}>
            Validate
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
