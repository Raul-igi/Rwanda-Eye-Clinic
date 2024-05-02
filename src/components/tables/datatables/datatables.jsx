import React, { Fragment } from 'react'
import { Card, Col, Row, Table } from 'react-bootstrap'
import Pageheader from '../../../layouts/pageheader/pageheader'
import { DataTabless, ExportCSV, ResponsiveDataTable } from './data/responsivedatatable'



export default function DataTables() {
  const breadcrumbs = [""];
  return (
    <Fragment>

      <Pageheader items={breadcrumbs} />

     


      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>File Export</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive table-page Export-datatable">
             {/* <button 
             style={{
              background:'#467FCF',
              border:'0px solid #467FCF',
              height:'35px',
              borderRadius:'5px',
              alignItems:'right',
              color:'white'
              }}>Add new Patient
              </button> */}

                <ExportCSV />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      



    </Fragment>
  )
}
