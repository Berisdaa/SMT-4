import React, { useState, useEffect } from 'react';
import { link } from '../Axios/link';
import { useForm } from 'react-hook-form';


const Kategori = () => {
    const [isi, setIsi] = useState([]);
    const [pesan, setPesan] = useState(['']);
    const [idkategori, setIdkategori] = useState(['']);
    const [pilihan, setPilihan] = useState(true);

    const { register, handleSubmit, reset, errors, setValue } = useForm();

    async function fetchData() {
        const request = await link.get('/Kategori');
        setIsi(request.data);
    }

    function simpan(data) {
        if (pilihan) {
            link.post('./Kategori', data).then(res => setPesan(res.data.pesan));
        } else {
            link.put('./Kategori/' + idkategori, data).then(res => setPesan(res.data.pesan));
            setPilihan(true);
        }
        reset();
        fetchData();
    }

    async function hapus(id) {
        if (window.confirm('yakin akan menghapus data yang dipilih?')) {
            const res = await link.delete('/Kategori/' + id);
            setPesan(res.data.pesan);
        }
    }

    async function showData(id) {
        const res = await link.get('/Kategori/' + id);
        setValue('kategori', res.data[0].kategori);
        setValue('keterangan', res.data[0].keterangan);
        setIdkategori(res.data[0].idkategori);
        setPilihan(false);
    }

    fetchData();

    useEffect(() => {
        fetchData();
    }, []);

    let no = 1;

    return (
        <div>
            <div className="row">
                <h2>{pesan}</h2>
            </div>
            <div className="row">
                <h2>Data Kategori</h2>
            </div>
            <div className="row">
                <div className="col-4">
                    <form onSubmit={handleSubmit(simpan)}>
                        <div className="mb-3">
                            <label htmlFor="kategori" className="form-label">
                                Kategori
                        </label>
                            <input
                                type="text"
                                className="form-control"
                                name="kategori"
                                placeholder="isi kategori"
                                ref={register({ required: true })} />
                        </div>

                        {errors.kategori && "Kategori Harus Di Isi!"}

                        <div className="mb-3">
                            <label htmlFor="keterangan" className="form-label">
                                Keterangan
                        </label>
                            <input
                                type="text"
                                className="form-control"
                                name="keterangan"
                                placeholder="isi keterangan"
                                ref={register({ required: true })} />
                        </div>

                        <div className="mb-3">
                            <input
                                type="submit"
                                className="btn btn-success"
                                name="submit"
                            />
                        </div>
                    </form>
                </div>

            </div>
            <div className="row">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Kategori</th>
                            <th>Keterangan</th>
                            <th>Hapus</th>
                            <th>Ubah</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            isi.map((val, index) => (
                                <tr key={index}>
                                    <td>{no++}</td>
                                    <td>{val.kategori}</td>
                                    <td>{val.keterangan}</td>
                                    <td>
                                        <button onClick={() => hapus(val.idkategori)} className="btn btn-danger">Hapus</button>
                                    </td>
                                    <td>
                                        <button onClick={() => showData(val.idkategori)} className="btn btn-warning">Ubah</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>


                </table>
            </div>

        </div>
    );
}

export default Kategori;
