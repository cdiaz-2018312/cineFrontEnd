import React, { useState } from "react";
import { sendData } from "../helper/userFHelper";
import { idFunction } from "../model/idFunction";
import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";


export const CreateFunct = () => {
    const [agregar, setAgregar] = useState(idFunction);
    const handleSubmit = (event) => {
        event.preventDefault();
        sendData( agregar , 1, 0);
    };

    return (
        <>
            <div className="container table-container">
                <br /><br />
                <Link to="/functionsUser"><Button className=''>back</Button></Link>
                <h1 id="create-tarea">Add Function</h1>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">Id Function</label>
                        <input
                            type="text"
                            className="form-control"
                            name="idFunction"
                            onChange={(event) =>
                                setAgregar({
                                    idFunction: {
                                        ...agregar.idFunction,
                                        idFunction: event.target.value,
                                    },
                                })
                            }
                        />
                    </div>


                    <div className="container text-center">
    <button id="btn-enviar" type="submit" className="btn btn-success">
        Send
    </button>
</div>
                    <br /><br />
                </form>
            </div>
        </>
    );
};