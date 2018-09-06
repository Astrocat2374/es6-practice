var numbers = [10, 20, 30];
var sum = numbers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0)

console.log(sum);

//--------------------------------------------------------------------------------------------

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(accumulatedDistance, currentDistance){
    return accumulatedDistance + currentDistance.distance;
}, 0)

console.log(totalDistance);

//--------------------------------------------------------------------------------------------

var primaryColors = [
    { color: "red" },
    { color: "yellow"},
    { color: "blue"}
];

var myColors = primaryColors.reduce(function(accum, curr) {
    accum.push(curr.color);
    return accum;
}, [])

console.log(myColors);

//--------------------------------------------------------------------------------------------

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce(function(allDesks, desk) {
    if (desk.type === "sitting") {
        allDesks.sitting ++;
    } else {
        allDesks.standing ++;
    }
    return allDesks;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);