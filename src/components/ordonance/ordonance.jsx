import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import axios from "axios";
import DataTable from "react-data-table-component";
import OrdonanceData from "./ordonanceData";

function Ordonance() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const [ordonances, setOrdonances] = useState();
  const [ordonances_, setOrdonances_] = useState();
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState();
  const [users_, setUsers_] = useState();
  const [show3, setShow3] = useState(false);
  const [visitId, setVisitId] = useState("");
  const [date, setDate] = useState("");
  const [names, setNames] = useState("");

  const columns = [
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
      name: "Insurance",
      selector: (row) => [row.patientInsurance?.insuranceName || "-"],
      sortable: true,
    },
    {
      name: "Case Type",
      selector: (row) => [row.caseType],
      sortable: true,
    },
    {
      name: "Visit Type",
      selector: (row) => [row.visitType],
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div
          onClick={() => {
            setShow3(true);
            setVisitId(row.id);
            setDate(row.createdAt);
            setNames(row.patient?.names);
          }}
          style={{ color: "#2D6CC5", cursor: "pointer" }}
        >
          View Ordonance
        </div>
      ),
    },
  ];

  const fetchOrdonances = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        isPrescriptionCompleted: "false",
        page: currentPage,
        size: 10,
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/visit/optic`,
        config
      );
      console.log(response.data);
      setOrdonances(response.data.response.patientVisits);
      setOrdonances_(response.data.response.patientVisits);
    } catch (error) {
      console.error("Error fetching payrolls:", error);
    }
  };

  useEffect(() => {
    fetchOrdonances();
  }, [currentPage]);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>Ordonances</Card.Title>
            </Card.Header>
            <Card.Body>
              <DataTable
                columns={columns}
                data={ordonances}
                onChangePage={(page) => setCurrentPage(page)}
                pagination
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={show3} onHide={() => setShow3(false)}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Ordonance</Modal.Title>
          </Modal.Header>
          <Card.Body>
            <Card.Body>
              {(visitId&&names&&date)&&(
                <OrdonanceData visitId={visitId} date={date} names={names} />
              )}
            </Card.Body>
          </Card.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow3(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default Ordonance;
