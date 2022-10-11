import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/user/userContext";

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          href="@!"
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          key={user.id}
          onClick={(e) => {
            e.preventDefault();
            getProfile(user.id);
          }}
        >
          <img
            src={user.avatar}
            className="img-fluid mr-4 rounded-circle"
            width="70"
          />
          <p>{`${user.first_name} ${user.last_name}`}</p>
        </a>
      ))}
    </div>
  );
};

export default UserList;
