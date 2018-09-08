var array = [1,30,39,29,10,13]

var kys = array.some(function(element){
    return element > 1;
})

console.log(kys);

//--------------------------------------------------------------------------------------------

// given the array, return true if some of the numbers are even

var arrayEven = [1, 2, 3, 4, 5];

var checkedNumbers = arrayEven.some(function(i){
    return i % 2 === 0;
})

console.log(checkedNumbers);

//--------------------------------------------------------------------------------------------

//Given an array of network objects representing network request, assign the boolean 'true' to the variable 'inProgress' if any network request has 'status' of 'pending'.

var requests = [
    { url: '/photos', status: 'complete' },
    { url: '/albums', status: 'pending' },
    { url: '/users', status: 'failed' }
];

var status = requests.some(function(i2){
    return i2.status === 'pending';
})

var inProgress = status;

console.log(inProgress);