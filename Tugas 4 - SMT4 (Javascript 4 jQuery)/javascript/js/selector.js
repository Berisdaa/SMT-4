//ELECTOR SWITCH

const hari = 7;
let hasil;

switch (hari) {
    case 1:
        hasil = "Minggu";
        break;
    case 2:
        hasil = "Senin";
        break;
    case 3:
        hasil = "Selasa";
        break;
    case 4:
        hasil = "Rabu";
        break;
    case 5:
        hasil = "Kamis";
        break;
    case 6:
        hasil = "Jumat";
        break;
    case 7:
        hasil = "Sabtu";
        break;

    default:
        hasil = "Day Not Found";
        break;
}

console.log(hasil);



const month = "November"
let bulan;

switch (month) {
    case "Januari":
        bulan = 1;
        break;
    case "Februari":
        bulan = 2;
        break;
    case "Maret":
        bulan = 3;
        break;
    case "April":
        bulan = 4;
        break;
    case "Mei":
        bulan = 5;
        break;
    case "Juni":
        bulan = 6;
        break;
    case "Juli":
        bulan = 7;
        break;
    case "Agustus":
        bulan = 8;
        break;
    case "September":
        bulan = 9;
        break;
    case "Oktober":
        bulan = 10;
        break;
    case "November":
        bulan = 11;
        break;
    case "Desember":
        bulan = 12;
        break;

    default:
        bulan = "Month Not Found";
        break;
}

console.log(bulan);