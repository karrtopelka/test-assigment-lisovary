import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import CssTextField from "../../components/CssTextField/CssTextField";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import classes from "./Task1.module.css";
import Fade from "react-reveal/Fade";

const Task1 = () => {
  const [rows, setRows] = useState(3);
  const [icon, setIcon] = useState("*");
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    setRows(event.target.value);
    if (event.target.value < 1 || event.target.value > 6) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const handleIconChange = (e) => {
    setIcon(e.target.value);
  };

  const builder = () => {
    let tree = "";
    for (let i = 1; i <= parseInt(rows); i++) {
      for (let j = 1; j <= parseInt(rows) + parseInt(rows) - 1; j++) {
        if (j <= parseInt(rows) - i || j >= parseInt(rows) + i) {
          tree += " ";
        } else {
          tree += `${icon}`;
        }
      }
      tree += "\n";
    }
    return tree;
  };

  return (
    <div className={classes.task1}>
      <Fade opposite duration={750}>
        <TaskDescription
          name="1. Трикутники (4 бали)"
          description="Потрібно вивести в консоль від 1-го до 6-ти рівнобедрених трикутників, в
          залежності від того яке число введе користувач. Наприклад, якщо на вхід в
          програму буде відправлено число 3, то необхідно надрукувати 3 трикутника,
          якщо користувач введе 6, то надрукувати 6-ть трикутників. Трикутники
          потрібно виводити не в стовпчик, а в рядок. 
          "
        />
        <h2>Реалізація:</h2>
        <div className={classes.realisation}>
          <div>
            <CssTextField
              style={{ width: 500 }}
              error={isError}
              label={`Введіть кількість рівнів${
                isError ? ". Помилка! Введіть від 1 до 6" : ""
              }`}
              value={rows}
              onChange={handleChange}
              variant="outlined"
              color="primary"
            />
            <RadioGroup
              row
              aria-label="Знак"
              name="Icon"
              value={icon}
              onChange={handleIconChange}
            >
              <FormControlLabel value="*" control={<Radio />} label="*" />
              <FormControlLabel value="-" control={<Radio />} label="-" />
              <FormControlLabel value="+" control={<Radio />} label="+" />
            </RadioGroup>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            {isError ||
              !"0123456789".includes(rows) ||
              [...Array(parseInt(rows))].map((e, i) => (
                <pre key={i}>{builder()}</pre>
              ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Task1;
