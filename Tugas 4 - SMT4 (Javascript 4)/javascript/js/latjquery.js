// $(document).ready(function () {
//     console.log("Okee!");
// });

$(function () {
    $("#isi").html("<h1>Belajar jQuery</h1>");

    $("#klik").click(function (e) {
        e.preventDefault();
        alert("belajar jQuery")
    });

    $("#isi").mouseleave(function () {
        alert("mouse leave");
        console.log("mouse");
    });
});