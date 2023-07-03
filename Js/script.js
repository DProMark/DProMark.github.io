const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', function() {
  localStorage.setItem("formActive", "true");
  window.location.href = '../index.html';
});