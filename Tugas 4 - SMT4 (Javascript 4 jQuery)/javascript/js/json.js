document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {
    let url = "js/tblmenu.json"
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        //.then(response => response.json())
        //.then(json => console.log(json))
        .then(function (data) {
            let output = "<h1>DATA MENU <table></h1><th>Menu</th><th>Harga</th><th>Rasa</th>";
            data.forEach(element => {
                output += `<tr>
                    <td>${element.menu}</td>
                    <td>${element.harga}</td>
                    <td>${element.rasa[0]}</td>
                </tr>`;
            });
            output += "</table>";
            document.querySelector("#isi").innerHTML = output;

        });

}


// let tblmenu = [
//     {
//         "idmenu": 2,
//         "idkategori": 2,
//         "menu": "Es Teh",
//         "harga": 2500,
//         "rasa": ["leci", "lemon", "jasmine"],
//         "stok": true,
//         "keterangan": null
//     },
//     {
//         "idmenu": 4,
//         "idkategori": 4,
//         "menu": "Pancake",
//         "harga": 7000,
//         "rasa": ["coklat", "keju", "kacang", "vanilla"],
//         "stok": false,
//         "keterangan": null
//     }
// ]

//console.log(tblmenu[1].menu);