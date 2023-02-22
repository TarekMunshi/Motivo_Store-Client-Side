import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://motivo-store-server.vercel.app/usersReviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div className='mt-5 mb-5' id='review'>
            <div className="container">
                <h2 className='text-center'>Reviews From Buyers</h2>
                <div className="row gy-4 mt-4">
                    {
                        reviews.map(review =>
                            <div className="col-lg-4" key={review._id}>
                                <div className="card" style={{ boxShadow: '0 3px 5px rgb(0 0 0 / 0.2)' }}>
                                    <div className="card-body p-4">
                                        <h5 className="card-title text-center">“{review.comment}”</h5>
                                        <h5 className="card-text text-center">
                                            <Rating
                                                initialRating={review.rating}
                                                readonly
                                                emptySymbol="far fa-star text-warning"
                                                fullSymbol="fas fa-star text-warning "
                                            />
                                        </h5>
                                        <h6 className="card-text text-center"><small>{review.name}</small></h6>
                                        <h6 className="card-text text-center"><small>{review.email}</small></h6>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default Review;

