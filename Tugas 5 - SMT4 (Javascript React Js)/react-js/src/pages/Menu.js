import { useState } from 'react';
import Tabel from './Tabel';

function Menu() {
    const title = "Daftar Menu Restoran";
    const [menus, setMenu] = useState(
        [
            {
                idmenu: 13,
                idkategori: 3,
                menu: "Anggur",
                gambar: "anggur.jpg",
                harga: 10000
            },
            {
                idmenu: 14,
                idkategori: 3,
                menu: "Pisang",
                gambar: "pisang.jpg",
                harga: 3000
            },
            {
                idmenu: 6,
                idkategori: 1,
                menu: "Ayam Bakar",
                gambar: "ayam-bakar.jpg",
                harga: 14000
            },
            {
                idmenu: 7,
                idkategori: 1,
                menu: "Sate Ayam",
                gambar: "sate.jpg",
                harga: 12000
            },
            {
                idmenu: 2,
                idkategori: 2,
                menu: "Es Teh",
                gambar: "es-teh2.jpg",
                harga: 3000
            },
            {
                idmenu: 11,
                idkategori: 2,
                menu: "Jus Alpukat",
                gambar: "alpukat.jpg",
                harga: 7000
            },
        ]

    )

    return (
        <div className="TabelMenu">

            <Tabel menu={menus} title={title} />

        </div>
    );
}

export default Menu;
