var names = ["lahey", "ricky", "randy", "bubbles", "julian", "cory", "trevor", "lucy"];
var sorter = function(some_arr){
     function compare (a , b) {
          return a.length - b.length;
     }
     var new_arr = some_arr.sort(compare);
     console.log(new_arr);
};
sorter(names);
