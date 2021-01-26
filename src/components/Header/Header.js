import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.css";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const loc = useLocation().pathname;
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`${classes.header} ${show && classes.header_black}`}>
      <div className={classes.logo}>
        <Link to="/">
          <p>Karrtopelka</p>
        </Link>
      </div>
      <div className={classes.links}>
        <Link className={loc === "/" && classes.active} to="/">
          головна
        </Link>
        <Link className={loc === "/task1" && classes.active} to="/task1">
          task 1
        </Link>
        <Link className={loc === "/task2" && classes.active} to="/task2">
          task 2
        </Link>
        <Link className={loc === "/task3" && classes.active} to="/task3">
          task 3
        </Link>
        <Link className={loc === "/task4" && classes.active} to="/task4">
          task 4
        </Link>
        <Link className={loc === "/task5" && classes.active} to="/task5">
          task 5
        </Link>
      </div>
      <div className={classes.right}>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://instagram.com/karrtopelka"
        >
          <InstagramIcon />
        </a>
        <a rel="noreferrer" target="_blank" href="https://t.me/karrtopelka">
          <TelegramIcon />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/karrtopelka/"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default Header;
