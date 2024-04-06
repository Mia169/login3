function generatePassword(len) {
    var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var alen = arr.length;
    var pass = "";
    for (var i = 0; i < len; i++) {
        pass += arr[Math.floor(Math.random() * alen)];
    }
    return pass;
}

window.onload = function () {
    var len = 12;
    document.getElementById("password-generator").addEventListener("click", function () {
        document.getElementById("pass").innerText = "Suggested password: " + generatePassword(len);
    });
};

let password = document.getElementById("password");
let power = document.getElementById("power-meter");
password.oninput = function () {
    let value = password.value;
    let arrayTest = [/[#,@,&,$,^,!,%]/, /[0-9]/, /[a-z]/, /[A-Z]/];
    let point = arrayTest.reduce((acc, item) => {
        if (item.test(value)) {
            return acc + 1;
        }
        return acc;
    }, 0);
    power.style.width = ["1%", "25%", "50%", "75%", "100%"][point];
    power.style.backgroundColor = ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"][point];
};