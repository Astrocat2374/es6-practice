var numbers = [1,2,3];

var doubledNumbers = numbers.map(function(number){
    return number * 2;
})

console.log(doubledNumbers);

//--------------------------------------------------------------------------------------------

var animalArray = ["Dogs","Fortnite players","Lakers Fans"];

var sentence = animalArray.map(function(i){
    return "My favorite animals are " + i;
})

console.log(sentence);