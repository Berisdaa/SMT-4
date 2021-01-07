//PERCABANGAN IF ELSE

if (false) {
    console.log("Dijalankan Jika Benar");
} else {
    console.log("Dijalankan Jika Salah");
}

let nilai = 95;
let kkm = 85;
let success = "LULUS";
let fail = "TIDAK LULUS";
let batasatas = 100;
let batasbawah = 0;
let warning = "Nilai Salah";

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= kkm) {
        console.log(success);
    } else {
        console.log(fail);
    }
} else {
    console.log(warning);
}

