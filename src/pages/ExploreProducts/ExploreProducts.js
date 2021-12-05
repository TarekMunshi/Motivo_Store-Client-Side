import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import ExploreModal from '../Shared/ExploreModal/ExploreModal';

const ExploreProducts = ({ explore }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
            <Col className=' d-flex justify-content-center align-items-center'>
                <Card className='d-flex  align-items-center pt-2 w-75 h-100 custom-card border-0'>
                    <Image src={explore.img} className='w-25' />
                    <Card.Body className='text-center'>
                        <Card.Title>{explore.name}</Card.Title>
                        <span>{explore.ram}/{explore.rom}</span>
                        <Card.Text>
                            {explore.features}
                        </Card.Text>
                        <Card.Title>${explore.price}</Card.Title>
                        <button onClick={handleOpen} type="button " className="btn btn-primary">Buy Now</button>
                    </Card.Body>
                </Card>
            </Col>
            <ExploreModal
                open={open}
                handleClose={handleClose}
                explore={explore}
            >
            </ExploreModal>
        </div>
    );
};

export default ExploreProducts;