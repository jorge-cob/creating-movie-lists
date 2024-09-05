import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="navbar">
      <SearchBar />
      <Link to={'/mylists'}>My lists</Link>
    </div>
  )
}

export default NavBar