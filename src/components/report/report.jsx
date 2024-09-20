import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Button, Form, Modal } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
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
    name: "Doctor names",
    selector: (row) => [row.doctorNames],
    sortable: true,
  },
  {
    name: "Doctor Phone ",
    selector: (row) => [row.doctorPhone],
    sortable: true,
  },
  {
    name: "Payment Method",
    selector: (row) => [row.paymentMethod],
    sortable: true,
  },
  {
    name: "Paid Amaount",
    selector: (row) => [row.paidAmaount],
    sortable: true,
  },
  {
    name: "Payment Date",
    selector: (row) => [row.paymentDate],
    sortable: true,
  },
  {
    name: "Insurance",
    selector: (row) => [row.insurance],
    sortable: true,
  },
  {
    name: "Top Up Amount",
    selector: (row) => [row.topUpAmount],
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
  }
]

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
    name: "Insurance Amount",
    selector: (row) => [row.insuranceAmount],
    sortable: true,
  },
  {
    name: "Patient Amount",
    selector: (row) => [row.patientAmount],
    sortable: true,
  },
  // {
  //   name: "Payment Date",
  //   selector: (row) => [row.paymentDate],
  //   sortable: true,
  // },
  {
    name: "Top Up Amount",
    selector: (row) => [row.topUpAmount],
    sortable: true,
  },
  {
    name: "Paid Amount",
    selector: (row) => [row.patientAmount],
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
      const insuranceName = current.insurance.name; // Access the insurance name
      let existingInsurance = acc.find(item => item.insurance === insuranceName);

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
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));
  const [reports, setReports] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const [insurance, setInsurance] = useState("");
  const [paymentTotals, setPaymentTotals] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [totalPaidAmount, setTotalPaidAmount] = useState(0);
  const [totalTopUpAmount, setTotalTopUpAmount] = useState(0);

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
        
      // const reports_ = response.data.response.map((el) => {
      //   return {
      //     doctorNames: `${el.doctor?.firstName} ${el.doctor?.lastName}`,
      //     doctorPhone: el.doctor?.phoneNumber,
      //     paymentMethod: el.paymentMethod,
      //     paidAmaount: el.amount,
      //     paymentDate: el.paymentDate,
      //     insurance: el.insurance.name,
      //     topUpAmount: el.topUpAmount || 0,
      //   };
      // });

      setReports(groupByInsurance(response.data.response));
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
    fetchReports({ value: "CASH", label: "Cash" },null,null,true);
  };

  const fetchReports = async (rep = null, doc = null, ins = null, resetDates = false) => {
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
            startDate: resetDates?formatDate(new Date()) :( startDate || formatDate(new Date())),
            endDate: resetDates?formatDate(new Date()) :( endDate || formatDate(new Date())),
          },
        };
        url = `http://www.ubuzima.rw/rec/report/range`;
      }
      if ((rep || reportType)?.value === "INSURANCE") {
        config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${my_token}`,
            startDate: resetDates?formatDate(new Date()) :( startDate || formatDate(new Date())),
            endDate: resetDates?formatDate(new Date()) :( endDate || formatDate(new Date())),
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
            startDate: resetDates?formatDate(new Date()) :( startDate || formatDate(new Date())),
            endDate: resetDates?formatDate(new Date()) :( endDate || formatDate(new Date())),
            doctorId: (doc || doctor)?.value,
          },
        };
        url = `http://www.ubuzima.rw/rec/report/doctor-range`;
      }

      try {
        const response = await axios.get(url, config);
        const paymentTotals = {
          Cash: 0,
          MOMO: 0,
          POS: 0,
        };

        let totalPaidAmount = 0;
        let totalTopUpAmount = 0;

        console.log(JSON.stringify(response.data.response))
        
        const reports_ = response.data.response.map((el) => {

          const paidAmount_ = parseFloat(el.amount) || 0;
          const topUpAmount_ = parseFloat(el.topUpAmount) || 0;

          totalPaidAmount += paidAmount_;
          totalTopUpAmount += topUpAmount_;
          
          setTotalPaidAmount(totalPaidAmount)
          setTotalTopUpAmount(totalTopUpAmount)

          const paymentMethod = el.paymentMode || 'Cash'; // Assuming 'Cash' as the default if paymentMethod is null
          const topUpAmount = el.topUpAmount || 0;
          const totalAmount = el.amount;

          if (paymentTotals[paymentMethod] !== undefined) {
            paymentTotals[paymentMethod] = Math.round(paymentTotals[paymentMethod] + totalAmount);
          } else {
            paymentTotals[paymentMethod] = totalAmount;
          }
          return {
            doctorNames: `${el.doctor?.firstName} ${el.doctor?.lastName}`,
            doctorPhone: el.doctor?.phoneNumber,
            paymentMethod: el.paymentMethod,
            paidAmaount: el.amount,
            paymentDate: el.paymentDate,
            insurance: el.insurance.name,
            topUpAmount: el.topUpAmount || 0,
          };
        });

        if ((rep || reportType)?.value !== "INSURANCE"){
          setReports(groupByInsurance(response.data.response))
        }else{
          setReports(reports_);
        }
        
        const paymentTotalsArray = Object.entries(paymentTotals).map(([name, total]) => ({
          name,
          total,
        }));


        setPaymentTotals(paymentTotalsArray)
      } catch (error) {
        console.error("Error fetching payrolls:", error);
      }
    }
  };

  useEffect(() => {
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
                        setReports([])
                        setEndDate("");
                        setStartDate("");
                        setDoctor("");
                        setInsurance("");
                        if (e.value === "CASH") {
                          fetchReports(e, null, null,true);
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
                          fetchReports(null, null, e,true);
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
                          fetchReports(null,e,null,true);
                        }}
                        value={doctor}
                        classNamePrefix="Select2"
                        placeholder="Select doctor"
                        required
                      />
                    </Form.Group>
                  </Col>
                )}

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
                      fetchReports(null, null, null,false);
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

                <Col>
                  <div>
                    {reports.length > 0 ? (
                      <PDFDownloadLink
                        document={<PDFDocument reports={reports} />}
                        fileName="data.pdf"
                      >
                        {({ blob, url, loading, error }) =>
                          loading ? (
                            "Loading document..."
                          ) : (
                            <Button>Download PDF</Button>
                          )
                        }
                      </PDFDownloadLink>
                    ) : (
                      <p></p>
                    )}
                  </div>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              {reports.length>0&&(
                <div>
                  <p style={{fontWeight:'bold'}}>
                    Total Amount: {totalPaidAmount} Rwf
                  </p>

                  <p style={{fontWeight:'bold'}}>
                    Total insurance amount: {totalPaidAmount-totalTopUpAmount} Rwf
                  </p>

                  <p style={{fontWeight:'bold'}}>
                    Total top-up amount: {totalTopUpAmount} Rwf
                  </p>
                </div>
              )}
              {reportType?.value === "INSURANCE" ? (
                <DataTable columns={columns} data={reports} pagination />
              ) : (<DataTable columns={columns3} data={reports} pagination />) }
            </Card.Body>

            {reports.length>0&&(
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

const PDFDocument = ({ reports }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableHeader}>
            <Text style={styles.heading}>Doctor Name</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.heading}>Doctor Phone</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.heading}>Payment Method</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.heading}>Paid Amount</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.heading}>Payment Date</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.heading}>Insurance</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.heading}>Top-Up Amount</Text>
          </View>
        </View>
        {reports.map((report, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.tableCell}>
              <Text style={styles.heading}>{report.doctorNames}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.heading}>{report.doctorPhone}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.heading}>{report.paymentMethod}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.heading}>{report.paidAmaount}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.heading}>{report.paymentDate}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.heading}>{report.insurance}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.heading}>{report.topUpAmount}</Text>
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

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
