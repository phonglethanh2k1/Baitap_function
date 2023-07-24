function tinhThue() {
    var tongThuNhapNam = document.getElementById("tong-thu-nhap-nam").value * 1;
    var soNguoiPhuThuoc = document.getElementById("so-nguoi-phu-thuoc").value * 1;

    var thuNhapChiuThue = tongThuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
    var thue;

    if (thuNhapChiuThue <= 0) {
        thue = 0;
    } else if (thuNhapChiuThue <= 60000000) {
        thue = thuNhapChiuThue * 0.05;
    } else if (thuNhapChiuThue <= 120000000) {
        thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
    } else if (thuNhapChiuThue <= 216000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
    } else if (thuNhapChiuThue <= 384000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 96000000 * 0.15 + (thuNhapChiuThue - 216000000) * 0.2;
    } else if (thuNhapChiuThue <= 624000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 96000000 * 0.15 + 168000000 * 0.2 + (thuNhapChiuThue - 384000000) * 0.25;
    } else if (thuNhapChiuThue <= 960000000) {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 96000000 * 0.15 + 168000000 * 0.2 + 240000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.3;
    } else {
        thue = 60000000 * 0.05 + 60000000 * 0.1 + 96000000 * 0.15 + 168000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapChiuThue - 960000000) * 0.35;
    }

   document.getElementById("result").innerHTML = `<h2 class="text-warning mt-3">Tiền thuế thu nhập là ${thue}</h2>`
}