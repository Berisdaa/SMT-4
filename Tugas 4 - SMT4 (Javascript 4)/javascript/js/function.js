//FUNCTION

function coba() {
    let belajar = "Saya Belajar Js";
    console.log(belajar);
    console.log("Javascript itu ya gitu");
}

for (let i = 0; i < 4; i++) {
    coba();
}

console.log("=======================================");

function persegi(p, l) {
    luas = p * l;
    console.log(luas);
}

persegi(7, 3);

console.log("=======================================");

function out() {
    return console.log("Output Function");
}

out();

console.log("=======================================");


function lingkaran(r) {
    luas = 3.14 * r * r;
    return luas;
}

console.log(lingkaran(10) * 7);


console.log("=======================================");


const tinggi = 7;
let tabung = lingkaran(12) * tinggi;
console.log(tabung);


console.log("=======================================");

function lewat(a) {
    return a;
}

console.log(lewat(17));
