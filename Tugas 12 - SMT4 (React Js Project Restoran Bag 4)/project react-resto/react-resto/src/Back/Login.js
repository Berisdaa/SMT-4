import React from 'react';
import { useForm } from 'react-hook-form';
import { link } from '../Axios/link';

const Login = () => {

    const { register, handleSubmit, reset } = useForm();

    async function login(data) {
        const res = await link.post('/login', data);
        console.log(res);
        reset();
    }

    return (
        <div>
            <div className="row mt-5">
                <div className="mx-auto col-4 ">
                    <h1>Login User</h1>
                    <form onSubmit={handleSubmit(login)}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="isi email"
                                aria-describedby="emailHelp"
                                ref={register({ required: true })}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="isi password"
                                name="password"
                                ref={register({ required: true })}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;
