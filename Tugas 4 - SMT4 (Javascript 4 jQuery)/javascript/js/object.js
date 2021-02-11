let obj = {
    nama: "sasha brause",
    telp: "003 221",

    makanan: ["kentang", "roti", "daging"],

    vanilla: function () {
        return "rasanya enak";
    },

    oke: true,
    "tulis saja": 777879,
};

console.log(obj.nama);
console.log(obj.telp);
console.log(obj.makanan[0]);
console.log(obj.vanilla());
console.log(obj.oke);
console.log(obj["tulis saja"]);
