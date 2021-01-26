import React from "react";
import { useState } from "react";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import Fade from "react-reveal/Fade";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ukLocale from "date-fns/locale/uk";

const Task3 = () => {
  const [selectedDate, handleDateChange] = useState(new Date());

  const datebuilder = (d) => {
    let days = [
      "Неділя",
      "Понеділок",
      "Вівторок",
      "Середа",
      "Четвер",
      "П'ятниця",
      "Субота",
    ];

    let day = days[d.getDay()];
    return day;
  };

  return (
    <div className="task">
      <Fade opposite duration={750}>
        <TaskDescription
          name="3. День тижня в році (3 бали)"
          description="Написати програму, яка буде обчислювати день тижня за вказаною датою. "
        />
        <h2>Реалізація:</h2>
        <div className="realisation">
          <MuiPickersUtilsProvider
            utils={DateFnsUtils}
            locale={ukLocale}
            className="inputs"
          >
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              format="d MMM yyyy"
              cancelLabel="Скасувати"
            />
          </MuiPickersUtilsProvider>
          <h3 style={{ paddingTop: 15 }}>{datebuilder(selectedDate)}</h3>
        </div>
      </Fade>
    </div>
  );
};

export default Task3;
