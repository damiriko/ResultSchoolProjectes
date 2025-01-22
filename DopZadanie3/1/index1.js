const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 1.5,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 2,
        discount: 0
    }
    // more items...
};

//************************

function getDiscount(Summa, Percent) {
    let newSumma;
    newSumma = Summa - (Summa * Percent / 100);
    return newSumma;
}

function getTotalPriceOfShoppingBag(shoppingBagArray) {
    let paymentAmount = 0;

    for (let item of shoppingBagArray) {
        purchased = groceries[item.productId];

        //console.log('   ', getDiscount(item.count * purchased.price, purchased.discount));
        paymentAmount += getDiscount(item.count * purchased.price, purchased.discount);
        console.log("paymentAmount ", paymentAmount);
    }

    return paymentAmount.toFixed(2);
}

const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05