import React from 'react';
import { useParams } from 'react-router-dom';
import Kategori from './Kategori';
import Pelanggan from './Pelanggan';
import Menu from './Menu';


const Content = () => {

    const { isi } = useParams();

    let tampil;

    if (isi === 'Kategori') {
        tampil = <Kategori />
    }

    if (isi === 'Menu') {
        tampil = <Menu />
    }

    if (isi === 'Pelanggan') {
        tampil = <Pelanggan />
    }

    return (
        <>
            {tampil}
        </>
    );
}

export default Content;
