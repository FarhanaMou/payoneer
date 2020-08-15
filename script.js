// Login button event create
const loginBtn = document.getElementById("login")
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area")
    transactionArea.style.display ="block";

})

//Deposit button event create

const dipositBtn = document.getElementById("addDeposit")
dipositBtn.addEventListener("click",function(){
    const depositAmount = document.getElementById("depositAmount").value;
    depositNumber = parseFloat(depositAmount);


    updateSpanText("currentBalance",depositNumber)
    updateSpanText("currentDeposit",depositNumber)

    document.getElementById("depositAmount").value = "";

})

// withdraw button event create
const addWithdrawBtn = document.getElementById("addWithdraw")
addWithdrawBtn.addEventListener("click",function(){


    const withdrawNumber = getInputNumber("withdrawAmount")
    updateSpanText("currentWithdraw", withdrawNumber)
    updateSpanText("currentBalance",-1* withdrawNumber)

    document.getElementById("withdrawAmount").value = "";

    
     
})

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;

}




function updateSpanText(id,depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber  + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
    


























    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber ;
    // document.getElementById("currentDeposit").innerText = totalDeposit;


    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // const withdrawNumber = parseFloat(withdrawAmount);