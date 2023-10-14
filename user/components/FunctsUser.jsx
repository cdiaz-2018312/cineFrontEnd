import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';
import { Button } from "react-bootstrap";

export const FunctsUser = () => {

    const [functs, setFuncts] = useState(null);
    const token = localStorage.getItem("token");
    useEffect(() => {
        const getFunctionsByUser = async () => {
            try {
                const listFunctions = await axios.get(`http://localhost:8080/api/user/getFunctUser`, {headers:{'x-token': token}});
                setFuncts(listFunctions.data.usersWithFuncts);  
                console.log(listFunctions.data.usersWithFuncts);
              } catch (error) {
                console.log(error);
              }
        };

        getFunctionsByUser();
    }, []);

    return (
        <div>
         <h1>Functions</h1>
         <Link
          aria-current="page"
          to="/addFunct"
             > <Button >Add Function</Button>
        </Link>             
        <CardGroup>
            {functs && functs.map((func, index) => (
                <Card key={index}>
                    <Card.Img variant="top" src={func.movie.image} />
                    <Card.Body>
                        <Card.Title>{func.id}</Card.Title>
                        <Card.Text>
                            Date: {func.date}
                        </Card.Text>
                        <Card.Text>
                            Movie: {func.movie.title}
                        </Card.Text>
                        <Card.Text>
                            Class: {func.movie.class}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </CardGroup>
    </div>
    );
}