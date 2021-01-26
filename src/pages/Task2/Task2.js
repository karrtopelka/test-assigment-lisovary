import React from "react";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import Fade from "react-reveal/Fade";
import CssTextField from "../../components/CssTextField/CssTextField";
import { useState } from "react";

const Task2 = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);
  const [fourthNumber, setFourthNumber] = useState(0);

  const nsd = (a, b) => {
    if (b > a) {
      return nsd(b, a);
    }
    if (!b) {
      return a;
    }
    return nsd(b, a % b);
  };

  return (
    <div className="task">
      <Fade opposite duration={750}>
        <TaskDescription
          name="2. НСД для 4х чисел (3 бали) "
          description="Знайти НСД для 4х чисел. НСД - найбільше число для двох і більше чисел, на
            яке дані числа діляться без залишку. Наприклад НСД для двох чисел 15 і 10 - 5"
        />
        <h2>Реалізація:</h2>
        <div className="realisation">
          <div className="inputs">
            <CssTextField
              label="Введіть перше число"
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
              variant="outlined"
              color="primary"
            />
            <CssTextField
              label="Введіть друге число"
              value={secondNumber}
              onChange={(e) => setSecondNumber(e.target.value)}
              variant="outlined"
              color="primary"
            />
            <CssTextField
              label="Введіть третє число"
              value={thirdNumber}
              onChange={(e) => setThirdNumber(e.target.value)}
              variant="outlined"
              color="primary"
            />
            <CssTextField
              label="Введіть четверте число"
              value={fourthNumber}
              onChange={(e) => setFourthNumber(e.target.value)}
              variant="outlined"
              color="primary"
            />
          </div>
          <p>
            НСД для цих чисел:{" "}
            {nsd(
              nsd(firstNumber, secondNumber),
              nsd(thirdNumber, fourthNumber)
            )}
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Task2;
