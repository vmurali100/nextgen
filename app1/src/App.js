import React from "react";
import "./App.css";
import User from "./Components/Main/Dashbord/User";

function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <User sample={person} allusers={users} />
    </div>
  );
}

const users = ["Ram", "Krishna", "Sam", "Krishna"];

const person = {
  fname: "Murali",
  lname: "Krishna",
};

export default App;
