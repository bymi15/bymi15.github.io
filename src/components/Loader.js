import React from 'react';
import { Container, Row, Spinner } from 'reactstrap';

const Loader = () => (
    <Container fluid className='d-flex' style={{ minHeight: '100vh' }}>
        <Row className='justify-content-center align-self-center w-100 text-center'>
            <Spinner color='primary' />
        </Row>
    </Container>
);

export default Loader;
