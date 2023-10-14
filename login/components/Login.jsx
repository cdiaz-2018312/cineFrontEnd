import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { apiLogin } from '../api/apiLogin.js';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const result = await apiLogin(email, password);
    if (result) {
      Swal.fire({
        icon: "success",
        title: "User Verified!",
        text: "loggin succesfull",
        confirmButtonText: "Ok",
      }).then((r) => {
        if (r.isConfirmed) {
          window.location.href = "/home";
        }
      });
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow>
        <MDBCol sm="6">
          <div className="d-flex flex-row ps-5 pt-5">
            <span id="title" style={{ paddingLeft: "80px" }} className="h1 fw-bold mb-0">
            LOGGIN
            </span>
          </div>
          <br></br>
            <br></br>

          <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
            <Link to="/home"><Button className='regresarAdmin'>Back</Button></Link>
            <br></br>
            <br></br>
            <br></br>
          
            <form onSubmit={handleLoginSubmit}>
              <MDBInput
                type="email"
                wrapperClass="mb-4 mx-5 w-100"
                label="email"
                placeholder="set your email"
                id="inemail"
                size="lg"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <MDBInput
                type="password"
                wrapperClass="mb-4 mx-5 w-100"
                className="form__field"
                label="Password"
                size="lg"
                id="inpassword"
                placeholder="your Password"
                value={password}
                onChange={(p) => setPassword(p.target.value)}
                required
              />

              <Button
                type="submit"
                className="mb-4 px-5 mx-5 w-100"
                color="info"
                size="lg"
              >
                readdy?
              </Button>
              <Link to="/createUser"><Button className='regresarAdmin'>New User?</Button></Link>
            </form>
          </div>
        </MDBCol>

        <MDBCol sm="6" className="d-none d-sm-block px-0">
          <img
            src="https://phantom-elmundo.unidadeditorial.es/d53a0099cbb836927bd0c904551b2c8e/crop/0x0/3072x2048/resize/473/f/webp/assets/multimedia/imagenes/2022/09/29/16644408864410.jpg"
            id="imagen-login"
            alt="Login image"
            className="w-100"
            style={{ objectFit: "cover", textAlign: "center" }}
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
