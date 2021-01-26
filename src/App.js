import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Task1 from "./pages/Task1/Task1";
import Task2 from "./pages/Task2/Task2";
import Task3 from "./pages/Task3/Task3";
import Task4 from "./pages/Task4/Task4";
import Task5 from "./pages/Task5/Task5";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/task1">
            <Task1 />
          </Route>
          <Route path="/task2">
            <Task2 />
          </Route>
          <Route path="/task3">
            <Task3 />
          </Route>
          <Route path="/task4">
            <Task4 />
          </Route>
          <Route path="/task5">
            <Task5 />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
