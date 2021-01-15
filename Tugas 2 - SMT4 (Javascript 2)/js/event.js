function tampil(b) {
    a = document.querySelector("p").innerText = "Belajar Event Js " + b;
    //a.innerText = "belajar event js";
    console.log("Belajar Event Js");
}

judul.onclick = function () {
    console.log("Belajar Event Js Menggunakan ID");
    document.querySelector(".isi").innerHTML = "Belajar Event Js Menggunakan ID";
}