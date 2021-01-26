import React from "react";
import classes from "./Task4.module.css";
import Fade from "react-reveal/Fade";
import TaskDescription from "../../components/TaskDescription/TaskDescription";
import CssTextField from "../../components/CssTextField/CssTextField";
import { useState } from "react";

const Task4 = () => {
  const [ex, setEx] = useState("");

  const op = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  const infixToPostfix = (exp) => {
    let prec = {
      "+": 2,
      "-": 2,
      "(": 1,
    };
    let stack = [];
    let postfixList = [];
    let tokenList = exp.split(" ");

    tokenList.forEach((token) => {
      if ("0123456789".includes(token)) {
        postfixList.push(token);
      } else if (token === "(") {
        stack.push(token);
      } else if (token === ")") {
        let topToken = stack.pop();
        while (topToken !== "(") {
          postfixList.push(topToken);
          topToken = stack.pop();
        }
      } else {
        while (
          stack.length !== 0 &&
          prec[stack[stack.length - 1]] >= prec[token]
        ) {
          postfixList.push(stack.pop());
        }
        stack.push(token);
      }
    });
    while (stack.length !== 0) {
      postfixList.push(stack.pop());
    }
    return postfixList;
  };

  const builder = () => {
    let stack = [];
    let arr = infixToPostfix(ex);
    arr.forEach((item) => {
      if (item in op) {
        let [b, a] = [stack.pop(), stack.pop()];
        stack.push(op[item](a, b));
      } else {
        stack.push(parseInt(item));
      }
    });
    console.log(stack);
    if (isNaN(stack[stack.length - 1])) {
      return "Введіть приклад правильно";
    } else {
      return `Результат: ${stack.pop()}`;
    }
  };

  return (
    <div className={classes.task4}>
      <Fade opposite duration={750}>
        <TaskDescription
          name="4. Розпарсити математичний вираз (6 або 10 балів)"
          description="Потрібно обчислити вираз в якому є дужки (круглі) і знаки додавання, віднімання."
        />
        <h2>Реалізація:</h2>
        <div className={classes.realisation}>
          <div>
            <CssTextField
              label="Введіть приклад"
              value={ex}
              onChange={(e) => setEx(e.target.value)}
              variant="outlined"
              color="primary"
            />
          </div>
          <h3>{(ex !== "" || !isNaN(ex)) && builder()}</h3>
        </div>
      </Fade>
    </div>
  );
};

export default Task4;
