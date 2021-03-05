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
                        <li className="list-group-item">Kategori</li>
                    </Link>
                    <Link to={`${url}/Menu`}>
                        <li className="list-group-item">Menu</li>
                    </Link>
                    <Link to={`${url}/Pelanggan`}>
                        <li className="list-group-item">Pelanggan</li>
                    </Link >
                    <Link to={`${url}/Order`}>
                        <li className="list-group-item">Order</li>
                    </Link >
                    <Link to={`${url}/Detail`}>
                        <li className="list-group-item">Order Detail</li>
                    </Link >
                    <Link to={`${url}/AdminPage`}>
                        <li className="list-group-item">Admin</li>
                    </Link >

                </ul >
            </div >

        </div >
    );
}

export default Side;
