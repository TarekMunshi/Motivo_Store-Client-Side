import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = user => {
        fetch('https://motivo-store-server.vercel.app/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    reset()
                    alert('Made Admin Successful')
                }
            })

    };
    return (
        <div>
            <h2 className='text-center'>Make Admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class='row d-flex justify-content-center'>
                    <div className="col-lg-4 gy-3">
                        <input class="form-control mt-2" placeholder='Your Email' type='email' {...register("email", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div>
                            <input class="btn btn-primary mt-2" type="submit" value='Make Admin' />
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default MakeAdmin;