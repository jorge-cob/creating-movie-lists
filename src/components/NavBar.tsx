import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { NavbarContent, Navbar, NavbarBrand, Image, NavbarItem } from "@nextui-org/react";

const NavBar = () => {
  return (
    <Navbar maxWidth="full" className="bg-blue-500 border-gray-200 dark:bg-gray-900">
        <NavbarBrand className="max-w-56 ml-16">
          <Image width="36px" height="36px"   src="../../logo.svg"  alt="fireSpot"/>
          <p className="font-bold text-inherit text-3xl text-yellow-400 pl-2">MisPelis</p>
        </NavbarBrand>
        <NavbarContent className="ml-16" justify="start">
          <NavbarItem>
            <SearchBar />
          </NavbarItem>
          <NavbarItem>
            <Link 
              to={'/mylists'}
              className="text-gray-300 underline-offset-4 underline font-bold hover:text-gray-700 hover:underline"
            >
              My lists
            </Link>
          </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default NavBar