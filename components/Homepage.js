import PropTypes from "prop-types"
import Feed from "./Feed"
import Button from "../shared/Button"
import Header from "./Header"

const Homepage = ({ setToken, user, setUser }) => {
    const {
        name,
    } = user
    

  return (
    <div className="Homepage">
    <Header setToken={setToken} />
      <h1>Hello {name}!</h1>
      <Feed />
    </div>
  )
}

Homepage.propTypes = {
  handleLogin: PropTypes.func,
}

export default Homepage;
