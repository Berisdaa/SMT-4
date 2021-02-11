let coba = function () {
    return "coba function";
}

let buah = ['apel', 'pisang', 'pear', 'mangga', 10, coba(),
    tes = () => "hasil return arrow function",
    function nama() {
        return "eren jaeger";
    }
];
console.log(buah);

console.log(buah[0]);

for (let i in buah) {
    console.log(buah[i]);

}

console.log(buah[6]());

console.log(buah[7]());