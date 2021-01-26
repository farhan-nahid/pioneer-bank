// loginBtn Event Headers start

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginPage = document.getElementById("login-page");
  loginPage.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
  const bankingArea = document.getElementById("banking-area");
  bankingArea.style.display = "block";
});

// loginBtn Event Headers end

// depositBtn Event Headers start

const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit-amount").value;
  if (depositAmount === "") {
    alert("Please Enter a Value");
    return false;
  }
  const depositNumber = parseFloat(depositAmount);

  updateSpanText("current-deposit", depositNumber);
  updateSpanText("current-balance", depositNumber);

  document.getElementById("deposit-amount").value = "";
});

// depositBtn Event Headers end

// withdrawBtn Event Headers start

const withdrawBtn = document.getElementById("add-withdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw-amount").value;
  if (withdrawAmount === "") {
    alert("Please Enter a Value");
    return false;
  }
  const withdrawNumber = parseFloat(withdrawAmount);

  updateSpanText("current-withdraw", withdrawNumber);
  updateSpanText("current-balance", -1 * withdrawNumber);

  document.getElementById("withdraw-amount").value = "";
});

// withdrawBtn Event Headers end

//function
function updateSpanText(id, addedNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = addedNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;
}
