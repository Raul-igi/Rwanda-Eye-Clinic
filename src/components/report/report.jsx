import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Button, Form, Modal } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import * as XLSX  from "xlsx";
import { ECaseType, EVisitType } from "../../data/elementsdata";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import "./report.css";

const columns = [
  {
    name: "Date",
    selector: (row) => [row.paymentDate],
    sortable: true,
  },
  {
    name: "Names",
    selector: (row) => [row.patient?.names],
    sortable: true,
  },
  {
    name: "Insurance",
    selector: (row) => [row.insurance],
    sortable: true,
  },
  {
    name: "Card number",
    selector: (row) => [row.patientInsurance?.cardNumber],
    sortable: true,
  },
  {
    name: "Total Amount",
    selector: (row) => [row.totalAmount],
    sortable: true,
  },
  {
    name: "Copay",
    selector: (row) => [row.amount],
    sortable: true,
  },
  {
    name: "Insurance Amount",
    selector: (row) => [row.insuranceAmount],
    sortable: true,
  },
];

const columns2 = [
  {
    name: "Payment method",
    selector: (row) => [row.name],
    sortable: true,
  },
  {
    name: "Total amount",
    selector: (row) => [row.total],
    sortable: true,
  },
];

const columns3 = [
  {
    name: "Insurance",
    selector: (row) => [row.insurance],
    sortable: true,
  },
  {
    name: "No Of Cases",
    selector: (row) => [row.numOfCases],
    sortable: true,
  },
  {
    name: "Total Amount",
    selector: (row) => [Math.round(row.totalAmount)],
    sortable: true,
  },
  {
    name: "Insurance Amount",
    selector: (row) => [Math.round(row.insuranceAmount)],
    sortable: true,
  },
  {
    name: "Patient Amount",
    selector: (row) => [Math.round(row.patientAmount)],
    sortable: true,
  },
  // {
  //   name: "Payment Date",
  //   selector: (row) => [row.paymentDate],
  //   sortable: true,
  // },
  {
    name: "Top Up Amount",
    selector: (row) => [Math.round(row.topUpAmount)],
    sortable: true,
  },
  {
    name: "Paid Amount",
    selector: (row) => [Math.round(row.patientAmount)],
    sortable: true,
  },
];

const columns4 = [
  {
    name: "Date",
    selector: (row) => [row.paymentDate],
    sortable: true,
  },
  {
    name: "Voucher ID",
    selector: (row) => [row.voucherNumber || "N/A"],
    sortable: true,
  },
  {
    name: "Card ID",
    selector: (row) => [row.patientInsurance?.cardNumber],
    sortable: true,
  },
  {
    name: "Age/DOB",
    selector: (row) => [row.patient?.dob],
    sortable: true,
  },
  {
    name: "Beneficiary's name",
    selector: (row) => [
      row.patientInsurance?.membershipType === "DEPENDENT"
        ? row.patient?.names
        : "N/A",
    ],
    sortable: true,
  },
  {
    name: "Affiliate's name",
    selector: (row) => [
      row.patientInsurance?.membershipType === "PRINCIPAL"
        ? row.patient?.names
        : row.patientInsurance?.principalNames || "N/A",
    ],
    sortable: true,
  },
  {
    name: "Consultation",
    selector: (row) => [
      row.acts?.length > 0
        ? row.acts[0]?.insurerAmount + row.acts[0]?.patientAmount
        : 0,
    ],
    sortable: true,
  },
  {
    name: "ORA",
    selector: (row) => ["N/A"],
    sortable: true,
  },
  {
    name: "AGI",
    selector: (row) => ["N/A"],
    sortable: true,
  },
  {
    name: "ALI",
    selector: (row) => ["N/A"],
    sortable: true,
  },
  {
    name: "Procedures",
    selector: (row) => [
      row.acts?.length > 0
        ? row.acts[1]?.insurerAmount + row.acts[1]?.patientAmount
        : 0,
    ],
    sortable: true,
  },
  {
    name: "Total 100%",
    selector: (row) => [row.totalAmount || 0],
    sortable: true,
  },
  {
    name: "Total 85%",
    selector: (row) => [Math.round(row.totalAmount * 0.85)],
    sortable: true,
  },
];

const columns5 = [
  {
    name: "Customer",
    selector: (row) => [row.patient?.names],
    sortable: true,
  },
  {
    name: "Card Number",
    selector: (row) => [row.patientInsurance?.cardNumber],
    sortable: true,
  },
  {
    name: "Prescription ID",
    selector: (row) => [row.voucherNumber || "N/A"],
    sortable: true,
  },
  {
    name: "Consultation",
    selector: (row) => [
      row.acts?.length > 0
        ? row.acts[0]?.insurerAmount + row.acts[0]?.patientAmount
        : 0,
    ],
    sortable: true,
  },
  {
    name: "Procedures",
    selector: (row) => [
      row.acts?.length > 0
        ? row.acts[1]?.insurerAmount + row.acts[1]?.patientAmount
        : 0,
    ],
    sortable: true,
  },
  {
    name: "Total amount",
    selector: (row) => [row.totalAmount],
    sortable: true,
  },
  {
    name: "Total insurance cover",
    selector: (row) => [row.totalAmount * 0.85],
    sortable: true,
  },
  {
    name: "Date",
    selector: (row) => [row.paymentDate],
    sortable: true,
  },
];

import DataTable from "react-data-table-component";
function Report() {
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  function groupByInsurance(data) {
    return data.reduce((acc, current) => {
      const insuranceName = current.patientInsurance.insuranceName; // Access the insurance name
      let existingInsurance = acc.find(
        (item) => item.insurance === insuranceName
      );

      if (existingInsurance) {
        existingInsurance.numOfCases += 1;
        existingInsurance.totalAmount += current.totalAmount || 0;
        existingInsurance.insuranceAmount += current.insuranceAmount || 0;
        existingInsurance.patientAmount += current.amount || 0; // Patient amount is from 'amount'
        existingInsurance.topUpAmount += current.topUpAmount || 0;
      } else {
        acc.push({
          insurance: insuranceName,
          numOfCases: 1,
          totalAmount: current.totalAmount || 0,
          insuranceAmount: current.insuranceAmount || 0,
          patientAmount: current.amount || 0, // Patient amount is from 'amount'
          topUpAmount: current.topUpAmount || 0,
        });
      }

      return acc;
    }, []);
  }

  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);
  const [reportType, setReportType] = useState({
    value: "CASH",
    label: "Cash",
  });
  const [roles, setRoles] = useState([]);
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  const [reports, setReports] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const [insurance, setInsurance] = useState("");
  const [paymentTotals, setPaymentTotals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [total, setTotal] = useState(0);
  const [totalPaidAmount, setTotalPaidAmount] = useState(0);
  const [totalTopUpAmount, setTotalTopUpAmount] = useState(0);
  const [totalInsuranceAmount, setTotalInsuranceAmount] = useState(0);

  const [show, setShow] = useState(false);

  const fetchAllDoctors = async () => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
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
      setDoctors(allDoctors_);
    } catch (error) {
      console.error(error);

      console.log(response.data);
    }
  };

  const generateExcel = (reports, reportType, insurance) => {
    const wsData = [];

    // Select headers and data based on reportType and insurance label
    if (reportType?.value === "INSURANCE" && insurance.label === "RSSB") {
      // Headers for RSSB
      wsData.push([
        "Date",
        "Voucher ID",
        "Card ID",
        "Age/DOB",
        "Beneficiary's Name",
        "Affiliate's Name",
        "Consultation",
        "ORA",
        "AGI",
        "ALI",
        "Procedures",
        "Total 100%",
        "Total 85%",
      ]);

      // Data for RSSB
      reports.forEach((report) => {
        wsData.push([
          report.paymentDate,
          report.voucherNumber || "N/A",
          report.patientInsurance?.cardNumber || "N/A",
          report.patient?.dob || "N/A",
          report.patientInsurance?.membershipType === "DEPENDENT"
            ? report.patient?.names
            : "N/A",
          report.patientInsurance?.membershipType === "PRINCIPAL"
            ? report.patient?.names
            : report.patientInsurance?.principalNames || "N/A",
          report.acts?.length > 0
            ? report.acts[0]?.insurerAmount + report.acts[0]?.patientAmount
            : 0,
          "N/A",
          "N/A",
          "N/A",
          report.acts?.length > 0
            ? report.acts[1]?.insurerAmount + report.acts[1]?.patientAmount
            : 0,
          report.totalAmount || 0,
          Math.round(report.totalAmount * 0.85),
        ]);
      });
    } else if (reportType?.value === "INSURANCE" && insurance.label === "MMI") {
      // Headers for MMI
      wsData.push([
        "Customer",
        "Card Number",
        "Prescription ID",
        "Consultation",
        "Procedures",
        "Total amount",
        "Total insurance cover",
        "Date",
      ]);

      // Data for MMI
      reports.forEach((report) => {
        wsData.push([
          report.patient?.names || "N/A",
          report.patientInsurance?.cardNumber || "N/A",
          report.voucherNumber || "N/A",
          report.acts?.length > 0
            ? report.acts[0]?.insurerAmount + report.acts[0]?.patientAmount
            : 0,
          report.acts?.length > 1
            ? report.acts[1]?.insurerAmount + report.acts[1]?.patientAmount
            : 0,
          report.totalAmount || 0,
          report.totalAmount * 0.85,
          report.paymentDate || "N/A",
        ]);
      });
    } else if (reportType?.value === "INSURANCE") {
      // Headers for other insurance types
      wsData.push([
        "Dates",
        "Names",
        "Insurance",
        "Card number",
        "Total amount",
        "Copay",
        "Insurance",
      ]);

      // Data for other insurance types
      reports.forEach((report) => {
        wsData.push([
          report.paymentDate || "N/A",
          report.patient?.names || "N/A",
          report.insurance || "N/A",
          report.patientInsurance?.cardNumber || "N/A",
          report.totalAmount || 0,
          report.amount || 0,
          report.insuranceAmount || 0,
        ]);
      });
    } else {
      // Headers for non-insurance reports
      wsData.push([
        "Insurance",
        "No Of Cases",
        "Insurance Amount",
        "Patient Amount",
        "Top Up Amount",
        "Paid Amount",
      ]);

      // Data for non-insurance reports
      reports.forEach((report) => {
        wsData.push([
          report.insurance || "N/A",
          report.numOfCases || 0,
          Math.round(report.insuranceAmount || 0),
          Math.round(report.patientAmount || 0),
          Math.round(report.topUpAmount || 0),
          Math.round(report.patientAmount || 0),
        ]);
      });
    }

    // Create workbook and worksheet
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");

    // Export to Excel
    XLSX.writeFile(wb, "report.xlsx");
  };

  const fetchInsurances = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/patient/insurances`,
        config
      );
      if (response.data.response.length > 0) {
        response.data.response.forEach((el) => {
          el.insuranceAmount = el.totalAmount - el.amount;
        });
      }
      const insurances_ = response.data.response.map((el) => {
        return {
          label: el.name,
          value: el.id,
        };
      });
      setInsurances(insurances_);
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  const fetchDailyReport = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        selectedDate: formatDate(new Date()),
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/report/date`,
        config
      );

      if (response.data.response.length > 0) {
        response.data.response.forEach((el) => {
          el.insuranceAmount = el.totalAmount - el.amount;
        });
      }

      var paymentTotals = {
        CASH: 0,
        MOMO: 0,
        POS: 0,
      };

      let totalPaidAmount = 0;
      let totalTopUpAmount = 0;
      let totalInsuranceAmount = 0;

      response.data.response.map((el) => {
        var paidAmount_ = parseFloat(el.amount) || 0;
        var topUpAmount_ = parseFloat(el.topUpAmount) || 0;
        var insuranceAmount_ = parseFloat(el.insuranceAmount) || 0;

        totalPaidAmount += paidAmount_;
        totalTopUpAmount += topUpAmount_;
        totalInsuranceAmount += insuranceAmount_;

        setTotalPaidAmount(totalPaidAmount);
        setTotalTopUpAmount(totalTopUpAmount);
        setTotalInsuranceAmount(totalInsuranceAmount);

        const paymentMethod = el.paymentMode || "CASH"; // Assuming 'Cash' as the default if paymentMethod is null
        const topUpAmount = el.topUpAmount || 0;
        const totalAmount = el.amount;

        if (paymentTotals[paymentMethod] !== undefined) {
          paymentTotals[paymentMethod] = Math.round(
            paymentTotals[paymentMethod] + totalAmount
          );
        } else {
          paymentTotals[paymentMethod] = totalAmount;
        }
      });

      setReports(groupByInsurance(response.data.response));

      const paymentTotalsArray = Object.entries(paymentTotals).map(
        ([name, total]) => ({
          name,
          total,
        })
      );

      setPaymentTotals(paymentTotalsArray);
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  const reset = () => {
    setReportType({ value: "CASH", label: "Cash" });
    setDoctor("");
    setInsurance("");
    setStartDate("");
    setEndDate("");
    setDate("");
    fetchReports({ value: "CASH", label: "Cash" }, null, null, true);
  };

  const fetchReports = async (
    rep = null,
    doc = null,
    ins = null,
    resetDates = false
  ) => {
    if ((rep || reportType)?.value === "DOCTOR" && !(doc || doctor)?.value) {
      alert("Select doctor first!");
    } else if (
      (rep || reportType)?.value === "INSURANCE" &&
      !(ins || insurance)?.value
    ) {
      alert("Select insurance first!");
    } else {
      let my_token = localStorage.getItem("token");
      let url;
      let config;
      console.log((rep || reportType)?.value);
      if ((rep || reportType)?.value === "CASH") {
        config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${my_token}`,
            startDate: resetDates
              ? formatDate(new Date())
              : startDate || formatDate(new Date()),
            endDate: resetDates
              ? formatDate(new Date())
              : endDate || formatDate(new Date()),
          },
        };
        url = `http://www.ubuzima.rw/rec/report/range`;
      }
      if ((rep || reportType)?.value === "INSURANCE") {
        config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${my_token}`,
            startDate: resetDates
              ? formatDate(new Date())
              : startDate || formatDate(new Date()),
            endDate: resetDates
              ? formatDate(new Date())
              : endDate || formatDate(new Date()),
            insuranceId: (ins || insurance)?.value,
          },
        };
        url = `http://www.ubuzima.rw/rec/report/insurance-range`;
      }
      if ((rep || reportType)?.value === "DOCTOR") {
        config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${my_token}`,
            startDate: resetDates
              ? formatDate(new Date())
              : startDate || formatDate(new Date()),
            endDate: resetDates
              ? formatDate(new Date())
              : endDate || formatDate(new Date()),
            doctorId: (doc || doctor)?.value,
          },
        };
        url = `http://www.ubuzima.rw/rec/report/doctor-range`;
      }

      try {
        const response = await axios.get(url, config);
        if (response.data.response.length > 0) {
          response.data.response.forEach((el) => {
            el.insuranceAmount = el.totalAmount - el.amount;
          });
        }
        const paymentTotals = {
          CASH: 0,
          MOMO: 0,
          POS: 0,
        };

        let totalAmount2 = 0;
        let totalPaidAmount = 0;
        let totalTopUpAmount = 0;
        let totalInsuranceAmount = 0;

        const reports_ = response.data.response.map((el) => {
          const totalAmount_ = parseFloat(el.totalAmount) || 0;
          const paidAmount_ = parseFloat(el.amount) || 0;
          const topUpAmount_ = parseFloat(el.topUpAmount) || 0;
          const insuranceAmount_ = parseFloat(el.insuranceAmount) || 0;

          totalAmount2 += totalAmount_;
          totalPaidAmount += paidAmount_;
          totalTopUpAmount += topUpAmount_;
          totalInsuranceAmount += insuranceAmount_;

          setTotal(totalAmount2);
          setTotalPaidAmount(totalPaidAmount);
          setTotalTopUpAmount(totalTopUpAmount);
          setTotalInsuranceAmount(totalInsuranceAmount);

          const paymentMethod = el.paymentMode || "CASH"; // Assuming 'Cash' as the default if paymentMethod is null
          const topUpAmount = el.topUpAmount || 0;
          const totalAmount = el.amount;

          if (paymentTotals[paymentMethod] !== undefined) {
            paymentTotals[paymentMethod] = Math.round(
              paymentTotals[paymentMethod] + totalAmount
            );
          } else {
            paymentTotals[paymentMethod] = totalAmount;
          }
          return {
            ...el,
            doctorNames: `${el.doctor?.firstName} ${el.doctor?.lastName}`,
            doctorPhone: el.doctor?.phoneNumber,
            paymentMethod: el.paymentMethod,
            paidAmaount: el.amount,
            paymentDate: el.paymentDate,
            insurance: el.patientInsurance.insuranceName,
            topUpAmount: el.topUpAmount || 0,
          };
        });

        if ((rep || reportType)?.value !== "INSURANCE") {
          setReports(groupByInsurance(response.data.response));
        } else {
          setReports(reports_);
        }

        const paymentTotalsArray = Object.entries(paymentTotals).map(
          ([name, total]) => ({
            name,
            total,
          })
        );

        setPaymentTotals(paymentTotalsArray);
      } catch (error) {
        console.error("Error fetching payrolls:", error);
      }
    }
  };

  const PDFDocument = ({ reports }) => (
    <Document>
      {reportType?.value === "INSURANCE" && insurance.label === "RSSB" && (
        <Page style={styles.page}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Date</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Voucher ID</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Card ID</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Age/DOB</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Beneficiary's name</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Affiliate's name</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Consultation</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>ORA</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>AGI</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>ALI</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Procedures</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Total 100%</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Total 85%</Text>
              </View>
            </View>
            {reports.map((report, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>{report.paymentDate}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.voucherNumber || "N/A"}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.patientInsurance?.cardNumber}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>{report.patient?.dob}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.patientInsurance?.membershipType === "DEPENDENT"
                      ? report.patient?.names
                      : "N/A"}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.patientInsurance?.membershipType === "PRINCIPAL"
                      ? report.patient?.names
                      : report.patientInsurance?.principalNames || "N/A"}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.acts?.length > 0
                      ? report.acts[0]?.insurerAmount +
                        report.acts[0]?.patientAmount
                      : 0}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>N/A</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>N/A</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>N/A</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.acts?.length > 0
                      ? report.acts[1]?.insurerAmount +
                        report.acts[1]?.patientAmount
                      : 0}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>{report.totalAmount || 0}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {Math.round(report.totalAmount * 0.85)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </Page>
      )}
      {reportType?.value === "INSURANCE" && insurance.label === "MMI" && (
        <Page style={styles.page}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Customer</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Card Number</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Prescription ID</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Consultation</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Procedures</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Total amount</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Total insurance cover</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Date</Text>
              </View>
            </View>
            {reports.map((report, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>{report.patient?.names}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.patientInsurance?.cardNumber}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.voucherNumber || "N/A"}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.acts?.length > 0
                      ? report.acts[0]?.insurerAmount +
                        report.acts[0]?.patientAmount
                      : 0}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.acts?.length > 0
                      ? report.acts[1]?.insurerAmount +
                        report.acts[1]?.patientAmount
                      : 0}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>{report.totalAmount}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {report.totalAmount * 0.85}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>{report.paymentDate}</Text>
                </View>
              </View>
            ))}
          </View>
        </Page>
      )}

      {reportType?.value === "INSURANCE" &&
        insurance.label !== "RSSB" &&
        insurance.label !== "MMI" && (
          <Page style={styles.page}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <View style={styles.tableHeader}>
                  <Text style={styles.heading}>Dates</Text>
                </View>
                <View style={styles.tableHeader}>
                  <Text style={styles.heading}>Names</Text>
                </View>
                <View style={styles.tableHeader}>
                  <Text style={styles.heading}>Insurance</Text>
                </View>
                <View style={styles.tableHeader}>
                  <Text style={styles.heading}>Card number</Text>
                </View>
                <View style={styles.tableHeader}>
                  <Text style={styles.heading}>Total amount</Text>
                </View>
                <View style={styles.tableHeader}>
                  <Text style={styles.heading}>Copay</Text>
                </View>
                <View style={styles.tableHeader}>
                  <Text style={styles.heading}>Insurance</Text>
                </View>
              </View>
              {reports.map((report, index) => (
                <View key={index} style={styles.tableRow}>
                  <View style={styles.tableCell}>
                    <Text style={styles.heading}>{report.paymentDate}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.heading}>{report.patient?.names}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.heading}>{report.insurance}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.heading}>
                      {report.patientInsurance?.cardNumber}
                    </Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.heading}>{report.totalAmount}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.heading}>{report.amount}</Text>
                  </View>
                  <View style={styles.tableCell}>
                    <Text style={styles.heading}>{report.insuranceAmount}</Text>
                  </View>
                </View>
              ))}
            </View>
          </Page>
        )}

      {reportType?.value !== "INSURANCE" && (
        <Page style={styles.page}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Insurance</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>No Of Cases</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Insurance Amount</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Patient Amount</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Top Up Amount</Text>
              </View>
              <View style={styles.tableHeader}>
                <Text style={styles.heading}>Paid Amount</Text>
              </View>
            </View>
            {reports.map((report, index) => (
              <View key={index} style={styles.tableRow}>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>{report.insurance}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>{report.numOfCases}</Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {Math.round(report.insuranceAmount)}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {Math.round(report.patientAmount)}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {Math.round(report.topUpAmount)}
                  </Text>
                </View>
                <View style={styles.tableCell}>
                  <Text style={styles.heading}>
                    {Math.round(report.patientAmount)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </Page>
      )}
    </Document>
  );

  useEffect(() => {
    const roles_ = localStorage.getItem("role");
    const userRoles = JSON.parse(roles_);
    setRoles(userRoles);
    fetchInsurances();
    fetchAllDoctors();
    fetchDailyReport();
  }, []);

  return (
    <div style={{ minHeight: "50vh" }}>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Report</Card.Title>
              <Row style={{ width: "90%" }}>
                <Col lg={2}>
                  <Form.Group className="form-group">
                    <Select
                      className="basic-single"
                      options={[
                        { value: "INSURANCE", label: "Insurance" },
                        { value: "DOCTOR", label: "Doctor" },
                        { value: "CASH", label: "Cash" },
                      ]}
                      onChange={(e) => {
                        setReportType(e);
                        setReports([]);
                        setEndDate("");
                        setStartDate("");
                        setDoctor("");
                        setInsurance("");
                        if (e.value === "CASH") {
                          fetchReports(e, null, null, true);
                        }
                      }}
                      value={reportType}
                      classNamePrefix="Select2"
                      placeholder="Filter by"
                      required
                    />
                  </Form.Group>
                </Col>

                {reportType.value === "INSURANCE" && (
                  <Col lg={2}>
                    <Form.Group className="form-group">
                      <Select
                        className="basic-single"
                        options={insurances}
                        onChange={(e) => {
                          setInsurance(e);
                          fetchReports(null, null, e, true);
                        }}
                        value={insurance}
                        classNamePrefix="Select2"
                        placeholder="Select insurance"
                        required
                      />
                    </Form.Group>
                  </Col>
                )}

                {reportType.value === "DOCTOR" && (
                  <Col lg={2}>
                    <Form.Group className="form-group">
                      <Select
                        className="basic-single"
                        options={doctors}
                        onChange={(e) => {
                          setDoctor(e);
                          fetchReports(null, e, null, true);
                        }}
                        value={doctor}
                        classNamePrefix="Select2"
                        placeholder="Select doctor"
                        required
                      />
                    </Form.Group>
                  </Col>
                )}

                {!roles.includes("Receptionist") && (
                  <>
                    <Col lg={2}>
                      <Form.Group>
                        <Form.Control
                          type="date"
                          className="form-control"
                          name="example-text-input"
                          placeholder="Start Date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={2}>
                      <Form.Group>
                        <Form.Control
                          type="date"
                          className="form-control"
                          name="example-text-input"
                          placeholder="End Date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Button
                        variant="primary"
                        onClick={() => {
                          fetchReports(null, null, null, false);
                        }}
                      >
                        Filter
                      </Button>
                    </Col>

                    <Col>
                      <Button variant="primary" onClick={reset}>
                        Reset
                      </Button>
                    </Col>
                  </>
                )}

                <Col>
                  {reports.length > 0 && (
                    <div>
                      <button
                        onClick={() =>
                          generateExcel(reports, reportType, insurance)
                        }
                        className="btn btn-primary"
                      >
                        download
                      </button>
                    </div>
                  )}
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              {reports.length > 0 && (
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    Total Amount: {Math.round(total)} Rwf
                  </p>

                  <p style={{ fontWeight: "bold" }}>
                    Total Paid Amount: {Math.round(totalPaidAmount)} Rwf
                  </p>

                  <p style={{ fontWeight: "bold" }}>
                    Total insurance amount: {Math.round(totalInsuranceAmount)}{" "}
                    Rwf
                  </p>

                  <p style={{ fontWeight: "bold" }}>
                    Total top-up amount: {Math.round(totalTopUpAmount)} Rwf
                  </p>
                </div>
              )}
              {reportType?.value === "INSURANCE" ? (
                <DataTable
                  columns={
                    insurance.label === "RSSB"
                      ? columns4
                      : insurance.label === "MMI"
                      ? columns5
                      : columns
                  }
                  data={reports}
                  pagination
                />
              ) : (
                <DataTable columns={columns3} data={reports} pagination />
              )}
            </Card.Body>

            {reports.length > 0 && (
              <Card.Body>
                <DataTable columns={columns2} data={paymentTotals} />
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableRow: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
  },
  tableHeader: {
    width: 100,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    padding: 5,
  },
  tableCell: {
    width: 100,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    padding: 5,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 10,
  },
});

export default Report;
