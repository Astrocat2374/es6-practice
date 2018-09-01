var produce = [
    { name: 'apple', type: 'fruit'}, 
    { name: 'cucumber', type: 'vegetable'},
    { name: 'banana', type: 'fruit'},
    { name: 'spinach', type: 'vegetable'}
  ];
  
  var filteredProducts = [];
  
  /*for (var i = 0; i < produce.length; i++){
    if (produce[i].type === 'fruit'){
      filteredProducts.push(produce[i]);
    }
    
  }*/

  produce.filter(function(i){
    if (i.type === 'fruit'){
        filteredProducts.push(i);
    }
  })
  
  console.log(filteredProducts);

// 1) use filter and return numbers greater than 50
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// 2) Filter the array of users, only returning users who have admin level access. Assign the result to the variable 'filteredUsers'.

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = [];
var filteredNumbers = [];

numbers.filter(function(i2){
    if (i2 > 50){
        filteredNumbers.push(i2);
    }
})

console.log(filteredNumbers);

users.filter(function(i3){
    if (i3.admin === true) {
        filteredUsers.push(i3);
    }
})

console.log(filteredUsers);