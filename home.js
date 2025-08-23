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

// toggoling method

document.getElementById("add-button")
  .addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-mony-parent").style.display = "block";
});

document.getElementById("cash-out-btn")
.addEventListener('click',function(){
    document.getElementById("add-mony-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block"
    
})
