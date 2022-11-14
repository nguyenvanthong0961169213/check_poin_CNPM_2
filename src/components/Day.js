import dayjs from "dayjs";
//import React, { useContext, useState, useEffect } from "react";
import React, { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { convertSolar2Lunar} from "../util";
import { convertSolar2LunarMonth} from "../util";


export default function Day({ day, rowIdx , _events}) {

  //const [dayEvents, setDayEvents] = useState([]);
  const dayEvents = initest();
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  function initest(){
    const events = _events.filter(
      (evt ) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    return events;
  }
  // useEffect(() => {
  //   const events = filteredEvents.filter(
  //     (evt) =>
  //       dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
  //   );
  //   // setDayEvents(events);
  // }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-17"
      : "";
  }
  function getcolorLichAm()
  {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "text-white"
      : "text-yellow-600";
  }

  
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
     
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
            
            {/* {convert(day).format("DD/MM")} */}
          
          </p>
         
        )}
        
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
         
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
         {dayEvents.map((evt, idx) => (
              <div 
              key={idx}
              onClick={() => setSelectedEvent(evt)}
              className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
            >
              {evt.title}
            </div>
        ))}  
      </div>
    </div>
    
  );

}
export function Day_2({ day, rowIdx , _events}) {

  //const [dayEvents, setDayEvents] = useState([]);
  const dayEvents = initest();
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  function initest(){
    const events = _events.filter(
      (evt ) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    return events;
  }
  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    // setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-17"
      : "";
  }
  function getcolorLichAm()
  {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "text-white"
      : "text-yellow-600";
  }

  
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
     
        {rowIdx === 0 && (
          <p className="text-sm mt-1">
            {day.format("ddd").toUpperCase()}
            
            {/* {convert(day).format("DD/MM")} */}
          
          </p>
         
        )}
        
        <p className={`text-sm p-1 my-1 text-center  ${getCurrentDayClass()}`}>
          {day.format("DD")}
          <p id={day.format("DD/MM/YYYY")} className={`${getcolorLichAm()}`}>
            {/* {ShowLunar(,+7)} */}
           <span> {convertSolar2Lunar(parseInt(day.format("DD")),parseInt(day.format("MM")),parseInt(day.format("YYYY")),+7)}</span>
              /
            <span>{convertSolar2LunarMonth(parseInt(day.format("DD")),parseInt(day.format("MM")),parseInt(day.format("YYYY")),+7)}</span>
          </p>
          {/* <span id="test">{ShowLunar(true)}</span> */}
          
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
         {dayEvents.map((evt, idx) => (
              <div 
              key={idx}
              onClick={() => setSelectedEvent(evt)}
              className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
            >
              {evt.title}
            </div>
        ))}  
      </div>
    </div>
    
  );

}
