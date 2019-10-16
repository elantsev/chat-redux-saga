import React from "react";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector(state => state.users);

  return (
    <section id="sidebar" className="sidebar">
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Users;
