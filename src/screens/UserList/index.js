import React, { useState, useEffect } from "react";

// Services
import { getUsers } from "../../services";

// RRD
import { Link, useRouteMatch } from "react-router-dom";

// CSS
import "./Hooks.css";

function UserList() {
  const { url } = useRouteMatch();

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
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

  const parsedUsers = users.map(({ firstName, lastName, key }) => (
    <li key={key}>
      <Link to={`${url}/${key}`}>
        {firstName} {lastName}
      </Link>
    </li>
  ));

  return (
    <div className="Container">
      <div className="Item">
        <ul>{parsedUsers}</ul>
      </div>
    </div>
  );
}

export default UserList;
