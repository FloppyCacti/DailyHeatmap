import { useState, useEffect } from "react";
import "../styles/cell.css";

function BookContainer() {
  const [cellContainer, setCellContainer] = useState([]);

  function cellInfoObj(bookName, Date, PageStarted, PageEnded) {
    return { bookName, Date, PageStarted, PageEnded };
  }

  useEffect(() => {
    const numDays = 7;
    const numWeeks = 52;

    const tempArray = Array.from({ length: numDays }, () =>
      Array.from({ length: numWeeks }, () => [])
    );

    setCellContainer(tempArray);
  }, []);

  return (
    <>
      <div className="cellContainer" id="bookContainer">
        {cellContainer.map((day, dayIndex) =>
          day.map((week, weekIndex) => (
            <div key={`${dayIndex}-${weekIndex}`} className="cell"></div>
          ))
        )}
      </div>
    </>
  );
}

export default BookContainer;
