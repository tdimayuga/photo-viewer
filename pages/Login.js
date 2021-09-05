import PropTypes from "prop-types";
import { useState } from "react";
import getUserInfo from "./api/LoginApi";

const Login = ({ setToken, setUser }) => {
  const [username, setUsername] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getUserInfo(username);

    if(result.length) {
      setUser(result[0])
      setToken(username)
    } 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

Login.propTypes = {
  setToken: PropTypes.func,
  setUser: PropTypes.func,
}

export default Login;
