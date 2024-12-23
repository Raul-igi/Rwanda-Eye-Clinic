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
import Ordonance from '../components/ordonance/ordonance'

export const Routingdata=[

{path:`${import.meta.env.BASE_URL}appointments` ,element:<Appointments />, roles:['Administrator','Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}report` ,element:<Report />, roles:['Administrator', 'Nurse','Doctor','Optometrist','Receptionist']},
{path:`${import.meta.env.BASE_URL}chat` ,element:<Chat />, roles:['Administrator', 'Nurse','Doctor','Receptionist','Optometrist']},
{path:`${import.meta.env.BASE_URL}ordonance` ,element:<Ordonance />, roles:['Administrator', 'Optic']},

{path:`${import.meta.env.BASE_URL}insurance` ,element:<Insurance />, roles:['Administrator', 'Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}access-control` ,element:<AccessControl />, roles:['Administrator', 'Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}department` ,element:<Department />, roles:['Administrator', 'Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}patients` ,element:<Patients />, roles:['Administrator', 'Nurse','Doctor','Receptionist','Optometrist','Optic']},
{path:`${import.meta.env.BASE_URL}visit-details` ,element:<VisitDetails />, roles:['Administrator', 'Nurse','Doctor','Receptionist','Optometrist']},
{path:`${import.meta.env.BASE_URL}visits` ,element:<Visits />, roles:['Administrator', 'Nurse','Doctor','Receptionist','Optometrist']},
{path:`${import.meta.env.BASE_URL}specialists` ,element:<Specialists />, roles:['Nurse','Doctor','Optometrist']},
{path:`${import.meta.env.BASE_URL}profile` ,element:<Profile />, roles:['Nurse','Doctor','Optometrist','Receptionist','Optic', 'Administrator']},
{path:`${import.meta.env.BASE_URL}schedules` ,element:<Schedules />, roles:['Administrator', 'Nurse','Doctor','Optometrist']},


]







