import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const ReactDatePicker = () => {
  console.log(React.version);

  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date, _evnet) => {
    setStartDate(date);
  };

  return <DatePicker selected={startDate} onChange={handleChange} />;
};

export default ReactDatePicker;
