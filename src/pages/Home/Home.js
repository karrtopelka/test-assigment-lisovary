import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  var buttons = [];
  for (let i = 1; i <= 5; i++) {
    buttons.push(
      <Link to={`/task${i}`} key={i}>
        <Button variant="outlined" color="primary" size="large">
          Завдання {i}
        </Button>
      </Link>
    );
  }

  return (
    <div className={classes.home}>
      <Fade opposite duration={750}>
        <h1>
          Тестове завдання на позицію Junior Software Developer (Інтерна) в
          компанію Lisovary.
        </h1>
        <p>Оберіть завдання:</p>
        <div className={classes.buttons}>{buttons.map((item) => item)}</div>
      </Fade>
    </div>
  );
};

export default Home;
