import React, { useState } from "react";
import { sendData } from "../helpers/usersHelper";
import { user } from "../model/user";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";

export const CreateUser = () => {
    const [agregar, setAgregar] = useState(user);
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData( agregar , 1, 0);
    };

    return (
        <>
            <div className="container table-container">
                <br /><br />
                <Link to="/home"><Button className=''>Back</Button></Link>
                <h1 id="create-tarea">Create User</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        name: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label className="text-black">Surname</label>
                        <input
                            type="text"
                            className="form-control"
                            name="surname"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        surname: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        email: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>


                    <div className="form-group">
                        <label className="text-black">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            name="password"
                            onChange={(event) =>
                                setAgregar({
                                    user: {
                                        ...agregar.user,
                                        password: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="form-group">
                        <label className="text-black">cellphone</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cellphone"
                            onChange={(event) =>
                                setAgregar({
                                user: {
                                        ...agregar.user,
                                        cellphone: event.target.value,
                                    },
                                })
                            }
                        ></input>
                    </div>

                    <div className="container text-center">
    <button id="btn-enviar" type="submit" className="btn btn-success">
        Enviar
    </button>
</div>
                    <br /><br />
                </form>
            </div>
        </>
    );
};