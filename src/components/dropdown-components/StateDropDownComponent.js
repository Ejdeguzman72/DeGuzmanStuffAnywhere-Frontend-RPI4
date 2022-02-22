// import React, {useState} from 'react';

// function StateDropDownComponent(props) {

//     const [states, setStates] = useState({data : [
//         {key : "Alabama", value : "Alabama"},
//         {key : "Alaska", value : "Alaska"},
//         {key : "Arizona", value : "Arizona"},
//         {key : "Arkansas", value : "Arkansas"},
//         {key : "Califronia", value : "California"},
//         {key : "Colorado", value : "Colorado"},
//         {key : "Conneticut", value : "Conneticut"},
//         {key : "Delaware", value : "Delaware"},
//         {key : "Florida", value : "Florida"},
//         {key : "Georgia", value : "Georgia"},
//         {key : "Hawaii", value : "Hawaii"},
//         {key : "Idaho", value : "Idaho"},
//         {key : "Illinois", value : "Illinois"},
//         {key : "Indiana", value : "Indiana"},
//         {key : "Iowa", value : "Iowa"},
//         {key : "Kansas", value : "Kansas"},
//         {key : "Kentucky", value : "Kentucky"},
//         {key : "Louisiana", value : "Louisiana"},
//         {key : "Maine", value : "Maine"},
//         {key : "Maryland", value : "Maryland"},
//         {key : "Massachusetts", value : "Massachusetts"},
//         {key : "Michigan", value : "Michigan"},
//         {key : "Minnesota", value : "Minnesota"},
//         {key : "Mississippi", value : "Mississippi"},
//         {key : "Missouri", value : "Missouri"},
//         {key : "Montana", value : "Montana"},
//         {key : "Nebraska", value : "Nebraska"},
//         {key : "Nevaada", value : "Nevaada"},
//         {key : "New Hampshire", value : "New Hampshire"},
//         {key : "New Jersey", value : "New Jersey"},
//         {key : "New Mexico", value : "New Mexico"},
//         {key : "New York", value : "New York"},
//         {key : "North Carolina", value : "North Carolina"},
//         {key : "North Dakota", value : "North Dakota"},
//         {key : "Ohio", value : "Ohio"},
//         {key : "Oklahoma", value : "Oklahoma"},
//         {key : "Oregon", value : "Oregon"},
//         {key : "Pennsylvania", value : "Pennsylvania"},
//         {key : "Rhode Island", value : "Rhode Island"},
//         {key : "South Carolina", value : "South Carolina"},
//         {key : "South Dakota", value : "South Dakota"},
//         {key : "Tennessee", value : "Tennessee"},
//         {key : "Texas", value : "Texas"},
//         {key : "Utah", value : "Utah"},
//         {key : "Vermont", value : "Vermont"},
//         {key : "Virginia", value : "Virginia"},
//         {key : "Washington", value : "Washington"},
//         {key : "West Virginia", value : "West Virginia"},
//         {key : "Wisconsin", value : "Wisconsin"},
//         {key : "Wyoming", value : "Wyoming"},
//     ]})

//     const handleInputChange = (event) => {
//         props.handleState(event.target.value);
//     }

//     return (
//         <select
//                   id="state"
//                   name="state"
//                   value={states.data}
//                   onChange={handleInputChange} >
//                   <option value="Please choose a Restaurant Type">Please Choose a State</option>
//                   {
//                       states.map((state) => (
//                           <option key={state.data} value={state.data}>
//                               {state.data.value}
//                           </option>
//                       ))
//                   }
//                 </select>
//     )
// }

// export default StateDropDownComponent;