import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

const token = localStorage.getItem("token");
export const Profile = () => {
  const [user, setUser] = useState({});


  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/user/showById`, {headers:{'x-token': token}});
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserData();
  }, []);

  return (
    <div className="container mt-4 mb-4">
      <div className="section-wrapper">
        <section id="promo" className="promo section offset-header">
          <div className="container text-center">
            <h2 className="title">
              Mi <span className="highlight">User</span>
            </h2>
            <p className="intro">
              your User
            </p>
            <ul className="meta list-inline">
              <li className="list-inline-item"></li>
            </ul>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10" key={user._id}>
            <div className="card">
              <div className="card-body">
                <div className="row">
                <div className="circle-image">
  <img
    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    alt="fotoperfil"
    style={{ width: '400px', height: '400px' }}
  />
</div>
                  <div className="col-md-8">
                    <div>
                      <strong>Name:</strong> {user.name}{" "}
                    </div>
                    <div className="info-item">
                      <strong>Surname:</strong> {user.surname}
                    
                    </div>
                    <div className="info-item">
                      <strong>Email:</strong> {user.email}
                    </div>
                    <div className="info-item">
                      <strong>cellphone:</strong> {user.cellphone}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between">
              <Link
                  aria-current="page"
                  to="/functionsUser"
                  
                >
                  <Button
                    color="warning"
                    aria-current="page"
                    to="/functionsUser"
                   
                  >
                    Your Functions{" "}
                  </Button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};