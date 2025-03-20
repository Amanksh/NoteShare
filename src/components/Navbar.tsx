import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className=" navbar w-[90%] mx-auto rounded-lg  shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 gap-2 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink to={"/notes"} className="btn btn-dash rounded-md">
              Notes
            </NavLink>
            <NavLink to={"/books"} className="btn btn-dash rounded-md ">
              Books
            </NavLink>
            <NavLink to={"/dashboard"} className="btn btn-dash rounded-md">
              Dashboard
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">NoteShare</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">
          <NavLink to={"/notes"} className="btn btn-dash rounded-md ">
            Notes
          </NavLink>
          <NavLink to={"/books"} className="btn btn-dash  rounded-md">
            Books
          </NavLink>
          <NavLink to={"/dashboard"} className="btn btn-dash rounded-md">
            Dashboard
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {isAuthenticated ? (
          <>
            <NavLink to={"/profile"}>
              <Avatar>
                <AvatarImage src={user?.picture} alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </NavLink>
            <button
              className="btn btn-outline btn-error"
              onClick={() => logout()}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="btn btn-outline "
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
