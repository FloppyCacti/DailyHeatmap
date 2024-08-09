import { useState, useEffect } from "react";
import "../styles/bookContainer.css";

function BookContainer() {
  const [cellContainer, setCellContainer] = useState([]);
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

  function cellInfoObj(Date) {
    return { bookName: null, Date, PageStarted: null, PageEnded: null };
  }

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const leapYear = currentYear % 4 === 0;
    const daysInYear = leapYear ? 366 : 365;

    const tempArray = new Array(daysInYear).fill(null).map((_, index) => {
      const date = new Date(currentYear, 0, index + 1);
      return cellInfoObj(date.toDateString());
    });

    setCellContainer(tempArray);
  }, []);

  function logInfo(index) {
    console.log(cellContainer[index]);
  }

  return (
    <>
      <div className="containerWrapper">
        <div className="daysOfWeek">
          {dayOfWeek.map((day, index) => (
            <div key={index} className="dayLabel">
              {day}
            </div>
          ))}
        </div>
        <div className="cellContainer">
          {cellContainer.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className="cell"
              onClick={() => {
                logInfo(cellIndex);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookContainer;
