import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import {ShowLunarCalendar2} from "./Day"


export default function ShowLunarCalendar() {
    // const { ShowLunar, updateShowLunar } = useContext(GlobalContext);
    return (
      <React.Fragment>
        <p className="text-gray-500 font-bold mt-10">ShowLunar</p>
        <input
              id="myCheckbox"
              type="checkbox"
              className={`form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer`}
              onChange={setShow}
            />
         <span className="text-gray-700 ml-2">Show</span>   
         
      </React.Fragment>
    );
  }

export function setShow(){
       const checkbox = document.getElementById('myCheckbox')
       checkbox.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                ShowLunarCalendar2()
            } else {
                
            }
        })
}  