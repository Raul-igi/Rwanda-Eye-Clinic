import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/images/brand/fav-icon.jpeg";
import axios from "axios";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useEffect } from "react";
import { Badge } from "react-bootstrap";
import { imagesData } from "../../common/commomimages/imagedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Onhover = () => {
  document.querySelector(".app").classList.contains("sidenav-toggled");
  document.querySelector(".app").classList.add("sidenav-toggled-open");
};
const Outhover = () => {
  document.querySelector(".app").classList.remove("sidenav-toggled-open");
};

export default function Sidebar() {
  const [menuItems, setMenuItems] = useState([

   

    {
      icon: <i class="side-menu__icon fa fa-unlock-alt"></i>,
      type: "sub",
      Name: "",
      active: false,
      selected: false,
      title: "Access Control",
      class: "",
      color: "",
      badgetxt: "",
      path: `${import.meta.env.BASE_URL}access-control`,
      condition: true,
    },

    {
      icon: <i class="side-menu__icon fa fa-user-plus"></i>,
      type: "sub",
      Name: "",
      active: false,
      selected: false,
      title: "Patients",
      class: "",
      color: "",
      badgetxt: "",
      path: `${import.meta.env.BASE_URL}patients`,
      condition: true,
    },  

    {
      icon: <i class="side-menu__icon fa fa-heartbeat"></i>,
      type: "sub",
      Name: "",
      active: false,
      selected: false,
      title: "Insurance",
      class: "",
      color: "",
      badgetxt: "",
      path: `${import.meta.env.BASE_URL}insurance`,
      condition: true,
    },
    {
      icon: <i class="side-menu__icon fa fa-sitemap"></i>,
      type: "sub",
      Name: "",
      active: false,
      selected: false,
      title: "Department",
      class: "",
      color: "",
      badgetxt: "",
      path: `${import.meta.env.BASE_URL}Department`,
      condition: true,
    },

    {
      icon: <i class="side-menu__icon fa fa-map-signs"></i>,
      type: "sub",
      Name: "",
      active: false,
      selected: false,
      title: "Visits",
      class: "",
      color: "",
      badgetxt: "",
      path: `${import.meta.env.BASE_URL}visits`,
      condition: true,
    },

  ]);

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
      document.querySelector(".slide-left").classList.add("d-none");
      document.querySelector(".slide-right").classList.add("d-none");
      menuItems.style.marginRight = 0;
      menuItems.style.marginLeft = 0;
    } else {
      document.querySelector(".slide-right").classList.remove("d-none");
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
          className="app-sidebar"
          onMouseOver={() => Onhover()}
          onMouseOut={() => Outhover()}
        >
          <PerfectScrollbar
            options={{ suppressScrollX: true, useBothWheelAxes: false }}
          >
            <div className="side-header">
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
                        {secondlayer.badgetxt ? (
                          <Badge
                            bg={secondlayer.color}
                            className={secondlayer.class}
                          >
                            {secondlayer.badgetxt}
                          </Badge>
                        ) : (
                          ""
                        )}
                      </Link>
                    </li>
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