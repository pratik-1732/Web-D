function pizzaPricing(size) {
  let amt = 0;
  if (size === "Small") amt += 8;
  else if (size === "Medium") amt += 10;
  else amt += 12;

  return function toppingPrice(toppings) {
    let x = toppings.length;
    amt += x * 1.5;
    return function finalPrice(quantity) {
      let price = quantity * amt;
      return price;
    };
  };
}

const amount = pizzaPricing("Small");
const array = [1, 2, 3, 4, 5, 6];
console.log(amount(array)(4));
