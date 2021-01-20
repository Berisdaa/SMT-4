// ARROW FUNCTION 

let fungsi = function (nama) {
    console.log("Belajar Function " + nama);
}

fungsi("Mikasa");

let contoh = (nama) => {
    console.log("Belajar Function " + nama);
}

contoh("Eren");

let tambah = function (r, m) {
    return r + m;
}

console.log(tambah(7, 1));

let plus = (r, m) => r + m;
console.log(plus(9, 3));

let hasil = a => a * 7;
console.log(hasil(5));

let lagi = () => console.log("coba lagi");
lagi();

let belajar = () => {
    console.log("Baris Satu");
    console.log("Baris Dua");
    console.log("Baris Tiga");
    console.log("Baris Selanjutnya");
}
belajar();

let nilai = 73;
let uji = (nilai < 85) ? () => (predikat = "GAGAL") : () => (predikat = "LULUS");
console.log(uji());