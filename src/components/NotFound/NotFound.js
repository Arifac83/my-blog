import React from 'react';
import { Container } from '@material-ui/core';
import './NotFound.css';


const NotFound = () => {
    return (
        <Container className="notFound-container">
            <h2> Sorry ! This page is NotFound ... <br/> Please ! Try Again ...</h2>
        </Container>
    );
};

export default NotFound;