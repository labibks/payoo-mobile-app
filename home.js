// get function call for acces reuseble code
function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}
// just input value
function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}
// function to get inner text
function getInnerText(id){
    const element = document.getElementById("available-balance");
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

//  function to set inner text

function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}

// function to toggle

function handleToggle(id){
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
    form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

// function to toggle buttons

function toggleButton(id){
    const cardBtns = document.getElementsByClassName("card-btn");
    for (const btn of cardBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-200");
    }
    document.getElementById(id).classList.remove("border-gray-200");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");

}
const transactionData = [];
const validPin = 1234;

// add mony form js

document.getElementById('add-mony-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    // const bankSelection = document.getElementById("bank-select").value
    const bankSelection = getInputValue("bank-select");
    // const accountNumber = document.getElementById("add-acount-number").value
    const accountNumber = getInputValue("add-acount-number");
    // const amount = parseInt(document.getElementById("add-amount").value);
    const amount = getInputValueNumber("add-amount");
    if(amount <= 0){
        alert("invalid amount")
        return;
    }
    // const pinNumber = parseInt(document.getElementById("add-pin").value);
    const pinNumber = getInputValueNumber("add-pin");

    // const availableBalance = parseInt(
    // document.getElementById("available-balance").innerText
    // )
    const availableBalance = getInnerText("available-balance");
    

    if(accountNumber.length < 11){
        alert('Please Provide Valid Account Number')
        return;
    }
    if(pinNumber !== validPin){
        alert('Please Provide Valid Pin ')
        return;
    }
    const totalNewBalance = amount + availableBalance;

    // document.getElementById('available-balance').innerText = totalNewBalance
    setInnerText(totalNewBalance)

    const data = {
        name: "Add Mony",
        date:new Date().toLocaleString()
    }
    transactionData.push(data)
})

// cash out mony feaure

document.getElementById("withdraw-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    // const agentNumber = document.getElementById('agent').value
    const agentNumber = getInputValue("agent");
    // const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);
    const withdrawPin = getInputValueNumber("withdraw-pin");
    // const amount = parseInt(document.getElementById("withdraw-amount").value);
    const amount = getInputValueNumber("withdraw-amount");

    // const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    const availableBalance = getInnerText("available-balance");
    if(amount<=0 || amount>availableBalance){
        alert("invalid amount")
        return;
    }
    

    if(agentNumber.length < 11){
        alert('incorrect number')
        return
    }

    if(validPin !== withdrawPin){
        alert('invalid pin')
        return
    }

    const totalNewBalance = availableBalance - amount;
    console.log(totalNewBalance);

    // document.getElementById('available-balance').innerText = totalNewBalance
    setInnerText(totalNewBalance);

    const data = {
    name: "Cash Out",
    date: new Date().toLocaleString(),
    };
    transactionData.push(data);
})

// transfer mony feature

document
  .getElementById("transfer-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // const userAccountNumber = document.getElementById("user-number").value
    const userAccountNumber = getInputValue("user-number");
    // const transferMonyPin = parseInt(document.getElementById("transfer-pin").value)
    const transferMonyPin = getInputValueNumber("transfer-pin");
    // const amount = parseInt(document.getElementById("transfer-amount").value);
    const amount = getInputValueNumber("transfer-amount");

    // const availableBalance = parseInt(
    // document.getElementById("available-balance").innerText);
    // console.log(amount, availableBalance);
    const availableBalance = getInnerText("available-balance");

    if(userAccountNumber.length < 11){
        alert('incorrect account number')
        return;
    }

    if(validPin !== transferMonyPin){
        alert('invalid pin')
        return;
    }

    const totalNewBalance = availableBalance - amount;
    console.log(totalNewBalance);

    // document.getElementById("available-balance").innerText = totalNewBalance;
    setInnerText(totalNewBalance);

    const data = {
      name: "Transfer Mony",
      date: new Date().toLocaleString(),
    };
    transactionData.push(data);
  });


// pay bill ----------------------
document.getElementById("pay-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // const userAccountNumber = document.getElementById("user-number").value
  const userAccountNumber = getInputValue("pay-acount-number");
  // const transferMonyPin = parseInt(document.getElementById("transfer-pin").value)
  const payMonyPin = getInputValueNumber("pay-pin");
  // const amount = parseInt(document.getElementById("transfer-amount").value);
  const amount = getInputValueNumber("pay-amount");

  // const availableBalance = parseInt(
  // document.getElementById("available-balance").innerText);
  // console.log(amount, availableBalance);
  const availableBalance = getInnerText("available-balance");

  if (userAccountNumber.length < 11) {
    alert("incorrect account number");
    return;
  }

  if (validPin !== payMonyPin) {
    alert("invalid pin");
    return;
  }

  const totalNewBalance = availableBalance - amount;
  console.log(totalNewBalance);

  // document.getElementById("available-balance").innerText = totalNewBalance;
  setInnerText(totalNewBalance);

  const data = {
    name: "Pay Bill",
    date: new Date().toLocaleString(),
  };
  transactionData.push(data);
});


//   get bonus feature

document.getElementById("bonus-button")
.addEventListener('click',function(e){
    e.preventDefault()
    
})

// transaction feature

document.getElementById("transaction-button")
.addEventListener("click",function(){
    const transactionContainer = document.getElementById("transaction-container")
    transactionContainer.innerText = ""

    for(const data of transactionData){
        const div = document.createElement("div")

        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
            <div class="flex items-center">
                <div class="p3 bg-[#f4f5f7] rounded-full">
                <img src="./assets/wallet1.png" class="mx-auto" alt="">
                </div>
                <div class="ml-2">
                    <h1 class="font-bold">${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
             <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>

        `
        transactionContainer.appendChild(div)
    }
})

// toggoling method-------------------------------------------------------------

// add mony
document.getElementById("add-button")
.addEventListener("click", function () {

    handleToggle("add-mony-parent");
    toggleButton("add-button");

    
});
// cash out
document.getElementById("cash-out-btn")
.addEventListener('click',function(){
    
    handleToggle("cash-out-parent");
    toggleButton("cash-out-btn");

    
})

// transfer mony

document.getElementById("transfer-mony-btn")
.addEventListener('click',function(){
    
    handleToggle("transfer-mony-parent");
     toggleButton("transfer-mony-btn");
})

// get bonus 

document.getElementById("get-bonus-btn")
.addEventListener('click',function(){
    
    handleToggle("get-bonus-parent");
    toggleButton("get-bonus-btn");
})
// pay bill
document.getElementById("pay-bill-btn").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
  toggleButton("pay-bill-btn");
});
// transaction
document.getElementById("transaction-button").addEventListener("click", function () {
  handleToggle("transaction-parent");
  toggleButton("transaction-button");
});