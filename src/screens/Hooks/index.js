import React, { useState, useEffect } from "react";

// CSS
import "./Hooks.css";

function Hooks() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reactsessions-ac545.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let parsedUsers = [];
        for (let key in data) {
          let user = data[key];
          user["key"] = key;
          parsedUsers.push(user);
        }
        if (parsedUsers) {
          setUsers(parsedUsers);
        }
      });
  }, []);

  return (
    <div className="Container">
      <div className="Item">
        <ul>
          {users.map(({ firstName, lastName, key }) => (
            <li key={key}>
              {firstName} {lastName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hooks;

// const [activeButton, setActiveButton] = useState(0);
// const [counter, setCounter] = useState(0);

// useEffect(() => {
//   console.log("life cycle perro");
// });

// useEffect(() => {
//   console.log("button perro");
// }, [activeButton]);

// const handleCounter = (action) => {
//   let newCounter = counter;
//   if (action === "add") {
//     newCounter++;
//   } else {
//     newCounter--;
//   }
//   setCounter(newCounter);
// };

// return (
//   <div className="Container">
//     <div className="Item">
//       <button
//         onClick={() => setActiveButton(!activeButton)}
//         className={`${activeButton ? "activeButton" : null}`}
//       >
//         {activeButton ? "Prendido" : "Apagado"}
//       </button>
//     </div>
//     <div className="Item">
//       <p>{counter}</p>
//       <button onClick={() => handleCounter("add")}>+</button>
//       <button onClick={() => handleCounter("subtract")}>-</button>
//     </div>
//     <div></div>
//   </div>
// );
