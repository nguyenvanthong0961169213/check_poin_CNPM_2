import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import ShowLunar from "./ShowLunarCalendar";
export default function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Labels />
      <ShowLunar />
    </aside>
  );
}
