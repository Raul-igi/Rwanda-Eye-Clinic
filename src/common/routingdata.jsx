import React, { Fragment } from 'react'
import ReactDOM from'react-dom/client'
import Taskboard from '../components/taskboard/taskboard'
import AccessControl from '../components/access-control/access-control'
import Insurance from '../components/insurance/insurance'
import Profile from '../components/profile/profile'
import Patients from '../components/patients/Patients'
import DataTables from '../components/tables/datatables/datatables'
import Department from '../components/department/department'
import Visits from '../components/visits/visits'
import Specialists from '../components/specialists/specialists'
import VisitDetails from '../components/visits/visit-details'
import Schedules from '../components/schedules/schedules'
import Appointments from '../components/appointments/appointments'
import Report from '../components/report/report'
import Chat from '../components/chat/chat'

export const Routingdata=[

{path:`${import.meta.env.BASE_URL}appointments` ,element:<Appointments />, roles:['Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}report` ,element:<Report />, roles:['Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}chat` ,element:<Chat />, roles:['Nurse','Doctor','Receptionist','Optometrist']},

{path:`${import.meta.env.BASE_URL}insurance` ,element:<Insurance />, roles:['Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}access-control` ,element:<AccessControl />, roles:['Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}department` ,element:<Department />, roles:['Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}patients` ,element:<Patients />, roles:['Nurse','Doctor','Receptionist','Optometrist']},
{path:`${import.meta.env.BASE_URL}visit-details` ,element:<VisitDetails />, roles:['Nurse','Doctor','Receptionist','Optometrist']},
{path:`${import.meta.env.BASE_URL}visits` ,element:<Visits />, roles:['Nurse','Doctor','Receptionist','Optometrist']},
{path:`${import.meta.env.BASE_URL}specialists` ,element:<Specialists />, roles:['Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}profile` ,element:<Profile />, roles:['Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}schedules` ,element:<Schedules />, roles:['Nurse','Doctor','Optometrist']},


]







