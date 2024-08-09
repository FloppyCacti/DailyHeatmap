import { useState, useEffect } from "react";
import "../styles/cell.css";

function BookContainer() {
  const [cellContainer, setCellContainer] = useState([]);

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
      <div className="cellContainer" id="bookContainer">
        {cellContainer.map((day, dayIndex) => (
          <div
            key={`${dayIndex}`}
            className="cell"
            onClick={() => {
              logInfo(dayIndex);
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default BookContainer;
