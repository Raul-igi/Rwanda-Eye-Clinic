import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/images/brand/fav-icon.jpeg";
import axios from "axios";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useEffect } from "react";
import { Badge } from "react-bootstrap";
import { imagesData } from "../../common/commomimages/imagedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItems from "./sidebardata";
import './sidebar.css'



const Onhover = () => {
  document.querySelector(".app").classList.contains("sidenav-toggled");
  document.querySelector(".app").classList.add("sidenav-toggled-open");
};
const Outhover = () => {
  document.querySelector(".app").classList.remove("sidenav-toggled-open");
};

export default function Sidebar() {
  const [menuItems, setMenuItems] = useState([]);
  const [newMessages, setNewMessages] = useState(0);

  // every chnage this effect calls
  let menuIcontype;
  if (document.querySelector("body").classList.contains("horizontal")) {
    menuIcontype = "hor-icon";
  } else {
    menuIcontype = "sidemenu-icon";
  }

  window.addEventListener("resize", () => {
    checkHoriMenu();
  });

  const checkRoles = (arrA, arrB) => {

    for (let i = 0; i < arrA?.length||0; i++) {

      if (arrB.includes(arrA[i])) {
            return true; // Return true if found
        }
    }
    return false; // Return false if none found
  }

  const initializeMenus = async () => {
    const userRoles = await localStorage.getItem('role')
    const parsedRoles = JSON.parse(userRoles)
    const menus = MenuItems.map(item=>{return({...item,condition:checkRoles(parsedRoles,item.roles)})})
    setMenuItems(menus)
  }

  const fetchUnreadMessages = async () => {
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
        if(res.data.response.length>0){
          const unreadIdsLengths = res.data.response.reduce((sum, message) => sum + message.unreadIds.length, 0);
          setNewMessages(unreadIdsLengths)
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  useEffect(()=>{
    initializeMenus();
    fetchUnreadMessages();
  },[])

  function checkHoriMenu() {
    let menuWidth = document.querySelector(".horizontal-main");
    let menuItems = document.querySelector(".side-menu");
    let mainSidemenuWidth = document.querySelector(".main-sidemenu");
    let menuContainerWidth =
      menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
    let marginLeftValue = Math.ceil(
      Number(window.getComputedStyle(menuItems)?.marginLeft.split("px")[0])
    );
    let marginRightValue = Math.ceil(
      Number(window.getComputedStyle(menuItems)?.marginRight.split("px")[0])
    );
    let check =
      menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
    if (menuWidth?.offsetWidth - menuContainerWidth >= menuItems.scrollWidth) {
      document.querySelector(".slide-left")?.classList.add("d-none");
      document.querySelector(".slide-right")?.classList.add("d-none");
      menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = 0;
    } else {
      document.querySelector(".slide-right")?.classList.remove("d-none");
    }
    if (document.querySelector("html").getAttribute("dir") === "rtl") {
      if (
        Math.abs(marginRightValue) < Math.abs(check) === false &&
        menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth
      ) {
        menuItems.style.marginRight = -check + "px";
        document.querySelector(".slide-left").classList.remove("d-none");
      } else {
        menuItems.style.marginRight = 0;
      }
    } else {
      if (
        Math.abs(marginLeftValue) < Math.abs(check) === false &&
        menuWidth?.offsetWidth - menuContainerWidth < menuItems.scrollWidth
      ) {
        menuItems.style.marginLeft = -check + "px";
        document.querySelector(".slide-right").classList.add("d-none");
      } else {
        menuItems.style.marginLeft = 0;
      }
    }
  }

  return (
    <Fragment>
      <div className="sticky">
        <div
          className="app-sidebar backgrounds"
          onMouseOver={() => Onhover()}
          onMouseOut={() => Outhover()}
          // style={{backgroundColor:'#000000'}}
        >
          <PerfectScrollbar
            options={{ suppressScrollX: true, useBothWheelAxes: false }}
          >
            <div className="side-header" style={{background:"#FDFEFF"}}>
              {/* <Link className="header-brand1" to={`${import.meta.env.BASE_URL}taskboard`} >
                <img src={imagesData('media')} className="header-brand-img main-logo" alt="Sparic logo" />
                <img src={imagesData('media')} className="header-brand-img darklogo" alt="Sparic logo" />
                <img src={icon} className="header-brand-img icon-logo" alt="Sparic logo" />
                <img src={icon} className="header-brand-img icon-logo2" alt="Sparic logo" />
              </Link> */}
            </div>

            <div className="main-sidemenu">
              <ul className="side-menu" style={{ marginRight: "0px" }}>
                <React.Fragment key={Math.random()}>
                  {menuItems?.map((secondlayer, two) => (
                    secondlayer.condition&&(
                      <li className="slide" key={two}>
                      <Link
                        to={secondlayer.path}
                        className={`side-menu__item ${
                          secondlayer.selected ? "active" : ""
                        }`}
                      >
                        {secondlayer.icon}
                        <span className="side-menu__label">
                          {secondlayer.title}
                        </span>
                        {secondlayer.title === "Chat" && newMessages>0 ? (
                          <Badge
                            bg={'danger'}
                            className={'side-badge'}
                          >
                            {newMessages}
                          </Badge>
                         ) : (
                          ""
                        )}
                      </Link>
                    </li>
                    )
                  ))}
                </React.Fragment>
              </ul>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </Fragment>
  );
}