import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import BuyModal from '../../Shared/BuyModal/BuyModal';

const Product = ({ product }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user } = useAuth()
    return (
        <div>
            <Col className=' d-flex justify-content-center align-items-center'>
                <Card className='d-flex  align-items-center pt-2 w-75 h-100 custom-card border-0'>
                    <Image src={product.img} className='w-25' />
                    <Card.Body className='text-center'>
                        <Card.Title>{product.name}</Card.Title>
                        <span>{product.ram}/{product.rom}</span>
                        <Card.Text>
                            {product.features}
                        </Card.Text>
                        <Card.Title>${product.price}</Card.Title>
                        {user.email ? <button onClick={handleOpen} type="button " className="btn btn-primary">Buy Now</button> : <Link to='/login'>
                            <button type="button " className="btn btn-primary">Buy Now</button>
                        </Link>
                        }
                    </Card.Body>
                </Card>
            </Col>

            <BuyModal
                product={product}
                handleClose={handleClose}
                open={open}
            >
            </BuyModal>
        </div>
    );
};

export default Product;