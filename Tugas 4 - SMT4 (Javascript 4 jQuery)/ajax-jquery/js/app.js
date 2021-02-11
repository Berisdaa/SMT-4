$(document).ready(function () {

    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";

    $("#submit").click(function (e) {
        e.preventDefault();
        id = "";
        id = $("#id").val();
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            insertData();
        } else {
            updateData();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });

    $("#btn-tambah").click(function (e) {
        e.preventDefault();

        $("#title").html("<h3>Tambah Data</h3>");

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");

    });

    $("tbody").one("click", ".btn-del", function () {
        let id = $(this).attr("data-id");
        if (confirm("Yakin Akan Menghapus Data?")) {
            deleteData(id);
        }

    });

    $("tbody").one("click", ".btn-up", function () {
        let id = $(this).attr("data-id");
        $("#title").html("<h3>Update Data</h3>");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan: id
        }

        $.ajax({
            type: "pos",
            url: "php/selectupdate.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            //dataType: "dataType",
            success: function (response) {
                let data = JSON.parse(response);

                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);
            }
        });

        selectData();
    }

    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            cache: false,
            dataType: "json",
            success: function (response) {
                let out = "";
                let no = 1;
                $.each(response, function (key, val) {
                    out += `<tr>
                        <td>${no++}</td>
                        <td>${val.pelanggan}</td>
                        <td>${val.alamat}</td>
                        <td>${val.telp}</td>
                        <td><button type="button" class="btn btn-danger btn-del" data-id=${val.idpelanggan}>DELETE</button></td>
                        <td><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-warning btn-up" data-id=${val.idpelanggan
                        }>UPDATE</button></td>
                    </tr>`;
                });

                $("#isidata").html(out);
            }
        });
    }

    function insertData() {
        let dataPelanggan = {
            pelanggan: pelanggan,
            alamat: alamat,
            telp: telp
        }

        $.ajax({
            type: "pos",
            url: "php/insert.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
    }

    function deleteData(id) {
        let idpelanggan = {
            idpelanggan: id
        }

        $.ajax({
            type: "pos",
            url: "php/delete.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
    }

    function updateData() {
        let dataPelanggan = {
            idpelanggan: id,
            pelanggan: pelanggan,
            alamat: alamat,
            telp: telp
        }

        $.ajax({
            type: "pos",
            url: "php/update.php",
            cache: false,
            data: JSON.stringify(dataPelanggan),
            //dataType: "dataType",
            success: function (response) {
                let out = `<p>${response}</p>`
                $("#msg").html(out);
            }
        });

        selectData();
    }

    selectData();

});