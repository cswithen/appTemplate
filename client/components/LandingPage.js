import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export const LandingPage = () => {
  let history = useHistory()

  const {user} = useContext(AuthContext)

  const [username, setUsername] = useState('')
  console.log(user, username)

  return (
    <div>
      <h3>Welcome, {user.username}</h3>
    </div>
  );
};

export default LandingPage;
