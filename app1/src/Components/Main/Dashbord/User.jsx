import React from "react";
export default function User(props) {
  console.log(props);
  return (
    <div>
      <h2>I am from User Comp</h2>
      <h3>User First Name : {props.sample.fname}</h3>
      <ul>
        {props.allusers.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ul>
    </div>
  );
}
