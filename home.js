// add mony form js
const validPin = 1234
document.getElementById('add-mony-btn')
.addEventListener('click',function(e){
    e.preventDefault()
    const bankSelection = document.getElementById("bank-select").value
    const accountNumber = document.getElementById("add-acount-number").value
    const amount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
    )

    if(accountNumber.length < 11){
        alert('Please Provide Valid Account Number')
        return;
    }
    if(pinNumber !== validPin){
        alert('Please Provide Valid Pin ')
        return;
    }
    const totalNewBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText = totalNewBalance
})
// cash out mony feaure

document.getElementById("withdraw-btn")
.addEventListener('click',function(e){
    e.preventDefault()
    const agentNumber = document.getElementById('agent').value
    const withdrawPin = parseInt(document.getElementById("withdraw-pin").value);
    const amount = parseInt(document.getElementById("withdraw-amount").value);

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);
    console.log(amount,availableBalance)
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

    document.getElementById('available-balance').innerText = totalNewBalance
})

// transfer mony feature

document
  .getElementById("transfer-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const userAccountNumber = document.getElementById("user-number").value
    const transferMonyPin = parseInt(document.getElementById("transfer-pin").value)
    const amount = parseInt(document.getElementById("transfer-amount").value);

    const availableBalance = parseInt(
    document.getElementById("available-balance").innerText);
    console.log(amount, availableBalance);

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

    document.getElementById("available-balance").innerText = totalNewBalance;
  });

//   get bonus feature

document.getElementById("bonus-button")
.addEventListener('click',function(e){
    e.preventDefault()
    
})

// toggoling method

// add mony
document.getElementById("add-button")
  .addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-mony-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("add-mony-parent").style.display = "block";
});
// cash out
document.getElementById("cash-out-btn")
.addEventListener('click',function(){
    document.getElementById("add-mony-parent").style.display = "none";
    document.getElementById("transfer-mony-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block"
    
})

// transfer mony

document.getElementById("transfer-mony-btn")
.addEventListener('click',function(){
    document.getElementById("add-mony-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "none";
    document.getElementById("transfer-mony-parent").style.display = "block";

})

// get bonus 

document.getElementById("get-bonus-btn")
.addEventListener('click',function(){
    document.getElementById("add-mony-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-mony-parent").style.display = "none";
    document.getElementById("get-bonus-parent").style.display = "block";


})

