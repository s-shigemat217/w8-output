const loginBtn = document.getElementById("loginBtn");
const userInputEmail = document.getElementById("email");
const userInputPassword = document.getElementById("password");

// // 初期表示
window.addEventListener("load", () => {
    
});
// if (localStorage.getItem("userId")) {
//     userInputEmail.value = localStorage.getItem("userId");
// }
// // ログインボタンが押されたときの処理

// // Login押されたとき
// // 入力内容をローカルストレージに保存
// document.getElementById("login").addEventListener("click", function() {
//     const userId = document.getElementById("userId").value;
//     const password = document.getElementById("password").value;
//     const userData = {
//         userId: userId,
//         password: password
//     };
//     localStorage.setItem("userData", JSON.stringify(userData));
//     alert("ログインしました。");
// });


loginBtn.addEventListener("click", () => {
    let userEmail = userInputEmail.value;
    let userPassword = userInputPassword.value;
    console.log(userEmail,userPassword)
});