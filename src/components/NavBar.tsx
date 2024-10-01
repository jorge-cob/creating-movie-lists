import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 space-x-8">
        <SearchBar />
        <Link 
          to={'/mylists'}
          className="text-white font-bold hover:text-gray-700 hover:underline"
        >
          My lists
        </Link>
      </div>
    </nav>
  )
}

export default NavBar