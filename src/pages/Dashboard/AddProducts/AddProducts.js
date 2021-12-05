import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://evening-island-27885.herokuapp.com/productsCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Added Successful')
                    reset()
                }
            })
        console.log(data)
    };
    return (
        <div>
            <h3 className='text-center'>Add Products</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class='row d-flex justify-content-center'>
                    <div className="col-lg-6 gy-3">
                        <input class="form-control mt-2" placeholder='Product Name'  {...register("name", { required: true })} />
                        <input class="form-control mt-2" placeholder='Product Features'   {...register("features", { required: true })} />
                        <div className="row">
                            <div className="col-lg-4">
                                <input class="form-control mt-2" placeholder='ROM'   {...register("rom", { required: true })} />
                            </div>
                            <div className="col-lg-4">
                                <input class="form-control mt-2" placeholder='RAM'   {...register("ram", { required: true })} />
                            </div>
                            <div className="col-lg-4">
                                <input class="form-control mt-2" placeholder='Price' type='number'   {...register("price", { required: true })} />
                            </div>
                        </div>
                        <input class="form-control mt-2" placeholder='Image Link'   {...register("img", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div>
                            <input class="btn btn-primary mt-2 pe-4 ps-4" type="submit" value='Add' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;