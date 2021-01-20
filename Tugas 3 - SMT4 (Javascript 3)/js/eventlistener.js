function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "belajar eventlistener";
    console.log("Coba eventlistener");
}

//judul.addEventListener("click", coba);


judul.onclick = coba;