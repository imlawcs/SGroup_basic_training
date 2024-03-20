function register() {
    const username = document.getElementById("Register-username").value;
    const password = document.getElementById("Register-password").value;

    // var loginArray = new Array();
    let loginArray = JSON.parse(localStorage.getItem('loginArray')) || [];
    const loginInfo = { username, password };

    var count = 0;
    for (var i = 0; i < loginArray.length; i++){
        if(username == loginArray[i].username && password == loginArray[i].password) count++;
    }

    if(count == 0) {
        // Thêm thông tin đăng nhập vào mảng
        loginArray.push(loginInfo);

        // Lưu mảng vào local storage
        localStorage.setItem('loginArray', JSON.stringify(loginArray));
        window.location.href = "index1.html";
    }
    else {
        alert('Tài khoản đã tồn tại');
        window.location.href = "index.html";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Register-button").addEventListener("click", register)
});