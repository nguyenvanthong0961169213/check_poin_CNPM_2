import axios from "axios";
import React, { useEffect } from "react";
import Day from "./Day";
import { Day_2 } from "./Day";

let resultData = [];
const getEvent = async () =>{
  let response=await fetch('https://localhost:5001/api/Events/AllEvent');
  let data=await response.json()
  return data.map(s => {
    return {
      title: s.title,
      description: s.description,
      day: s.startDate,
      id: s.id,
      label : s.color,
    }
  });
}  
getEvent().then(data=>{
  console.log('check get data: ',data)
  resultData=data;
})

export default function Month({ month }) {

  // function getEvent(){
  //   var result = [];
  //   result=resultData;
  //   return result;
  // }
  //const events = getEvent();
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
              <Day day={day} key={idx} rowIdx={i} _events={resultData} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

//
export function Month_2({ month }) {

  function getEvent(){
    // Call owr ddaay
    
    var result = [];
    result=resultData;
    result.map(s => {
      return {
        id: s.id, 
        title: s.name,
        day: s.beginHour,
        // label: s.color,
        // p: s.
      };
    })
    //const storageEvents = localStorage.getItem("savedEvents");
    //const parsedEvents  = storageEvents ? JSON.parse(storageEvents) : [];
    return result;
    //return parsedEvents;
  }
  const events = getEvent();
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
              <Day_2 day={day} key={idx} rowIdx={i} _events={events} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

