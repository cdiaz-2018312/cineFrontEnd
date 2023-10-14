import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';

const centrar = {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    justyfyText: "center", 
    minHeight: "100vh", 
  }
export const Funciones = () => {

    const [functs, setFuncts] = useState(null);
    useEffect(() => {
        const getFunctions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/function/getFunction');
                setFuncts(response.data.functionList);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getFunctions();
    }, []);

    return (
        <div className ={centrar}>
            <h1>Functions</h1>
            <CardGroup>
                {functs && functs[0].map((func, index) => (
                    <Card key={index}>
                        <Card.Img variant="top" src="https://cinemanahual.mx/wp-content/uploads/2022/06/NuestroCineNuestrasHistorias-posteroficial-683x1024.jpg" />
                        <Card.Body>
                        <Card.Text>
                               Id: {func._id}
                            </Card.Text>
                            <Card.Text>
                               Date: {func.date}
                            </Card.Text>
                            <Card.Text>
                                 MovieId: {func.movie}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </div>
    );
}