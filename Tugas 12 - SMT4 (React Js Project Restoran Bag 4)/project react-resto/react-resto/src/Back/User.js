import React, { useState } from 'react';
import useGet from '../Hook/useGet';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { link } from '../Axios/link';

const User = () => {

    const [isi] = useGet('/User/');
    const [mopen, setMopen] = useState(false);
    const { register, handleSubmit, errors, reset } = useForm();
    const [pesan, setPesan] = useState(['']);


    let no = 1;

    function tambah() {
        setMopen(true);
    }

    async function status(id) {
        const data = isi.filter((val) => val.id === id);
        let stat = 0;
        if (data[0].status === 1) {
            stat = 0;
        } else {
            stat = 1;
        }

        let kirim = {
            status: stat
        }

        const res = await link.put('/User/' + id, kirim);
    }

    async function simpan(data) {
        let user = {
            email: data.email,
            password: data.password,
            level: data.level,
            relasi: 'back'
        }
        const res = await link.post('./register', user).then(res => setPesan(res.data.pesan));
        reset();
        setMopen(false);

    }

    return (
        <div>
            <div className="row">
                <h2>{pesan}</h2>
            </div>
            <Modal isOpen={mopen}
                onRequestClose={() => setMopen(false)}
                //onAfterOpen={isiForm}
                style={
                    {
                        overlay: {
                            background: 'transparent !important'
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%,-50%)',
                            width: '40%',
                        }
                    }
                }>

                <div className="row ml-1">
                    <div>
                        <h2>Input Data User</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="ml-2 col">
                        <form onSubmit={handleSubmit(simpan)}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email
                        </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="isi email"
                                    ref={register({ required: true })} />
                            </div>

                            {errors.email && "Email Harus Di Isi!"}

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                        </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="isi password"
                                    ref={register({ required: true })} />
                            </div>

                            <select name="level" ref={register} className="mb-3 form-control">
                                <option value="admin">admin</option>
                                <option value="kasir">kasir</option>
                                <option value="koki">koki</option>
                            </select>

                            <div className="mb-3">
                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    name="submit"
                                />
                            </div>
                        </form>
                    </div>
                </div>

            </Modal>

            <div className="row mb-2">
                <div>
                    <h2>Data User</h2>
                </div>
            </div>

            <div className="row mb-3">
                <div>
                    <input onClick={() => (tambah())} className="btn btn-primary" type="submit" value="Tambah" />
                </div>
            </div>

            <div className="row">
                <div>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>No</th>
                                <th>User</th>
                                <th>Level</th>
                                <th>Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {isi.map((val, index) => (
                                <tr key={index}>
                                    <td>{no++}</td>
                                    <td>{val.email}</td>
                                    <td>{val.level}</td>
                                    <td>{
                                        val.status === 1 ? (
                                            <input
                                                type="submit"
                                                value="ACTIVE"
                                                onClick={() => status(val.id)}
                                                className="btn btn-success"
                                            >
                                            </input>
                                        )
                                            : (
                                                <input
                                                    type="submit"
                                                    value="BANNED"
                                                    onClick={() => status(val.id)}
                                                    className="btn btn-danger"
                                                >
                                                </input>
                                            )
                                    }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default User;
