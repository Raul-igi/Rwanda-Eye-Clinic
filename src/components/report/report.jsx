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
  // {
  //   name: "Actions",
  //   cell: (row) => (
  //     <Link
  //       to="/visit-details"
  //       state={{
  //         data:{
  //           patient:row.patient,
  //           doctor:`${row.doctor.firstName} ${row.doctor.lastName}`,
  //           createdAt:row.createdAt,
  //           visitId:row.id,
  //           visitStatus:row.status
  //         }
  //       }}
  //     >
  //       View Details
  //     </Link>
  //   ),
  // },
];

import DataTable from "react-data-table-component";
function Report() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const [loading, setLoading] = useState(false);


  const [reportType, setReportType] = useState({ value: "DATE_RANGE", label: "Date range" });
  const [date, setDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reports, setReports] = useState([]);
  const [insurances, setInsurances] = useState([]);
  const [insurance, setInsurance] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  const handleSubmit = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);
    const postObj = JSON.stringify({
      patientId: patientId, // modify body properties
      patientInsuranceId: patientInsuranceId || null,
      visitType: visitType,
      caseType: caseType,
      doctorId: doctorId,
    });
    console.log(postObj);
    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`,
    };
    axios
      .post(`http://www.ubuzima.rw/rec/visit`, postObj) //declare api Path
      .then((res) => {
        console.log(res.data);
        setShow(false);
        if (res.data.status === true) {
          alert("Visit added successfully");
          fetchVisits();
        } else {
          alert("something went wrong");
        }
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };


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

      const reports_ = response.data.response.map((el) => {
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

      setReports(reports_);
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  const reset = () => {
    setReportType({ value: "DATE_RANGE", label: "Date range" });
    setDoctor('');
    setInsurance('');
    setStartDate('');
    setEndDate('');
    setDate('');
  }

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const fetchReports = async () => {
    let my_token = localStorage.getItem("token");
    let url;
    let config;

    if (reportType.value === "DATE_RANGE") {
      config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
          startDate: startDate,
          endDate: endDate,
        },
      };
      url = `http://www.ubuzima.rw/rec/report/range`;
    }
    if (reportType.value === "INSURANCE_RANGE") {
      config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
          startDate: startDate,
          endDate: endDate,
          insuranceId: insurance.value,
        },
      };
      url = `http://www.ubuzima.rw/rec/report/insurance-range`;
    }
    if (reportType.value === "INSURANCE_DATE") {
      config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
          selectedDate: date,
          insuranceId: insurance.value,
        },
      };
      url = `http://www.ubuzima.rw/rec/report/insurance-date`;
    }
    if (reportType.value === "DOCTOR_RANGE") {
      config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
          startDate: startDate,
          endDate: endDate,
          doctorId: doctor.value,
        },
      };
      url = `http://www.ubuzima.rw/rec/report/doctor-range`;
    }
    if (reportType.value === "DOCTOR_DATE") {
      config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
          selectedDate: date,
          doctorId: doctor.value,
        },
      };
      url = `http://www.ubuzima.rw/rec/report/doctor-date`;
    }
    if (reportType.value === "DATE") {
      config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
          selectedDate: date,
        },
      };
      url = `http://www.ubuzima.rw/rec/report/date`;
    }

    try {
      const response = await axios.get(url, config);
      const reports_ = response.data.response.map((el) => {
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

      setReports(reports_);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  useEffect(() => {
    fetchInsurances();
    fetchAllDoctors();
    fetchDailyReport();
  }, []);

  return (
    <div style={{minHeight:'50vh'}}>
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
                        { value: "DATE_RANGE", label: "Date range" },
                        {
                          value: "INSURANCE_RANGE",
                          label: "Insurance date range",
                        },
                        { value: "INSURANCE_DATE", label: "Insurance date" },
                        { value: "DOCTOR_RANGE", label: "Doctor date range" },
                        { value: "DOCTOR_DATE", label: "Doctor date" },
                        { value: "DATE", label: "By date" },
                      ]}
                      onChange={(e) => setReportType(e)}
                      value={reportType}
                      classNamePrefix="Select2"
                      placeholder="Filter by"
                      required
                    />
                  </Form.Group>
                </Col>

                {(reportType.value === "INSURANCE_RANGE" ||
                  reportType.value === "INSURANCE_DATE") && (
                  <Col lg={2}>
                    <Form.Group className="form-group">
                      <Select
                        className="basic-single"
                        options={insurances}
                        onChange={(e) => setInsurance(e)}
                        value={insurance}
                        classNamePrefix="Select2"
                        placeholder="Select insurance"
                        required
                      />
                    </Form.Group>
                  </Col>
                )}

                {(reportType.value === "DOCTOR_RANGE" ||
                  reportType.value === "DOCTOR_DATE") && (
                  <Col lg={2}>
                    <Form.Group className="form-group">
                      <Select
                        className="basic-single"
                        options={doctors}
                        onChange={(e) => setDoctor(e)}
                        value={doctor}
                        classNamePrefix="Select2"
                        placeholder="Select doctor"
                        required
                      />
                    </Form.Group>
                  </Col>
                )}

                {(reportType.value === "DATE_RANGE" ||
                  reportType.value === "INSURANCE_RANGE" ||
                  reportType.value === "DOCTOR_RANGE") && (
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
                  </>
                )}

                {(reportType.value === "INSURANCE_DATE" ||
                  reportType.value === "DOCTOR_DATE" ||
                  reportType.value === "DATE") && (
                  <Col lg={2}>
                    <Form.Group className="form-group">
                      <Form.Control
                        type="date"
                        className="form-control"
                        name="example-text-input"
                        placeholder="Select date"
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                )}

                <Col>
                  <Button variant="primary" onClick={fetchReports}>
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
              <DataTable columns={columns} data={reports} pagination />
            </Card.Body>
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
