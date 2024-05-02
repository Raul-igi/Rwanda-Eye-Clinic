import React from "react";

const MenuItems = [
  {
    menutitle: "MENU",
    Items: [
      {
        icon: <i class="side-menu__icon fa fa-tasks"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        title: "Task Board",
        class: "",
        color: "",
        badgetxt: "",
        path: `${import.meta.env.BASE_URL}taskboard`,
      },
      {
        icon: <i class="side-menu__icon fa fa-user"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        title: "Access Control",
        class: "",
        color: "",
        badgetxt: "",
        path: `${import.meta.env.BASE_URL}access-control`,
      },

      {
        icon: <i class="side-menu__icon fa fa-user"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        title: "New Patient",
        class: "",
        color: "",
        badgetxt: "",
        path: `${import.meta.env.BASE_URL}New-Patient`,
      },

      {
        icon: <i class="side-menu__icon fa fa-user"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        title: "Visual Acuity",
        class: "",
        color: "",
        badgetxt: "",
        path: `${import.meta.env.BASE_URL}formvalidation`,
      },

      
      {
        icon: <i class="side-menu__icon fa fa-user"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        title: "Insurance",
        class: "",
        color: "",
        badgetxt: "",
        path: `${import.meta.env.BASE_URL}insurance`,
      },
      {
        icon: <i class="side-menu__icon fa fa-user"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        title: "Department",
        class: "",
        color: "",
        badgetxt: "",
        path: `${import.meta.env.BASE_URL}department`,
      },

      {
        icon: <i class="side-menu__icon fa fa-user"></i>,
        type: "sub",
        Name: "",
        active: false,
        selected: false,
        title: "Visits",
        class: "",
        color: "",
        badgetxt: "",
        path: `${import.meta.env.BASE_URL}visits`,
      },
    ],
  },
];
export default MenuItems;
