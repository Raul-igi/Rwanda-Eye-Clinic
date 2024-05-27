import React from "react";

const MenuItems = [
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
    roles: ['Nurse','Doctor','Receptionist'],
    condition: false,
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
    roles: ['Nurse','Doctor','Receptionist'],
    condition: false,
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
    roles: ['Doctor'],
    condition: false,
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
    roles: ['Doctor'],
    condition: false,
  },
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
    roles: ['Doctor'],
    condition: false,
  },
  {
    icon: <i class="side-menu__icon fa fa-calendar-check-o"></i>,
    type: "sub",
    Name: "",
    active: false,
    selected: false,
    title: "Appointment",
    class: "",
    color: "",
    badgetxt: "",
    path: `${import.meta.env.BASE_URL}appointments`,
    roles: ['Doctor'],
    condition: false,
  },

  {
    icon: <i class="side-menu__icon fa fa-file"></i>,
    type: "sub",
    Name: "",
    active: false,
    selected: false,
    title: "Report",
    class: "",
    color: "",
    badgetxt: "",
    path: `${import.meta.env.BASE_URL}report`,
    roles: ['Doctor'],
    condition: false,
  },

  {
    icon: <i class="side-menu__icon fa fa-wechat"></i>,
    type: "sub",
    Name: "",
    active: false,
    selected: false,
    title: "Chat",
    class: "",
    color: "",
    badgetxt: "",
    path: `${import.meta.env.BASE_URL}chat`,
    roles: ['Doctor'],
    condition: false,
  },
]
export default MenuItems;
