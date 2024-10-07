import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { NavbarContent, Navbar, NavbarBrand, Image, NavbarItem } from "@nextui-org/react";

const NavBar = () => {
  return (
    <Navbar className="bg-blue-500 border-gray-200 dark:bg-gray-900">
        <NavbarBrand>
          <Image width="30px" height="30px"   src="../../logo.svg"  alt="fireSpot"/>
          <p className="font-bold text-inherit pl-10">MisPelis</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <SearchBar />
          </NavbarItem>
          <NavbarItem>
            <Link 
              to={'/mylists'}
              className="text-white font-bold hover:text-gray-700 hover:underline"
            >
              My lists
            </Link>
          </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default NavBar