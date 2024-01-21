const goods = {
  apple: { price: 150, quantity: 2 },
  banana: { price: 75, quantity: 3 },
  orange: { price: 125, quantity: 1 },
};

function calculatePrice(goods) {
  //Implement your function here
  let sum = 0;
  for (key in goods) {
    let x;
    x = goods[key].price * goods[key].quantity;
    sum += Number(x);
  }
  return sum;
}

console.log(calculatePrice(goods));
//output : 650
