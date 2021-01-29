// ARRAY bisa berupa string, number, objek, function, campuran

let nilai = [
    { nama: "Armin", ipa: 95, bahasa: 80, mat: 90, bing: 85 },
    { nama: "Asa", ipa: 90, bahasa: 85, mat: 90, bing: 95 },
    { nama: "Ren", ipa: 80, bahasa: 80, mat: 80, bing: 85 },
    { nama: "Jean", ipa: 85, bahasa: 80, mat: 75, bing: 80 },
]; //array object

let nama = ["Armin", "Asa", "Ren", "Jean"];

nama.push("Annie", "Zeke");
nama.unshift("Marcel", "Porco");

//console.log(nama.slice(3, 7));

//console.log(nama.shift());
//console.log(nama.pop());

//console.log(nama.splice(0, 2));

//console.log(nilai[0].nama);
//console.log(nama);

let mapel = ["ipa", "bahasa", "mat", "bing"];

//console.log(nama.concat(mapel));
//console.log(nama.concat(["bakor", "sejarah", "pkn"]));

// nama.forEach(function (a) {
//     console.log(a);
// });

//nama.forEach(a => console.log(a));

// nilai.filter(function (a) {
//     if (a.ipa > 85) {
//         console.log(a);
//     }
// });

//if dengan 1 baris
// nilai.filter(n => n.mat > 85 ? console.log(n) : null);

//console.log(nilai);

//if dua kondisi dengan 1 baris
//nilai.filter(n => n.mat > 85 && n.bing > 90 ? console.log(n) : null);

// let siswa = nilai.map(function (a) {
//     return a.nama;
// })

// let siswa = nilai.map(a => [a.mat, a.bing, a.bahasa, a.ipa]);

// console.log(siswa);

// mapel.sort();
// console.log(mapel);


// let hasil = nilai.reduce(function (a, b) {
//     return (a = a + b.mat);
// }, 0)

let hasil = nilai.reduce((a, b) => (a += b.bing), 0);

console.log(hasil);






