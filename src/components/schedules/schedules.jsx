import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, Col, Row, Button, Form, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import axios from "axios";

import DataTable from "react-data-table-component";





function Schedules() {
  //useState must be declared between the function and  return   //creating useState is the first step
  const location = useLocation()
  const [loading, setLoading] = useState(false);
  const [updatingWindow, setUpdatingWindow] = useState("");
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [schedules, setSchedules] = useState();

  const [mondayAvailability, setMondayAvailability] = useState(false);
  const [tuesdayAvailability, setTuesdayAvailability] = useState(false);
  const [wednesdayAvailability, setWednesdayAvailability] = useState(false);
  const [thursdayAvailability, setThursdayAvailability] = useState(false);
  const [fridayAvailability, setFridayAvailability] = useState(false);
  const [saturdayAvailability, setSaturdayAvailability] = useState(false);
  const [sundayAvailability, setSundayAvailability] = useState(false);

  const [mondayWindows, setMondayWindows] = useState([{ start: null, end: null }]);
  const [tuesdayWindows, setTuesdayWindows] = useState([{ start: null, end: null }]);
  const [wednesdayWindows, setWednesdayWindows] = useState([{ start: null, end: null }]);
  const [thursdayWindows, setThursdayWindows] = useState([{ start: null, end: null }]);
  const [fridayWindows, setFridayWindows] = useState([{ start: null, end: null }]);
  const [saturdayWindows, setSaturdayWindows] = useState([{ start: null, end: null }]);
  const [sundayWindows, setSundayWindows] = useState([{ start: null, end: null }]);
  const [updateWindows, setUpdateWindows] = useState([]);

  const prepopulateWindows = (windows) => {
    const newWindows = windows? windows.map(w=>{
      const start = new Date();
      start.setHours(w.startingTime.split(':')[0]);
      start.setMinutes(w.startingTime.split(':')[1]);
      start.setSeconds(0);
      const end = new Date();
      end.setHours(w.endingTime.split(':')[0]);
      end.setMinutes(w.endingTime.split(':')[1]);
      end.setSeconds(0);
      return({start:start,end:end})
    }):[]
    setUpdateWindows(newWindows)
  }

  const columns = [
    {
      name: "Day",
      selector: (row) => [row.day],
      sortable: true,
    },
    {
      name: "Availability",
      selector: (row) => [row.windows?.length>0?'Available':'Not available'],
      sortable: true,
    },
    {
      name: "Windows",
      selector: (row) => [row.windows?.length>0?row.windows.map(w=> `${w.startingTime?.slice(0,5)} to ${w.endingTime?.slice(0,5)}`).join(' | '):'-'],
      sortable: true,
    },
    // {
    //   name: "Actions",
    //   cell: (row) => (
    //       <div onClick={()=>{prepopulateWindows(row.windows);setShow2(true);setUpdatingWindow(row.day)}} style={{color:'blue',cursor:'pointer'}}>
    //       Update {row.day}'s schedule
    //     </div>
    //   ),
    // },
  
  ];

  const calculateSlots = (startDate, endDate) => {
    // Convert the dates to timestamps
    const startTimestamp = new Date(startDate).getTime();
    const endTimestamp = new Date(endDate).getTime();

    // Calculate the difference in milliseconds
    const difference = endTimestamp - startTimestamp;

    // Calculate the number of slots (each slot represents 15 minutes)
    const slots = Math.floor(difference / (15 * 60 * 1000));

    return slots;
}

  const mondayToggled = ()=>{
    setMondayAvailability(!mondayAvailability)
  }

  const tuesdayToggled = ()=>{
    setTuesdayAvailability(!tuesdayAvailability)
  }

  const wednesdayToggled = ()=>{
    setWednesdayAvailability(!wednesdayAvailability)
  }

  const thursdayToggled = ()=>{
    setThursdayAvailability(!thursdayAvailability)
  }

  const fridayToggled = ()=>{
    setFridayAvailability(!fridayAvailability)
  }

  const saturdayToggled = ()=>{
    setSaturdayAvailability(!saturdayAvailability)
  }

  const sundayToggled = ()=>{
    setSundayAvailability(!sundayAvailability)
  }

  const addMondayWindow = () => {
    const newWindows = [...mondayWindows];
    newWindows.push({ start: null, end: null });
    setMondayWindows(newWindows);
  };

  const removeMondayWindow = (index) => {
    const newWindows = [...mondayWindows];
    newWindows.splice(index, 1);
    setMondayWindows(newWindows);
  };

  const handleMondayStartTime = (index, date) => {
    const newWindows = [...mondayWindows];
    newWindows[index].start = date;
    setMondayWindows(newWindows);
  };

  const handleMondayEndTime = (index, date) => {
    const newWindows = [...mondayWindows];
    newWindows[index].end = date;
    setMondayWindows(newWindows);
  };


  const addUpdateWindow = () => {
    const newWindows = [...updateWindows];
    newWindows.push({ start: null, end: null });
    setUpdateWindows(newWindows);
  };

  const removeUpdateWindow = (index) => {
    const newWindows = [...updateWindows];
    newWindows.splice(index, 1);
    setUpdateWindows(newWindows);
  };

  const handleUpdateStartTime = (index, date) => {
    const newWindows = [...UpdateWindows];
    newWindows[index].start = date;
    setUpdateWindows(newWindows);
  };

  const handleUpdateEndTime = (index, date) => {
    const newWindows = [...updateWindows];
    newWindows[index].end = date;
    setUpdateWindows(newWindows);
  };

  const addTuesdayWindow = () => {
    const newWindows = [...tuesdayWindows];
    newWindows.push({ start: null, end: null });
    setTuesdayWindows(newWindows);
  };

  const removeTuesdayWindow = (index) => {
    const newWindows = [...tuesdayWindows];
    newWindows.splice(index, 1);
    setTuesdayWindows(newWindows);
  };

  const handleTuesdayStartTime = (index, date) => {
    const newWindows = [...tuesdayWindows];
    newWindows[index].start = date;
    setTuesdayWindows(newWindows);
  };

  const handleTuesdayEndTime = (index, date) => {
    const newWindows = [...tuesdayWindows];
    newWindows[index].end = date;
    setTuesdayWindows(newWindows);
  };

  const addWednesdayWindow = () => {
    const newWindows = [...wednesdayWindows];
    newWindows.push({ start: null, end: null });
    setWednesdayWindows(newWindows);
  };

  const removeWednesdayWindow = (index) => {
    const newWindows = [...wednesdayWindows];
    newWindows.splice(index, 1);
    setWednesdayWindows(newWindows);
  };

  const handleWednesdayStartTime = (index, date) => {
    const newWindows = [...wednesdayWindows];
    newWindows[index].start = date;
    setWednesdayWindows(newWindows);
  };

  const handleWednesdayEndTime = (index, date) => {
    const newWindows = [...wednesdayWindows];
    newWindows[index].end = date;
    setWednesdayWindows(newWindows);
  };

  const addThursdayWindow = () => {
    const newWindows = [...thursdayWindows];
    newWindows.push({ start: null, end: null });
    setThursdayWindows(newWindows);
  };

  const removeThursdayWindow = (index) => {
    const newWindows = [...thursdayWindows];
    newWindows.splice(index, 1);
    setThursdayWindows(newWindows);
  };

  const handleThursdayStartTime = (index, date) => {
    const newWindows = [...thursdayWindows];
    newWindows[index].start = date;
    setThursdayWindows(newWindows);
  };

  const handleThursdayEndTime = (index, date) => {
    const newWindows = [...thursdayWindows];
    newWindows[index].end = date;
    setThursdayWindows(newWindows);
  };

  const addFridayWindow = () => {
    const newWindows = [...fridayWindows];
    newWindows.push({ start: null, end: null });
    setFridayWindows(newWindows);
  };

  const removeFridayWindow = (index) => {
    const newWindows = [...fridayWindows];
    newWindows.splice(index, 1);
    setFridayWindows(newWindows);
  };

  const handleFridayStartTime = (index, date) => {
    const newWindows = [...fridayWindows];
    newWindows[index].start = date;
    setFridayWindows(newWindows);
  };

  const handleFridayEndTime = (index, date) => {
    const newWindows = [...fridayWindows];
    newWindows[index].end = date;
    setFridayWindows(newWindows);
  };

  const addSaturdayWindow = () => {
    const newWindows = [...saturdayWindows];
    newWindows.push({ start: null, end: null });
    setSaturdayWindows(newWindows);
  };

  const removeSaturdayWindow = (index) => {
    const newWindows = [...saturdayWindows];
    newWindows.splice(index, 1);
    setSaturdayWindows(newWindows);
  };

  const handleSaturdayStartTime = (index, date) => {
    const newWindows = [...saturdayWindows];
    newWindows[index].start = date;
    setSaturdayWindows(newWindows);
  };

  const handleSaturdayEndTime = (index, date) => {
    const newWindows = [...saturdayWindows];
    newWindows[index].end = date;
    setSaturdayWindows(newWindows);
  };

  const addSundayWindow = () => {
    const newWindows = [...sundayWindows];
    newWindows.push({ start: null, end: null });
    setSundayWindows(newWindows);
  };

  const removeSundayWindow = (index) => {
    const newWindows = [...sundayWindows];
    newWindows.splice(index, 1);
    setSundayWindows(newWindows);
  };

  const handleSundayStartTime = (index, date) => {
    const newWindows = [...sundayWindows];
    newWindows[index].start = date;
    setSundayWindows(newWindows);
  };

  const handleSundayEndTime = (index, date) => {
    const newWindows = [...sundayWindows];
    newWindows[index].end = date;
    setSundayWindows(newWindows);
  };

  const formatToTime = (isoString) => {
    // Parse the ISO date string into a Date object
    const date = new Date(isoString);
    
    // Extract hours and minutes
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    
    // Return the formatted time in hh:mm format
    return `${hours}:${minutes}`;
  }

  function getDateTimeFromTimeString(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    const today = new Date();
    today.setHours(hours, minutes, 0, 0);
    return today;
  }

  const handleClose = () => setShow(false);
  const handleShow = () => {
    var mondaySchedule = schedules.find(s=>s.day==='Monday');
    var tuesdaySchedule = schedules.find(s=>s.day==='Tuesday');
    var wednesdaySchedule = schedules.find(s=>s.day==='Wednesday');
    var thursdaySchedule = schedules.find(s=>s.day==='Thursday');
    var fridaySchedule = schedules.find(s=>s.day==='Friday');
    var saturdaySchedule = schedules.find(s=>s.day==='Saturday');
    var sundaySchedule = schedules.find(s=>s.day==='Sunday');
    setMondayAvailability(mondaySchedule?.windows?.length>0)
    setMondayWindows(mondaySchedule?.windows?.map(w=>({start:getDateTimeFromTimeString(w.startingTime.slice(0,5)),end:getDateTimeFromTimeString(w.endingTime.slice(0,5))}))||[])
    setTuesdayAvailability(tuesdaySchedule?.windows?.length>0)
    setTuesdayWindows(tuesdaySchedule?.windows?.map(w=>({start:getDateTimeFromTimeString(w.startingTime.slice(0,5)),end:getDateTimeFromTimeString(w.endingTime.slice(0,5))}))||[])
    setWednesdayAvailability(wednesdaySchedule?.windows?.length>0)
    setWednesdayWindows(wednesdaySchedule?.windows?.map(w=>({start:getDateTimeFromTimeString(w.startingTime.slice(0,5)),end:getDateTimeFromTimeString(w.endingTime.slice(0,5))}))||[])
    setThursdayAvailability(thursdaySchedule?.windows?.length>0)
    setThursdayWindows(thursdaySchedule?.windows?.map(w=>({start:getDateTimeFromTimeString(w.startingTime.slice(0,5)),end:getDateTimeFromTimeString(w.endingTime.slice(0,5))}))||[])
    setFridayAvailability(fridaySchedule?.windows?.length>0)
    setFridayWindows(fridaySchedule?.windows?.map(w=>({start:getDateTimeFromTimeString(w.startingTime.slice(0,5)),end:getDateTimeFromTimeString(w.endingTime.slice(0,5))}))||[])
    setSaturdayAvailability(saturdaySchedule?.windows?.length>0)
    setSaturdayWindows(saturdaySchedule?.windows?.map(w=>({start:getDateTimeFromTimeString(w.startingTime.slice(0,5)),end:getDateTimeFromTimeString(w.endingTime.slice(0,5))}))||[])
    setSundayAvailability(sundaySchedule?.windows?.length>0)
    setSundayWindows(sundaySchedule?.windows?.map(w=>({start:getDateTimeFromTimeString(w.startingTime.slice(0,5)),end:getDateTimeFromTimeString(w.endingTime.slice(0,5))}))||[])
    setShow(true)
  };

  const updateSchedule = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);

    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`
    };
    
    // axios
    //   .post(`http://www.ubuzima.rw/rec/schedule`,postObj) //declare api Path
    //   .then((res) => {
    //     setShow(false);
    //     if (res.data.status === true) {
    //       alert("Department Added successfully");
    //       fetchSchedules();
    //     } else {
    //       alert("something went wrong");
    //     }
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     setShow(false);
    //     console.log(error.message);
    //   });
  };

  const handleSubmit = async (e) => {
    //handle submit is the second step
    e.preventDefault();
    setLoading(true);

    let my_token = await localStorage.getItem("token");
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${my_token}`
    };
    const postObj = JSON.stringify({
        "schedules": [
          {
            "day": "Monday",
            "windows": mondayAvailability? mondayWindows.map(window=>{return({
                from:formatToTime(window.start),
                to:formatToTime(window.end),
                slots:calculateSlots(window.start,window.end)
            })}):[]
          },
          {
            "day": "Tuesday",
            "windows": tuesdayAvailability? tuesdayWindows.map(window=>{return({
                from:formatToTime(window.start),
                to:formatToTime(window.end),
                slots:calculateSlots(window.start,window.end)
            })}):[]
          },
          {
            "day": "Wednesday",
            "windows": wednesdayAvailability? wednesdayWindows.map(window=>{return({
                from:formatToTime(window.start),
                to:formatToTime(window.end),
                slots:calculateSlots(window.start,window.end)
            })}):[]
          },
          {
            "day": "Thursday",
            "windows": thursdayAvailability? thursdayWindows.map(window=>{return({
                from:formatToTime(window.start),
                to:formatToTime(window.end),
                slots:calculateSlots(window.start,window.end)
            })}):[]
          },
          {
            "day": "Friday",
            "windows": fridayAvailability? fridayWindows.map(window=>{return({
                from:formatToTime(window.start),
                to:formatToTime(window.end),
                slots:calculateSlots(window.start,window.end)
            })}):[]
          },
          {
            "day": "Saturday",
            "windows": saturdayAvailability? saturdayWindows.map(window=>{return({
                from:formatToTime(window.start),
                to:formatToTime(window.end),
                slots:calculateSlots(window.start,window.end)
            })}):[]
          },
          {
            "day": "Sunday",
            "windows": sundayAvailability? sundayWindows.map(window=>{return({
                from:formatToTime(window.start),
                to:formatToTime(window.end),
                slots:calculateSlots(window.start,window.end)
            })}):[]
          }
        ],
        "doctorId": location.state.data.doctor.id
      })
      console.log(JSON.stringify(postObj))
    axios
      .post(`http://www.ubuzima.rw/rec/schedule`,postObj) //declare api Path
      .then((res) => {
        setShow(false);
        if (res.data.status === true) {
          alert("Schedule Added successfully");
          fetchSchedules();
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        setLoading(false);
        setShow(false);
        console.log(error.message);
      });
  };

  const fetchSchedules = async () => {
    let my_token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "doctorId":location.state.data.doctor.id
      },
    };

    try {
      const response = await axios.get(
        `http://www.ubuzima.rw/rec/schedule`,
        config
      );
      setSchedules(response.data.response);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <div>
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <Card.Title>{location.state?.data?.doctor?.firstName}'s Schedules</Card.Title>
              <Row>
                <Col>
                  <Button variant="primary" onClick={handleShow}>
                    Add new Schedule
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <DataTable columns={columns} data={schedules} pagination />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Add doctor's schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Form.Group className="form-group form-elements m-0">
                <div className="custom-controls-stacked">
                  <Form.Check
                    onChange={(e) => {mondayToggled()}}
                    checked={mondayAvailability}
                    type="checkbox"
                    label="Monday"
                    value={'Monday'}
                  />
                  {mondayAvailability?(
                  <>
                  {mondayWindows?.map((window, index) => (
                    <Row key={index} style={{marginTop:8}}>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.start}
                              onChange={(date) =>
                                handleMondayStartTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="Start Time"
                              dateFormat="HH:mm"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.end}
                              onChange={(date) =>
                                handleMondayEndTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="End Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <Button onClick={() => removeMondayWindow(index)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <div
                    style={{ color: "#0096c7", cursor: "pointer",margin:10 }}
                    onClick={addMondayWindow}
                  >
                    + Add Window
                  </div>
                  </>
                  ):(<p>Unavailable</p>)}
                  <div
                    style={{
                      borderBottom: "0.3px solid gray",
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  />
                  <Form.Check
                    onChange={(e) => tuesdayToggled()}
                    checked={tuesdayAvailability}
                    type="checkbox"
                    label="Tuesday"
                  />
                  {tuesdayAvailability?(
                  <>
                  {tuesdayWindows?.map((window, index) => (
                    <Row key={index} style={{marginTop:8}}>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.start}
                              onChange={(date) =>
                                handleTuesdayStartTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="Start Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.end}
                              onChange={(date) =>
                                handleTuesdayEndTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="End Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <Button onClick={() => removeTuesdayWindow(index)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <div
                    style={{ color: "#0096c7", cursor: "pointer",margin:10 }}
                    onClick={addTuesdayWindow}
                  >
                    + Add Window
                  </div>
                  </>
                  ):(<p>Unavailable</p>)}
                  <div
                    style={{
                      borderBottom: "0.3px solid gray",
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  />
                  <Form.Check
                    onChange={(e) => wednesdayToggled()}
                    checked={wednesdayAvailability}
                    type="checkbox"
                    label="Wednesday"
                  />
                  {wednesdayAvailability?(
                  <>
                  {wednesdayWindows?.map((window, index) => (
                    <Row key={index} style={{marginTop:8}}>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.start}
                              onChange={(date) =>
                                handleWednesdayStartTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="Start Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.end}
                              onChange={(date) =>
                                handleWednesdayEndTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="End Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <Button onClick={() => removeWednesdayWindow(index)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <div
                    style={{ color: "#0096c7", cursor: "pointer",margin:10 }}
                    onClick={addWednesdayWindow}
                  >
                    + Add Window
                  </div>
                  </>
                  ):(<p>Unavailable</p>)}
                  <div
                    style={{
                      borderBottom: "0.3px solid gray",
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  />
                  <Form.Check
                    onChange={(e) => thursdayToggled()}
                    checked={thursdayAvailability}
                    type="checkbox"
                    label="Thursday"
                  />
                  {thursdayAvailability?(
                  <>
                  {thursdayWindows?.map((window, index) => (
                    <Row key={index} style={{marginTop:8}}>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.start}
                              onChange={(date) =>
                                handleThursdayStartTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="Start Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.end}
                              onChange={(date) =>
                                handleThursdayEndTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="End Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <Button onClick={() => removeThursdayWindow(index)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <div
                    style={{ color: "#0096c7", cursor: "pointer",margin:10 }}
                    onClick={addThursdayWindow}
                  >
                    + Add Window
                  </div>
                  </>
                  ):(<p>Unavailable</p>)}
                  <div
                    style={{
                      borderBottom: "0.3px solid gray",
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  />
                  <Form.Check
                    onChange={(e) => fridayToggled()}
                    checked={fridayAvailability}
                    type="checkbox"
                    label="Friday"
                  />
                  {fridayAvailability?(
                  <>
                  {fridayWindows?.map((window, index) => (
                    <Row key={index} style={{marginTop:8}}>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.start}
                              onChange={(date) =>
                                handleFridayStartTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="Start Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.end}
                              onChange={(date) =>
                                handleFridayEndTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="End Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <Button onClick={() => removeFridayWindow(index)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <div
                    style={{ color: "#0096c7", cursor: "pointer",margin:10 }}
                    onClick={addFridayWindow}
                  >
                    + Add Window
                  </div>
                  </>
                  ):(<p>Unavailable</p>)}
                  <div
                    style={{
                      borderBottom: "0.3px solid gray",
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  />
                  <Form.Check
                    onChange={(e) => saturdayToggled()}
                    checked={saturdayAvailability}
                    type="checkbox"
                    label="Saturday"
                  />
                  {saturdayAvailability?(
                  <>
                  {saturdayWindows?.map((window, index) => (
                    <Row key={index} style={{marginTop:8}}>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.start}
                              onChange={(date) =>
                                handleSaturdayStartTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="Start Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.end}
                              onChange={(date) =>
                                handleSaturdayEndTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="End Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <Button onClick={() => removeSaturdayWindow(index)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <div
                    style={{ color: "#0096c7", cursor: "pointer",margin:10 }}
                    onClick={addSaturdayWindow}
                  >
                    + Add Window
                  </div>
                  </>
                  ):(<p>Unavailable</p>)}
                  <div
                    style={{
                      borderBottom: "0.3px solid gray",
                      marginTop: 15,
                      marginBottom: 15,
                    }}
                  />
                  <Form.Check
                    onChange={(e) => sundayToggled()}
                    checked={sundayAvailability}
                    type="checkbox"
                    label="Sunday"
                  />
                  {sundayAvailability?(
                  <>
                  {sundayWindows?.map((window, index) => (
                    <Row key={index} style={{marginTop:8}}>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.start}
                              onChange={(date) =>
                                handleSundayStartTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="Start Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.end}
                              onChange={(date) =>
                                handleSundayEndTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText="End Time"
                              dateFormat="h:mm aa"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <Button onClick={() => removeSundayWindow(index)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <div
                    style={{ color: "#0096c7", cursor: "pointer",margin:10 }}
                    onClick={addSundayWindow}
                  >
                    + Add Window
                  </div>
                  </>
                  ):(<p>Unavailable</p>)}
                </div>
              </Form.Group>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <Modal show={show2} onHide={()=>setShow2(false)}>
      <Modal.Header closeButton>
            <Modal.Title>Update {updatingWindow}'s schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
      {updateWindows.length>0?(
                  <>
                  {updateWindows.map((window, index) => (
                    <Row key={index} style={{marginTop:8}}>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.start}
                              onChange={(date) =>
                                handleUpdateStartTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText={window.start}
                              dateFormat="HH:mm"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="input-group time-limit">
                          <div className="input-group-text">
                            <i className="typcn typcn-stopwatch tx-24 lh--9 op-6"></i>
                          </div>
                          <div>
                            <DatePicker
                              selected={window.end}
                              onChange={(date) =>
                                handleUpdateEndTime(index, date)
                              }
                              showTimeSelect
                              showTimeSelectOnly
                              timeIntervals={15}
                              timeCaption="Time"
                              placeholderText={window.end}
                              dateFormat="HH:mm"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <Button onClick={() => removeUpdateWindow(index)}>
                          Remove
                        </Button>
                      </Col>
                    </Row>
                  ))}
                  <div
                    style={{ color: "#0096c7", cursor: "pointer",margin:10 }}
                    onClick={addUpdateWindow}
                  >
                    + Add Window
                  </div>
                  </>
                  ):(
                  <div>
                    <p>Unavailable</p>
                  <div
                    style={{ color: "#0096c7", cursor: "pointer",margin:10 }}
                    onClick={addUpdateWindow}
                  >
                    + Add Window
                  </div>
                  </div>
                  )}
                  </Modal.Body>
                  <Modal.Footer>
            <Button type="submit" variant="primary" onClick={updateSchedule}>
              Submit
            </Button>
            <Button variant="secondary" onClick={()=>setShow2(false)}>
              Close
            </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Schedules;
