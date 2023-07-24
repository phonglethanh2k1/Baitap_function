function tinhTienDien() {
    var soDien = document.getElementById("soKw").value * 1;
    var giaTien;
    if (soDien <= 50) {
        giaTien = soDien * 500;
    } else if (soDien <= 100) {
        giaTien = 50 * 500 + (soDien - 50) * 650;
    } else if (soDien <= 150) {
        giaTien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
    } else {
        giaTien = 50 * 500 + 50 * 650 + 50 * 850 + (soDien - 150) * 1100;
    }
    document.getElementById("result").innerHTML = `<h2 class="btn btn-warning mt-3">số tiền điện là ${giaTien}</h2>`
}