let btnProduct = document.getElementById("btnProduct");


btnProduct.addEventListener("click", function () {
    let sP = document.getElementById("selectProduct").value
    let qP = document.getElementById("quantityProduct").value
    let priceProduct = document.getElementById("priceProduct")
    let infoProduct = document.getElementById("infoProduct")
    let total = sP * qP;
    priceProduct.innerText = total
    infoProduct.style.display = "block"

    if (sP == 0 || qP == 0) {
        infoProduct.style.display = "none";
        alert("Укажите значение")
        return;
    }


})


