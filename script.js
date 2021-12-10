let plusBtns = document.getElementsByClassName("plus");
// console.log(plusBtns);
let checkTag = document.getElementsByClassName("check");
let deleteTag = document.getElementsByClassName("delete");
// console.log(deleteTag);
let likeTag = document.getElementsByClassName("like");

for (var i = 0; i < plusBtns.length; i++) {
    plusBtns[i].addEventListener("click", increment);
    checkTag[i].addEventListener("click", totalPrice);
    deleteTag[i].addEventListener("click", del);
    likeTag[i].addEventListener('click', like);
}

function increment(event) {
    var plus = event.target;
    var btnCont = plus.parentElement;
    var quantityTag = btnCont.querySelector("p");
    // console.log(quantityTag);
    var quantityValue = Number(quantityTag.innerHTML);
    // console.log(quantityValue);
    quantityValue++;
    quantityTag.innerHTML = quantityValue;
    var trElmt = btnCont.parentElement.parentElement;
    // console.log(trElmt);
    var priceTag = trElmt.querySelector(".price");
    // console.log(priceTag);
    var priceValue = Number(priceTag.innerHTML);
    var unitPriceTag = trElmt.querySelector(".unitPrice");
    var unitPriceValue = Number(unitPriceTag.innerHTML);
    priceValue = unitPriceValue * quantityValue;
    priceTag.innerHTML = priceValue;
}

function totalPrice(event) {
    checkTag = event.target;
    var plusTag = checkTag.parentElement.parentElement.querySelector(".plus")
    var priceTag = checkTag.parentElement.parentElement.querySelector(".price");
    var priceValue = Number(priceTag.innerHTML)
    // console.log(priceValue);
    var totalTag = document.getElementById("total");
    var totalValue = Number(totalTag.innerHTML);
    if (checkTag.checked === true) {
        totalValue += priceValue;
        plusTag.setAttribute("disabled", true);
    }
    else {
        totalValue -= priceValue;
        plusTag.removeAttribute("disabled");
    }
    totalTag.innerHTML = totalValue;
}

let minusBtns = document.getElementsByClassName("minus");
// console.log(minusBtns);
for (var i = 0; i < minusBtns.length; i++) {
    minusBtns[i].addEventListener("click", decrement);
    checkTag[i].addEventListener("click", totalPriceMinus)
}

function decrement(event) {
    var minus = event.target;
    //console.log(minus);
    var btnCont = minus.parentElement;
    var quantityTag = btnCont.querySelector("p");
    // console.log(quantityTag);
    quantityValue = Number(quantityTag.innerHTML);
    var trElemt = btnCont.parentElement.parentElement;
    var priceTag = trElemt.querySelector(".price");
    var priceValue = Number(priceTag.innerHTML);
    // console.log(priceValue);
    var unitPriceTag = trElemt.querySelector(".unitPrice");
    var unitPriceValue = Number(unitPriceTag.innerHTML);
    // console.log(unitPrice);
    if (quantityValue > 0) {
        quantityValue--;
        quantityTag.innerHTML = quantityValue;
        priceValue = unitPriceValue * quantityValue;
        priceTag.innerHTML = priceValue;
        // minus.removeAttribute("disabled");
    }
    else if (quantityValue == 0) {
        // minus.removeAttribute("disabled");
        quantityTag.innerHTML = quantityValue;
    }
    else {
        // minus.setAttribute("disabled",true);
        quantityValue = 0;
        quantityTag.innerHTML = quantityValue;
    }
}

function totalPriceMinus(event) {
    checkTag = event.target;
    // console.log(checkTag);
    var minusTag = checkTag.parentElement.parentElement.querySelector(".minus");
    // var priceTag = checkTag.parentElement.parentElement.querySelector(".price");
    // console.log(priceTag);
    // var priceValue = Number(priceTag.innerHTML);
    // console.log(priceValue);
    var totalTag = document.getElementById("total");
    var totalValue = Number(totalTag.innerHTML);
    if (checkTag.checked === true) {

        minusTag.setAttribute("disabled", true);
    }
    else {

        minusTag.removeAttribute("disabled");
    }
    // totalTag.innerHTML = totalValue;
}

function del(event) {
    deleteTag = event.target;
    var trElemt = deleteTag.parentElement.parentElement.parentElement.parentElement;
    // console.log(trElemt);
    trElemt.remove();
}

function like(event) {
    likeTag = event.target;
    likeTag.style.color="red";
}
