// loginBtn Event Headers start

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {

const email = document.getElementById ("email").value
const password = document.getElementById("password").value
// console.log(email ,  password);
if(email === "" || password === ""){
  console.log(email,password);
  alert ("Please Enter A value");
}else{
  prompt("Please Enter Your Name")
  confirm("Check Your Email Address & password again. If they are Valid Press in OK. Thank You. ")
  const loginPage = document.getElementById("login-page");
  loginPage.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
  const bankingArea = document.getElementById("banking-area")
  bankingArea.style.display = "block";
}
});

// loginBtn Event Headers end

// depositBtn Event Headers start

const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit-amount").value;
  if (depositAmount <1 ) {
    alert("Please Enter a Valid  Value for Deposit some Money");
    return false;
  }
  const depositNumber = parseFloat(depositAmount);

  updateSpanText("current-deposit", depositNumber);
  updateSpanText("current-balance",1* depositNumber);

 const value= document.getElementById("deposit-amount").value = "";
});

// depositBtn Event Headers end

// withdrawBtn Event Headers start

const withdrawBtn = document.getElementById("add-withdraw");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw-amount").value;
  if (withdrawAmount <1 ) {
    alert("Please Enter a Valid  Value for Withdraw some Money");
    return false;
  }
  const withdrawNumber = parseFloat(withdrawAmount);

const totalAmounts = document.getElementById("current-balance").innerText;
const totalAmountsNumber = parseFloat(totalAmounts);

  const withdrawAmounts = document.getElementById("withdraw-amount").value
  const withdrawAmountNumber = parseFloat(withdrawAmounts);

  if (totalAmountsNumber  < withdrawAmountNumber  ) {
    alert("You Can Not withdraw More Then Your Total Deposit");
   
  }else{
    updateSpanText("current-withdraw", withdrawNumber);
    updateSpanText("current-balance", -1 * withdrawNumber);
  }

})

// withdrawBtn Event Headers end

//function
function updateSpanText(id, addedNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = addedNumber + currentNumber;
  document.getElementById(id).innerText = totalAmount;

  }
