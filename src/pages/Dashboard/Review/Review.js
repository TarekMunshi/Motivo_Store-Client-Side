import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
const Review = () => {
    const { user } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://motivo-store-server.vercel.app/usersReviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Review Post Successful')
                    reset()
                }
            })
    };
    return (
        <div>
            <h3 className='text-center'>Your Feedback About Our Services</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class='row d-flex justify-content-center'>
                    <div className="col-lg-6 gy-3">
                        <input class="form-control mt-2" placeholder='Your Name' defaultValue={user.displayName} {...register("name", { required: true })} />
                        <input class="form-control mt-2" placeholder='Your Email' type='email' value={user.email} {...register("email", { required: true })} />
                        <textarea class="form-control mt-2" placeholder='Your Comment' {...register("comment", { required: true })} />
                        <input class="form-control mt-2" placeholder='Your Rating' type='number' defaultValue='1' min='1' max='5' step='0.1' {...register("rating", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div>
                            <input class="btn btn-primary mt-2" type="submit" value='Post' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Review;