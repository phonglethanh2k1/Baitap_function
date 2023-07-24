function handleResult(diemChuan1, diemChuan2, diemChuan3) {   
    var diemChuan = document.getElementById("nhap-diem-chuan").value * 1;
    var diem1 = document.getElementById("diem-1").value * 1;
    var diem2 = document.getElementById("diem-2").value * 1;
    var diem3 = document.getElementById("diem-3").value * 1;
    var sum = diem1 + diem2 + diem3;
    var ketQua = "";
    if (diem1 === 0 || diem2 === 0 || diem3 === 0) {
        ketQua = document.getElementById("result").innerHTML = `<h2 class="btn btn-warning mt-3">Bạn đã rớt do có điểm nhỏ hơn hoặc bằng 0</h2>`;
    }
    else if (sum < diemChuan) {
        ketQua = document.getElementById("result").innerHTML = `<h2 class="btn btn-warning mt-3">Bạn đã rót, tổng điểm của bạn là ${sum}</h2>`;
    }
    else if  (sum >= diemChuan) {
        ketQua = document.getElementById("result").innerHTML = `<h2 class="btn btn-warning mt-3">Bạn đã đậu , tổng điểm của bạn là ${sum}</h2>`;
    }
}