import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
//.small-profile-image {
 // width: 10px;
//  height: 10px;
//}
const small = {
  width: "10px",
  height: "10px"
}

const NavbarUser = () => {
   const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/home";
  };
  return (
    <>
      <div className="contaaainer">
        <div id="sidebar">
          <div className="sidebar-header">
            {/* <Link to="/listaCuentas"> */}
              <h1 className="sidebar-title">Cine Charlys</h1>
            {/* </Link> */}
            <div className="circle-image">
  <img
    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    alt="fotoperfil"
    style={{ width: '50px', height: '50px' }}
  />
</div>
            {localStorage.getItem("token") && (
              <form className="w-25">
                <Link
                  aria-current="page"
                  to="/home"
                  onClick={() => logOut()}
                >
                  <Button
                    color="warning"
                    aria-current="page"
                    to="/"
                    onClick={() => logOut()}
                  >
                    Cerrar Sesion{" "}
                  </Button>
                </Link>

                <Link className='botoagregarUsuarios' to="/home">
                <Button
                    color="warning"
                    aria-current="page"
                  >
                  <i className="fa fa-user"></i>
                  <span className="tooltip">Home</span>
                  </Button>
                </Link>

                <Link className='botoagregarUsuarios' to="/movies">
                <Button
                    color="warning"
                    aria-current="page"
                  >
                  <i className="fa fa-user"></i>
                  <span className="tooltip">Movies</span>
                  </Button>
                </Link>

                    {"  "}

                <Link className='botoagregarUsuarios' to="/profile">
                <Button
                    color="warning"
                    aria-current="page"
                  >
                  <i className="fa fa-user"></i>
                  <span className="tooltip">Account</span>
                  </Button>
                </Link>

              </form>
            )}
          </div>

          <nav className="sidebar-navigation">
            <ul>
              <li className="">
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </>
  );
};

export default NavbarUser
