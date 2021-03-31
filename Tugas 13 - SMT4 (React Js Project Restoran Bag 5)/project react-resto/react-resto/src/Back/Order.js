import React, { useState } from 'react';
import useGet from '../Hook/useGet';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { link } from '../Axios/link';

Modal.setAppElement('#root');

const Order = () => {

    let today = new Date().toISOString().slice(0, 10);

    const [mopen, setMopen] = useState(false);
    const [awal, setAwal] = useState('2021-01-01');
    const [akhir, setAkhir] = useState(today);
    const [isi] = useGet(`/Order/${awal}/${akhir}`);
    const { register, handleSubmit, setValue, errors } = useForm();
    const [total, setTotal] = useState(0);
    const [pelanggan, setPelanggan] = useState('');
    const [idorder, setIdorder] = useState('');

    let no = 1;

    function cari(data) {
        setAwal(data.tawal);
        setAkhir(data.takhir);
    }

    function filterData(id) {
        const data = isi.filter((val) => (val.idorder === id))
        setPelanggan(data[0].pelanggan);
        setTotal(data[0].total);
        setIdorder(data[0].idorder);
        setMopen(true);
    }

    function isiForm() {
        setValue('total', total);
    }

    async function simpan(data) {
        let hasil = {
            bayar: data.bayar,
            kembali: data.bayar - data.total,
            status: 1
        };
        const res = await link.put("/Order/" + idorder, hasil);
        setMopen(false);
    }


    return (
        <div>
            <Modal isOpen={mopen}
                onRequestClose={() => setMopen(false)}
                onAfterOpen={isiForm}
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
                    <h1>Pembayaran Order : {pelanggan}</h1>
                </div>

                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit(simpan)}>
                            <div className="mb-3">
                                <label htmlFor="total" className="form-label">
                                    Total Order
                        </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="total"
                                    placeholder="Total Biaya Order"
                                    ref={register({ required: true })} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="bayar" className="form-label">
                                    Bayar Pesanan
                        </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="bayar"
                                    placeholder="Bayar Disini"
                                    ref={register({ required: true, min: total })} />
                            </div>

                            {errors.bayar && "Pembayaran Kurang!"}

                            <div className="mb-3" >
                                <input
                                    type="submit"
                                    className="btn btn-success mr-2"
                                    name="submit"
                                    value="Bayar"
                                />
                                <input
                                    type="submit"
                                    className="btn btn-danger"
                                    name="batal"
                                    value="Batal"
                                    onClick={() => setMopen(false)}
                                />
                            </div>
                        </form>
                    </div>
                </div>

            </Modal>
            <div className="row">
                <div>
                    <h2>Data Order</h2>
                </div>
            </div>

            <div className="row">
                <form onSubmit={handleSubmit(cari)}>
                    <div className="mb-3">
                        <label htmlFor="tawal" className="form-label">
                            Tanggal Awal
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            name="tawal"
                            ref={register()} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="takhir" className="form-label">
                            Tanggal Akhir
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            name="takhir"
                            ref={register()} />
                    </div>

                    <div className="mb-4">
                        <input
                            type="submit"
                            className="btn btn-primary"
                            name="submit"
                        />
                    </div>
                </form>
            </div>

            <div className="row">
                <div>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>No</th>
                                <th>Faktur</th>
                                <th>Pelanggan</th>
                                <th>TglOrder</th>
                                <th>Total</th>
                                <th>Bayar</th>
                                <th>Kembali</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isi.map((val, index) => (
                                <tr key={index}>
                                    <td>{no++}</td>
                                    <td>{val.idorder}</td>
                                    <td>{val.pelanggan}</td>
                                    <td>{val.tglorder}</td>
                                    <td>{val.total}</td>
                                    <td>{val.bayar}</td>
                                    <td>{val.kembali}</td>
                                    <td>{
                                        val.status === 0 ? <button className="btn btn-success" onClick={() =>
                                            filterData(val.idorder)}>Belum Bayar</button> : <p>Lunas</p>
                                    }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default Order;
