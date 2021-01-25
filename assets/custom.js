const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginPage = document.getElementById("login-page");
  loginPage.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
  const bankingArea = document.getElementById("banking-area");
  bankingArea.style.display = "block";
});
