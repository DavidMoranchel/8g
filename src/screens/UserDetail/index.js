import React, { useState, useEffect } from "react";

// Services
import { getUser } from "../../services";

// DRF
import { Link, useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();

  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(id).then((data) => {
      setUser(data);
    });
  }, [id]);

  const { firstName, lastName, age, hobbies } = user;

  return (
    <div>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{age} años</p>
      <p>Hobbies</p>
      <ul>
        {hobbies && hobbies.map((hobbie) => <li key={hobbie}>{hobbie}</li>)}
      </ul>
      <Link to="/users">Regresar</Link>
    </div>
  );
}

export default UserDetail;

// const { id } = useParams();

// const [user, setUser] = useState({});
// useEffect(() => {
//   getUser(id).then((data) => {
//     setUser(data);
//   });
// }, [user]);

// const { firstName, lastName, age, hobbies } = user;

// return (
//   <div>
//     <h3>
//       {firstName} {lastName}
//     </h3>
//     <p>{age} años</p>
// <p>Hobbies</p>
// <ul>
//   {hobbies && hobbies.map((hobbie) => <li key={hobbie}>{hobbie}</li>)}
// </ul>
//     <Link to="/users">Regresar</Link>
//   </div>
// );
