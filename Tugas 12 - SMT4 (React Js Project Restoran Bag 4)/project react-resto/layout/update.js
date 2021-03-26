import { link } from './link.js';

export function update() {
    let id = 1;
    let data = {
        pelanggan: 'Acha',
        alamat: 'Tanggerang',
        telp: '083444763990'
    };

    link.put('/Pelanggan/' + id, data).then(res => {
        let tampil = `<h1>${res.data.pesan}</h1>`;
        document.querySelector('#out').innerHTML = tampil;
    });

}