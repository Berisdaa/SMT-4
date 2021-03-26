import useGet from '../Hook/useGet';
import useDelete from '../Hook/useDelete';

const Pelanggan = () => {

    const [isi] = useGet('/Pelanggan');
    const { hapus, pesan } = useDelete('/Pelanggan/');

    let no = 1;

    return (
        <div>
            <div className="row">
                <h3>Menu Pelanggan</h3>
            </div>

            <div className="row">
                <div>
                    <p>{pesan}</p>
                </div>
            </div>

            <div className="row">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Pelanggan</th>
                            <th>Alamat</th>
                            <th>Telp</th>
                            <th>Hapus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isi.map((val, index) => (
                            <tr key={index}>
                                <td>{no++}</td>
                                <td>{val.pelanggan}</td>
                                <td>{val.alamat}</td>
                                <td>{val.telp}</td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={() => hapus(val.idpelanggan)}
                                    >Del</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Pelanggan;
