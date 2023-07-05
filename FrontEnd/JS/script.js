// TASK
// priceList Object {"Bread": 0.59, "Eggs":2.99}
// Lists Object that is your shopping list
// [{name:"Bread", quanity:2}, {name:"Eggs", quanity:1}]
// Print Every item in the cart with its name X quantity
// loop through and calcuate the total cost
// map through and add totalCost to shopping list object
// [{name:"Bread", quanity:2, cost:1.18}, {name:"Eggs", quanity:1, cost:2.99}]
// forEach to calcualte the total cost of the processed shopping list
// print the item, quanity, cost
// after all the items print thte total cost (in a nice format)

const priceList = {"Bread": 0.99, "Milk": 1.49, "Eggs": 2.79, "Cheese": 2.30, "Ham": 1.55}
console.log(priceList);

let cost = 0
for(item in priceList) {
    let price = priceList[item]
    console.log(price)
    cost += price
};
console.log(cost);

const shoppingList = [{name: "Bread", quantity: 2}, {name: "Milk", quantity: 1}, 
{name: "Eggs", quantity: 6}, {name: "Ham", quantity: 2}, {name: "Cheese", quantity: 3}];

for (item of shoppingList) {
    console.log(`${item.name} x ${item.quantity}`)
}

let totalCost = 0
for (let item of shoppingList) {
    totalCost += priceList[item.name] * item.quantity;
}
console.log(`Total cost: ${totalCost}`);

shoppingList.map = (item) => {
    item = priceList[item.name]
    let shoppingList = shoppingList + pricelist[item]
}

console.log(shoppingList)