const loginBtn = document.getElementById("loginBtn");
const userInputEmail = document.getElementById("email");
const userInputPassword = document.getElementById("password");

// // 初期表示
window.addEventListener("load", () => {
    if (localStorage.getItem("userEmail")) {
        userInputEmail.value = localStorage.getItem("userEmail");
    }
    if (localStorage.getItem("userPassword")) {
        userInputPassword.value = localStorage.getItem("userPassword");
    }
});

// ログインボタンがクリックされたときの処理
loginBtn.addEventListener("click", () => {
    let userEmail = userInputEmail.value;
    let userPassword = userInputPassword.value;
    console.log(userEmail,userPassword)

    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userPassword', userPassword);
});