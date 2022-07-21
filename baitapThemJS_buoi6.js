//! Bài tập 5: In số nguyên tố
document.getElementById('btnInSo').onclick = function() {
    var num = Number(document.getElementById('nhapSo').value);
    var ketQua = '';
    for (var i = 2; i <= num; i++) {
        if (checkSNT(i)) {
            ketQua += `${i}, `;
        }   
    }
    document.getElementById('hienThiSoNT').innerHTML = ketQua;
}


function checkSNT(x) {
    var checkSNT = true;
    for (var i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            checkSNT = false;
            break;
        } 
    }
    return checkSNT;
}



