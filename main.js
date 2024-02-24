// Lấy modal
var loginModal = document.getElementById('loginModal');
var registerModal = document.getElementById('registerModal');

// Lấy nút mở modal
var loginButton = document.getElementById("loginButton");
var registerButton = document.getElementById("registerButton");

// Lấy phần tử <span> đóng modal
var span = document.getElementsByClassName("close")[0];

// Khi người dùng nhấn vào nút, mở modal 
loginButton.onclick = function() {
  loginModal.style.display = "block";
}

registerButton.onclick = function() {
  registerModal.style.display = "block";
}

// Khi người dùng nhấn vào <span> (x), đóng modal
span.onclick = function() {
  loginModal.style.display = "none";
  registerModal.style.display = "none";
}

// Khi người dùng nhấn bất kỳ nơi nào ngoài modal, đóng nó
window.onclick = function(event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
}
