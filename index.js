// import React from "react";
// import ReactDOM from 'react-dom';
// let fruits = ["apple","banana","orange","mango","water melon"]
// ReactDOM.render(
//   <div>
//       <h1>List of fruits</h1>
//       <ul>
//         { fruits.map((item) => (
//           <li>{ item }</li>
//         )) }
//       </ul>
//    </div>,
//   document.getElementById('root')
//   );
// 


// import "./index.css"
// import ReactDOM from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const students = [
//   {
//     company: 'Alfreds Futterkiste',
//     contact: 'Maria Anders',
//     country: 'Germany'
//   },
//   {
//     company: 'Centro comercial Moctezuma',
//     contact: 'Francisco Chang',
//     country: 'Mexico'
//   },
//   {
//     company: 'Ernst Handel',
//     contact: 'Roland Mendel',
//     country: 'Austria'
//   },
//   {
//     company: 'Island Trading',
//     contact: 'Helen Bennett',
//     country: 'UK'
//   },
//   {
//     company: 'Laughing Bacchus Winecellars',
//     contact: 'Yoshi Tannamuri',
//     country: 'Canada'
//   },
//   {
//     company: 'Magazzini Alimentari Riuniti',
//     contact: 'Giovanni Rovelli',
//     country: 'Italy'
//   }
// ]
// root.render(
//   <table>
//     <th>Company</th>
//     <th>Contact</th>
//     <th>Country</th>
// {students.map(student => (
//   <tr>
//     <td>{student.company}</td>
//     <td>{student.contact}</td>
//     <td>{student.country}</td>
//   </tr>
// ))}
//   </table>
// )


import "./index.css"
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<h4>Browser's details: {navigator.userAgent}</h4>
)