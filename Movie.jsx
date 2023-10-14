import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import axios from 'axios';
import { Card, CardGroup } from 'react-bootstrap';

export const Movies = () => {

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const getFunctions = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/movie/getMovies');
                setMovie(response.data.movieList);
            } catch (error) {
                console.error(error);
            }
        };

        getFunctions();
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            <CardGroup>
                {movie && movie[1].map((movie, index) => (
                    <Card key={index}>
                        <Card.Img variant="top" src={movie.image} />
                        <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
                            <Card.Text>
                                 Classify: {movie.class}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </div>
    );
}