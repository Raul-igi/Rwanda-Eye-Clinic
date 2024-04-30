import React, { Fragment } from 'react'
import ReactDOM from'react-dom/client'
import Taskboard from '../components/taskboard/taskboard'
import AccessControl from '../components/access-control/access-control'
import Insurance from '../components/insurance/insurance'
import Profile from '../components/profile/profile'
import NewPatient from '../components/New-Patient/NewPatient'
import FormValidation from '../components/formvalidation/formvalidation'
import DataTables from '../components/tables/datatables/datatables'
import Department from '../components/department/department'
import Visits from '../components/visits/visits'
import Specialists from '../components/specialists/specialists'

export const Routingdata=[

{path:`${import.meta.env.BASE_URL}insurance` ,element:<Insurance />},
{path:`${import.meta.env.BASE_URL}access-control` ,element:<AccessControl />},
{path:`${import.meta.env.BASE_URL}department` ,element:<Department />},
{path:`${import.meta.env.BASE_URL}New-Patient` ,element:<NewPatient />},
{path:`${import.meta.env.BASE_URL}formvalidation` ,element:<FormValidation />},
{path:`${import.meta.env.BASE_URL}visits` ,element:<Visits />},
{path:`${import.meta.env.BASE_URL}specialists` ,element:<Specialists />},
{path:`${import.meta.env.BASE_URL}taskboard` ,element:<Taskboard />},
{path:`${import.meta.env.BASE_URL}profile` ,element:<Profile />},


]







