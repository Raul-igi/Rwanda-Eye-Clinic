import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { imagesData } from "../../common/commomimages/imagedata";
import Pageheader from "../../layouts/pageheader/pageheader";
import PerfectScrollbar from "react-perfect-scrollbar";
import { ContactData } from "./data/chatdata.jsx";
import axios from "axios";

export default function Chat() {
  const breadcrumbs = [""];
  const [loading, setLoading] = useState(false);

  const [myChats, setMyChats] = useState([]);
  const [myChats_, setMyChats_] = useState([]);
  const [chats, setChats] = useState([]);
  const [users, setUsers] = useState([]);
  const [users_, setUsers_] = useState([]);
  const [user, setUser] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedChat, setSelectedChat] = useState();
  const [message, setMessage] = useState("");
  const [tab, setTab] = useState("tab1");

  let chatData = [];

  const search = (value) => {
    if (value === "") {
      if(tab==="tab1"){
        setChats(myChats_)
      }else{
        setChats(users_)
      }
    } else {
      const filteredChats = (tab==="tab1"?myChats_:users_).filter((user) => {
        const userNameLowercase = user.names.toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return userNameLowercase.includes(searchTermLowercase);
      });

      setChats(filteredChats);
    }
  };

  const fetchUsers = async () => {
    let my_token = await localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/access/users`, config)
      .then((res) => {
        console.log(res.data);
        const users_ = res.data.response.map(el =>{return({...el,names:`${el.firstName} ${el.lastName}`})})
        setUsers(users_);
        setUsers_(users_);
        setChats(users_);
        setSelectedChat(users_[0]);
        getMessages(users_[0]);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  const fetchMyChats = async () => {
    let my_token = await localStorage.getItem("token");
    let user_ = await localStorage.getItem("user");
    let userObj = JSON.parse(user_)
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${my_token}`,
        "userId": userObj.id
      },
    }; //incase you have to deal with ID or Options
    axios
      .get(`http://www.ubuzima.rw/rec/message/chats`, config)
      .then((res) => {
        console.log(res.data);
        const myChats_ = res.data.response.map(el=>{
          if(el.receiverId === userObj.id){
            return {
              names:el.sender,
              id:el.senderId,
              text:el.content
            }
          }else{
            return {
              names:el.receiver,
              id:el.receiverId,
              text:el.content
            }
          }
        })
        if(myChats_.length>0){
          setMyChats(myChats_);
          setMyChats_(myChats_);
          setChats(myChats_);
          setSelectedChat(myChats_[0]);
          getMessages(myChats_[0]);
        }
        else{
          setMyChats([]);
          setMyChats_([]);
          setChats([]);
          setSelectedChat();
        }

      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  const sendMessage = async () => {
    if (message) {
      let my_token = await localStorage.getItem("token");
      let user_ = await localStorage.getItem("user");
      let userObj = JSON.parse(user_);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${my_token}`,
        },
      }; //incase you have to deal with ID or Options
      const postObj = JSON.stringify({
        senderId: userObj.id,
        receiverId: selectedChat.id,
        content: message,
      });
      axios
        .post(`http://www.ubuzima.rw/rec/message/send`, postObj, config)
        .then((res) => {
          if (res.data.status) {
            alert("message sent!");
            getMessages();
            setMessage("");
          } else {
            alert("Message couldn't be sent! Something went wrong");
          }
        })
        .catch((error) => {
          setLoading(false);
          console.log(error.message);
        });
    } else {
      alert("Enter message first!");
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(date.getFullYear()).slice(-2); // Get last two digits of the year

    return `${hours}:${minutes} ${day}/${month}/${year}`;
  }

  const getMessages = async (chat) => {
    setMessages([])
    let my_token = await localStorage.getItem("token");
    let user_ = await localStorage.getItem("user");
    let userObj = JSON.parse(user_);
    setUser(userObj);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
        senderId: userObj.id,
        receiverId: chat.id,
      },
    }; //incase you have to deal with ID or Options

    axios
      .get(`http://www.ubuzima.rw/rec/message/chat`, config)
      .then((res) => {
        if (res.data.status) {
          const sortedMessages = res.data.response.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
          setMessages(sortedMessages);
        } else {
          alert("Couldn't fetch the messages!");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchMyChats();
    // fetchUsers();
  }, []);

  return (
    <Fragment>
      <div class="tabs" style={{ display: "flex" }}>
            <div
              class="tab"
              onClick={() => {
                setTab("tab1");
                fetchMyChats();
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
              My Chats
            </div>

            <div
              class="tab"
              onClick={() => {
                setTab("tab2");
                fetchUsers();
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
              Users
            </div>
          </div>      
      <Row>
        <Col md={12} lg={5} xl={4}>
          <Card className=" overflow-hidden">
            <div className="main-chat-list">
              <PerfectScrollbar className="h-100">
                <Card.Header className=" p-3 border-bottom-0">
                  <InputGroup className="input-group">
                    <Form.Control
                      type="text"
                      placeholder="Search here..."
                      onChange={(ele) => {
                        search(ele.target.value);
                      }}
                    />
                  </InputGroup>
                </Card.Header>
                <div className="chat">
                  <ul className="contacts mb-0">
                    {chats.length>0?(
                      chats.map((idx) => (
                        <li
                          onClick={() => {
                            setSelectedChat(idx);
                            getMessages(idx);
                          }}
                          className="active"
                          key={idx.id}
                        >
                          <div className="d-flex bd-highlight">
                            <div className="img_cont me-2">
                              <img
                                src={idx.src}
                                className="rounded-circle avatar avatar-lg"
                                alt="img"
                              />
                            </div>
                            <div className="user_info">
                              <h6 className="mt-2 mb-0 fw-semibold">
                                {idx.names}
                              </h6>
                              <small className="text-muted">{idx.text}</small>
                            </div>
                            <div className="ms-auto my-auto">
                              <small>{idx.date}</small>
                            </div>
                          </div>
                        </li>
                      ))
                    ):(
                      <p style={{marginLeft:20,marginTop:20}}>No Chats...</p>
                    )}
                  </ul>
                </div>
              </PerfectScrollbar>
            </div>
          </Card>
        </Col>
        <Col md={12} lg={7} xl={8} className="chat">
          {selectedChat?(
            <Card className="card overflow-hidden">
            <div className="action-header d-flex justify-content-between">
              <div className="hidden-xs d-flex align-items-center ms-2">
                <div className="img_cont me-3">
                  <img
                    src={imagesData("female23")}
                    className="rounded-circle avatar avatar-lg"
                    alt="img"
                  />
                </div>
                <div className="mt-1">
                  <h4 className="text-white mb-0 fw-semibold">
                    {selectedChat?.names}
                  </h4>
                </div>
              </div>
            </div>

            <div className="main-chat-msgs">
              <PerfectScrollbar className="h-100">
                <Card.Body>
                  {messages.length > 0 ? (
                    messages.map((message) => {
                      return (
                        <div>
                          {message.senderId === user?.id ? (
                            <div>
                              <div
                                className="d-flex"
                                style={{ justifyContent: "flex-end" }}
                              >
                                <div className="msg_cotainer_send br-7">
                                  {message.content}
                                </div>
                                <div className="img_cont_msg">
                                  <img
                                    src={imagesData("female23")}
                                    className="rounded-circle avatar avatar-md"
                                    alt="img"
                                  />
                                </div>
                              </div>
                              <div
                                style={{
                                  color: "#9ea9b9",
                                  fontSize: 10,
                                  marginTop: 10,
                                  textAlign: "right",
                                }}
                              >
                                {formatTimestamp(message.timestamp)}
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div
                                className="d-flex"
                                style={{ justifyContent: "flex-start" }}
                              >
                                <div className="img_cont_msg">
                                  <img
                                    src={imagesData("female23")}
                                    className="rounded-circle avatar avatar-md"
                                    alt="img"
                                  />
                                </div>
                                <div className="msg_cotainer br-7">
                                  {message.content}
                                </div>
                              </div>
                              <div
                                style={{
                                  color: "#9ea9b9",
                                  fontSize: 10,
                                  marginTop: 10,
                                  textAlign: "left",
                                }}
                              >
                                 {formatTimestamp(message.timestamp)}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <p style={{ marginTop: 100, textAlign: "center" }}>
                      No message yet ...
                    </p>
                  )}
                </Card.Body>
              </PerfectScrollbar>
            </div>

            <Card.Footer>
              <div className="msb-reply d-flex">
                <div className="input-group">
                  <input
                    type="text"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    value={message}
                    className="form-control  bg-white"
                    placeholder="Typing...."
                  />
                  <Button onClick={sendMessage} type="button" variant="primary">
                    <i className="fa fa-send" aria-hidden="true"></i>
                  </Button>
                </div>
              </div>
            </Card.Footer>
          </Card>
          ):(
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

              <p style={{fontWeight:'bold'}}>No Selected Chat</p>
            </div>
          )}
        </Col>
      </Row>
    </Fragment>
  );
}
