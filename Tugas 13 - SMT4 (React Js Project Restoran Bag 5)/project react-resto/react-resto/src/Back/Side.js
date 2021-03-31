import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Side = () => {

    const { url } = useRouteMatch();

    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">
                    Menu Aplikasi
                </div>
                <ul className="list-group list-group-flush">

                    <Link to={`${url}/Kategori`}>
                        {
                            (sessionStorage.getItem('level') === 'admin') ? (<li className="list-group-item">Kategori</li>) : ""
                        }
                    </Link>


                    <Link to={`${url}/Menu`}>
                        {
                            (sessionStorage.getItem('level') === 'admin') ? (<li className="list-group-item">Menu</li>) : ""
                        }
                    </Link>

                    <Link to={`${url}/Pelanggan`}>
                        {
                            (sessionStorage.getItem('level') === 'admin') ? (<li className="list-group-item">Pelanggan</li>) : ""
                        }
                    </Link >

                    <Link to={`${url}/Order`}>
                        {
                            (sessionStorage.getItem('level') === 'admin') || (sessionStorage.getItem('level') === 'kasir')
                                ? (<li className="list-group-item">Order</li>) : ""
                        }

                    </Link >

                    <Link to={`${url}/Detail`}>
                        {
                            (sessionStorage.getItem('level') === 'admin') || (sessionStorage.getItem('level') === 'kasir') || (sessionStorage.getItem('level') === 'koki')
                                ? (<li className="list-group-item">Order Detail</li>) : ""
                        }

                    </Link >

                    <Link to={`${url}/User`}>
                        {
                            (sessionStorage.getItem('level') === 'admin') ? (<li className="list-group-item">User Admin</li>) : ""
                        }
                    </Link >

                </ul >
            </div >

        </div >
    );
}

export default Side;
