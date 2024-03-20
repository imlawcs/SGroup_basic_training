function login() {
    const username0 = document.getElementById("Login-username").value;
    const password0 = document.getElementById("Login-password").value;

    let storedData = JSON.parse(localStorage.getItem('loginArray'))
    
    var count = 0;
    for (var i = 0; i < storedData.length; i++){
        if(username0 == storedData[i].username && password0 == storedData[i].password) count++;
    }

    if (count) {
        alert('Đăng nhập thành công!');
        // redirectToNewPage();
        window.location.href = "https://www.facebook.com/"
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Login-button").addEventListener("click", login)
});

// function redirectToNewPage() {
//     const token = localStorage.getItem("token")
//     console.log(token);
//     if(token) {
//         window.location.href = "abc.html"
//     }
//     else {
//         console.log("Token not found in localStorage");
//     }
// }

// localStorage.setItem('username', 'admin');
// localStorage.setItem('password', 'admin123');