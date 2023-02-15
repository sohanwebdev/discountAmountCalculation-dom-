function inputAmountValue(inputValue){
    let inputAmount = document.getElementById(inputValue);
    let inputAmountStr = inputAmount.value;
    let inputAmountValue = parseInt(inputAmountStr);

    if(isNaN(inputAmountValue)){
        alert("please inter integer value");
    }

    inputAmount.value = '';

    return inputAmountValue;
}

function totalAmountValue(totalValue){
    let totalAmounts = document.getElementById(totalValue);
    let totalAmountStr = totalAmounts.innerText;
    let totalAmountValue = parseInt(totalAmountStr);

    return totalAmountValue;
}

function preTotalValue(id, value){
    let preTotalValue = document.getElementById(id);
    preTotalValue.innerText = value;
}

document.getElementById("button").addEventListener("click", function () {
    //newAmount
    let newAmount = inputAmountValue("newAmount");

    //discountAmount
    let discountAmount = inputAmountValue("discountAmount");

    let discount = discountAmount / 100;

    //discountAmountValue
    let discountAmountValue = newAmount * discount;

    //preTotalAmount
    let preTotalAmount = totalAmountValue("totalAmount");

    let totalDiscountAmount = newAmount - discountAmountValue;
    
    //total
    let total = preTotalAmount + totalDiscountAmount;

    preTotalValue("totalAmount", total)

})