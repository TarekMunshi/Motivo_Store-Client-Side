import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/OnePlus7T-Thumbnail.jpg'
import banner2 from '../../../images/New Project.jpg'
import banner3 from '../../../images/pixel_4_concept_colors_1.jpg'
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Carousel fade id='home'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='carousel-text'>
                    <p className='text-black'>Your Best Shot.</p>
                    <h3 className='text-black fw-bolder'>OnePlus+ Available</h3>
                    <Link to='/explore'> <button className='btn btn-primary mt-2'>Shop Now</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='carousel-text'>
                    <p>Let the holidays be for everyone.</p>
                    <h3 className='fw-bolder'>Apple iPhones Available</h3>
                    <Link to='/explore'> <button className='btn btn-primary mt-2'>Shop Now</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='carousel-text'>
                    <p>Great gifts for photo takers.</p>
                    <h3 className='text-warning fw-bolder'>Google Phones Available</h3>
                    <Link to='/explore'> <button className='btn btn-primary mt-2'>Shop Now</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    );
};

export default Banner;