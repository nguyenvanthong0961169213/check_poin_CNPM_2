import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import dayjs from "dayjs";
// import * as test from "../util"
// import dayjs, { Dayjs } from "dayjs";

const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
];

  

export default function EventModal() {
    const {
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
    } = useContext(GlobalContext);

    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            : labelsClasses[0]
           
    );

    function handleSubmit(e) {
        e.preventDefault();
        console.log("DM", selectedLabel)
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            Day: daySelected.valueOf(),
            //id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        
        if (selectedEvent) {
            //dispatchCalEvent({ type: "update", payload: calendarEvent });
            UpdateEvent(calendarEvent);
        } else {
            CreateEvent(calendarEvent);
            //dispatchCalEvent({ type: "push", payload: calendarEvent });
        }
        window.location.reload(false);
        //setShowEventModal(false);

    }
    function UpdateEvent(item){
        let response= fetch("https://localhost:5001/api/Events/Update", {
            method: 'Post',
            body: JSON.stringify({
                "id": selectedEvent.id,
                "title": item.title,
                "startTime": item.Date,
                "startDate": item.Date,
                "endDate": item.Date,
                "endTime": item.Date,
                "statusNotification": false,
                "timeNotification": item.Date,
                "timeBeforNotification": 5,
                "color": item.label,
                "description": item.description
            }),
            headers: {
                'Content-Type': 'application/json',
              },
          });
    }

    function CreateEvent(item){
        item.Date = dayjs(daySelected.valueOf()).format("YYYY/MM/DD");
        let response= fetch("https://localhost:5001/api/Events/Create", {
            method: 'Post',
            body: JSON.stringify({
                "title": item.title,
                //"startTime": item.Date,
                //"startDate": item.Date,
                //"endDate": item.Date,
                //"endTime": item.Date,
                "statusNotification": false,
                //"timeNotification": item.Date,
                "timeBeforNotification": 5,
                "color": item.label,
                "description": item.description
            }),
            headers: {
                'Content-Type': 'application/json',
              },
          });
    }
    function deleteEvent(){
        console.log("https://localhost:5001/api/Events/"+selectedEvent.id);
        let response= fetch("https://localhost:5001/api/Events/"+selectedEvent.id, {
            method: 'DELETE',
          });
          window.location.reload(false);
    }


    function onclickTimeNotification() {
        var checkBox = document.getElementById("myCheck");
        // var ngaychuyen=convertSolar2Lunar(dayjs().date.format(yy),dayjs().month(),dayjs().year.format(yy),7)
        if (checkBox.checked === true) {
            // text.style.display = "block";
            let holder = document.getElementById("holder")
            holder.innerHTML = '<select id="list" className="ml-4"> <option>5 phút</option> <option>10 phút</option> <option>30 phút</option> <option>60 phút</option>'

        } else {
            let holder = document.getElementById("holder")
            holder.innerHTML = null
            //    const now_day=dayjs().day()-1+19
            //    var k=test.convertSolar2Lunar(now_day,dayjs().month()+1,dayjs().year(),+7)
            //    console.log(k);
            // console.log(dayjs().year("YY"));
            //    let test_2=document.getElementById("test_2")
            //    test_2.innerHTML='test.convertSolar2Lunar(dayjs().day(),dayjs().month(),dayjs().year(),7)'
        }
    }

    function setTime() { }

    var showdate = new Date(),
        displaytime = showdate.getHours() + ':' + showdate.getMinutes(),
        displayDate = new Date(showdate.setDate(showdate.getDate())).toISOString().split('T')[0];

    return (
        <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/3">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <span className="material-icons-outlined text-gray-400">
                        drag_handle
                    </span>
                    <div>
                        {selectedEvent && (
                            <span
                                onClick={
                                    () => {
                                    // dispatchCalEvent({
                                    //     type: "delete",
                                    //     payload: selectedEvent,
                                    // });
                                    // setShowEventModal(false);
                                    deleteEvent();
                                }}
                                className="material-icons-outlined text-gray-400 cursor-pointer"
                            >
                                delete
                            </span>
                        )}
                        <button onClick={() => setShowEventModal(false)}>
                            <span className="material-icons-outlined text-gray-400">
                                close
                            </span>
                        </button>
                    </div>
                </header>
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">
                        <div></div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Add title"
                            value={title}
                            required
                            className="overflow-wrap: normal pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2
                             border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <span className="material-icons-outlined text-blue-700">
                            schedule
                        </span>
                        <p>
                            <input type="time" className="w-2/5 mr-5" defaultValue={displaytime} ></input>
                            <input type="date" id="start" min={daySelected.format("YYYY-MM-DD")} max="" defaultValue={displayDate}></input>
                        </p>

                        <span className="material-icons-outlined text-red-700">
                            schedule
                        </span>
                        <p><input type="time" className="w-2/5 mr-5" ></input><input type="date" id="start" name="trip-start"
                            min={daySelected.format("YYYY-MM-DD")} max=""></input></p>
                        <span className="material-icons-outlined  ">
                            notifications_active
                        </span>
                        <p>
                            <input id="myCheck" type="checkBox" className="mr-8" onClick={onclickTimeNotification} value="Thêm thông báo" />
                            <span id="holder" className="mr-4"></span>
                            <span id="test_2">
                            </span>
                        </p>
                        <span className="material-icons-outlined text-gray-400">
                            segment
                        </span>
                        <input
                            type="text"
                            name="description"
                            placeholder="Add a description"
                            value={description}
                            required
                            className=" t-3 border-0 text-gray-600 pb-2 w-full border-b-2
                             border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 "
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <span className="material-icons-outlined text-gray-400">
                            bookmark_border
                        </span>
                        <div className="flex gap-x-2">
                            {labelsClasses.map((lblClass, i) => (
                                <span
                                    key={i}
                                    onClick={() => setSelectedLabel(lblClass)}
                                    className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                >
                                    {selectedLabel === lblClass && (
                                        <span className="material-icons-outlined text-white text-sm">
                                            check
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <footer className="flex justify-end border-t p-3 mt-5">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                    >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    );
}