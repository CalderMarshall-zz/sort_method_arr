var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Ball', price: 3.50 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Ping-Pong Balls', price: 12.00 },
  { name: 'Billiard Balls', price: 120.00 },
];
function get_price(arr) {
  return arr.price;
}
sorter = function(some_arr){

     var prices = some_arr.map(get_price);

     function compare (a , b) {
          return a - b;
     }
     var new_arr = prices.sort(compare);
     console.log(new_arr);
};
sorter(products);
