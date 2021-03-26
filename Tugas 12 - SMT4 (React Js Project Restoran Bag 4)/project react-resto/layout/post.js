import { link } from './link.js';

export function post() {
    let data = {
        pelanggan: 'Aditya',
        alamat: 'Bekasi',
        telp: '081223000919'
    }

    link.post('/Pelanggan', data).then(res => {
        console.log(res)
        let tampil = `<h1>${res.data.pesan}</h1>`;
        document.querySelector('#out').innerHTML = tampil;
    });
}