import React from "react";
import { AboutFooter, AboutLastFooter } from "./About";
export const Teacher = () => {
  return (
    <>
      <div className="teacher-div">
        <img
          className="event-image teacher-image"
          src="https://www.studentachievementsolutions.com/wp-content/uploads/2021/11/School-Faculty-Meeting-Agenda.png"
          alt=""
        />
      </div>
      <div className="outer">
        <AboutFooter />
        <AboutLastFooter />
      </div>
    </>
  );
};
