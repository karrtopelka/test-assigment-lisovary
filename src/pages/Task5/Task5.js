import React from "react";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import CssTextField from "../../components/CssTextField/CssTextField";
import { Button } from "@material-ui/core";

const Task5 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    // я міг просто Написати
    // setX(y)
    // setY(x)

    // але уявимо що нема state
    let a = parseInt(x);
    let b = parseInt(y);

    a = a + b;
    b = a - b;
    a = a - b;

    setX(a);
    setY(b);
  };

  return (
    <div className="task">
      <Fade opposite duration={750}>
        <TaskDescription
          name="5. Поміняти місцями без спеціальних операторів (3 бали) "
          description="Є дві цілих змінних x і y. Написати програму, яка буде змінювати їх значення
            без третин змінної (масиву) і без використання спеціальних операторів або
            функцій"
        />
        <h2>Реалізація:</h2>
        <div className="realisation">
          <div className="inputs">
            <CssTextField
              label="Введіть X"
              value={parseInt(x)}
              onChange={(e) =>
                setX(
                  e.target.value.replace(/\D/, "") === ""
                    ? "0"
                    : e.target.value.replace(/\D/, "")
                )
              }
              variant="outlined"
              color="primary"
            />
            <CssTextField
              label="Введіть Y"
              value={parseInt(y)}
              onChange={(e) =>
                setY(
                  e.target.value.replace(/\D/, "") === ""
                    ? "0"
                    : e.target.value.replace(/\D/, "")
                )
              }
              variant="outlined"
              color="primary"
            />
          </div>
          <div style={{ display: "flex", gap: 15, padding: 15 }}>
            <h3>X: {x}</h3>
            <h3>Y: {y}</h3>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => handleChange(e)}
          >
            Поміняти місцями змінні
          </Button>
        </div>
      </Fade>
    </div>
  );
};

export default Task5;
