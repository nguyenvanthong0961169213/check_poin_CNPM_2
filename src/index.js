import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  {App_2}  from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextWrapper from "./context/ContextWrapper";

 export var flag_show_2=false;
export function check_flag_show_2()
{
  flag_show_2=!flag_show_2
  test()
}
test()
function test (){

  if(flag_show_2===false)
  {
    ReactDOM.render(
      <React.StrictMode>
        <ContextWrapper>
          <App />
          </ContextWrapper>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
  else{
    ReactDOM.render(
      <React.StrictMode>
        <ContextWrapper>
          <App_2 />
          </ContextWrapper>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
