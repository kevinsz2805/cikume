import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Solution1 from './components/Solution1';

const menu = [
  {
    title: "Solution 1",
    route: "/question1",
  },
  {
    title: "Solution 2",
    route: "2",
  },
  {
    title: "Solution 3",
    route: "3",
  },
];

export default function Routes() {
  return (
    <>
      <Navbar items={menu} />
      <div className="content">
      <Switch>
        <Route path="/question1" exact component={Solution1} />
        <Route path="/question1" exact component={Solution1} />
        <Route path="/question1" exact component={Solution1} />
        </Switch>
      </div>
      
    </>
  );
}
